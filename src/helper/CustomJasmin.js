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
        this.codigo = ''
		this.contadorIstore = 0;
		this.contadorIload = 0;
		this.vueltas = 0;
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
		console.log('Aqui quiero llegar');
		const resultados = this.visit(ctx.contenido());
		return this.visitChildren(ctx);
	}
	

	//! Manejar declaracion de variables (tipo-dato ID = valor)
	visitDefinido(ctx) {
		console.log('variable definida');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const linea = ctx.start.line;

		if (this.lineasVisitadas.has(linea)) {
            return null;  
        }

        // Marca esta línea como visitada
        this.lineasVisitadas.add(linea);
		const valor = this.visit(ctx.valor(0));
		
		this.codigo += `ldc ${valor}\n`
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
		const linea = ctx.start.line;
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}

		let operador = this.mnemonicoComando(this.signoCondicionJasmin, true);
		this.codigo += `${variables.has(this.inicioContadorJasmin)? `iload_${variables.get(this.inicioContadorJasmin).valorJasmin}\n`
                        : `ldc ${variables.has(this.inicioContadorJasmin)? variables.get(this.inicioContadorJasmin).valor : this.inicioContadorJasmin}\nistore_${this.contadorIstore}`}`;
		this.codigo += `ciclo_while:\niload_${this.contadorIload}\n${variables.has(this.limiteContadorJasmin) ? `iload_${variables.get(this.limiteContadorJasmin).valorJasmin}` : `ldc ${this.limiteContadorJasmin}`}\n${operador} fin_while\n`;
		
		this.visitChildren(ctx);
		this.codigo += `goto ciclo_while\nfin_while:\n`;
		this.lineasVisitadas.add(linea);
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


	visitEstructuraIf(ctx) {
		return this.visitChildren(ctx);
	}
	visitIfPuro(ctx) {
		console.log('if');
		const condicion = this. visit(ctx.condiciones(0));
		let operador = this.mnemonicoComando(this.signoCondicionJasmin, false);
		const linea = ctx.start.line;
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}
		console.log('inivio ', this.inicioContadorJasmin)
		this.codigo += `\n${variables.has(this.inicioContadorJasmin)? `iload_${variables.get(this.inicioContadorJasmin).valorJasmin}` 
												: `ldc ${variables.has(this.inicioContadorJasmin)? variables.get(this.inicioContadorJasmin) 
																				: this.inicioContadorJasmin}`}
												\n${variables.has(this.limiteContadorJasmin)? `iload_${variables.get(this.limiteContadorJasmin).valorJasmin}` 
																	: `ldc ${variables.has(this.limiteContadorJasmin)? variables.get(this.limiteContadorJasmin) 
																		: this.limiteContadorJasmin}`}\n${operador} condicion_if\ngoto fin_if\ncondicion_if:\n`
		this.visitChildren(ctx);
		this.codigo +=`fin_if:\n`;
		this.lineasVisitadas.add(linea);
		return;
		
	}

	mnemonicoComando(simbolo, ciclo){
		let mnemonico;
		switch(simbolo){
			case '>':
				mnemonico = ciclo == true? 'if_icmple' : 'if_icmpgt';  //orig if_icmplt
				break;
			case '<':
				mnemonico = ciclo == true?  'if_icmpgt' : 'if_icmplt'; //orig if_icmpgt
				break;
			case '<=':
				mnemonico = ciclo == true? 'if_icmpgt' : 'if_icmple'; //orig if_icmple 
				break;
			case '>=':
				mnemonico = ciclo == true? 'if_icmplt' : 'if_icmpgt'; //orig if_icmpge
				break;
			case '==':
				mnemonico = ciclo == true? 'if_icmpne': 'if_icmpeq';
				break;
			case '===':
				mnemonico = ciclo == true? 'if_icmpne':'if_icmpeq';
                break;
            case '!=':
				mnemonico = ciclo == true? 'if_icmpeq' : 'if_icmpne';
				break;
			case '!==':
				mnemonico = ciclo == true? 'if_icmpeq' : 'if_icmpne';
				break;
			default: '';	
		}
		return mnemonico;
	}

	visitElseIfPuro(ctx) {
		console.log('else if')
		const condicion = this.visit(ctx.condiciones(0))
		const linea = ctx.start.line;
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}
		
		this.codigo += `\n${variables.has(this.inicioContadorJasmin)? `iload_${variables.get(this.inicioContadorJasmin).valorJasmin}` 
                                    : `ldc ${variables.has(this.inicioContadorJasmin)? variables.get(this.inicioContadorJasmin) 
                                        : this.inicioContadorJasmin}`}
                                    \n${variables.has(this.limiteContadorJasmin)? `iload_${variables.get(this.limiteContadorJasmin).valorJasmin}` 
                                            : `ldc ${variables.has(this.limiteContadorJasmin)? variables.get(this.limiteContadorJasmin) 
                                                : this.limiteContadorJasmin}`}\n${operador} condicion_if\ngoto fin_if\ncondicion_if:`
		this.visitChildren(ctx);
		this.codigo += `\nfin_if:`;
		this.lineasVisitadas.add(linea);
		return;
	}

	visitElsePuro(ctx) {
		console.log('else');
		const linea = ctx.start.line;
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}
			this.codigo += `\n${variables.has(this.inicioContadorJasmin)? `iload_${variables.get(this.inicioContadorJasmin).valorJasmin}` 
			: `ldc ${variables.has(this.inicioContadorJasmin)? variables.get(this.inicioContadorJasmin) 
												: this.inicioContadorJasmin}`}
					\n${variables.has(this.limiteContadorJasmin)? `iload_${variables.get(this.limiteContadorJasmin).valorJasmin}` 
													: `ldc ${variables.has(this.limiteContadorJasmin)? variables.get(this.limiteContadorJasmin) 
																	: this.limiteContadorJasmin}`}\n${operador} condicion_if\ngoto fin_if\ncondicion_if:`

			this.visitChildren(ctx);
			this.codigo += `\nfin_if:`;
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
		return this.condicion;
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
		return this.condicion;
	}

	// Visit a parse tree produced by CompiladorParser#logicas.
	visitLogicas(ctx) {
		console.log('en las logicas')
		const argumento1 = this.visit(ctx.valor(0));
		const argumento2 = this.visit(ctx.valor(1));
		const simbolo = ctx.op.type;
		switch(simbolo){
			case 30: // ||
				argumento1 == false && argumento2 == false ? this.condicion = false : this.condicion = true;
				break;
	  		case 31: // &&
				argumento1 == false || argumento2 == false ? this.condicion = false : this.condicion = true;
			break;
			default : throw new Error('Este simbolo no existe pa');
		}
	  return this.condicion;
	}

	// Visit a parse tree produced by CompiladorParser#residuo.
	visitResiduo(ctx) {
		const arg1 = this.visit(ctx.valor(0));
		const arg2 = this.visit(ctx.valor(1));
		return `${arg1} % ${arg2}`;
	}
	  

	//! Trabajamos con una funcion auxiliar dentro de esta para poder controlar tanto multiplicacion como division
	visitMulDiv(ctx) {
		console.log('multiplicacion o division');
		const n1 = this.visit(ctx.valor(0));
		const n2 = this.visit(ctx.valor(1));
		
		const linea = ctx.start.line;
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}
			this.codigo += `\niload_${this.contadorIload}`, this.contadorIload++;
			this.codigo += `\niload_${this.contadorIload}\n${ctx.op.type == 16? 'imul' : 'idiv'}\nistore_${this.contadorIstore}`, this.contadorIstore++;
			this.lineasVisitadas.add(linea);
		return ctx.op.type == 16? `${n1} * ${n2}` : `${n1} / ${n2}`;
	}
  
	//! Trabajamos con una funcion auxiliar dentro de esta para poder controlar tanto sumas o restas
	visitAddSub(ctx) {
		console.log('suma o resta')
		const n1 = this.visit(ctx.valor(0));
		const n2 = this.visit(ctx.valor(1));
		const linea = ctx.start.line;
		if (this.lineasVisitadas.has(linea)) {
			return null;  
		}
			this.codigo +=`\niload_${this.contadorIload}`, this.contadorIload++;
			this.codigo +=`\niload_${this.contadorIload}\n${ctx.op.type == 18 ? 'iadd' : 'isub'}\nistore_${this.contadorIstore}`,this.contadorIload++ ,this.contadorIstore++;
			this.lineasVisitadas.add(linea);
		return ctx.op.type == 18? `${n1} + ${n2}` : `${n1} - ${n2}`;
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