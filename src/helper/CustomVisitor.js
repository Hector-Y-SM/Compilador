// aqui se coloca
import ArrayInitVisitor from "../grammar/ArrayInitVisitor.js";
import { variables } from "./memoria.js";

export default class CustomVisitor extends ArrayInitVisitor{
	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		console.log('Aqui quiero llegar');
		const resultados = this.visit(ctx.contenido());
	  return resultados;
	}
	  
	visitPrintDeclaraciones(ctx) { return this.visitChildren(ctx); } // Visit a parse tree produced by ArrayInitParser#printDeclaraciones.
	visitPrintAsignaciones(ctx) { return this.visitChildren(ctx); } // Visit a parse tree produced by ArrayInitParser#printAsignaciones.

	// Visit a parse tree produced by ArrayInitParser#definido.
	visitDefinido(ctx) {
		console.log('variable definida');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = this.visit(ctx.valores(0));

		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			return `Error, El nombre de la variable: ${variable} no es válido`;
		}
		if(variables.has(variable)){ 
			return `Error, la variable: ${variable} ya habia sido registrada` 
		}
		variables.set(variable, {tipo: tipoDato, valor: valor}) 
	  return variable;
	}

	// Visit a parse tree produced by ArrayInitParser#asignacion.
	visitAsignacion(ctx) {
		console.log('asignacion')
		const variable = ctx.ID().getText();
		const nuevoValor = this.visit(ctx.valores(0));

		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			return `Error, El nombre de la variable: ${variable} no es válido`;
		}

		if(variables.has(variable)){
			let obj = variables.get(variable);
			obj.valor = nuevoValor; 
		} else {
			return `Error, la variable ${variable} no ha sido declarada`;
		}

	  return variable;
	}
  
	// Visit a parse tree produced by ArrayInitParser#indefinido.
	visitIndefinido(ctx) {
		console.log('variable con valor undefined');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = tipoDato === 'char'? 'ponme algo xfa' : 0;

    	if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			return `Error, El nombre de la variable: ${variable} no es válido`;
		}
		if(variables.has(variable)){ 
			return `Error, la variable ${variable} ya fue registrada anteriormente`
		}
		
		variables.set(variable, {tipo: tipoDato, valor: valor})
	  return variable;
	}
  
	visitCadenas(ctx) { // Visit a parse tree produced by ArrayInitParser#cadenas.
		console.log('cadenazo')
	  return ctx.getText();
	}
	
	visitId(ctx) { // Visit a parse tree produced by ArrayInitParser#id.
		console.log('vistamos el ID');
	  return ctx.getText();
	}

	visitNumero(ctx) {	// Visit a parse tree produced by ArrayInitParser#numero.
		console.log('vistamos Enteros');
	  return Number(ctx.getText());
	}

	visitDecimal(ctx) { // Visit a parse tree produced by ArrayInitParser#decimal.
		console.log('vistamos decimales');
	  return Number(ctx.getText());
	}
}