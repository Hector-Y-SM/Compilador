grammar Compilador;
import CommonLexerRules;

init: 'TPG' '{' contenido '}'; //regla de inicio por el momento

contenido: (declaraciones 
         | asignacionesDeclarada
         | asignacionInicializada)* 
         ;

declaraciones: PR ID SEMICOLON?     #indefinido
             ;

asignacionesDeclarada: PR ID '=' valores SEMICOLON?    #definido
                     ;

asignacionInicializada: ID '=' valores SEMICOLON? #asignacion
                      ;

valores: operaciones  #printOperaciones
       ;

operaciones: NUM                                          # numero
           | ID                                           # id
           | DEC                                          # decimal
           | CADENAS                                      # cadenas 
           | operaciones op=('*'|'/') operaciones         # MulDiv
           | operaciones (op=(SUMA|RESTA)) operaciones    # AddSub
           | '(' operaciones ')'                          # parens
           ;

PR: INT
  | FLOAT
  | CHAR
  ;
