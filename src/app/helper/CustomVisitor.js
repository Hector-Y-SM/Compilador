// aqui se coloca
import ArrayInitVisitor from "../../grammar/ArrayInitVisitor.js";
import { variables } from "./memoria.js";

export default class CustomVisitor extends ArrayInitVisitor{
	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		console.log('Aqui quiero llegar');
		const resultados = this.visit(ctx.contenido());
		return resultados;
	  }
  

	// Visit a parse tree produced by ArrayInitParser#definido.
	visitDefinido(ctx) {
		console.log('variable definida');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = this.visit(ctx.valores(0));

		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			return 'El nombre de la variable no es válido';
		}
		if(variables.has(variable)){ return 'esta variable ya fue declarada' }
		variables.set(variable, {tipo: tipoDato, valor: valor}) 
	  return variable;
	}

	// Visit a parse tree produced by ArrayInitParser#asignacion.
	visitAsignacion(ctx) {
		console.log('asignacion')
		const variable = ctx.ID().getText();
		const nuevoValor = this.visit(ctx.valores(0));

		if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
			return 'El nombre de la variable no es válido';
		}

		if(variables.has(variable)){
			let obj = variables.get(variable);
			obj.valor = nuevoValor; 
		} else {
			return 'esta varible no existe';
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
			return 'El nombre de la variable no es válido';
		}
		variables.set(variable, {tipo: tipoDato, valor: valor})
	  return variable;
	}

    
	// Visit a parse tree produced by ArrayInitParser#cadenas.
	visitCadenas(ctx) {
		console.log('cadenazo')
		return ctx.getText();
	  }
	// Visit a parse tree produced by ArrayInitParser#id.
	visitId(ctx) { //? texto
		console.log('vistamos el ID');
		return ctx.getText();
	}
	// Visit a parse tree produced by ArrayInitParser#numero.
	visitNumero(ctx) {
		console.log('vistamos Enteros');
		return Number(ctx.getText());
	}
	// Visit a parse tree produced by ArrayInitParser#decimal.
	visitDecimal(ctx) {
		console.log('vistamos decimales');
		return Number(ctx.getText());
	}
}