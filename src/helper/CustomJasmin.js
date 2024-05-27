import JasminVisitor from "../grammar/JasminVisitor.js";
import { variables } from "./memoria.js";

export default class CustomJasmin extends JasminVisitor{
    constructor(){
		super();
        this.condicion;
        this.lineasVisitadas = new Set();
		this.inicioContadorJasmin;
		this.limiteContadorJasmin;
		this.signoCondicionJasmin;
        this.codigo = '';
		this.banderaElse = false;
		this.banderaElseIf = false;
		this.contadorIstore = 0;
		this.contadorIload = 0;
		this.banderaLogica = '';
		this.ifEt = 0;
		this.ifEtc = 0;
		this.elseEt = 0;
		this.elseEtc = 0;
		this.elseIFet = 0;
		this.elseIFetc = 0;
		this.whileEt = 0;
		this.whileEtc = 0;
		this.andEt = 0;
		this.andEtc = 0;
		this.orEt = 0;
		this.orEtc = 0;
		this.andBandera = false;
		this.orBandera = false;
	}

    // Visit a parse tree produced by JasminParser#prog.
	visitProg(ctx) {
        this.codigo += `.class public Jasmin\n`;
        this.codigo += `.super java/lang/Object\n`;
        this.codigo += `.method public static main([Ljava/lang/String;)V\n`;
        this.codigo += `.limit stack 20\n`;
        this.codigo += `.limit locals 20\n`;
        const resultados = this.visit(ctx.init());
		this.codigo += `return\n`
		this.codigo += `.end method\n`
        return this.codigo;
      }
	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		return this.visitChildren(ctx);
	}
	

	//! Manejar declaracion de variables (tipo-dato ID = valor)
	visitDefinido(ctx) {
		console.log('variable definida');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const linea = ctx.start.line;
        // Marca esta línea como visitada
        //this.lineasVisitadas.add(linea);
		const valor = this.visit(ctx.valor(0));
		
		if (this.lineasVisitadas.has(linea)) {
            return null;  
        }
		this.codigo += `ldc ${valor}\n`;
		this.codigo += `istore_${this.contadorIstore}\n`, this.contadorIstore++;
		return this.visitChildren(ctx);
	}

	//! Manejar la asignacion de variables (ID = valor)
	visitAsignado(ctx) {
		console.log('asignacion');
		const variable = ctx.ID().getText();
		const nuevoValor = this.visit(ctx.valor(0));
        return this.visitChildren(ctx);
	}
  
	//! Manejar la definicion de variables (tipoDato ID;)
	visitIndefinido(ctx) {
		console.log('variable con valor undefined');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = tipoDato === 'char'? 'ponme algo xfa' : 0;
	  return this.visitChildren(ctx);
	}

	//! Metodo para poder hacer impresiones, ya sea dentro de algun bloque o en el contenido
	visitPrintValor(ctx) {
		const valor = this.visit(ctx.valor(0));
		const linea = ctx.start.line;

		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}
		if (typeof valor === 'string' && valor.match(/"('\\"|.)*?"/g)) {
				this.lineasVisitadas.add(linea);
				this.codigo += `getstatic java/lang/System/out Ljava/io/PrintStream;\n`
				this.codigo += `ldc ${valor}\n`
				this.codigo += `invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V\n`
				return;
		}
		if(typeof valor === 'number'){
			this.lineasVisitadas.add(linea);
			this.codigo += `getstatic java/lang/System/out Ljava/io/PrintStream;\n`
            this.codigo += `ldc ${valor}\n`
            this.codigo += `invokevirtual java/io/PrintStream/println(I)V\n`
			return;
		}
		if(valor == true || valor == false){
			this.lineasVisitadas.add(linea);
			this.codigo += `getstatic java/lang/System/out Ljava/io/PrintStream;\n`
            this.codigo += `ldc ${valor == true? 1 : 0}\n`
            this.codigo += `invokevirtual java/io/PrintStream/println(Z)V\n`
			return;
		}

		if (variables.has(valor)) {
			this.lineasVisitadas.add(linea);
			const aux = variables.get(valor);
            this.codigo += `getstatic java/lang/System/out Ljava/io/PrintStream;\n`
            this.codigo += `iload_${aux.valorJasmin}\n`
            this.codigo += `invokevirtual java/io/PrintStream/println(I)V\n`
			return;
		}
	}
	
	//! Manejar el contenido del ciclo
	visitReglaDoWhile(ctx) { return this.visitChildren(ctx); }
	//! una vuelta si o si, luego damos vueltas
	visitCicloDoWhile(ctx) {
		const condicion = this.visit(ctx.condiciones(0));
		let aux = condicion;
		do {
			this.visitChildren(ctx);
			aux = this.visit(ctx.condiciones(0));
		} while(aux);
		return;
	}

	//! enviarnos al while
	visitReglaWhile(ctx) { return this.visitChildren(ctx); }
	//! Manejar las vueltas del ciclo while
	visitCicloWhile(ctx) {
		console.log('ciclo while ');
		const condicion = this.visit(ctx.condiciones(0));
		let operador = this.mnemonicoComando(this.signoCondicionJasmin, true);
		const linea = ctx.start.line;
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}

		this.codigo += `while_inicio${this.whileEt}:\n`
		this.codigo += `${variables.has(this.inicioContadorJasmin)? `iload_${variables.get(this.inicioContadorJasmin).valorJasmin}`:`ldc ${this.inicioContadorJasmin}`}\n`;
		this.codigo += `${variables.has(this.limiteContadorJasmin)? `iload_${variables.get(this.limiteContadorJasmin).valorJasmin}`:`ldc ${this.limiteContadorJasmin}`}\n`;
		this.codigo += `${operador} while_final${this.whileEtc}\n`;
		this.lineasVisitadas.add(linea);
		this.visitChildren(ctx);
		this.codigo += `goto while_inicio${this.whileEt}\n`;
		this.codigo += `while_final${this.whileEtc}:\n`;
		this.whileEt++;
		this.whileEtc++;
        return;
	}

	//! Manejar incremento 
	visitIncrementar(ctx) {
		const variable = ctx.ID().getText();
		const linea = ctx.start.line;
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}
		this.codigo += `\niinc 0 1\n`;
		this.lineasVisitadas.add(linea);
		return;
	}

	//! Manejar decremento
	visitDecrementar(ctx) {
		const variable = ctx.ID().getText();
		const linea = ctx.start.line;
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}

		this.codigo += `\niinc 0 -1\n`;
		this.lineasVisitadas.add(linea);
		return;
	  }

	  	// Visit a parse tree produced by CompiladorParser#Comparacion.
	visitComparacion(ctx) {
		console.log('en las comparaciones ');
		const arg1 = this.visit(ctx.valor(0));
		const arg2 = this.visit(ctx.valor(1));
		const simbolo = ctx.op.type; 
		switch(simbolo){
			case 21: // >
				this.signoCondicionJasmin = '>';
				break;
			case 22: // <
				this.signoCondicionJasmin = '<';
			  break;
			case 23: // >=
				this.signoCondicionJasmin = '>=';
			  break;
			case 24: // <=
				this.signoCondicionJasmin = '<=';
			  break;
			case 25: //- ==
				this.signoCondicionJasmin = '==';
			  break;
			case 26: //- ===
				this.signoCondicionJasmin = '===';
			  break;
			case 27: //- !=
				this.signoCondicionJasmin = '!=';
			  break;
			case 28: //- !==
				this.signoCondicionJasmin = '!==';
			  break;
			default : 
			throw new Error('Este simbolo no existe pa');
		}
		this.inicioContadorJasmin = arg1;
		this.limiteContadorJasmin = arg2;
		return {
			v1: arg1,
            v2: arg2,
            simbolo: this.signoCondicionJasmin
		};
	  }

	//! Metodo para controlar el if con condicion simple, ejemplo: if(true)
	visitTrueOrFalse(ctx) {
		const argumento = this.visit(ctx.valor());
		console.log('argumento unico ',  argumento);
		switch(argumento){
			case true:
				this.condicion = true;
				break;
			case false:
				this.condicion = false;
				break;
			default:
				'tambien obtendre los arg de aqui'
		}
		return;
	}

	// Visit a parse tree produced by CompiladorParser#logicas.
	visitLogicas(ctx) {
		console.log('en las logicas')
		const argumento1 = this.visit(ctx.valor(0));
		const argumento2 = this.visit(ctx.valor(1));
		const simbolo = ctx.op.type;
		const obj_p1_1 = argumento1.v1;
		const obj_p1_2 = argumento1.v2;
		const obj_s1_1 = argumento1.simbolo;
		const obj_p2_1 = argumento2.v1;
		const obj_p2_2 = argumento2.v2;
		const obj_s2_1 = argumento2.simbolo;
		const linea = ctx.start.line;
		switch(simbolo){
			case 30: // ||
				//primera parte de la condicion logica 
				if (this.lineasVisitadas.has(linea)) {
					return null;  
				}
				this.orBandera = true;
				this.codigo += `${variables.has(obj_p1_1)? `iload_${variables.get(obj_p1_1).valorJasmin}`:`ldc ${obj_p1_1}`}\n`;
				this.codigo += `${variables.has(obj_p1_2)? `iload_${variables.get(obj_p1_2).valorJasmin}`:`ldc ${obj_p1_2}`}\n`;
				this.codigo += `${this.mnemonicoComando(obj_s1_1, false)} ${this.banderaLogica == 'ifLogico'? `IF${this.ifEt}`: ``}\n`;	
		
				//segunda parte de la condicion
				this.codigo += `${variables.has(obj_p2_1)? `iload_${variables.get(obj_p2_1).valorJasmin}`:`ldc ${obj_p2_1}`}\n`;
				this.codigo += `${variables.has(obj_p2_2)? `iload_${variables.get(obj_p2_2).valorJasmin}`:`ldc ${obj_p2_2}`}\n`;
				this.codigo += `${this.mnemonicoComando(obj_s2_1, false)} ${this.banderaLogica == 'ifLogico'? `IF${this.ifEt}`: ``}\n`;	
				this.banderaLogica = 'OR'
				break;
	  		case 31: // &&
			  	//primera parte de la condicion logica 
				  if (this.lineasVisitadas.has(linea)) {
					return null;  
				}
				this.andBandera = true;
			  	this.codigo += `${variables.has(obj_p1_1)? `iload_${variables.get(obj_p1_1).valorJasmin}`:`ldc ${obj_p1_1}`}\n`;
			  	this.codigo += `${variables.has(obj_p1_2)? `iload_${variables.get(obj_p1_2).valorJasmin}`:`ldc ${obj_p1_2}`}\n`;
			  	this.codigo += `${this.mnemonicoComando(obj_s1_1, false)} ${this.banderaLogica == 'ifLogico'? `IF${this.ifEt}`: `ELSE_IF${this.elseIFet}`}\n`;	
			
			  	//segunda parte de la condicion
			  	this.codigo += `${variables.has(obj_p2_1)? `iload_${variables.get(obj_p2_1).valorJasmin}`:`ldc ${obj_p2_1}`}\n`;
			  	this.codigo += `${variables.has(obj_p2_2)? `iload_${variables.get(obj_p2_2).valorJasmin}`:`ldc ${obj_p2_2}`}\n`;
			  	this.codigo += `${this.mnemonicoComando(obj_s2_1, false)} ${this.banderaLogica == 'ifLogico'? `IF${this.ifEt}`: `ELSE_IF${this.elseIFet}`}\n`;	
				this.banderaLogica = 'AND'
				break;
			default : throw new Error('Este simbolo no existe pa');
		}
	  return this.condicion;
	}

	visitEstructuraIf(ctx) {
		const datos = ctx.children;
		for(const index in datos){
			console.log('dentro del arr ',datos[index].invokingState)
			if(datos[index].invokingState == 94){ //existe eun else al menos
				this.banderaElse = true;
			}
			if(datos[index].invokingState == 88){ //existe un else if al menos
				this.banderaElseIf = true;
			}
		}
		return this.visitChildren(ctx);
	}
	visitIfPuro(ctx) {
		console.log('if');
		this.banderaLogica = 'ifLogico'
		const linea = ctx.start.line;

		const condicion = this. visit(ctx.condiciones(0));
		let operador = this.mnemonicoComando(this.signoCondicionJasmin, false);
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}
		if(this.banderaLogica == 'OR'){
			this.lineasVisitadas.add(linea);
			this.banderaElse == true? this.codigo += `goto ELSE${this.elseEt}\n` 
								  : this.banderaElseIf == true? 
										  this.codigo += `goto ELSE_IF${this.elseIFet}\n`:`goto fin_or${this.orEt}\n`, this.orEt++;;
			this.codigo += `IF${this.ifEtc}:\n`;
			this.visitChildren(ctx);
			this.codigo += this.banderaLogica == 'OR'? this.banderaElse == true? `goto endIFElse${this.elseEt}\n`
									: this.banderaElseIf == true? `goto endIFElseIf\n`
									: ``:``;
			this.banderaElse == true? this.codigo += `ELSE${this.elseEt}:\n` 
								  : this.banderaElseIf == true? 
										  this.codigo += `ELSE_IF${this.elseIFet}:\n`:`fin_or${this.orEtc}:\n`, this.orEtc++;;
			this.ifEt++;
			this.ifEtc++;
			this.banderaLogica = '';
			return;
		}
		if(this.banderaLogica == 'AND'){
			this.lineasVisitadas.add(linea);
			this.visitChildren(ctx);
			this.codigo += `goto fin_and${this.andEt}\n`, this.andEt++;
			this.codigo += `IF${this.ifEtc}:\n`;
			this.codigo += `fin_and${this.andEtc}:\n`, this.andEtc++;
			this.ifEt++;
			this.ifEtc++;
			this.banderaLogica = '';
			return;
		}

		this.codigo += `${variables.has(this.inicioContadorJasmin)? `iload_${variables.get(this.inicioContadorJasmin).valorJasmin}`:`ldc ${this.inicioContadorJasmin}`}\n`;
		this.codigo += `${variables.has(this.limiteContadorJasmin)? `iload_${variables.get(this.limiteContadorJasmin).valorJasmin}`:`ldc ${this.limiteContadorJasmin}`}\n`;
		this.codigo += `${operador} IF${this.ifEt}\n`;
		this.lineasVisitadas.add(linea);
		this.visitChildren(ctx);
		this.banderaElse == true? this.codigo += `goto ELSE${this.elseEt}\n` 
								  : this.banderaElseIf == true? 
										  this.codigo += `goto ELSE_IF${this.elseIFet}\n`:``;
		this.codigo += `IF${this.ifEtc}:\n`;
		this.ifEt++;
		this.ifEtc++;
		

		return;	
	}

	visitElseIfPuro(ctx) {
		console.log('else if')
		const condicion = this.visit(ctx.condiciones(0));
		let operador = this.mnemonicoComando(this.signoCondicionJasmin, false);
		const linea = ctx.start.line;
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}
		if(this.banderaLogica == 'OR'){
			this.lineasVisitadas.add(linea);
			this.codigo += `goto fin_or${this.orEt}\n`, this.orEt++;
			this.codigo += `ELSE_IF${this.elseIFetc}:\n`;
			this.visitChildren(ctx);
			this.codigo += `fin_or${this.orEtc}:\n`, this.orEtc++;
			this.elseIFet++;
			this.elseIFetc++;
			this.banderaLogica = '';
			return;
		}
		if(this.banderaLogica == 'AND'){
			this.lineasVisitadas.add(linea);
			this.visitChildren(ctx);
			this.codigo += `goto fin_and${this.andEt}\n`, this.andEt++;
			this.codigo += `ELSE_IF${this.elseIFetc}:\n`;
			this.codigo += `fin_and${this.andEtc}:\n`, this.andEtc++;
			this.elseIFet++;
			this.elseIFetc++;
			this.banderaLogica = '';
			return;
		}

		this.codigo += `${variables.has(this.inicioContadorJasmin)? `iload_${variables.get(this.inicioContadorJasmin).valorJasmin}`:`ldc ${this.inicioContadorJasmin}`}\n`;
		this.codigo += `${variables.has(this.limiteContadorJasmin)? `iload_${variables.get(this.limiteContadorJasmin).valorJasmin}`:`ldc ${this.limiteContadorJasmin}`}\n`;
		this.codigo += `${operador} ELSE_IF${this.elseIFet}\n`;

		this.lineasVisitadas.add(linea);
		this.visitChildren(ctx);
		this.banderaElse == true? this.codigo += `goto ELSE${this.elseEt}\n`:``
		this.codigo += `ELSE_IF${this.elseIFetc}:\n`;
		this.elseIFet++;
		this.elseIFetc++;
		return;
	}

	visitElsePuro(ctx) {
		console.log('else');
		const linea = ctx.start.line;
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}

		this.lineasVisitadas.add(linea);
		this.visitChildren(ctx);
		this.codigo += this.orBandera == true? `endIFElse${this.elseEtc}:\n` : `ELSE${this.elseEtc}:\n`
		this.elseEt++;
		this.elseEtc++;
		return;
	}

	mnemonicoComando(simbolo, ciclo){
		let mnemonico;
		switch(simbolo){
			case '>':
				mnemonico = ciclo == true? 'if_icmple' : 'if_icmple';  //orig if_icmplt
				break;
			case '<':
				mnemonico = ciclo == true?  'if_icmpge' : 'if_icmpge'; //orig if_icmpgt
				break;
			case '<=':
				mnemonico = ciclo == true? 'if_icmple' : 'if_icmple'; //orig if_icmple 
				break;
			case '>=':
				mnemonico = ciclo == true? 'if_icmpge' : 'if_icmpge'; //orig if_icmpge
				break;
			case '==':
				mnemonico = ciclo == true? 'if_icmpeq': 'if_icmpeq';
				break;
			case '===':
				mnemonico = ciclo == true? 'if_icmpeq':'if_icmpeq';
                break;
            case '!=':
				mnemonico = ciclo == true? 'if_icmpne' : 'if_icmpne';
				break;
			case '!==':
				mnemonico = ciclo == true? 'if_icmpne' : 'if_icmpne';
				break;
			default: '';	
		}
		return mnemonico;
	}
	// Visit a parse tree produced by CompiladorParser#residuo.
	visitResiduo(ctx) {
		const linea = ctx.start.line;
		this.lineasVisitadas.add(linea);
		const arg1 = this.visit(ctx.valor(0));
		const arg2 = this.visit(ctx.valor(1));
		this.codigo += `${variables.has(arg1)? `iload_${variables.get(arg1).valorJasmin}`:`ldc ${arg1}`}\n`;
		this.codigo += `${variables.has(arg2)? `iload_${variables.get(arg2).valorJasmin}`:`ldc ${arg2}`}\n`;
		this.codigo += `irem\n`;
		this.codigo += `istore_${this.contadorIstore}\n`, this.contadorIstore++;
		return;
	}
	  

	//! Trabajamos con una funcion auxiliar dentro de esta para poder controlar tanto multiplicacion como division
	visitMulDiv(ctx) {
		console.log('multiplicacion o division');
		const linea = ctx.start.line;
		this.lineasVisitadas.add(linea);
		const n1 = this.visit(ctx.valor(0));
		const n2 = this.visit(ctx.valor(1));
		
		this.codigo += `${variables.has(n1)? `iload_${variables.get(n1).valorJasmin}`:`ldc ${n1}`}\n`;
		this.codigo += `${variables.has(n2)? `iload_${variables.get(n2).valorJasmin}`:`ldc ${n2}`}\n`;
		this.codigo += `${ctx.op.type == 16? 'imul' : 'idiv'}\n`;
		this.codigo += `istore_${this.contadorIstore}\n`, this.contadorIstore++;
		return;
	}
  
	//! Trabajamos con una funcion auxiliar dentro de esta para poder controlar tanto sumas o restas
	visitAddSub(ctx) {
		console.log('suma o resta');
		const linea = ctx.start.line;
		this.lineasVisitadas.add(linea);
		const n1 = this.visit(ctx.valor(0));
		const n2 = this.visit(ctx.valor(1));
		//if (this.lineasVisitadas.has(linea))  return null; 

		this.codigo += `${variables.has(n1)? `iload_${variables.get(n1).valorJasmin}`:`ldc ${n1}`}\n`;
		this.codigo += `${variables.has(n2)? `iload_${variables.get(n2).valorJasmin}`:`ldc ${n2}`}\n`;
		this.codigo += `${ctx.op.type == 18 ? 'iadd' : 'isub'}\n`;
		this.codigo += `istore_${this.contadorIstore}\n`, this.contadorIstore++;
		return;
	}

	//! Funcion para controlar como se ingresan las opciones con parentesis
	visitImplicito(ctx) {
		const op = ctx.getText();
		const opCompleta = validarOperacionMatematica(op);
		if(opCompleta){
			return this.visit(ctx.valor())
		}
		throw new Error(`Error en la linea ${ctx.start.line}, se esperaba un operador para ${op}`)
	}
	
  	visitTrueFalse(ctx) { return ctx.getText() == 'true'? true : false }
	visitParens(ctx) {return this.visit(ctx.valor()); }
	visitCadenas(ctx) { return ctx.getText(); }
	visitId(ctx) { return ctx.getText(); }
	visitNumero(ctx) { return Number(ctx.getText()); }
	visitDecimal(ctx) { return Number(ctx.getText()); }
}