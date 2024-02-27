// aqui se coloca
import CompiladorVisitor from "../grammar/CompiladorVisitor.js";
import { prevenirErroresVarios } from "./erroresVarios.js";
import { variables } from "./memoria.js";
import { operacionesBasicas } from "./operacionesBasicas.js";
import { validarOperacionMatematica } from "./sintaxisMatematicas.js";


export default class CustomVisitor extends CompiladorVisitor{
	// Visit a parse tree produced by ArrayInitParser#init.
	visitInit(ctx) {
		console.log('Aqui quiero llegar');
		const resultados = this.visit(ctx.contenido());
		console.log(variables)
		//console.log(resultados)

		if(resultados.includes(undefined)){
			return 'Error, las variables no pueden estar vacias'
		}

		const primerError = resultados.find(element => element.includes('Error'));
		console.log(primerError);
		if (primerError) {
			return primerError;
		} else {
			return 'Todo bien pa';
		}
	}

	// Visit a parse tree produced by ArrayInitParser#definido.
	visitDefinido(ctx) {
		console.log('variable definida');
		const variable = ctx.ID().getText();
		const tipoDato = ctx.PR().getText();
		const valor = this.visit(ctx.valor(0));
		console.log('ESTE ES EL VALOR ',valor)

		if (typeof valor === 'string' && valor.includes('Error')) {
			return valor;
		}

		const error = prevenirErroresVarios(valor, variable);
    	if (error){ 
			return error; 
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
		const nuevoValor = this.visit(ctx.valor(0));

		const error = prevenirErroresVarios(nuevoValor, variable);
    	if (error) { return error; }

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

    	if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable) || variable == null) {
			return `Error, El nombre de la variable: ${variable} no es válido`;
		}
		if(variables.has(variable)){ 
			return `Error, la variable ${variable} ya fue registrada anteriormente`
		}
		
		variables.set(variable, {tipo: tipoDato, valor: valor})
	  return variable;
	}
  
	// Visit a parse tree produced by CompiladorParser#MulDiv.
	visitMulDiv(ctx) {
		console.log('miltiplicacion o division')
		const n1 = this.visit(ctx.valor(0));
		const n2 = this.visit(ctx.valor(1));
		const opt = 7;
		const addSub = false;
		const contexto = ctx.op.type;

		const resultado = operacionesBasicas(n1,n2,opt,addSub,contexto);
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

		const resultado = operacionesBasicas(n1,n2,opt,addSub,contexto);
		return resultado;
	  }

	// Visit a parse tree produced by CompiladorParser#implicito.
	visitImplicito(ctx) {
		const op = ctx.getText();
		console.log(op)
		const opCompleta = validarOperacionMatematica(op);
	  return opCompleta ? this.visit(ctx.valor()) 
						: 'Error, se esperaba un operador'	
	}

	visitParens(ctx) {return this.visit(ctx.valor()) }
	visitCadenas(ctx) { return ctx.getText(); }
	visitId(ctx) { return ctx.getText(); }
	visitNumero(ctx) { return ctx.getText(); }
	visitDecimal(ctx) { return Number(ctx.getText()); }
}