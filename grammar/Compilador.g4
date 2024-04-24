grammar Compilador;
import CommonLexerRules;

init: TPG ALLAVE contenido* CLLAVE;

contenido: inicializacion | declaracion | asignacion | print | if_estructuras | ciclos | incremento | decremento;

inicializacion: PR ID SEMI? #indefinido
              ;

declaracion: PR ID ASIGNACION valor SEMI?  #definido
           ;

asignacion: ID ASIGNACION valor SEMI? #asignado
          ;

print : IMPRESION APARENTESIS valor CPARENTESIS SEMI?  #printValor
      ;          

if_estructuras: IF_BASICO APARENTESIS condiciones CPARENTESIS abloque contenido* cbloque (ELSE_IF APARENTESIS condiciones CPARENTESIS abloque contenido* cbloque)*? (ELSE abloque contenido* cbloque)? #superIf   
              ; 

ciclos: while     #reglaWhile
      | doWhile   #reglaDoWhile
      | for       #reglaFor
      ;

while: WHILE APARENTESIS condiciones CPARENTESIS abloque contenido* cbloque   #cicloWhile
     ;

doWhile: DO abloque contenido* cbloque WHILE APARENTESIS condiciones CPARENTESIS #cicloDoWhile
       ;

for: FOR APARENTESIS (declaracion) SEMI (condiciones) SEMI (incremento) CPARENTESIS abloque contenido* cbloque #cicloFor
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

incremento: ID '++' SEMI? #incrementar
          ;

decremento: ID '--' SEMI? #decrementar
          ;

abloque: ALLAVE #auxScoopeDos
       ;
cbloque : CLLAVE #auxScoope
        ;

PR: INT 
  | CHAR
  | FLOAT
  ;
