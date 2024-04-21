grammar Compilador;
import CommonLexerRules;

init: TPG ALLAVE contenido CLLAVE;

contenido: (inicializacion | declaracion | asignacion | print | if_estructuras | ciclos | incremento)*;

inicializacion: PR ID SEMI? #indefinido
              ;

declaracion: PR ID ASIGNACION valor SEMI?  #definido
           ;

asignacion: ID ASIGNACION valor SEMI? #asignado
          ;

print : IMPRESION APARENTESIS valor CPARENTESIS SEMI?  #printValor
      ;          

if_estructuras: if #ifTradicional
              | if else #ifConElse
              | if (else_if)* #ifConElseIf
              | if (else_if)* else  #ifElseIf_Else
              | else else_if        #generarError
              ;

//* Reglas para armar las estructuras del if
if: IF_BASICO APARENTESIS condiciones CPARENTESIS abloque contenido cbloque  #ifPuro
  ;

else_if: ELSE_IF APARENTESIS condiciones CPARENTESIS abloque contenido cbloque  #elseIfPuro 
       ;

else: ELSE abloque contenido cbloque  #elsePuro
    ;
//* Reglas para armar las estructuras del if

ciclos: while     #reglaWhile
      | doWhile   #reglaDoWhile
      ;

while: WHILE APARENTESIS condiciones CPARENTESIS abloque contenido cbloque   #cicloWhile
     ;

doWhile: DO abloque contenido cbloque WHILE APARENTESIS condiciones CPARENTESIS #cicloDoWhile
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

condiciones : condiciones des=(OR | AND) condiciones             #logicas
            | '('*? valor ')'*?                                             #trueOrFalse  
            | '('*? valor des=(MAYORQ | MENORQ | MAYOR_IGUAL | MENOR_IGUAL | IGUALDAD_DEBIL | IGUALDAD_FUERTE | DIF_DEBIL | DIF_FUERTE) valor ')'*?      #condicionComparaciones
            ;

incremento: ID '++' #incrementar
          ;

abloque: ALLAVE #auxScoopeDos
       ;
cbloque : CLLAVE #auxScoope
        ;

PR: INT 
  | CHAR
  | FLOAT
  ;
