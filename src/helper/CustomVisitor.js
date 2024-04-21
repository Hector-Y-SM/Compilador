import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import { variables } from "./memoria.js";
import { operacionesBasicas } from "./operacionesBasicas.js";
import { validarOperacionMatematica } from "./sintaxisMatematicas.js";
import { argumentosValidos, comparaciones } from "./validarCondiciones.js";

export default class CustomVisitor extends CompiladorVisitor{
	constructor(){
		super();
		this.impresiones = [];
		this.scope;
		this.bandera = false; 
		this.ciclado;
		this.controlador = false;
	}

	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		console.log('Aqui quiero llegar');
		const resultados = this.visit(ctx.contenido());
		console.log('variables normales: ', variables)
		console.log('variables con sccope: ', this.scope)
		console.log('estado bandera', this.bandera)
		if(this.impresiones.length >= 1){
			return this.impresiones.join('\n');
		}
		return 'todo bien pa'
	}

	//! Manejar declaracion de variables (tipo-dato ID = valor)
	visitDefinido(ctx) {
		console.log('variable definida');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = this.visit(ctx.valor(0));
		
		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			throw new Error(`Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}
		
		if(this.bandera){
			if(typeof valor == 'number' || valor.match(/"('\\"|.)*?"/g) || valor == 'true' || valor == 'false'){

				this.scope.set(variable, {tipo: tipoDato, valor: valor})
				if(variables.has(variable) && this.scope.has(variable)){ 
					throw new Error(`Error en la linea ${ctx.start.line}, la variable: ${variable} ya habia sido registrada`); 
				}
				return
			}

			if(!variables.has(valor) && typeof valor !== 'number' && !valor.match(/"('\\"|.)*?"/g) && valor !== 'true' && valor !== 'false'){
				throw new Error(`Error en la linea ${ctx.start.line}, no se puede asignar este valor: ${valor} no esta definido`)
			}
	
			const aux = variacion.get(valor)
			this.scope.set(variable, {tipo: tipoDato, valor: aux.valor})
			return;
		}
		
		if(variables.has(variable)){ 
			throw new Error(`Error en la linea ${ctx.start.line}, la variable: ${variable} ya habia sido registrada`); 
		}

		if(!variables.has(valor) && typeof valor !== 'number' && !valor.match(/"('\\"|.)*?"/g) && valor !== 'true' && valor !== 'false'){
			throw new Error(`Error en la linea ${ctx.start.line}, no se puede asignar este valor: ${valor} no esta definido`)
		}

		if(typeof valor == 'number' || valor.match(/"('\\"|.)*?"/g) || valor == 'true' || valor == 'false'){
			variables.set(variable, {tipo: tipoDato, valor: valor})
			return;
		}

		const aux = variables.get(valor)
		variables.set(variable, {tipo: tipoDato, valor: aux.valor})
	  return this.visitChildren(ctx);
	}

	//! Manejar la asignacion de variables (ID = valor)
	visitAsignado(ctx) {
		console.log('asignacion');
		const variable = ctx.ID().getText();
		const nuevoValor = this.visit(ctx.valor(0));
	
		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			throw new Error(`Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}

		if(this.bandera){
			if (!this.scope.has(nuevoValor) && !variables.has(nuevoValor) && typeof nuevoValor != 'number' && !nuevoValor.match(/"('\\"|.)*?"/g && nuevoValor !== 'true' && nuevoValor !== 'false')) {
				throw new Error(`Error en la linea ${ctx.start.line}, no se puede asignar este valor: ${nuevoValor} no esta definido`);
			}

			if(typeof nuevoValor == 'number' || nuevoValor.match(/"('\\"|.)*?"/g) || nuevoValor == 'true' || nuevoValor == 'false'){
				if(variables.has(variable)){
					const aux = variables.get(variable)
					aux.valor = nuevoValor;
					return
				}
				const aux = this.scope.get(variable)
				aux.valor = nuevoValor
				return
			}
			
			if (variables.has(variable) || this.scope.has(variable)) {
				const variacion = variables.has(nuevoValor) ?  variables : this.scope;
				if(this.scope.has(variable)){
					const aux = this.scope.get(variable)
					aux.valor = variacion.get(nuevoValor).valor;
					return
				}
				return;
			}
			throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} no ha sido declarada`);
		}

		if(!variables.has(variable)){ throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} no ha sido declarada`) }
		if(typeof nuevoValor == 'number' || nuevoValor.match(/"('\\"|.)*?"/g) || nuevoValor == 'true' || nuevoValor == 'false'){
			variables.get(variable).valor = nuevoValor;
			return
		}

		if (!variables.has(nuevoValor) && typeof nuevoValor != 'number' && !nuevoValor.match(/"('\\"|.)*?"/g && nuevoValor !== 'true' && nuevoValor !== 'false')) {
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
		
		if(this.bandera){
			if(variables.has(variable) || this.scope.has(variable)){ 
				throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} ya fue registrada anteriormente`);
			}
		}

		if(variables.has(variable)){ 
			throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} ya fue registrada anteriormente`);
		}
		
		const variacion = this.bandera? this.scope : variables;
		variacion.set(variable, {tipo: tipoDato, valor: valor})
	  return this.visitChildren(ctx);
	}

	//! Metodo para poder hacer impresiones, ya sea dentro de algun bloque o en el contenido
	visitPrintValor(ctx) {
		console.log('kiere imprimir');
		const valor = this.visit(ctx.valor(0));
	
		if (typeof valor === 'string' && valor.match(/"('\\"|.)*?"/g) || typeof valor === 'number' || valor == 'true' || valor == 'false') {
			this.impresiones.push(valor);
			return;
		}

		if(this.bandera){
			const variacion = variables.has(valor)? variables : this.scope ; 
			if(variacion.has(valor)){
				const aux = variacion.get(valor);
				this.impresiones.push(aux.valor);
				return;
			}
		  throw new Error(`Error en la linea ${ctx.start.line}, la variable ${valor} no esta definida`);
		}

		if (variables.has(valor)) {
			const aux = variables.get(valor);
			this.impresiones.push(aux.valor);
			return;
		}
	  throw new Error(`Error en la linea ${ctx.start.line}, la variable ${valor} no esta definida`);
	}

	// Visit a parse tree produced by CompiladorParser#reglaWhile.
	visitReglaWhile(ctx) {
		console.log('ANALIZAR', ctx);

		if(this.ciclado == 1){
			const condicion = this.visit(ctx.condiciones(0));
			console.log('cond', condicion)
			if(!condicion){
				return
			}
			if(condicion){
				this.visitCicloWhile(ctx)
				return;
			}	
		}
		return this.visitChildren(ctx);
	}
	
	
	// Visit a parse tree produced by CompiladorParser#cicloWhile.
	visitCicloWhile(ctx) {
		const condicion = this.visit(ctx.condiciones(0));
		console.log('aqui se hace la chamba ', condicion)
		this.bandera ? this.scope = new Map() : '';
		
		if(condicion){
			console.log('dentro ', condicion)
			this.ciclado = 1;
			this.visitChildren(ctx);
			this.visitReglaWhile(ctx)
			return
		}
	}

	// Visit a parse tree produced by CompiladorParser#generarError.
	visitGenerarError(ctx) {
		throw new Error(`Error en la linea ${ctx.start.line}, No se le puede anidar esto a una instruccion else`)
	}

	//! combinaciones de las estructuras de if
	visitIfTradicional(ctx) {
		console.log('if normal')
	  return this.visitChildren(ctx);
	}
  
	visitIfConElse(ctx) {
		console.log('if con else')
	  return this.visitChildren(ctx);
	}
  
	visitIfConElseIf(ctx) {
		console.log('if con else if')
	  return this.visitChildren(ctx);
	}
  
	visitIfElseIf_Else(ctx) {
		console.log('if con else if y else')
	  return this.visitChildren(ctx);
	}
  
	//! Bloque if
	visitIfPuro(ctx) {
		console.log('if')
		const condicion = this. visit(ctx.condiciones(0))

		if(condicion){
			this.controlador = true
			this.scope = new Map();
			return this.visitChildren(ctx);
		}
	}
  
	//! Bloque else if
	visitElseIfPuro(ctx) {
		console.log('else if')
		const condicion = this.visit(ctx.condiciones(0))

		if(this.controlador){ return }
		if(condicion){
			this.controlador = true;
			this.scope = new Map();
			return this.visitChildren(ctx);
		}
	}
  
	//! Bloque else
	visitElsePuro(ctx) {
		console.log('else')
		if(this.controlador) { return }
		this.scope = new Map();
	  return this.visitChildren(ctx);
	}

	//! validar algunas concidiciones comparativas del if
	visitCondicionComparaciones(ctx) {
		const arg1 = this.visit(ctx.valor(0))
		const arg2 = this.visit(ctx.valor(1))
		const simbolo = ctx.des.type; 

		switch(simbolo){
			case 15:
				argumentosValidos(arg1, arg2, 0, ctx.start.line)
				this.bandera = comparaciones(arg1, arg2, '>', ctx.start.line);
				break;
			case 16:
				argumentosValidos(arg1, arg2, 0, ctx.start.line)
				this.bandera = comparaciones(arg1, arg2, '<', ctx.start.line);
			  break;
			case 17:
				argumentosValidos(arg1, arg2, 0, ctx.start.line)
				this.bandera = comparaciones(arg1, arg2, '>=', ctx.start.line);
			  break;
			case 18:
				argumentosValidos(arg1, arg2, 0, ctx.start.line)
				this.bandera = comparaciones(arg1, arg2, '<=', ctx.start.line);
			  break;
			case 19: //- ==
				argumentosValidos(arg1, arg2, 2, ctx.start.line)
				arg1 == arg2? this.bandera = false : this.bandera = true;
			  break;
			case 20: //- ===
				argumentosValidos(arg1, arg2, 2, ctx.start.line)
				arg1 === arg2? this.bandera = false : this.bandera = true
			  break;
			case 21: //- !=
				argumentosValidos(arg1, arg2, 2, ctx.start.line)
				arg1 != arg2 ? this.bandera = false : this.bandera = true
			  break;
			case 22: //- !==
				argumentosValidos(arg1, arg2, 2, ctx.start.line)
				arg1 !== arg2 ? this.bandera = false : this.bandera = true;
			  break;
			default : throw new Error('Este simbolo no existe pa');
		}
		return this.bandera;
	}

	//! Metodo para controlar el if con condicion simple, ejemplo: if(true)
	visitTrueOrFalse(ctx) {
		const argumento = this.visit(ctx.valor())
		argumentosValidos(argumento, null, 1, ctx.start.line)
		
		switch(argumento){
			case 'true':
					this.bandera = true;
				break;
			case 'false':
					this.bandera = false;
				break;
			default:
				if(!variables.has(argumento)){
					throw new Error(`Error en la linea ${ctx.start.line}, el argumento ${argumento} no esta definido`);
				}
				const aux = variables.get(argumento)
				aux.valor !== 'true' ? this.bandera = false : this.bandera = true;
				aux.valor !== 'false' ? this.bandera = true : this.bandera = false;
				if(aux.valor !== 'true' && aux.valor !== 'false'){
					throw new Error(`Error en la linea ${ctx.start.line}, no se puede evaluar esta condicion`)
				}
		}
	  return this.bandera;
	}

	// Visit a parse tree produced by CompiladorParser#logicas.
	visitLogicas(ctx) {
		const argumento1 = this.visit(ctx.condiciones(0));
		const argumento2 = this.visit(ctx.condiciones(1));
		const simbolo = ctx.des.type;

		switch(simbolo){
			case 23: // ||
				argumento1 == false && argumento2 == false ? this.bandera = false : this.bandera = true;
			  break;
			case 24: // &&
				argumento1 == false || argumento2 == false ? this.bandera = false : this.bandera = true;
			  break;
		}
	  return this.bandera;
	}

	//! Trabajamos con una funcion auxiliar dentro de esta para poder controlar tanto multiplicacion como division
	visitMulDiv(ctx) {
		console.log('multiplicacion o division')
		const n1 = this.visit(ctx.valor(0));
		const n2 = this.visit(ctx.valor(1));
		const opt = 10;
		const addSub = false;
		const contexto = ctx.op.type;
		const lineaError = ctx.start.line;

		const resultado = operacionesBasicas(n1,n2,opt,addSub,contexto, lineaError);
	  return resultado;
	}
  
	//! Trabajamos con una funcion auxiliar dentro de esta para poder controlar tanto sumas o restas
	visitAddSub(ctx) {
		console.log('suma o resta')
		const n1 = this.visit(ctx.valor(0));
		const n2 = this.visit(ctx.valor(1));
		const opt = 12;
		const addSub = true;
		const contexto = ctx.op.type;
		const lineaError = ctx.start.line;

		const resultado = operacionesBasicas(n1,n2,opt,addSub,contexto,lineaError);
	  return resultado;
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
	
	//! Esta funcion ayudara controlar cuando se acaba un bloque de codigo
	visitAuxScope(ctx) {
		this.bandera = false
	  return this.visitChildren(ctx);
	}

	//! Esta funcion indicara cuando se inicia un bloque de codigo
	visitAuxScopeDos(ctx) {
		this.bandera = true
	  return this.visitChildren(ctx);
	}
  
	visitParens(ctx) {return this.visit(ctx.valor()) }
	visitCadenas(ctx) {return ctx.getText(); }
	visitId(ctx) { return isNaN(ctx.getText())? ctx.getText() : Number(ctx.getText()); }
	visitNumero(ctx) { return Number(ctx.getText()); }
	visitDecimal(ctx) { return Number(ctx.getText()); }
}