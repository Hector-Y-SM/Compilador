import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import { scoopeVariables, variables } from "./memoria.js";
import { operacionesBasicas } from "./operacionesBasicas.js";
import { validarOperacionMatematica } from "./sintaxisMatematicas.js";
import { argumentosValidos, comparaciones } from "./validarCondiciones.js";

export default class CustomVisitor extends CompiladorVisitor{
	
	constructor(){
		super();
		this.impresiones = [];
		this.bandera = false;
	}

	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		console.log('Aqui quiero llegar');
		const resultados = this.visit(ctx.contenido());
		console.log('variables normales: ', variables)
		console.log('variables con scoope: ',scoopeVariables)
		console.log('estado bandera', this.bandera)
		//console.log(this.impresiones)
		//console.log(resultados)
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
			this.bandera = false
			throw new Error(`Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}

		if(estado){
			if(scoopeVariables.has(variable) || variables.has(variable)){ 
				this.bandera = false
				throw new Error(`Error en la linea ${ctx.start.line}, la variable: ${variable} ya habia sido registrada`); 
			}
			scoopeVariables.set(variable, {tipo: tipoDato, valor:valor})
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
		console.log('asignacion')
		const variable = ctx.ID().getText();
		const nuevoValor = this.visit(ctx.valor(0));
		const estado = this.bandera;
		console.log('estado actual ',estado)

		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			this.bandera = false
			throw new Error(`Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}

		if(estado) {
			if(scoopeVariables.has(variable)){
				let obj = scoopeVariables.get(variable);
				obj.valor = nuevoValor; 
			} if (variables.has(variable)) {
				let obj = variables.get(variable);
				obj.valor = nuevoValor; 
			} 
			else {
				this.bandera = false
				throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} no ha sido declarada`);
			}
		}
		if(variables.has(variable)){
			let obj = variables.get(variable);
			obj.valor = nuevoValor; 
		} else {
			throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} no ha sido declarada`);
		}
	  return this.visitChildren(ctx);
	}
  
	// Visit a parse tree produced by ArrayInitParser#indefinido.
	visitIndefinido(ctx) {
		console.log('variable con valor undefined');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = tipoDato === 'char'? 'ponme algo xfa' : 0;
		const estado = this.bandera;

    	if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable) || variable == null) {
			this.bandera = false
			throw new Error( `Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}
		if(estado){
			if(scoopeVariables.has(variable) || variables.has(variable)){ 
				this.bandera = false
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
		console.log('kiere imprimir')
		const valor = this.visit(ctx.valor(0));
		const estado = this.bandera

		if(estado){
			if(typeof valor == 'string' && valor.match(/"('\\"|.)*?"/g) || typeof valor == 'number'){
				this.impresiones.push(valor);
				return
			}
			if(scoopeVariables.has(valor)){
				const aux = scoopeVariables.get(valor);
				this.impresiones.push(aux.valor);
				return
			} 
			if (variables.has(valor)){
				const aux = variables.get(valor);
				this.impresiones.push(aux.valor);
				return
			}
			if(!variables.has(valor) || !scoopeVariables.has(valor)){
				console.log('entro aqui')
				this.bandera = false;
				throw new Error(`Error en la linea ${ctx.start.line}, la varible ${valor} no esta definida`);	
			}
		}
		if(typeof valor == 'string' && valor.match(/"('\\"|.)*?"/g) || typeof valor == 'number'){
			this.impresiones.push(valor);
			return 
		}

		if(variables.has(valor)){
			const aux = variables.get(valor);
			this.impresiones.push(aux.valor);
			return
		}
		if(!variables.has(valor)){
			throw new Error(`Error en la linea ${ctx.start.line}, la varible ${valor} no esta definida`);	
		}
		return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CompiladorParser#if.
	visitIf(ctx) {
		console.log(this.visit(ctx.condiciones()));
		const estado = this.visit(ctx.condiciones(0))
		if(!estado){
			console.log('ya me sali')
			return
		}
		console.log('sigo en if')
		return this.visitChildren(ctx);
	}
	  	  
	//! validar algunas concidiciones comparativas del if
	visitCondicionComparaciones(ctx) {
		const arg1 = this.visit(ctx.valor(0))
		const arg2 = this.visit(ctx.valor(1))
		argumentosValidos(arg1,arg2,ctx.start.line)
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

	// Visit a parse tree produced by CompiladorParser#MulDiv.
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
  
	// Visit a parse tree produced by CompiladorParser#AddSub.
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

	// Visit a parse tree produced by CompiladorParser#implicito.
	visitImplicito(ctx) {
		const op = ctx.getText();
		const opCompleta = validarOperacionMatematica(op);
		if(opCompleta){
			return this.visit(ctx.valor())
		}
		throw new Error(`Error en la linea ${ctx.start.line}, se esperaba un operador para ${op}`)
	}

	// Visit a parse tree produced by CompiladorParser#cerramosBloque.
	visitAuxScoope(ctx) {
		console.log('encontre el fin')
		this.bandera = false
		return this.visitChildren(ctx);
	}
	visitParens(ctx) {return this.visit(ctx.valor()) }
	visitCadenas(ctx) {return ctx.getText(); }
	visitId(ctx) { return isNaN(ctx.getText())? ctx.getText() : Number(ctx.getText()); }
	visitNumero(ctx) { return Number(ctx.getText()); }
	visitDecimal(ctx) { return Number(ctx.getText()); }
}