import TraductorVisitor from "../grammar/TraductorVisitor.js";

export default class CustomTraductor extends TraductorVisitor {
    constructor(){
        super();
        this.codigo = '';
    }   
    visitContenido(ctx) {
            this.visit(ctx.relleno());
            console.log('mi codigo ', this.codigo)
            return `W7HLM{\n${this.codigo}}`;
          }
      
      
          // Visit a parse tree produced by TraductorParser#relleno.
          visitRelleno(ctx) {
            return this.visitChildren(ctx);
          }
      
          cambiarPR(tipo){
            switch(tipo){
                case 'do':
                    tipo = 'toDo'
                    break;
                case 'while':
                    tipo = 'lewhi'
                    break;
                case 'else if':
                    tipo = 'elfito'
                    break;
                case 'else':
                    tipo = 'else'
                    break;
                case 'int':
                    tipo = 'nc'
                    break;
                case 'float':
                    tipo = 'im'
                    break;
                case 'char':
                    tipo = 'jgl'
                    break;
                case 'printf':
                    tipo = 'leak'
                    break;
                case 'if':
                    tipo = 'si'
                    break;
                default: 'indefinido'
            }
            return tipo;
          }
          // Visit a parse tree produced by TraductorParser#indefinido.
          visitIndefinido(ctx) {
            const td = ctx.PR().getText();
            const id = ctx.ID().getText();
            const traducir = this.cambiarPR(td);
            this.codigo += `${traducir} ${id};\n`
            return this.visitChildren(ctx);
          }
      
      
          // Visit a parse tree produced by TraductorParser#definido.
          visitDefinido(ctx) {
            const td = ctx.PR().getText();
            const id = ctx.ID().getText();
            const valor = this.visit(ctx.valor(0));
            const traducir = this.cambiarPR(td);
            this.codigo += `${traducir} ${id} = ${valor};\n`
            return this.visitChildren(ctx);
          }
      
      
          // Visit a parse tree produced by TraductorParser#asignado.
          visitAsignado(ctx) {
            const id = ctx.ID().getText();
            const valor = this.visit(ctx.valor(0));
            this.codigo += `${id} = ${valor};\n`
            return this.visitChildren(ctx);
          }
      
      
          // Visit a parse tree produced by TraductorParser#printValor.
          visitPrintValor(ctx) {
            const pr = ctx.PRINTF().getText();
            const valor = this.visit(ctx.valor(0));
            const traducir = this.cambiarPR(pr);
            this.codigo += `${traducir}(${valor});\n`
            return this.visitChildren(ctx);
          }
      
      
          // Visit a parse tree produced by TraductorParser#estructuraIf.
          visitEstructuraIf(ctx) {
            return this.visitChildren(ctx);
          }
      
      
          // Visit a parse tree produced by TraductorParser#ifPuro.
          visitIfPuro(ctx) {
            const pr = ctx.IF().getText();
            const condicion = this. visit(ctx.condiciones(0));
            const traducir = this.cambiarPR(pr);
            this.codigo += `${traducir}(${condicion}){\n`
            this.visitChildren(ctx)
            this.codigo += `}\n`
            return; // this.visitChildren(ctx)
          }
      
      
          // Visit a parse tree produced by TraductorParser#elseIfPuro.
          visitElseIfPuro(ctx) {
            const pr = ctx.ELSE_IF().getText();
            const condicion = this. visit(ctx.condiciones(0));
            const traducir = this.cambiarPR(pr);
            this.codigo += `${traducir}(${condicion}){\n`;
            this.visitChildren(ctx);
            this.codigo += `}\n`;
            return; //this.visitChildren(ctx) 
          }
      
      
          // Visit a parse tree produced by TraductorParser#elsePuro.
          visitElsePuro(ctx) {
            const pr = ctx.ELSE().getText();
            const traducir = this.cambiarPR(pr);
            this.codigo += `${traducir}{\n`
            this.visitChildren(ctx)
            this.codigo += `}\n`
            return; // this.visitChildren(ctx)
          }
      
      
          // Visit a parse tree produced by TraductorParser#reglaWhile.
          visitReglaWhile(ctx) {
            return this.visitChildren(ctx);
          }
      
      
          // Visit a parse tree produced by TraductorParser#reglaDoWhile.
          visitReglaDoWhile(ctx) {
            return this.visitChildren(ctx);
          }
      
      
          // Visit a parse tree produced by TraductorParser#cicloWhile.
          visitCicloWhile(ctx) {
            const pr = ctx.WHILE().getText();
            const condicion = this. visit(ctx.condiciones(0));
            const traducir = this.cambiarPR(pr);
            this.codigo += `${traducir}(${condicion}){\n`
            this.visitChildren(ctx)
            this.codigo += `}\n` 
            return; //this.visitChildren(ctx)
          }
      
      
          // Visit a parse tree produced by TraductorParser#cicloDoWhile.
          visitCicloDoWhile(ctx) {
            const pr1 = ctx.DO().getText();
            const pr2 = ctx.WHILE().getText();
            const condicion = this. visit(ctx.condiciones(0));
            const traducir1 = this.cambiarPR(pr1);
            const traducir2 = this.cambiarPR(pr2);
            this.codigo += `${traducir1}{\n`
            this.visitChildren(ctx)
            this.codigo += `}${traducir2}(${condicion});\n`
            return; //this.visitChildren(ctx)
          }
      
      
          // Visit a parse tree produced by TraductorParser#residuo.
          visitResiduo(ctx) {
            const arg1 = this.visit(ctx.valor(0));
            const arg2 = this.visit(ctx.valor(1));
            return `${arg1} % ${arg2}`;
          }
      
      
          // Visit a parse tree produced by TraductorParser#Comparacion.
          visitComparacion(ctx) {
            console.log('en las comparaciones ');
            const arg1 = this.visit(ctx.valor(0));
            const arg2 = this.visit(ctx.valor(1));
            let signo;
            const simbolo = ctx.op.type; 
            switch(simbolo){
                case 41: // >
                    signo = '>';
                    break;
                case 42: // <
                    signo = '<';
                  break;
                case 43: // >=
                    signo = '>=';
                  break;
                case 44: // <=
                    signo = '<=';
                  break;
                case 45: //- ==
                    signo = '==';
                  break;
                case 46: //- ===
                    signo = '===';
                  break;
                case 47: //- !=
                    signo = '!=';
                  break;
                case 48: //- !==
                    signo = '!==';
                  break;
                default : 
                throw new Error('Este simbolo no existe pa');
            }

            return `${arg1} ${signo} ${arg2}`;
          }
      
      
          // Visit a parse tree produced by TraductorParser#numero.
          visitNumero(ctx) {
            return Number(ctx.getText()); 
          }
      
      
          // Visit a parse tree produced by TraductorParser#MulDiv.
          visitMulDiv(ctx) {
            const n1 = this.visit(ctx.valor(0));
            const n2 = this.visit(ctx.valor(1));
            return ctx.op.type == 36? `${n1} * ${n2}` : `${n1} / ${n2}`;
          }
      
      
          // Visit a parse tree produced by TraductorParser#AddSub.
          visitAddSub(ctx) {
            const n1 = this.visit(ctx.valor(0));
            const n2 = this.visit(ctx.valor(1));            
            return ctx.op.type == 38? `${n1} + ${n2}` : `${n1} - ${n2}`;
          }
      
      
          // Visit a parse tree produced by TraductorParser#Parentesis.
          visitParentesis(ctx) {
            return `(${this.visit(ctx.valor())})`;
          }
      
      
          // Visit a parse tree produced by TraductorParser#trueFalse.
          visitTrueFalse(ctx) {
            return ctx.getText() == 'true'? true : false;
          }
      
      
          // Visit a parse tree produced by TraductorParser#logicas.
          visitLogicas(ctx) {
            const argumento1 = this.visit(ctx.valor(0));
            const argumento2 = this.visit(ctx.valor(1));
            let signo;
            const simbolo = ctx.op.type;
            switch(simbolo){
                case 50: // ||
                    signo = '||'
                    break;
                  case 51: // &&
                    signo = '&&'
                break;
                default : throw new Error('Este simbolo no existe pa');
            }
          return `${argumento1} ${signo} ${argumento2}`;
          }
      
      
          // Visit a parse tree produced by TraductorParser#id.
          visitId(ctx) {
            return ctx.getText();
          }
      
      
          // Visit a parse tree produced by TraductorParser#decimal.
          visitDecimal(ctx) {
            return Number(ctx.getText());
          }
      
      
          // Visit a parse tree produced by TraductorParser#cadenas.
          visitCadenas(ctx) {
            return ctx.getText(); 
          }
      
      
          // Visit a parse tree produced by TraductorParser#trueOrFalse.
          visitTrueOrFalse(ctx) {
            const argumento = this.visit(ctx.valor());
            let aux;
            switch(argumento){
                case true:
                    aux = true;
                    break;
                case false:
                    aux = false;
                    break;
                default:
                    aux = argumento;
            }
            return aux;
          }
      
      
          // Visit a parse tree produced by TraductorParser#incrementar.
          visitIncrementar(ctx) {
            const id = ctx.ID().getText();
            this.codigo += `${id}++\n`
            return `${id}++`;
          }
      
      
          // Visit a parse tree produced by TraductorParser#decrementar.
          visitDecrementar(ctx) {
            const id = ctx.ID().getText();
            this.codigo += `${id}--\n`
            return `${id}--`;
          }
      
      
          // Visit a parse tree produced by TraductorParser#auxScopeDos.
          visitAuxScopeDos(ctx) {
            return this.visitChildren(ctx);
          }
      
      
          // Visit a parse tree produced by TraductorParser#auxScope.
          visitAuxScope(ctx) {
            return this.visitChildren(ctx);
          }
      
      
          // Visit a parse tree produced by TraductorParser#valores.
          visitValores(ctx) {
            return this.visitChildren(ctx);
          }     
}