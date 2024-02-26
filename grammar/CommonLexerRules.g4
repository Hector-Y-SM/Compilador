lexer grammar CommonLexerRules;

//* tipos datos
//! CAMBIAR NOMBRES DE LOS TIPOS DE DATOS PARA PERSONALIZAR
INT     : 'nc';
FLOAT   : 'im';
CHAR    : 'jgl';

// valores
ID      : [a-zA-Z0-9_]+; // match identifiers
NUM     : [0-9]+;
DEC     : [0-9]+.[0-9]+;
CADENAS :  '"' .*? '"' ;

//simbolos
IGUAL       : '=';
SEMICOLON   : ';';
SUMA        : '+';
RESTA       : '-';
MULTIPLI    : '*';
DIVISION    : '/';
//APRENTESIS  : '(';
//CPARENTESIS : ')';
//ACORCHETE   : '[';
//CCORCHETE   : ']';
APREGUNTA   : '¿';
CPREGUNTA   : '?';


//ignorar
WS : [ \t\n\r]+ -> skip ; // toss out whitespace
