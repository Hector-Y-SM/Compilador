lexer grammar CommonLexerRules;

//* tipos datos
//! CAMBIAR NOMBRES DE LOS TIPOS DE DATOS PARA PERSONALIZAR
INT     : 'int';
FLOAT   : 'float';
CHAR    : 'char';
//PR      : INT | FLOAT | CHAR;

// valores
ID      : [a-zA-Z]+ ; // match identifiers
NUM     : [0-9]+;
DEC     : [0-9]+.[0-9]+;

//ignorar
WS : [ \t]+ -> skip ; // toss out whitespace
