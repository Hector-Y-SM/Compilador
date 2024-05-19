import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import { variables } from "./memoria.js";
import { operacionesBasicas } from "./operacionesBasicas.js";
import { validarOperacionMatematica } from "./sintaxisMatematicas.js";
import { argumentosValidos, comparaciones, noCadenasNiBoolean } from "./validarCondiciones.js";

export default class CustomVisitor extends CompiladorVisitor{
	constructor(){
		super();
		this.impresiones = [];
		this.controlador = false;
		this.condicion = false;
		this.impresionesPorLinea = new Map();
		this.contenidoJasmin = [];
		this.inicioContadorJasmin;
		this.limiteContadorJasmin;
		this.signoCondicionJasmin;
		this.operacionesRealizadas = new Set();
		this.dobleCodigo = false;
		this.jasmin = [`.class public Jasmin\n.super java/lang/Object
		    \n.method public static main([Ljava/lang/String;)V\n.limit stack 20\n.limit locals 20`,
			this.contenidoJasmin, 
			`\nreturn\n.end method`];
		this.contadorIstore = 0;
		this.contadorIload = 0;
	}

	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		console.log('Aqui quiero llegar');
		const resultados = this.visit(ctx.contenido());
		console.log('variables normales: ', variables);
		const jasminString = this.jasmin.map(item => {
			if (typeof item === 'string')  return item; 
			if (Array.isArray(item))  return item.join(''); 
			return ''; 
		}).join('\n'); 
		
