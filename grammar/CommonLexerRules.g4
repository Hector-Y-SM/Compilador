lexer grammar CommonLexerRules;

//!Palabras reservadas
IMPRESION   : 'leak';
IF_BASICO   : 'si'  ;
ELSE        : 'else';
ELSE_IF     : 'elfito';
DO          : 'toDo';
WHILE       : 'lewhi'; 
FOR         : 'fofo';     
TRUE        : 'true';
FALSE       : 'false';

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
RESIDUO          : '%';

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
ID          : [a-zA-Z_] [a-zA-Z_0-9]*    ;
NUM         : '-'? [0-9]+      ;
CADENA      : '"' .*? '"'      ;
DEC         : [0-9]+'.'[0-9]+  ;
SEMI        : ';'              ;
COMA        : ','              ;

WS: [ \t\r\n]+ -> skip; // Ignorar espacios en blanco, tabulaciones, retornos de carro y saltos de línea.