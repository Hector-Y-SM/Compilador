lexer grammar CommonLexerRules;

//!Palabras reservadas
IMPRESION   : 'leak';
IF_BASICO   : 'if';

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
MAYORQ      : '>' ;
MENORQ      : '<' ;
MAYOR_IGUAL : '>=';
MENOR_IGUAL : '<=';
IGUALDAD_BASE : '==';
IGUALDAD_FUERTE: '===';

//! Operadores logicos
OR : '||';
AND: '&&';

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
CADENA      : '"' .*? '"'      ;
DEC         : [0-9]+'.'[0-9]+  ;
SEMI        : ';'              ;

WS: [ \t\r\n]+ -> skip; // Ignorar espacios en blanco, tabulaciones, retornos de carro y saltos de línea.