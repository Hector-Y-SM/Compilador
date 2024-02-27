grammar Compilador;
import CommonLexerRules;

init: TPG ALLAVE contenido CLLAVE;

contenido: (inicializacion | declaracion | asignacion )*;

inicializacion: PR ID SEMI #indefinido
              ;

declaracion: PR ID ASIGNACION valor  #definido
           ;

asignacion: ID ASIGNACION valor SEMI #asignado
          ;

valor: valor op=('*'|'/') valor          #MulDiv
     | valor op=('+'|'-') valor          #AddSub
     | NUM                               #numero
     | DEC                               #decimal
     | CADENA                            #cadenas
     | ID                                #id
     | '(' valor ')'                     #parens
     | '(' valor ')''('valor')'          #implicito
     ;

PR: INT 
  | CHAR
  | FLOAT
  ;

