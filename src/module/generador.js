import antlr4 from "antlr4";
import CompiladorLexer from '../grammar/CompiladorLexer.js';
import CompiladorParser from "../grammar/CompiladorParser.js";
import CustomVisitor from "../helper/CustomVisitor.js";

import TraductorLexer from "../grammar/TraductorLexer.js";
import TraductorParser from "../grammar/TraductorParser.js";
import TraductorVisitor from "../helper/CustomTraductor.js";

import { variables } from "../helper/memoria.js";
import { ErrorSintaxis } from "../helper/recuperarErrores.js";
import { ErrorLexico } from "../helper/recuperarErrores.js";

export const analizar = (input) => {
  variables.clear(); 

  const chars = new antlr4.InputStream(input);
  const lexer = new CompiladorLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new CompiladorParser(tokens);
  parser.buildParseTrees = true;

  //con esto se la estrategia de error por defecto
  //parser.removeErrorListeners(); 
  //lexer.removeErrorListeners();
//
  ////agregar los mensajes predeterminados
  //parser.addErrorListener(new ErrorSintaxis()); 
  //lexer.addErrorListener(new ErrorLexico())

  //try {
    const tree = parser.init(); 
    const customVisitor = new CustomVisitor();
    console.log(tree.toStringTree(parser.ruleNames));
    return customVisitor.visitInit(tree);
  //} 
  //  catch (error) {
  //  return error.message;
  //}
};

export const traducir = (input) => {
  console.log('esto llego')
  console.log(input)
  const chars = new antlr4.InputStream(input);
  const lexer = new TraductorLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new TraductorParser(tokens);
  parser.buildParseTrees = true;

  parser.removeErrorListeners(); 
  //lexer.removeErrorListeners();

  parser.addErrorListener(new ErrorSintaxis()); 
  //lexer.addErrorListener(new ErrorLexico());

  try {
    const tree = parser.contenido(); 
    const customVisitor = new TraductorVisitor();
    console.log(tree.toStringTree(parser.ruleNames));
    //console.log('arbol \n', tree.start.source[1].strdata)
    const seguirFormato = tree.start.source[1].strdata
    return customVisitor.visitContenido(seguirFormato);
  } 
    catch (error) {
    return error.message;
  }
}