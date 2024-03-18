import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import { manejarEstados, scoopeVariables, variables } from "./memoria.js";
import { operacionesBasicas } from "./operacionesBasicas.js";
import { validarOperacionMatematica } from "./sintaxisMatematicas.js";
import { argumentosValidos, comparaciones } from "./validarCondiciones.js";

export default class CustomVisitor extends CompiladorVisitor{
	constructor(){
		super();
		this.impresiones = [];
		this.estadoIf = false;
		this.bandera = false;
	}

	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		console.log('Aqui quiero llegar');
		const resultados = this.visit(ctx.contenido());
		console.log('variables normales: ', variables)
		console.log('variables con scoope: ',scoopeVariables)
		console.log('estado bandera', this.bandera)
		if(this.impresiones.length >= 1){
			return this.impresiones.join('\n');
		}
		return 'todo bien pa'
	}

	// Visit a parse tree produced by ArrayInitParser#definido.
	visitDefinido(ctx) {
		console.log('variable definida');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = this.visit(ctx.valor(0));
		const estado = this.bandera;

		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			throw new Error(`Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}

		if(estado){
			if(typeof valor != 'number' && !valor.match(/"('\\"|.)*?"/g) && valor !== 'true' && valor !== 'false'){
				if(!scoopeVariables.has(valor) && !variables.has(valor)){
					throw new Error(`Error en la linea ${ctx.start.line}, no se puede asignar este valor: ${valor} no esta definido`)
				}
				const aux = variables.get(valor)
				scoopeVariables.set(variable, {tipo: tipoDato, valor: aux.valor})
				return	
			}
			if(scoopeVariables.has(variable) || variables.has(variable)){ 
				throw new Error(`Error en la linea ${ctx.start.line}, la variable: ${variable} ya habia sido registrada`); 
			}
			scoopeVariables.set(variable, {tipo: tipoDato, valor:valor})
			return
		}
		if(typeof valor != 'number' && !valor.match(/"('\\"|.)*?"/g) && valor !== 'true' && valor !== 'false'){
			if(!variables.has(valor)){
				throw new Error(`Error en la linea ${ctx.start.line}, no se puede asignar este valor: ${valor} no esta definido`)
			}
			const aux = variables.get(valor)
			variables.set(variable, {tipo: tipoDato, valor: aux.valor})
			return	
		}
		if(variables.has(variable)){ 
			throw new Error(`Error en la linea ${ctx.start.line}, la variable: ${variable} ya habia sido registrada`); 
		}
		variables.set(variable, {tipo: tipoDato, valor: valor}) 
	  return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by ArrayInitParser#asignacion.
	visitAsignado(ctx) {
		console.log('asignacion');
		const variable = ctx.ID().getText();
		const nuevoValor = this.visit(ctx.valor(0));
		const estado = this.bandera;
		console.log('estado actual ', estado);
	
		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			throw new Error(`Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}
	
		if (estado) {
			if (typeof nuevoValor !== 'number' && !nuevoValor.match(/"('\\"|.)*?"/g) && nuevoValor !== 'true' && nuevoValor !== 'false') {
				if (!variables.has(nuevoValor) && !scoopeVariables.has(nuevoValor)) {
					throw new Error(`Error en la linea ${ctx.start.line}, no se puede asignar este valor: ${nuevoValor} no esta definido`);
				}
				const obj = scoopeVariables.has(nuevoValor) ? scoopeVariables.get(nuevoValor) : variables.get(nuevoValor);
				scoopeVariables.set(variable, { tipoDato: obj.tipoDato, valor: obj.valor });
				return;
			}
			if (scoopeVariables.has(variable) || variables.has(variable)) {
				const obj = scoopeVariables.has(variable) ? scoopeVariables.get(variable) : variables.get(variable);
				obj.valor = nuevoValor;
				return;
			}
		}
	
		if (typeof nuevoValor !== 'number' && !nuevoValor.match(/"('\\"|.)*?"/g) && nuevoValor !== 'true' && nuevoValor !== 'false') {
			if (!variables.has(nuevoValor)) {
				throw new Error(`Error en la linea ${ctx.start.line}, no se puede asignar este valor: ${nuevoValor} no esta definido`);
			}
			variables.get(nuevoValor).valor = nuevoValor;
			return;
		}
	
		if (variables.has(variable)) {
			variables.get(variable).valor = nuevoValor;
			return;
		}
	  throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} no ha sido declarada`);
	}
  
	// Visit a parse tree produced by ArrayInitParser#indefinido.
	visitIndefinido(ctx) {
		console.log('variable con valor undefined');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = tipoDato === 'char'? 'ponme algo xfa' : 0;
		const estado = this.bandera;

    	if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable) || variable == null) {
			throw new Error( `Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}
		if(estado){
			if(scoopeVariables.has(variable) || variables.has(variable)){ 
				throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} ya fue registrada anteriormente`);
			}
			scoopeVariables.set(variable, {tipo: tipoDato, valor:valor})
			return
		}
		if(variables.has(variable)){ 
			throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} ya fue registrada anteriormente`);
		}
		
		variables.set(variable, {tipo: tipoDato, valor: valor})
	  return this.visitChildren(ctx);
	}

	//! Metodo para poder hacer impresiones, ya sea dentro de algun bloque o en el contenido
	visitPrintValor(ctx) {
		console.log('kiere imprimir');
		const valor = this.visit(ctx.valor(0));
	
		if (this.bandera) {
			const string_numero = typeof valor === 'string' && valor.match(/"('\\"|.)*?"/g) || typeof valor === 'number';
			if (string_numero) {
				this.impresiones.push(valor);
				return;
			}
			
			const variablesMap = scoopeVariables.has(valor) ? scoopeVariables : variables;
			if (variablesMap.has(valor)) {
				const aux = variablesMap.get(valor);
				this.impresiones.push(aux.valor);
				return;
			}
		  throw new Error(`Error en la linea ${ctx.start.line}, la variable ${valor} no esta definida`);
		}
	
		const string_numero = typeof valor === 'string' && valor.match(/"('\\"|.)*?"/g) || typeof valor === 'number';
		if (string_numero) {
			this.impresiones.push(valor);
			return;
		}
		if (variables.has(valor)) {
			const aux = variables.get(valor);
			this.impresiones.push(aux.valor);
			return;
		}
	  throw new Error(`Error en la linea ${ctx.start.line}, la variable ${valor} no esta definida`);
	}

	// Visit a parse tree produced by CompiladorParser#ifElse.
	visitIfElse(ctx) {
		if (this.estadoIf) {
			//console.log('El bloque if ya se ejecutó, no se ejecuta el bloque else');
			return;
		} else {
			//console.log('La condición del if es falsa, ejecutando el bloque else');
			return this.visitChildren(ctx);
		}
	  }

	//! reconocer cuando estamos dentro o fuera del if o else (si tiene)
	visitIf(ctx) {
		console.log('haye un if', ctx.getText())
    	this.estadoIf = this.visit(ctx.condiciones(0)); 

    	if (this.estadoIf) {
			//console.log('La condición del if es verdadera, ejecutando el bloque if');
			return this.visitChildren(ctx);
		} else {
			//console.log('La condición del if es falsa, saliendo del bloque if');
			const bloqueElse = ctx.if_else();
			if (bloqueElse) {
				return this.visit(bloqueElse);
			} else {
				return null; // No hay bloque else
			}
		}
	}
	  	  
	//! validar algunas concidiciones comparativas del if, (<,>,>=,<=)
	visitCondicionComparaciones(ctx) {
		const arg1 = this.visit(ctx.valor(0))
		const arg2 = this.visit(ctx.valor(1))
		argumentosValidos(arg1, arg2, 0, ctx.start.line)
		const simbolo = ctx.des.type; 

		switch(simbolo){
			case 12:
				const aux = comparaciones(arg1, arg2, '>', ctx.start.line);
				this.bandera = aux;
				break;
			case 13:
				const aux1 = comparaciones(arg1, arg2, '<', ctx.start.line);
				this.bandera = aux1;
				break;
			case 14:
				const aux2 = comparaciones(arg1, arg2, '>=', ctx.start.line);
				this.bandera = aux2;
				break;
			case 15:
				const aux3 = comparaciones(arg1, arg2, '<=', ctx.start.line);
				this.bandera = aux3;
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

	// Visit a parse tree produced by CompiladorParser#condicionIgualDiferente.
	visitCondicionIgualDiferente(ctx) {
		const primero = this.visit(ctx.valor(0));
		const segundo = this.visit(ctx.valor(1));
		const simbolo = ctx.des.type;
		argumentosValidos(primero, segundo, 2, ctx.start.line)
	
		switch(simbolo){
			case 16: //- ==
				if(primero == segundo){ this.bandera = false; }
				else{ this.bandera = true }
			  break;
			case 17: //- ===
				if(primero === segundo){ this.bandera = false; }
				else{ this.bandera = true }
			  break;
			case 18: //- !=
				if(primero != segundo){ this.bandera = false; }
				else{this.bandera = true }
			  break;
			case 19: //- !==
				if(primero !== segundo){ this.bandera = false; }
				else{this.bandera = true }
			  break;
			default: throw new Error(`Error en la linea ${ctx.start.line}, no se puede evaluar esta condicion`)
		}
	  return this.bandera;
	}

	// Visit a parse tree produced by CompiladorParser#logicas.
	visitLogicas(ctx) {
		const argumento1 = this.visit(ctx.condiciones(0));
		const argumento2 = this.visit(ctx.condiciones(1));
		const simbolo = ctx.des.type;

		switch(simbolo){
			case 20: // ||
				argumento1 == false && argumento2 == false ? this.bandera = false : this.bandera = true;
			  break;
			case 21: // &&
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
		const opt = 7;
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
		const opt = 9;
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
	visitAuxScoope(ctx) {
		this.bandera = false
	  return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CompiladorParser#auxScoopeDos.
	visitAuxScoopeDos(ctx) {
		console.log('pusierpn un else')
		this.bandera = true
		return this.visitChildren(ctx);
	
	}
  
	visitParens(ctx) {return this.visit(ctx.valor()) }
	visitCadenas(ctx) {return ctx.getText(); }
	visitId(ctx) { return isNaN(ctx.getText())? ctx.getText() : Number(ctx.getText()); }
	visitNumero(ctx) { return Number(ctx.getText()); }
	visitDecimal(ctx) { return Number(ctx.getText()); }
}