grammar ArrayInit;
import CommonLexerRules;

init: 'TPG' '{' contenido '}'; //regla de inicio por el momento

contenido: declaraciones+   #printDeclaraciones
         | asignaciones+    #printAsignacion
         ;

declaraciones: PR ID        #indefinido
             ;

asignaciones: PR ID '=' valores    #definido
            | ID '=' valores       #asignacion
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