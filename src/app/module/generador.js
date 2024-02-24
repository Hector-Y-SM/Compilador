/**
 * GrammarName es el nombre que tendrá la gramática
 * se debe remplazar en las importaciones
 */
import antlr4 from "antlr4";
import CompiladorLexer from '../../grammar/CompiladorLexer.js';
import CompiladorParser from "../../grammar/CompiladorParser.js";
import CustomVisitor from "../../helper/CustomVisitor.js";
import { variables } from "../../helper/memoria.js";

export const analizar = (input) => {
  variables.clear(); //eliminar los datos de la memoria, para evitar errores, como en los ides reales
  const chars = new antlr4.InputStream(input);
  const lexer = new CompiladorLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CompiladorParser(tokens);
  parser.buildParseTrees = true;

  //se debe poner el parser en la regla que inicie
  const tree = parser.init(); //! el "".init" es donde empieza la gramatica, este cambiara dependiendo del proyecto
  const customVisitor = new CustomVisitor();

  console.log(tree.toStringTree(parser.ruleNames));
  return customVisitor.visitInit(tree);
};