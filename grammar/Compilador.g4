grammar Compilador;
import CommonLexerRules;

init: TPG ABLOQUE contenido CBLOQUE;

contenido: (inicializacion | declaracion | asignacion | print | if_simple)*;

inicializacion: PR ID SEMI? #indefinido
              ;

declaracion: PR ID ASIGNACION valor SEMI?  #definido
           ;

asignacion: ID ASIGNACION valor SEMI? #asignado
          ;

print : IMPRESION APARENTESIS valor CPARENTESIS SEMI?  #printValor
      ;          

if_simple : IF_BASICO APARENTESIS condiciones CPARENTESIS ABLOQUE contenido cbloque #if
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

condiciones : valor des=(MAYORQ | MENORQ | MAYOR_IGUAL | MENOR_IGUAL) valor #condicionComparaciones
            ;

cbloque : CBLOQUE #auxScoope
      ;
PR: INT 
  | CHAR
  | FLOAT
  ;
