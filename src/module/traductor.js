import antlr4 from "antlr4";
import TraductorLexer from "../grammar/TraductorLexer.js";
import TraductorParser from "../grammar/TraductorParser.js";
import CustomTraductor from "../helper/CustomTraductor.js";
import { ErrorSintaxis } from "../helper/recuperarErrores.js";
import { ErrorLexico } from "../helper/recuperarErrores.js";

export const traducir = (input) => {
    console.log('esto llego')
    console.log(input)
    const chars = new antlr4.InputStream(input);
    const lexer = new TraductorLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new TraductorParser(tokens);
    parser.buildParseTrees = true;
  
    //parser.removeErrorListeners(); 
    //lexer.removeErrorListeners();
  
    //parser.addErrorListener(new ErrorSintaxis()); 
    //lexer.addErrorListener(new ErrorLexico());
  
    //try {
      const tree = parser.contenido(); 
      const customVisitor = new CustomTraductor();
      console.log(tree.toStringTree(parser.ruleNames));
      //console.log('arbol \n', tree.start.source[1].strdata)
      //const seguirFormato = tree.start.source[1].strdata
      return customVisitor.visitContenido(tree);
    //} 
    //  catch (error) {
    //  return error.message;
    //}
  }