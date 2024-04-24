lexer grammar CommonLexerRules;

//!Palabras reservadas
IMPRESION   : 'leak';
IF_BASICO   : 'si'  ;
ELSE        : 'else';
ELSE_IF     : 'elfito';
DO          : 'toDo';
WHILE       : 'lewhi'; 
FOR         : 'fofo';     

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
IGUALDAD_DEBIL   : '==' ;
IGUALDAD_FUERTE  : '===';
DIF_DEBIL        : '!=' ;
DIF_FUERTE       : '!==';

//! Operadores logicos
OR : '||';
AND: '&&';

//! Caparazon inicial
TPG         : 'W7HLM' ;
ALLAVE      : '{'  ;
CLLAVE      : '}'  ;

//! Simbolos
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