lexer grammar CommonLexerRules;

//* tipos datos
//! CAMBIAR NOMBRES DE LOS TIPOS DE DATOS PARA PERSONALIZAR
INT     : 'int';
FLOAT   : 'float';
CHAR    : 'char';

// valores
ID      : [a-zA-Z0-9_*+-/]+; // match identifiers
NUM     : [0-9]+;
DEC     : [0-9]+.[0-9]+;
CADENAS :  '"' .*? '"' ;

//simbolos
IGUAL     : '=';
SEMICOLON : ';';

//ignorar
WS : [ \t\n]+ -> skip ; // toss out whitespace
