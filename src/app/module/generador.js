/**
 * GrammarName es el nombre que tendrá la gramática
 * se debe remplazar en las importaciones
 */
import antlr4 from "antlr4";
import CompiladorLexer from '../../grammar/CompiladorLexer.js';
import CompiladorParser from "../../grammar/CompiladorParser.js";
import CustomVisitor from "../../helper/CustomVisitor.js";

export const analizar = (input) => {
  const chars = new antlr4.InputStream(input);
  const lexer = new CompiladorLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CompiladorParser(tokens);
  parser.buildParseTrees = true;

  //se debe poner el parser en la regla que inicie
  const tree = parser.init(); //! el "".init" es donde empieza la gramatica, este cambiara dependiendo del proyecto
  const customVisitor = new CustomVisitor();

  return customVisitor.visitInit(tree);
};