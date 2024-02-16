// aqui se coloca
import ArrayInitVisitor from "../../grammar/ArrayInitVisitor.js";
import { variables } from "./memoria.js";

export default class CustomVisitor extends ArrayInitVisitor{
	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		console.log('Aqui quiero llegar');
		console.log(variables)
		return this.visitChildren(ctx);
	  }
  
  
	// Visit a parse tree produced by ArrayInitParser#printDeclaraciones.
	visitPrintDeclaraciones(ctx) { //TODO si pongo que estos metodos retornen algo se rompe todo
		console.log('declaracion PRINT');
	  return this.visitChildren(ctx);
	}
  
  
	// Visit a parse tree produced by ArrayInitParser#printAsignacion.
	visitPrintAsignacion(ctx) { //TODO si pongo que estos metodos retornen algo se rompe todo
		console.log('asignaciones PRINT')
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ArrayInitParser#definido.
	visitDefinido(ctx) {
		console.log('variable definida');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = this.visit(ctx.valores(0));

		variables.has(variable)?
			console.log('ya se declaro esta variable, usa una signaion para modificar su valor')
			:
			variables.set(variable, {tipo: tipoDato, valor: valor}) 
	  return variable;
	}

	// Visit a parse tree produced by ArrayInitParser#asignacion.
	visitAsignacion(ctx) {
		console.log('asignacion')
		const variable = ctx.ID().getText();
		const nuevoValor = this.visit(ctx.valores(0));

		if(variables.has(variable)){
			let obj = variables.get(variable);
			obj.valor = nuevoValor; 
		} else {console.log('esta varible no existe') }

	  return variable;
	}
  
  
	// Visit a parse tree produced by ArrayInitParser#indefinido.
	visitIndefinido(ctx) {
		console.log('variable con valor undefined');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = tipoDato === 'char'? 'ponme algo xfa' : 0;
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