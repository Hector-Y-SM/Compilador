grammar Compilador;
import CommonLexerRules;

init: TPG ALLAVE contenido CLLAVE;

contenido: (inicializacion | declaracion | asignacion | print | if_simple )*;

inicializacion: PR ID SEMI? #indefinido
              ;

declaracion: PR ID ASIGNACION valor SEMI?  #definido
           ;

asignacion: ID ASIGNACION valor SEMI? #asignado
          ;

print : IMPRESION APARENTESIS valor CPARENTESIS SEMI?  #printValor
      ;          

if_simple : IF_BASICO APARENTESIS condiciones CPARENTESIS abloque contenido cbloque if_else? #if 
          ;


if_else: ELSE abloque contenido cbloque #ifElse
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

condiciones : condiciones des=(OR | AND) condiciones                                       #logicas
            | valor                                                                        #trueOrFalse  
            | valor des=(MAYORQ | MENORQ | MAYOR_IGUAL | MENOR_IGUAL) valor                #condicionComparaciones
            | valor des=(IGUALDAD_DEBIL | IGUALDAD_FUERTE | DIF_DEBIL | DIF_FUERTE) valor  #condicionIgualDiferente
            ;

abloque: ALLAVE #auxScoopeDos
       ;
cbloque : CLLAVE #auxScoope
        ;

PR: INT 
  | CHAR
  | FLOAT
  ;

