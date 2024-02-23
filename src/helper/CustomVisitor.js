// aqui se coloca
import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import { variables } from "./memoria.js";

export default class CustomVisitor extends CompiladorVisitor{
	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		console.log('Aqui quiero llegar');
		const resultados = this.visit(ctx.contenido());
		//console.log(variables)
		//console.log(resultados)

		const primerError = resultados.find(element => element.includes('Error'));

		if (primerError) {
			//console.log('Error encontrado:', primerError);
			return primerError;
		} else {
			//console.log('Compilado sin errores');
			return 'compilado sin errores';
		}
	}
	  
	visitPrintDeclaraciones(ctx) { return this.visitChildren(ctx);}
	visitPrintAsignacionesDeclaradas(ctx) { return this.visitChildren(ctx); }
	visitPrintAsignacionesInicializada(ctx) {return this.visitChildren(ctx);}
	
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
	  return this.visitChildren(ctx);
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

	  return this.visitChildren(ctx);
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
	  return this.visitChildren(ctx);
	}
  
	
	visitCadenas(ctx) { return ctx.getText();}
	visitId(ctx) { return ctx.getText(); }
	visitNumero(ctx) { return Number(ctx.getText()); }
	visitDecimal(ctx) { return Number(ctx.getText()); }
}