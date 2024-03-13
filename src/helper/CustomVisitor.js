// aqui se coloca
import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import { variables } from "./memoria.js";
import { operacionesBasicas } from "./operacionesBasicas.js";
import { validarOperacionMatematica } from "./sintaxisMatematicas.js";

export default class CustomVisitor extends CompiladorVisitor{
	constructor(){
		super();
		this.impresiones = [];
	}

	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		console.log('Aqui quiero llegar');
		const resultados = this.visit(ctx.contenido());
		console.log(variables)
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

		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			throw new Error(`Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
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

		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			throw new Error(`Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
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

    	if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable) || variable == null) {
			throw new Error( `Error en la linea ${ctx.start.line}, El nombre de la variable: ${variable} no es válido`);
		}
		if(variables.has(variable)){ 
			throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable} ya fue registrada anteriormente`);
		}
		
		variables.set(variable, {tipo: tipoDato, valor: valor})
	  return this.visitChildren(ctx);
	}

	// Visit a parse tree produced by CompiladorParser#printValor.
	visitPrintValor(ctx) {
		console.log('kiere imprimir')
		const valor = this.visit(ctx.valor(0));

		if(typeof valor == 'number'){
			this.impresiones.push(valor);
		}
		if(variables.has(valor)){
			const aux = variables.get(valor);
			this.impresiones.push(aux.valor);
		}
		if(!variables.has(valor) && isNaN(valor)){
			throw new Error(`Error en la linea ${ctx.start.line}, la varible ${valor} no esta definida`);	
		}
		return this.visitChildren(ctx);
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

	visitParens(ctx) {return this.visit(ctx.valor()) }
	visitCadenas(ctx) { return ctx.getText(); }
	visitId(ctx) { return isNaN(ctx.getText())? ctx.getText() : Number(ctx.getText()); }
	visitNumero(ctx) { return Number(ctx.getText()); }
	visitDecimal(ctx) { return Number(ctx.getText()); }
}