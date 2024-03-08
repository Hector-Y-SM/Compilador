lexer grammar CommonLexerRules;

//!Palabras reservadas
IMPRESION   : 'leak';

//! Tipos de datos
INT         : 'nc' ;
FLOAT       : 'im' ;
CHAR        : 'jgl';

//! Operadores
MUL         : '*' ; 
DIV         : '/' ;
ADD         : '+' ;
SUB         : '-' ;
ASIGNACION  : '=' ;

//! Caparazon inicial
TPG         : 'W7HLM' ;
ABLOQUE     : '>_'    ;
CBLOQUE     : '_<'    ;

//! Simbolos
ALLAVE      : '{'  ;
CLLAVE      : '}'  ;
APARENTESIS : '('  ;
CPARENTESIS : ')'  ;
AADMIRACION : '!'  ;

//! Tokens
ID          : [a-zA-Z0-9_]+    ;
NUM         : [0-9]+           ;
CADENA      : [a-zA-Z]+        ;
DEC         : [0-9]+'.'[0-9]+  ;
SEMI        : ';'              ;

WS: [ \t\r\n]+ -> skip; // Ignorar espacios en blanco, tabulaciones, retornos de carro y saltos de línea.