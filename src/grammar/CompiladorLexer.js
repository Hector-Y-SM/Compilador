// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,34,192,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,
2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,
27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,
1,0,1,0,3,0,73,8,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,
4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,
1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,16,1,16,1,
16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,
1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,
25,1,26,1,26,1,27,1,27,1,28,4,28,155,8,28,11,28,12,28,156,1,29,4,29,160,
8,29,11,29,12,29,161,1,30,1,30,5,30,166,8,30,10,30,12,30,169,9,30,1,30,1,
30,1,31,4,31,174,8,31,11,31,12,31,175,1,31,1,31,4,31,180,8,31,11,31,12,31,
181,1,32,1,32,1,33,4,33,187,8,33,11,33,12,33,188,1,33,1,33,1,167,0,34,1,
1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,
31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,
55,28,57,29,59,30,61,31,63,32,65,33,67,34,1,0,3,4,0,48,57,65,90,95,95,97,
122,1,0,48,57,3,0,9,10,13,13,32,32,199,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,
0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,
0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,
29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,
0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,
1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,
0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,1,72,1,0,0,0,3,74,1,0,0,0,5,79,1,
0,0,0,7,82,1,0,0,0,9,87,1,0,0,0,11,90,1,0,0,0,13,93,1,0,0,0,15,97,1,0,0,
0,17,99,1,0,0,0,19,101,1,0,0,0,21,103,1,0,0,0,23,105,1,0,0,0,25,107,1,0,
0,0,27,109,1,0,0,0,29,111,1,0,0,0,31,114,1,0,0,0,33,117,1,0,0,0,35,120,1,
0,0,0,37,124,1,0,0,0,39,127,1,0,0,0,41,131,1,0,0,0,43,134,1,0,0,0,45,137,
1,0,0,0,47,143,1,0,0,0,49,145,1,0,0,0,51,147,1,0,0,0,53,149,1,0,0,0,55,151,
1,0,0,0,57,154,1,0,0,0,59,159,1,0,0,0,61,163,1,0,0,0,63,173,1,0,0,0,65,183,
1,0,0,0,67,186,1,0,0,0,69,73,3,9,4,0,70,73,3,13,6,0,71,73,3,11,5,0,72,69,
1,0,0,0,72,70,1,0,0,0,72,71,1,0,0,0,73,2,1,0,0,0,74,75,5,108,0,0,75,76,5,
101,0,0,76,77,5,97,0,0,77,78,5,107,0,0,78,4,1,0,0,0,79,80,5,105,0,0,80,81,
5,102,0,0,81,6,1,0,0,0,82,83,5,101,0,0,83,84,5,108,0,0,84,85,5,115,0,0,85,
86,5,101,0,0,86,8,1,0,0,0,87,88,5,110,0,0,88,89,5,99,0,0,89,10,1,0,0,0,90,
91,5,105,0,0,91,92,5,109,0,0,92,12,1,0,0,0,93,94,5,106,0,0,94,95,5,103,0,
0,95,96,5,108,0,0,96,14,1,0,0,0,97,98,5,42,0,0,98,16,1,0,0,0,99,100,5,47,
0,0,100,18,1,0,0,0,101,102,5,43,0,0,102,20,1,0,0,0,103,104,5,45,0,0,104,
22,1,0,0,0,105,106,5,61,0,0,106,24,1,0,0,0,107,108,5,62,0,0,108,26,1,0,0,
0,109,110,5,60,0,0,110,28,1,0,0,0,111,112,5,62,0,0,112,113,5,61,0,0,113,
30,1,0,0,0,114,115,5,60,0,0,115,116,5,61,0,0,116,32,1,0,0,0,117,118,5,61,
0,0,118,119,5,61,0,0,119,34,1,0,0,0,120,121,5,61,0,0,121,122,5,61,0,0,122,
123,5,61,0,0,123,36,1,0,0,0,124,125,5,33,0,0,125,126,5,61,0,0,126,38,1,0,
0,0,127,128,5,33,0,0,128,129,5,61,0,0,129,130,5,61,0,0,130,40,1,0,0,0,131,
132,5,124,0,0,132,133,5,124,0,0,133,42,1,0,0,0,134,135,5,38,0,0,135,136,
5,38,0,0,136,44,1,0,0,0,137,138,5,87,0,0,138,139,5,55,0,0,139,140,5,72,0,
0,140,141,5,76,0,0,141,142,5,77,0,0,142,46,1,0,0,0,143,144,5,123,0,0,144,
48,1,0,0,0,145,146,5,125,0,0,146,50,1,0,0,0,147,148,5,40,0,0,148,52,1,0,
0,0,149,150,5,41,0,0,150,54,1,0,0,0,151,152,5,33,0,0,152,56,1,0,0,0,153,
155,7,0,0,0,154,153,1,0,0,0,155,156,1,0,0,0,156,154,1,0,0,0,156,157,1,0,
0,0,157,58,1,0,0,0,158,160,7,1,0,0,159,158,1,0,0,0,160,161,1,0,0,0,161,159,
1,0,0,0,161,162,1,0,0,0,162,60,1,0,0,0,163,167,5,34,0,0,164,166,9,0,0,0,
165,164,1,0,0,0,166,169,1,0,0,0,167,168,1,0,0,0,167,165,1,0,0,0,168,170,
1,0,0,0,169,167,1,0,0,0,170,171,5,34,0,0,171,62,1,0,0,0,172,174,7,1,0,0,
173,172,1,0,0,0,174,175,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,177,
1,0,0,0,177,179,5,46,0,0,178,180,7,1,0,0,179,178,1,0,0,0,180,181,1,0,0,0,
181,179,1,0,0,0,181,182,1,0,0,0,182,64,1,0,0,0,183,184,5,59,0,0,184,66,1,
0,0,0,185,187,7,2,0,0,186,185,1,0,0,0,187,188,1,0,0,0,188,186,1,0,0,0,188,
189,1,0,0,0,189,190,1,0,0,0,190,191,6,33,0,0,191,68,1,0,0,0,8,0,72,156,161,
167,175,181,188,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CompiladorLexer extends antlr4.Lexer {

    static grammarFileName = "Compilador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, "'leak'", "'if'", "'else'", "'nc'", 
                         "'im'", "'jgl'", "'*'", "'/'", "'+'", "'-'", "'='", 
                         "'>'", "'<'", "'>='", "'<='", "'=='", "'==='", 
                         "'!='", "'!=='", "'||'", "'&&'", "'W7HLM'", "'{'", 
                         "'}'", "'('", "')'", "'!'", null, null, null, null, 
                         "';'" ];
	static symbolicNames = [ null, "PR", "IMPRESION", "IF_BASICO", "ELSE", 
                          "INT", "FLOAT", "CHAR", "MUL", "DIV", "ADD", "SUB", 
                          "ASIGNACION", "MAYORQ", "MENORQ", "MAYOR_IGUAL", 
                          "MENOR_IGUAL", "IGUALDAD_DEBIL", "IGUALDAD_FUERTE", 
                          "DIF_DEBIL", "DIF_FUERTE", "OR", "AND", "TPG", 
                          "ALLAVE", "CLLAVE", "APARENTESIS", "CPARENTESIS", 
                          "AADMIRACION", "ID", "NUM", "CADENA", "DEC", "SEMI", 
                          "WS" ];
	static ruleNames = [ "PR", "IMPRESION", "IF_BASICO", "ELSE", "INT", "FLOAT", 
                      "CHAR", "MUL", "DIV", "ADD", "SUB", "ASIGNACION", 
                      "MAYORQ", "MENORQ", "MAYOR_IGUAL", "MENOR_IGUAL", 
                      "IGUALDAD_DEBIL", "IGUALDAD_FUERTE", "DIF_DEBIL", 
                      "DIF_FUERTE", "OR", "AND", "TPG", "ALLAVE", "CLLAVE", 
                      "APARENTESIS", "CPARENTESIS", "AADMIRACION", "ID", 
                      "NUM", "CADENA", "DEC", "SEMI", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

CompiladorLexer.EOF = antlr4.Token.EOF;
CompiladorLexer.PR = 1;
CompiladorLexer.IMPRESION = 2;
CompiladorLexer.IF_BASICO = 3;
CompiladorLexer.ELSE = 4;
CompiladorLexer.INT = 5;
CompiladorLexer.FLOAT = 6;
CompiladorLexer.CHAR = 7;
CompiladorLexer.MUL = 8;
CompiladorLexer.DIV = 9;
CompiladorLexer.ADD = 10;
CompiladorLexer.SUB = 11;
CompiladorLexer.ASIGNACION = 12;
CompiladorLexer.MAYORQ = 13;
CompiladorLexer.MENORQ = 14;
CompiladorLexer.MAYOR_IGUAL = 15;
CompiladorLexer.MENOR_IGUAL = 16;
CompiladorLexer.IGUALDAD_DEBIL = 17;
CompiladorLexer.IGUALDAD_FUERTE = 18;
CompiladorLexer.DIF_DEBIL = 19;
CompiladorLexer.DIF_FUERTE = 20;
CompiladorLexer.OR = 21;
CompiladorLexer.AND = 22;
CompiladorLexer.TPG = 23;
CompiladorLexer.ALLAVE = 24;
CompiladorLexer.CLLAVE = 25;
CompiladorLexer.APARENTESIS = 26;
CompiladorLexer.CPARENTESIS = 27;
CompiladorLexer.AADMIRACION = 28;
CompiladorLexer.ID = 29;
CompiladorLexer.NUM = 30;
CompiladorLexer.CADENA = 31;
CompiladorLexer.DEC = 32;
CompiladorLexer.SEMI = 33;
CompiladorLexer.WS = 34;



