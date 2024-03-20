/**
 * GrammarName es el nombre que tendrá la gramática
 * se debe remplazar en las importaciones
 */
import antlr4 from "antlr4";
import CompiladorLexer from '../../grammar/CompiladorLexer.js';
import CompiladorParser from "../../grammar/CompiladorParser.js";
import CustomVisitor from "../../helper/CustomVisitor.js";
import { variables } from "../../helper/memoria.js";
import { ErrorSintaxis } from "../../helper/recuperarErrores.js";
import { ErrorLexico } from "../../helper/recuperarErrores.js";

export const analizar = (input) => {
  variables.clear(); 

  const chars = new antlr4.InputStream(input);
  const lexer = new CompiladorLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CompiladorParser(tokens);
  parser.buildParseTrees = true;

  //con esto se la estrategia de error por defecto
  parser.removeErrorListeners(); 
  lexer.removeErrorListeners();

  //agregar los mensajes predeterminados
  parser.addErrorListener(new ErrorSintaxis()); 
  lexer.addErrorListener(new ErrorLexico());

  try {
    const tree = parser.init(); 
    const customVisitor = new CustomVisitor();
    console.log(tree.toStringTree(parser.ruleNames));
    return customVisitor.visitInit(tree);
  } 
    catch (error) {
    return error.message;
  }
};