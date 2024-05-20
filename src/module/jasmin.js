import antlr4 from "antlr4";
import JasminLexer from "../grammar/JasminLexer.js";
import JasminParser from "../grammar/JasminParser.js";
import CustomJasmin from "../helper/CustomJasmin.js";


export const obtenerJasmin = (input) => {
    const chars = new antlr4.InputStream(input);
    const lexer = new JasminLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new JasminParser(tokens);
    parser.buildParseTrees = true;
  
    //con esto se la estrategia de error por defecto
    //parser.removeErrorListeners(); 
    //lexer.removeErrorListeners();
  
    //agregar los mensajes predeterminados
    //parser.addErrorListener(new ErrorSintaxis()); 
    //lexer.addErrorListener(new ErrorLexico())
  
    //try {
      const tree = parser.prog(); 
      const customVisitor = new CustomJasmin();
      console.log(tree.toStringTree(parser.ruleNames));
      return customVisitor.visitProg(tree);
    //} 
    //  catch (error) {
    //  return error.message;
    //}
  };