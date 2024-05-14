lexer grammar LexerTraductor;

MAIN: 'main';
BREAK: 'break';
CASE: 'case';
CHAR: 'char';
CONST: 'const';
DO: 'do';
DOUBLE: 'double';
ELSE_IF: 'else if';
ELSE: 'else';
FLOAT: 'float';
FOR: 'for';
IF: 'if';
INT: 'int';
SWITCH: 'switch';
UNSIGNED: 'unsigned';
VOID: 'void';
WHILE: 'while';
PRINTF: 'printf';
VOID_MAIN: 'void main()';
TRUE: 'true';
FALSE: 'false';

ID          : [a-zA-Z0-9_]+;
NUM         : [0-9]+           ;
CADENA      : '"' .*? '"'      ;
DEC         : [0-9]+'.'[0-9]+  ;
SEMI        : ';'              ;
COMA        : ','              ;

ALLAVE      : '{'  ;
CLLAVE      : '}'  ;

//! Simbolos
APARENTESIS : '('  ;
CPARENTESIS : ')'  ;
AADMIRACION : '!'  ;

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

OR : '||';
AND: '&&';

WS: [ \t\r\n]+ -> skip; // Ignorar espacios en blanco, tabulaciones, retornos de carro y saltos de línea.
