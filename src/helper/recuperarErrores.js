import { ErrorListener } from "antlr4";

export class ErrorSintaxis extends ErrorListener {
    syntaxError(lexer, char, linea, column, msg, e) {
        throw new Error(`Error de sintaxis en la linea ${linea}`);
      }
  }

export class ErrorLexico extends ErrorListener {
    syntaxError(lexer, char, linea, column, msg, e) {
        throw new Error(`Error lexico, token no reconocido en la linea ${linea}`);
      }
  }


