grammar ArrayInit;
import CommonLexerRules;

init : 'TPG' '{' contenido '}'; //regla de inicio por el momento

contenido: declaraciones+ #printDeclaraciones
         | asignaciones+ #printAsignacion
         ;

declaraciones : PR ID #indefinido
              ;

asignaciones:  PR ID '=' valores  #definido
            ;

valores: NUM    #numero
       | DEC    #decimal
       | ID     #id
       ;

PR: INT
  | FLOAT
  | CHAR
  ;