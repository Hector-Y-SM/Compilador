grammar ArrayInit;
import CommonLexerRules;

init: 'TPG' '{' contenido '}'; //regla de inicio por el momento

contenido: declaraciones*  #printDeclaraciones
         | asignaciones*   #printAsignaciones
         ;

declaraciones: PR ID SEMICOLON?     #indefinido
             ;

asignaciones: PR ID '=' valores SEMICOLON?    #definido
            | ID '=' valores SEMICOLON?       #asignacion
            ;

valores: NUM     #numero
       | DEC     #decimal
       | ID      #id
       | CADENAS #cadenas
       ;

PR: INT
  | FLOAT
  | CHAR
  ;