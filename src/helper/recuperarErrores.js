import { ErrorListener } from "antlr4";

export class ErrorSintaxis extends ErrorListener {
    syntaxError(lexer, char, line, column, msg, e) {
        throw new Error(`Error de sintaxis en la linea ${line}: ${msg}`);
      }
  }

export class ErrorLexico extends ErrorListener {
    syntaxError(lexer, char, line, column, msg, e) {
        throw new Error(`Error lexico en la linea ${line}: ${msg}`);
      }
  }


