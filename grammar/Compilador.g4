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

if_estructuras: if (else_if)* (else)? #estructuraIf
              ;

if: IF_BASICO APARENTESIS condiciones CPARENTESIS abloque contenido* cbloque  #ifPuro
  ;

else_if: ELSE_IF APARENTESIS condiciones CPARENTESIS abloque contenido* cbloque  #elseIfPuro 
       ;

else: ELSE abloque contenido* cbloque  #elsePuro
      ;

ciclos: while     #reglaWhile
      | doWhile   #reglaDoWhile
      ;

while: WHILE APARENTESIS condiciones CPARENTESIS abloque contenido* cbloque   #cicloWhile
     ;

doWhile: DO abloque contenido* cbloque WHILE APARENTESIS condiciones CPARENTESIS #cicloDoWhile
       ;


valor: valor op=('*'|'/') valor          #MulDiv
     | valor op=('+'|'-') valor          #AddSub
     | valor RESIDUO valor               #residuo 
     | valor op=(MAYORQ | MENORQ | MAYOR_IGUAL | MENOR_IGUAL | IGUALDAD_DEBIL | IGUALDAD_FUERTE | DIF_DEBIL | DIF_FUERTE)  valor              #Comparacion
     | valor op=(OR | AND)  valor        #logicas
     | APARENTESIS valor CPARENTESIS     #Parentesis
     | (TRUE | FALSE)                    #trueFalse 
     | NUM                               #numero
     | DEC                               #decimal
     | CADENA                            #cadenas
     | ID                                #id
     ;

condiciones :  valor                                            #trueOrFalse  
            ;

incremento: ID '++' SEMI? #incrementar
          ;

decremento: ID '--' SEMI? #decrementar
          ;

abloque: ALLAVE #auxScopeDos
       ;
cbloque : CLLAVE #auxScope
        ;

PR: INT 
  | CHAR
  | FLOAT
  ;
