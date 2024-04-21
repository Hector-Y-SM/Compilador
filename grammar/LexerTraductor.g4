lexer grammar LexerTraductor;

MAIN: 'main';
AUTO: 'auto';
BREAK: 'break';
CASE: 'case';
CHAR: 'char';
CONST: 'const';
CONTINUE: 'continue';
DEFAULT: 'default';
DO: 'do';
DOUBLE: 'double';
ELSE_IF: 'else if';
ELSE: 'else';
ENUM: 'enum';
EXTERN: 'extern';
FLOAT: 'float';
FOR: 'for';
GOTO: 'goto';
IF: 'if';
INT: 'int';
LONG: 'long';
REGISTER: 'register';
RETURN: 'return';
SHORT: 'short';
SIGNED: 'signed';
SIZEOF: 'sizeof';
STATIC: 'static';
STRUCT: 'struct';
SWITCH: 'switch';
TYPEDEF: 'typedef';
UNION: 'union';
UNSIGNED: 'unsigned';
VOID: 'void';
VOLATILE: 'volatile';
WHILE: 'while';
INCLUDE: 'include';
PRINTF: 'printf';
SCANF: 'scanf';
FPRINTF: 'fprintf';
FSCANF: 'fscanf';
SPRINTF: 'sprintf';
FSEEK: 'fseek';
FOPEN: 'fopen';
FCLOSE: 'fclose';
GETCH: 'getch';
VOID_MAIN: 'void main()';


ID: [a-zA-Z0-9_]+;
NUM         : [0-9]+           ;
CADENA      : '"' .*? '"'      ;
DEC         : [0-9]+'.'[0-9]+  ;
SEMI        : ';'              ;

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

OR : '||';
AND: '&&';

WS: [ \t\r\n]+ -> skip; // Ignorar espacios en blanco, tabulaciones, retornos de carro y saltos de línea.
