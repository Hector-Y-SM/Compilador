// aqui se coloca
import ArrayInitVisitor from "../../grammar/ArrayInitVisitor.js";

export default class CustomVisitor extends ArrayInitVisitor{
	constructor(variables){
		super();
		variables = new Map()
		this.variables = variables;
	}

	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		console.log('Aqui quiero llegar');
		return this.visitChildren(ctx);
	  }

	// Visit a parse tree produced by ArrayInitParser#printAsignacion.
	visitPrintAsignacion(ctx) {
		return this.visitChildren(ctx);
	}
  
  
	// Visit a parse tree produced by ArrayInitParser#printDeclaraciones.
	visitPrintDeclaraciones(ctx) {
		console.log('declaracion');
		console.log('esta es tu variable'+this.visit(ctx.declaraciones()));
		const id = this.visit(ctx.declaraciones());
		//const info = variables.get(id);
		//console.log('mis variables')
		//console.log(variables.get(id));
		//console.log('soy la info.'+info)
		//console.log('Este es el tipo '+info.tipo)
		//console.log('Este es el valor '+info.valor)

		//console.log('soy la variable: '+aux)

		const declarado = ``;
		return this.visitChildren(ctx);
	}
  
  
	// Visit a parse tree produced by ArrayInitParser#definido.
	visitDefinido(ctx) {
		console.log('variable definida');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = this.visit(ctx.valores(0));
		
		this.variables.set(variable, {tipo: tipoDato, valor: valor})
		//console.log(variables)
		return variable;
	}
  
  
	// Visit a parse tree produced by ArrayInitParser#indefinido.
	visitIndefinido(ctx) {
		console.log('variable con valor undefined');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = tipoDato === 'char'? 'soy char' : 0;
		this.variables.set(variable, {tipo: tipoDato, valor: valor}) 

		
		console.log(this.variables)
		return variable;
	}
    
  
	// Visit a parse tree produced by ArrayInitParser#id.
	visitId(ctx) { //? texto
		console.log('vistamos el ID');
		return ctx.getText();
	}
  

	    
	// Visit a parse tree produced by ArrayInitParser#numero.
	visitNumero(ctx) {
		console.log('vistamos Enteros');
		//console.log('Valor del entero: '+ctx.getText());
		return Number(ctx.getText());
	}


	// Visit a parse tree produced by ArrayInitParser#decimal.
	visitDecimal(ctx) {
		console.log('vistamos decimales');
		//console.log('Valor del decimal: '+ctx.getText());
		return Number(ctx.getText());
	}
}