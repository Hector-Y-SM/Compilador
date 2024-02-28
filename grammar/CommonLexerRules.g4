lexer grammar CommonLexerRules;

INT      : 'nc';
FLOAT    : 'im';
CHAR     : 'jgl';

MUL : '*' ; // assigns token name to '*' used above in grammar
DIV : '/' ;
ADD : '+' ;
SUB : '-' ;

TPG              : 'TPG';
ASIGNACION       : '=';
ALLAVE           : '{' ;
CLLAVE           : '}' ;
AADMIRACION      : '!';

ID               : [a-zA-Z0-9_]+;
NUM              : [0-9]+;
CADENA           : [a-zA-Z]+;
DEC              : [0-9]+'.'[0-9]+;
SEMI             : ';';

WS: [ \t\r\n]+ -> skip; // Ignorar espacios en blanco, tabulaciones, retornos de carro y saltos de línea.
