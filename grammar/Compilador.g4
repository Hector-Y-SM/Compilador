grammar Compilador;
import CommonLexerRules;

init: 'TPG' '{' contenido '}'; //regla de inicio por el momento

contenido: declaraciones*  #printDeclaraciones
         | asignacionesDeclarada*   #printAsignacionesDeclaradas
         | asignacionInicializada*  #printAsignacionesInicializada
         ;

declaraciones: PR ID SEMICOLON?     #indefinido
             ;

asignacionesDeclarada: PR ID '=' valores SEMICOLON?    #definido
                     ;

asignacionInicializada: ID '=' valores SEMICOLON? #asignacion
                      ;



valores: NUM     #numero
       | DEC     #decimal
       | ID      #id
       | CADENAS #cadenas
       ;

PR: INT
  | FLOAT
  | CHAR
  ;