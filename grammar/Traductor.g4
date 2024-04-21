grammar Traductor;
import LexerTraductor;

contenido: (pr | varios)*?
    ;

pr:   VOID_MAIN
    | MAIN          
    | AUTO          
    | BREAK         
    | CASE          
    | CHAR
    | DO
    | DOUBLE
    | ELSE_IF
    | ELSE
    | FLOAT
    | FOR
    | IF
    | INT
    | RETURN
    | SWITCH
    | VOID
    | WHILE
    | PRINTF
    ;

varios: ID
    | NUM
    | CADENA
    | DEC
    | APARENTESIS
    | CPARENTESIS
    | ALLAVE
    | CLLAVE
    | AADMIRACION
    | MUL       
    | DIV         
    | ADD         
    | SUB         
    | ASIGNACION  
    | MAYORQ      
    | MENORQ      
    | MAYOR_IGUAL 
    | MENOR_IGUAL 
    | IGUALDAD_DEBIL  
    | IGUALDAD_FUERTE 
    | DIF_DEBIL       
    | DIF_FUERTE      
    | OR 
    | AND
    | SEMI 
    ;