		this.jasmin = jasminString;
		return this.impresiones.length >= 1 ? 
							{ mensaje: this.impresiones.join('\n'), jasmin: this.jasmin}
							: {mensaje: 'todo bien pa', jasmin: this.jasmin } 
	}

	//! Manejar declaracion de variables (tipo-dato ID = valor)
	visitDefinido(ctx) {
		console.log('variable definida');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = typeof this.visit(ctx.valor(0)) == 'object'? this.visit(ctx.valor(0))[1] : this.visit(ctx.valor(0));
		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			throw new Error(`Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}
		
		if(variables.has(variable)){ 
			throw new Error(`Error en la linea ${ctx.start.line}, la variable: ${variable} ya habia sido registrada`); 
		}

		if(typeof valor == 'string'){
			if(valor.match(/"('\\"|.)*?"/g)){
				variables.set(variable, {tipo: tipoDato, valor: valor, valorJasmin:this.contadorIstore});
				this.pushJasmin(`\nldc ${valor}\nistore_${this.contadorIstore}\n`,this.contadorIstore++);
				return;
			}
		}

		if(!variables.has(valor) && typeof valor !== 'number' && valor != true && valor != false){
			throw new Error(`Error en la linea ${ctx.start.line}, no se puede asignar este valor: ${valor} no esta definido`);
		}

		if(typeof valor == 'number' || valor == true || valor == false){
			variables.set(variable, {tipo: tipoDato, valor: valor, valorJasmin:this.contadorIstore});
			this.pushJasmin(`\nldc ${valor}\nistore_${this.contadorIstore}\n`,this.contadorIstore++); 
			return;
		}

		const aux = variables.get(valor);
		variables.set(variable, {tipo: tipoDato, valor: aux.valor, valorJasmin:this.contadorIstore});
		this.pushJasmin(`\nldc ${valor}\nistore_${this.contadorIstore}\n`,this.contadorIstore++);
		return this.visitChildren(ctx);
	}

	//! Manejar la asignacion de variables (ID = valor)
	visitAsignado(ctx) {
		console.log('asignacion');
		const variable = ctx.ID().getText();
		const nuevoValor = typeof this.visit(ctx.valor(0)) == 'object'? this.visit(ctx.valor(0))[1] : this.visit(ctx.valor(0));
	
		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			throw new Error(`Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}

		if(!variables.has(variable)){
			throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} no ha sido declarada`);  
		}

		if(typeof nuevoValor == 'number' || nuevoValor.match(/"('\\"|.)*?"/g) || nuevoValor == true || nuevoValor == false){
			variables.get(variable).valor = nuevoValor;
			return
		}

		if (!variables.has(nuevoValor) && typeof nuevoValor != 'number' && !nuevoValor.match(/"('\\"|.)*?"/g && nuevoValor !== true && nuevoValor !== false)) {
			throw new Error(`Error en la linea ${ctx.start.line}, no se puede asignar este valor: ${nuevoValor} no esta definido`);
		}

		if (variables.has(variable)) {
			const aux = variables.get(nuevoValor);
			variables.get(variable).valor = aux.valor;
			return;
		}
	  throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} no ha sido declarada`);
	}
  
	//! Manejar la definicion de variables (tipoDato ID;)
	visitIndefinido(ctx) {
		console.log('variable con valor undefined');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = tipoDato === 'char'? 'ponme algo xfa' : 0;
    	if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable) || variable == null) {
			throw new Error( `Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}
		
		if(variables.has(variable)){ 
			throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} ya fue registrada anteriormente`);
		}
		
		variables.set(variable, {tipo: tipoDato, valor: valor});
	  return this.visitChildren(ctx);
	}

	//! Metodo para poder hacer impresiones, ya sea dentro de algun bloque o en el contenido
	visitPrintValor(ctx) {
		const valor = this.visit(ctx.valor(0));
		const nuevaLinea = ctx.start.line;
	
		if (typeof valor === 'string' && valor.match(/"('\\"|.)*?"/g)) {
			this.pushJasmin(`\ngetstatic java/lang/System/out Ljava/io/PrintStream;\nldc ${valor}\ninvokevirtual java/io/PrintStream/println(Ljava/lang/String;)V\n`);
			this.impresiones.push(valor);
			this.impresionesPorLinea.set(nuevaLinea, true);
			return;
		}
		if(typeof valor === 'number'){
			this.pushJasmin(`\ngetstatic java/lang/System/out Ljava/io/PrintStream;\nldc ${valor}\ninvokevirtual java/io/PrintStream/println(I)V\n`);
			this.impresiones.push(valor);
			this.impresionesPorLinea.set(nuevaLinea, true);
			return;
		}
		if(valor == true || valor == false){
			this.pushJasmin(`\ngetstatic java/lang/System/out Ljava/io/PrintStream;\nldc ${valor == true? 1 : 0}\ninvokevirtual java/io/PrintStream/println(Z)V\n`);
			this.impresiones.push(valor);
			this.impresionesPorLinea.set(nuevaLinea, true);
			return;
		}

		if (variables.has(valor)) {
			const aux = variables.get(valor);
			this.pushJasmin(`\ngetstatic java/lang/System/out Ljava/io/PrintStream;\niload_${this.contadorIload}\ninvokevirtual java/io/PrintStream/println(I)V\n`);
			this.impresiones.push(aux.valor);
			this.impresionesPorLinea.set(nuevaLinea, true);
			return;
		}
		throw new Error(`Error en la linea ${ctx.start.line}, la variable ${valor} no esta definida`);
	}
	
	pushJasmin(comando) {
		// añade el comando solo si no está presente
		const yaExistr = this.contenidoJasmin.some(instruccionExistente => instruccionExistente.trim() === comando.trim());
		if (!yaExistr) {
			this.contenidoJasmin.push(comando);
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
		let aux = condicion;
		let operador = this.mnemonicoComando(this.signoCondicionJasmin, true);
		this.pushJasmin(`\n${variables.has(this.inicioContadorJasmin)? `iload_${variables.get(this.inicioContadorJasmin).valorJasmin}\n`
						: `ldc ${variables.has(this.inicioContadorJasmin)? variables.get(this.inicioContadorJasmin).valor : this.inicioContadorJasmin}\nistore_${this.contadorIstore}`}`)
		this.pushJasmin(`ciclo_while:\niload_${this.contadorIload}\n${variables.has(this.limiteContadorJasmin) ? `iload_${variables.get(this.limiteContadorJasmin).valorJasmin}` : `ldc ${this.limiteContadorJasmin}`}\n${operador} fin_while\n`);
		while(aux){
			this.visitChildren(ctx);
			aux = this.visit(ctx.condiciones(0));
		}
		this.pushJasmin(`\ngoto ciclo_while\nfin_while:`);
		return;
	}

	//! Manejar incremento 
	visitIncrementar(ctx) {
		const variable = ctx.ID().getText();
		const nuevaLinea = ctx.start.line;
		this.impresionesPorLinea.set(nuevaLinea, true);
		this.pushJasmin(`\niinc 0 1\n`); //el cero es la posicion del iload o la variable q usara como contador
		this.masMenos(ctx.start.line, variable, 1);	
	}

	//! Manejar decremento
	visitDecrementar(ctx) {
		const variable = ctx.ID().getText();
		const nuevaLinea = ctx.start.line;
		this.impresionesPorLinea.set(nuevaLinea, true);
		this.pushJasmin(`\niinc 0 -1\n`);
		this.masMenos(ctx.start.line, variable, 0);
	  }

	masMenos(contexto, valor, op){
		if(!isNaN(valor) || valor.match(/"('\\"|.)*?"/g)){
			throw new Error(`Error en la linea ${ctx.start.line}, no se puede aplicar un operador de este tipo a esto`); 
		}
		if(variables.has(valor)){
			const val  = variables.get(valor);
			op == 0? val.valor = val.valor - 1 : val.valor = val.valor + 1
			return
		}
		throw new Error(`Error en la linea ${contexto}, la variable ${valor} no esta definida`) 
	}

	visitEstructuraIf(ctx) {
		return this.visitChildren(ctx);
	}
	visitIfPuro(ctx) {
		console.log('if');
		const condicion = this. visit(ctx.condiciones(0));
		let operador = this.mnemonicoComando(this.signoCondicionJasmin, false);
		if(!condicion){
			this.controlador = false;
			return }
		if(condicion){
			this.dobleCodigo == true? '' : this.pushJasmin(`\n${variables.has(this.inicioContadorJasmin)? `iload_${variables.get(this.inicioContadorJasmin).valorJasmin}` 
																			: `ldc ${variables.has(this.inicioContadorJasmin)? variables.get(this.inicioContadorJasmin) : this.inicioContadorJasmin}`}
															\n${variables.has(this.limiteContadorJasmin)? `iload_${variables.get(this.limiteContadorJasmin).valorJasmin}` 
																			: `ldc ${variables.has(this.limiteContadorJasmin)? variables.get(this.limiteContadorJasmin) : this.limiteContadorJasmin}`}\n${operador} condicion_if\ngoto fin_if\ncondicion_if:`);
			this.controlador = true;
			this.visitChildren(ctx);
			this.dobleCodigo == true? '' : this.pushJasmin(`\nfin_if:`);
			this.dobleCodigo = true;
			return;
		}
		this.dobleCodigo = false;
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
		if(this.controlador){ return }
		if(!condicion){
			this.controlador = false;
			return }
		if(condicion){
			this.dobleCodigo == true? '' : this.pushJasmin(`\n${variables.has(this.inicioContadorJasmin)? `iload_${variables.get(this.inicioContadorJasmin).valorJasmin}` 
																			: `ldc ${variables.has(this.inicioContadorJasmin)? variables.get(this.inicioContadorJasmin) : this.inicioContadorJasmin}`}
															\n${variables.has(this.limiteContadorJasmin)? `iload_${variables.get(this.limiteContadorJasmin).valorJasmin}` 
																			: `ldc ${variables.has(this.limiteContadorJasmin)? variables.get(this.limiteContadorJasmin) : this.limiteContadorJasmin}`}\n${operador} condicion_if\ngoto fin_if\ncondicion_if:`);
			this.visitChildren(ctx);
			this.dobleCodigo == true? '' : this.pushJasmin(`\nfin_if:`);
			this.dobleCodigo = true;
			this.controlador = true;
			return 
		}
	}

	visitElsePuro(ctx) {
		console.log('else')
		if(this.controlador) { return }
		this.dobleCodigo == true? '' : this.pushJasmin(`\n${variables.has(this.inicioContadorJasmin)? `iload_${variables.get(this.inicioContadorJasmin).valorJasmin}` 
																			: `ldc ${variables.has(this.inicioContadorJasmin)? variables.get(this.inicioContadorJasmin) : this.inicioContadorJasmin}`}
															\n${variables.has(this.limiteContadorJasmin)? `iload_${variables.get(this.limiteContadorJasmin).valorJasmin}` 
																			: `ldc ${variables.has(this.limiteContadorJasmin)? variables.get(this.limiteContadorJasmin) : this.limiteContadorJasmin}`}\n${operador} condicion_if\ngoto fin_if\ncondicion_if:`);
		this.visitChildren(ctx);
		this.dobleCodigo == true? '' : this.pushJasmin(`\nfin_if:`);
		this.dobleCodigo = true;
	  return
	}

	// Visit a parse tree produced by CompiladorParser#Comparacion.
	visitComparacion(ctx) {
		console.log('en las comparaciones ');
		const arg1 = this.visit(ctx.valor(0));
		const arg2 = this.visit(ctx.valor(1));
		const simbolo = ctx.op.type; 
		switch(simbolo){
			case 21: // >
				noCadenasNiBoolean(arg1, arg2, ctx.start.line);
				this.signoCondicionJasmin = '>';
				this.condicion = comparaciones(arg1, arg2, ctx.start.line, '>');
				break;
			case 22: // <
				noCadenasNiBoolean(arg1, arg2,  ctx.start.line);
				this.signoCondicionJasmin = '<';
				this.condicion = comparaciones(arg1, arg2,  ctx.start.line, '<');
			  break;
			case 23: // >=
				noCadenasNiBoolean(arg1, arg2, ctx.start.line);
				this.signoCondicionJasmin = '>=';
				this.condicion = comparaciones(arg1, arg2,  ctx.start.line, '>=');
			  break;
			case 24: // <=
				noCadenasNiBoolean(arg1, arg2, ctx.start.line);
				this.signoCondicionJasmin = '<=';
				this.condicion = comparaciones(arg1, arg2, ctx.start.line, '<=');
			  break;
			case 25: //- ==
				argumentosValidos(arg1, arg2, ctx.start.line);
				this.signoCondicionJasmin = '==';
				this.condicion = comparaciones(arg1, arg2, ctx.start.line, '==');
			  break;
			case 26: //- ===
				argumentosValidos(arg1, arg2, ctx.start.line);
				this.signoCondicionJasmin = '===';
				this.condicion = comparaciones(arg1, arg2, ctx.start.line, '===');
			  break;
			case 27: //- !=
				argumentosValidos(arg1, arg2, ctx.start.line);
				this.signoCondicionJasmin = '!=';
				this.condicion = comparaciones(arg1, arg2, ctx.start.line, '!=');
			  break;
			case 28: //- !==
				argumentosValidos(arg1, arg2, ctx.start.line);

				this.signoCondicionJasmin = '!==';
				this.condicion = comparaciones(arg1, arg2, ctx.start.line, '!==');
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
				if(!variables.has(argumento)){
					throw new Error(`Error en la linea ${ctx.start.line}, el argumento ${argumento} no se puede evaluar`);
				}
				const aux = variables.get(argumento)
				aux.valor == true? this.condicion = true : this.condicion = false;
				aux.valor == false? this.condicion = false : this.condicion = true;
				if(aux.valor !== true && aux.valor !== false){
					throw new Error(`Error en la linea ${ctx.start.line}, no se puede evaluar esta condicion`)
				}
		}
		return this.condicion;
	}

	// Visit a parse tree produced by CompiladorParser#logicas.
	visitLogicas(ctx) {
		console.log('en las logicas')
		const argumento1 = typeof this.visit(ctx.valor(0)) == 'object'? this.visit(ctx.valor(0))[1] : this.visit(ctx.valor(0));
		const argumento2 = typeof this.visit(ctx.valor(1)) == 'object'? this.visit(ctx.valor(1))[1] : this.visit(ctx.valor(1));
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
		console.log('residuo');
		const arg1 = this.visit(ctx.valor(0));
		const arg2 = this.visit(ctx.valor(1));

		function obtenerValores(arg){
			if(typeof arg == 'string' ) {
				if(!variables.has(arg) || arg.match(/"('\\"|.)*?"/g)) {
					throw new Error(`Error en la linea ${ctx.start.line}, el argumento ${arg} no se puede evaluar`);
				}
				return variables.get(arg).valor
			}
			return arg
		}
		const res1 = obtenerValores(arg1);
		const res2 = obtenerValores(arg2);
		return res1 % res2;
	}
	  

	//! Trabajamos con una funcion auxiliar dentro de esta para poder controlar tanto multiplicacion como division
	visitMulDiv(ctx) {
		console.log('multiplicacion o division');
		const n1 = this.visit(ctx.valor(0));
		const n2 = this.visit(ctx.valor(1));
		const lineaError = ctx.start.line;
		const valor1 = operacionesBasicas(n1, lineaError);
		const valor2 = operacionesBasicas(n2, lineaError);
		const operacionKey = `${valor1}${ctx.op.text}${valor2}`
		if (this.operacionesRealizadas.has(operacionKey)) { console.log(`Operación repetida: ${operacionKey}`); //si se repite la op usamos el resultado anterior
		} else {
			this.operacionesRealizadas.add(operacionKey); //agregar la op al set para q no se repita
			this.pushJasmin(`\niload_${this.contadorIload}`, this.contadorIload++);
			this.pushJasmin(`\niload_${this.contadorIload}\n${ctx.op.type == 16? 'imul' : 'idiv'}\nistore_${this.contadorIstore}`, this.contadorIstore++);
		}
		return ctx.op.type == 16? valor1 * valor2 : valor1 / valor2;
	}
  
	//! Trabajamos con una funcion auxiliar dentro de esta para poder controlar tanto sumas o restas
	visitAddSub(ctx) {
		console.log('suma o resta')
		const n1 = this.visit(ctx.valor(0));
		const n2 = this.visit(ctx.valor(1));
		const lineaError = ctx.start.line;
		const valor1 = operacionesBasicas(n1, lineaError);
		const valor2 = operacionesBasicas(n2, lineaError);
		const operacionKey = `${valor1}${ctx.op.text}${valor2}`
		  if (this.operacionesRealizadas.has(operacionKey)) { console.log(`Operación repetida: ${operacionKey}`); //si se repite la op usamos el resultado anterior
		  } else {
		  	this.operacionesRealizadas.add(operacionKey); //agregar la op al set para q no se repita
		  	this.pushJasmin(`\niload_${this.contadorIload}`, this.contadorIload++);
		  	this.pushJasmin(`\niload_${this.contadorIload}\n${ctx.op.type == 18 ? 'iadd' : 'isub'}\nistore_${this.contadorIstore}`,this.contadorIload++ ,this.contadorIstore++);
		  }
		return ctx.op.type == 18? valor1 + valor2 : valor1 - valor2;
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
	visitId(ctx) { return isNaN(ctx.getText())? ctx.getText() : Number(ctx.getText()); }
	visitNumero(ctx) { return Number(ctx.getText()); }
	visitDecimal(ctx) { return Number(ctx.getText()); }
}