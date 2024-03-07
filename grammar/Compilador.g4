grammar Compilador;
import CommonLexerRules;

init: TPG ABLOQUE contenido CBLOQUE;

contenido: (inicializacion | declaracion | asignacion | print)*;

inicializacion: PR ID SEMI? #indefinido
              ;

declaracion: PR ID ASIGNACION valor SEMI?  #definido
           ;

asignacion: ID ASIGNACION valor SEMI? #asignado
          ;

print : IMPRESION APARENTESIS valor CPARENTESIS   #printValor
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

