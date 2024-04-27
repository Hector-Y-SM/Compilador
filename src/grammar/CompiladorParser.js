// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,40,263,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,0,5,0,44,8,0,10,0,12,0,47,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,3,1,59,8,1,1,2,1,2,1,2,3,2,64,8,2,1,3,1,3,1,3,1,3,1,3,3,3,71,8,3,1,
4,1,4,1,4,1,4,3,4,77,8,4,1,5,1,5,1,5,1,5,1,5,3,5,84,8,5,1,6,1,6,5,6,88,8,
6,10,6,12,6,91,9,6,1,6,3,6,94,8,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,102,8,7,10,
7,12,7,105,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,115,8,8,10,8,12,8,118,
9,8,1,8,1,8,1,9,1,9,1,9,5,9,125,8,9,10,9,12,9,128,9,9,1,9,1,9,1,10,1,10,
1,10,3,10,135,8,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,143,8,11,10,11,12,
11,146,9,11,1,11,1,11,1,12,1,12,1,12,5,12,153,8,12,10,12,12,12,156,9,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,5,13,174,8,13,10,13,12,13,177,9,13,1,13,1,13,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,197,8,14,
1,14,1,14,1,14,1,14,1,14,1,14,5,14,205,8,14,10,14,12,14,208,9,14,1,15,1,
15,5,15,212,8,15,10,15,12,15,215,9,15,1,15,1,15,5,15,219,8,15,10,15,12,15,
222,9,15,1,15,5,15,225,8,15,10,15,12,15,228,9,15,1,15,1,15,1,15,1,15,5,15,
234,8,15,10,15,12,15,237,9,15,3,15,239,8,15,1,15,1,15,1,15,5,15,244,8,15,
10,15,12,15,247,9,15,1,16,1,16,1,16,3,16,252,8,16,1,17,1,17,1,17,3,17,257,
8,17,1,18,1,18,1,19,1,19,1,19,4,213,220,226,235,2,28,30,20,0,2,4,6,8,10,
12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,4,1,0,14,15,1,0,16,17,1,0,19,
26,1,0,27,28,279,0,40,1,0,0,0,2,58,1,0,0,0,4,60,1,0,0,0,6,65,1,0,0,0,8,72,
1,0,0,0,10,78,1,0,0,0,12,85,1,0,0,0,14,95,1,0,0,0,16,108,1,0,0,0,18,121,
1,0,0,0,20,134,1,0,0,0,22,136,1,0,0,0,24,149,1,0,0,0,26,163,1,0,0,0,28,196,
1,0,0,0,30,238,1,0,0,0,32,248,1,0,0,0,34,253,1,0,0,0,36,258,1,0,0,0,38,260,
1,0,0,0,40,41,5,29,0,0,41,45,5,30,0,0,42,44,3,2,1,0,43,42,1,0,0,0,44,47,
1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,49,5,
31,0,0,49,1,1,0,0,0,50,59,3,4,2,0,51,59,3,6,3,0,52,59,3,8,4,0,53,59,3,10,
5,0,54,59,3,12,6,0,55,59,3,20,10,0,56,59,3,32,16,0,57,59,3,34,17,0,58,50,
1,0,0,0,58,51,1,0,0,0,58,52,1,0,0,0,58,53,1,0,0,0,58,54,1,0,0,0,58,55,1,
0,0,0,58,56,1,0,0,0,58,57,1,0,0,0,59,3,1,0,0,0,60,61,5,3,0,0,61,63,5,35,
0,0,62,64,5,39,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,5,1,0,0,0,65,66,5,3,0,
0,66,67,5,35,0,0,67,68,5,18,0,0,68,70,3,28,14,0,69,71,5,39,0,0,70,69,1,0,
0,0,70,71,1,0,0,0,71,7,1,0,0,0,72,73,5,35,0,0,73,74,5,18,0,0,74,76,3,28,
14,0,75,77,5,39,0,0,76,75,1,0,0,0,76,77,1,0,0,0,77,9,1,0,0,0,78,79,5,4,0,
0,79,80,5,32,0,0,80,81,3,28,14,0,81,83,5,33,0,0,82,84,5,39,0,0,83,82,1,0,
0,0,83,84,1,0,0,0,84,11,1,0,0,0,85,89,3,14,7,0,86,88,3,16,8,0,87,86,1,0,
0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,
0,92,94,3,18,9,0,93,92,1,0,0,0,93,94,1,0,0,0,94,13,1,0,0,0,95,96,5,5,0,0,
96,97,5,32,0,0,97,98,3,30,15,0,98,99,5,33,0,0,99,103,3,36,18,0,100,102,3,
2,1,0,101,100,1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,
106,1,0,0,0,105,103,1,0,0,0,106,107,3,38,19,0,107,15,1,0,0,0,108,109,5,7,
0,0,109,110,5,32,0,0,110,111,3,30,15,0,111,112,5,33,0,0,112,116,3,36,18,
0,113,115,3,2,1,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,
1,0,0,0,117,119,1,0,0,0,118,116,1,0,0,0,119,120,3,38,19,0,120,17,1,0,0,0,
121,122,5,6,0,0,122,126,3,36,18,0,123,125,3,2,1,0,124,123,1,0,0,0,125,128,
1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,129,1,0,0,0,128,126,1,0,0,0,
129,130,3,38,19,0,130,19,1,0,0,0,131,135,3,22,11,0,132,135,3,24,12,0,133,
135,3,26,13,0,134,131,1,0,0,0,134,132,1,0,0,0,134,133,1,0,0,0,135,21,1,0,
0,0,136,137,5,9,0,0,137,138,5,32,0,0,138,139,3,30,15,0,139,140,5,33,0,0,
140,144,3,36,18,0,141,143,3,2,1,0,142,141,1,0,0,0,143,146,1,0,0,0,144,142,
1,0,0,0,144,145,1,0,0,0,145,147,1,0,0,0,146,144,1,0,0,0,147,148,3,38,19,
0,148,23,1,0,0,0,149,150,5,8,0,0,150,154,3,36,18,0,151,153,3,2,1,0,152,151,
1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,157,1,0,0,0,
156,154,1,0,0,0,157,158,3,38,19,0,158,159,5,9,0,0,159,160,5,32,0,0,160,161,
3,30,15,0,161,162,5,33,0,0,162,25,1,0,0,0,163,164,5,10,0,0,164,165,5,32,
0,0,165,166,3,6,3,0,166,167,5,39,0,0,167,168,3,30,15,0,168,169,5,39,0,0,
169,170,3,32,16,0,170,171,5,33,0,0,171,175,3,36,18,0,172,174,3,2,1,0,173,
172,1,0,0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,1,0,
0,0,177,175,1,0,0,0,178,179,3,38,19,0,179,27,1,0,0,0,180,181,6,14,-1,0,181,
197,5,36,0,0,182,197,5,38,0,0,183,197,5,37,0,0,184,197,5,35,0,0,185,186,
5,32,0,0,186,187,3,28,14,0,187,188,5,33,0,0,188,197,1,0,0,0,189,190,5,32,
0,0,190,191,3,28,14,0,191,192,5,33,0,0,192,193,5,32,0,0,193,194,3,28,14,
0,194,195,5,33,0,0,195,197,1,0,0,0,196,180,1,0,0,0,196,182,1,0,0,0,196,183,
1,0,0,0,196,184,1,0,0,0,196,185,1,0,0,0,196,189,1,0,0,0,197,206,1,0,0,0,
198,199,10,8,0,0,199,200,7,0,0,0,200,205,3,28,14,9,201,202,10,7,0,0,202,
203,7,1,0,0,203,205,3,28,14,8,204,198,1,0,0,0,204,201,1,0,0,0,205,208,1,
0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,29,1,0,0,0,208,206,1,0,0,0,209,
213,6,15,-1,0,210,212,5,32,0,0,211,210,1,0,0,0,212,215,1,0,0,0,213,214,1,
0,0,0,213,211,1,0,0,0,214,216,1,0,0,0,215,213,1,0,0,0,216,220,3,28,14,0,
217,219,5,33,0,0,218,217,1,0,0,0,219,222,1,0,0,0,220,221,1,0,0,0,220,218,
1,0,0,0,221,239,1,0,0,0,222,220,1,0,0,0,223,225,5,32,0,0,224,223,1,0,0,0,
225,228,1,0,0,0,226,227,1,0,0,0,226,224,1,0,0,0,227,229,1,0,0,0,228,226,
1,0,0,0,229,230,3,28,14,0,230,231,7,2,0,0,231,235,3,28,14,0,232,234,5,33,
0,0,233,232,1,0,0,0,234,237,1,0,0,0,235,236,1,0,0,0,235,233,1,0,0,0,236,
239,1,0,0,0,237,235,1,0,0,0,238,209,1,0,0,0,238,226,1,0,0,0,239,245,1,0,
0,0,240,241,10,3,0,0,241,242,7,3,0,0,242,244,3,30,15,4,243,240,1,0,0,0,244,
247,1,0,0,0,245,243,1,0,0,0,245,246,1,0,0,0,246,31,1,0,0,0,247,245,1,0,0,
0,248,249,5,35,0,0,249,251,5,1,0,0,250,252,5,39,0,0,251,250,1,0,0,0,251,
252,1,0,0,0,252,33,1,0,0,0,253,254,5,35,0,0,254,256,5,2,0,0,255,257,5,39,
0,0,256,255,1,0,0,0,256,257,1,0,0,0,257,35,1,0,0,0,258,259,5,30,0,0,259,
37,1,0,0,0,260,261,5,31,0,0,261,39,1,0,0,0,26,45,58,63,70,76,83,89,93,103,
116,126,134,144,154,175,196,204,206,213,220,226,235,238,245,251,256];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, "'++'", "'--'", null, "'leak'", "'si'", 
                            "'else'", "'elfito'", "'toDo'", "'lewhi'", "'fofo'", 
                            "'nc'", "'im'", "'jgl'", "'*'", "'/'", "'+'", 
                            "'-'", "'='", "'>'", "'<'", "'>='", "'<='", 
                            "'=='", "'==='", "'!='", "'!=='", "'||'", "'&&'", 
                            "'W7HLM'", "'{'", "'}'", "'('", "')'", "'!'", 
                            null, null, null, null, "';'" ];
    static symbolicNames = [ null, null, null, "PR", "IMPRESION", "IF_BASICO", 
                             "ELSE", "ELSE_IF", "DO", "WHILE", "FOR", "INT", 
                             "FLOAT", "CHAR", "MUL", "DIV", "ADD", "SUB", 
                             "ASIGNACION", "MAYORQ", "MENORQ", "MAYOR_IGUAL", 
                             "MENOR_IGUAL", "IGUALDAD_DEBIL", "IGUALDAD_FUERTE", 
                             "DIF_DEBIL", "DIF_FUERTE", "OR", "AND", "TPG", 
                             "ALLAVE", "CLLAVE", "APARENTESIS", "CPARENTESIS", 
                             "AADMIRACION", "ID", "NUM", "CADENA", "DEC", 
                             "SEMI", "WS" ];
    static ruleNames = [ "init", "contenido", "inicializacion", "declaracion", 
                         "asignacion", "print", "if_estructuras", "if", 
                         "else_if", "else", "ciclos", "while", "doWhile", 
                         "for", "valor", "condiciones", "incremento", "decremento", 
                         "abloque", "cbloque" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompiladorParser.ruleNames;
        this.literalNames = CompiladorParser.literalNames;
        this.symbolicNames = CompiladorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 14:
    	    		return this.valor_sempred(localctx, predIndex);
    	case 15:
    	    		return this.condiciones_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    valor_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    condiciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CompiladorParser.RULE_init);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(CompiladorParser.TPG);
	        this.state = 41;
	        this.match(CompiladorParser.ALLAVE);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1848) !== 0) || _la===35) {
	            this.state = 42;
	            this.contenido();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.match(CompiladorParser.CLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contenido() {
	    let localctx = new ContenidoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CompiladorParser.RULE_contenido);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.inicializacion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.declaracion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.asignacion();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 53;
	            this.print();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 54;
	            this.if_estructuras();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 55;
	            this.ciclos();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 56;
	            this.incremento();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 57;
	            this.decremento();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inicializacion() {
	    let localctx = new InicializacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CompiladorParser.RULE_inicializacion);
	    var _la = 0;
	    try {
	        localctx = new IndefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(CompiladorParser.PR);
	        this.state = 61;
	        this.match(CompiladorParser.ID);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 62;
	            this.match(CompiladorParser.SEMI);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CompiladorParser.RULE_declaracion);
	    try {
	        localctx = new DefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(CompiladorParser.PR);
	        this.state = 66;
	        this.match(CompiladorParser.ID);
	        this.state = 67;
	        this.match(CompiladorParser.ASIGNACION);
	        this.state = 68;
	        this.valor(0);
	        this.state = 70;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 69;
	            this.match(CompiladorParser.SEMI);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CompiladorParser.RULE_asignacion);
	    var _la = 0;
	    try {
	        localctx = new AsignadoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(CompiladorParser.ID);
	        this.state = 73;
	        this.match(CompiladorParser.ASIGNACION);
	        this.state = 74;
	        this.valor(0);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 75;
	            this.match(CompiladorParser.SEMI);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	print() {
	    let localctx = new PrintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CompiladorParser.RULE_print);
	    var _la = 0;
	    try {
	        localctx = new PrintValorContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(CompiladorParser.IMPRESION);
	        this.state = 79;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 80;
	        this.valor(0);
	        this.state = 81;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 82;
	            this.match(CompiladorParser.SEMI);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_estructuras() {
	    let localctx = new If_estructurasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CompiladorParser.RULE_if_estructuras);
	    var _la = 0;
	    try {
	        localctx = new EstructuraIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.if_();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 86;
	            this.else_if();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 92;
	            this.else_();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_() {
	    let localctx = new IfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CompiladorParser.RULE_if);
	    var _la = 0;
	    try {
	        localctx = new IfPuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(CompiladorParser.IF_BASICO);
	        this.state = 96;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 97;
	        this.condiciones(0);
	        this.state = 98;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 99;
	        this.abloque();
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1848) !== 0) || _la===35) {
	            this.state = 100;
	            this.contenido();
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 106;
	        this.cbloque();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	else_if() {
	    let localctx = new Else_ifContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CompiladorParser.RULE_else_if);
	    var _la = 0;
	    try {
	        localctx = new ElseIfPuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(CompiladorParser.ELSE_IF);
	        this.state = 109;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 110;
	        this.condiciones(0);
	        this.state = 111;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 112;
	        this.abloque();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1848) !== 0) || _la===35) {
	            this.state = 113;
	            this.contenido();
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 119;
	        this.cbloque();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	else_() {
	    let localctx = new ElseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CompiladorParser.RULE_else);
	    var _la = 0;
	    try {
	        localctx = new ElsePuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(CompiladorParser.ELSE);
	        this.state = 122;
	        this.abloque();
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1848) !== 0) || _la===35) {
	            this.state = 123;
	            this.contenido();
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 129;
	        this.cbloque();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ciclos() {
	    let localctx = new CiclosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CompiladorParser.RULE_ciclos);
	    try {
	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            localctx = new ReglaWhileContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 131;
	            this.while_();
	            break;
	        case 8:
	            localctx = new ReglaDoWhileContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 132;
	            this.doWhile();
	            break;
	        case 10:
	            localctx = new ReglaForContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 133;
	            this.for_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	while_() {
	    let localctx = new WhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CompiladorParser.RULE_while);
	    var _la = 0;
	    try {
	        localctx = new CicloWhileContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(CompiladorParser.WHILE);
	        this.state = 137;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 138;
	        this.condiciones(0);
	        this.state = 139;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 140;
	        this.abloque();
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1848) !== 0) || _la===35) {
	            this.state = 141;
	            this.contenido();
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 147;
	        this.cbloque();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doWhile() {
	    let localctx = new DoWhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CompiladorParser.RULE_doWhile);
	    var _la = 0;
	    try {
	        localctx = new CicloDoWhileContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(CompiladorParser.DO);
	        this.state = 150;
	        this.abloque();
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1848) !== 0) || _la===35) {
	            this.state = 151;
	            this.contenido();
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 157;
	        this.cbloque();
	        this.state = 158;
	        this.match(CompiladorParser.WHILE);
	        this.state = 159;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 160;
	        this.condiciones(0);
	        this.state = 161;
	        this.match(CompiladorParser.CPARENTESIS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	for_() {
	    let localctx = new ForContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CompiladorParser.RULE_for);
	    var _la = 0;
	    try {
	        localctx = new CicloForContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(CompiladorParser.FOR);
	        this.state = 164;
	        this.match(CompiladorParser.APARENTESIS);

	        this.state = 165;
	        this.declaracion();
	        this.state = 166;
	        this.match(CompiladorParser.SEMI);

	        this.state = 167;
	        this.condiciones(0);
	        this.state = 168;
	        this.match(CompiladorParser.SEMI);

	        this.state = 169;
	        this.incremento();
	        this.state = 170;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 171;
	        this.abloque();
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1848) !== 0) || _la===35) {
	            this.state = 172;
	            this.contenido();
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 178;
	        this.cbloque();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	valor(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ValorContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, CompiladorParser.RULE_valor, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 181;
	            this.match(CompiladorParser.NUM);
	            break;

	        case 2:
	            localctx = new DecimalContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 182;
	            this.match(CompiladorParser.DEC);
	            break;

	        case 3:
	            localctx = new CadenasContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 183;
	            this.match(CompiladorParser.CADENA);
	            break;

	        case 4:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 184;
	            this.match(CompiladorParser.ID);
	            break;

	        case 5:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 185;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 186;
	            this.valor(0);
	            this.state = 187;
	            this.match(CompiladorParser.CPARENTESIS);
	            break;

	        case 6:
	            localctx = new ImplicitoContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 189;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 190;
	            this.valor(0);
	            this.state = 191;
	            this.match(CompiladorParser.CPARENTESIS);
	            this.state = 192;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 193;
	            this.valor(0);
	            this.state = 194;
	            this.match(CompiladorParser.CPARENTESIS);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 206;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 204;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 198;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 199;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===14 || _la===15)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 200;
	                    this.valor(9);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 201;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 202;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===16 || _la===17)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 203;
	                    this.valor(8);
	                    break;

	                } 
	            }
	            this.state = 208;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	condiciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CondicionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, CompiladorParser.RULE_condiciones, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TrueOrFalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 213;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 210;
	                    this.match(CompiladorParser.APARENTESIS); 
	                }
	                this.state = 215;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	            }

	            this.state = 216;
	            this.valor(0);
	            this.state = 220;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 217;
	                    this.match(CompiladorParser.CPARENTESIS); 
	                }
	                this.state = 222;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	            }

	            break;

	        case 2:
	            localctx = new CondicionComparacionesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 226;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 223;
	                    this.match(CompiladorParser.APARENTESIS); 
	                }
	                this.state = 228;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	            }

	            this.state = 229;
	            this.valor(0);
	            this.state = 230;
	            localctx.des = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 133693440) !== 0))) {
	                localctx.des = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 231;
	            this.valor(0);
	            this.state = 235;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 232;
	                    this.match(CompiladorParser.CPARENTESIS); 
	                }
	                this.state = 237;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	            }

	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 245;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicasContext(this, new CondicionesContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_condiciones);
	                this.state = 240;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 241;
	                localctx.des = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===27 || _la===28)) {
	                    localctx.des = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 242;
	                this.condiciones(4); 
	            }
	            this.state = 247;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	incremento() {
	    let localctx = new IncrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, CompiladorParser.RULE_incremento);
	    var _la = 0;
	    try {
	        localctx = new IncrementarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.match(CompiladorParser.ID);
	        this.state = 249;
	        this.match(CompiladorParser.T__0);
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 250;
	            this.match(CompiladorParser.SEMI);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decremento() {
	    let localctx = new DecrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, CompiladorParser.RULE_decremento);
	    var _la = 0;
	    try {
	        localctx = new DecrementarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.match(CompiladorParser.ID);
	        this.state = 254;
	        this.match(CompiladorParser.T__1);
	        this.state = 256;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===39) {
	            this.state = 255;
	            this.match(CompiladorParser.SEMI);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	abloque() {
	    let localctx = new AbloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, CompiladorParser.RULE_abloque);
	    try {
	        localctx = new AuxScoopeDosContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(CompiladorParser.ALLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cbloque() {
	    let localctx = new CbloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, CompiladorParser.RULE_cbloque);
	    try {
	        localctx = new AuxScoopeContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(CompiladorParser.CLLAVE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CompiladorParser.EOF = antlr4.Token.EOF;
CompiladorParser.T__0 = 1;
CompiladorParser.T__1 = 2;
CompiladorParser.PR = 3;
CompiladorParser.IMPRESION = 4;
CompiladorParser.IF_BASICO = 5;
CompiladorParser.ELSE = 6;
CompiladorParser.ELSE_IF = 7;
CompiladorParser.DO = 8;
CompiladorParser.WHILE = 9;
CompiladorParser.FOR = 10;
CompiladorParser.INT = 11;
CompiladorParser.FLOAT = 12;
CompiladorParser.CHAR = 13;
CompiladorParser.MUL = 14;
CompiladorParser.DIV = 15;
CompiladorParser.ADD = 16;
CompiladorParser.SUB = 17;
CompiladorParser.ASIGNACION = 18;
CompiladorParser.MAYORQ = 19;
CompiladorParser.MENORQ = 20;
CompiladorParser.MAYOR_IGUAL = 21;
CompiladorParser.MENOR_IGUAL = 22;
CompiladorParser.IGUALDAD_DEBIL = 23;
CompiladorParser.IGUALDAD_FUERTE = 24;
CompiladorParser.DIF_DEBIL = 25;
CompiladorParser.DIF_FUERTE = 26;
CompiladorParser.OR = 27;
CompiladorParser.AND = 28;
CompiladorParser.TPG = 29;
CompiladorParser.ALLAVE = 30;
CompiladorParser.CLLAVE = 31;
CompiladorParser.APARENTESIS = 32;
CompiladorParser.CPARENTESIS = 33;
CompiladorParser.AADMIRACION = 34;
CompiladorParser.ID = 35;
CompiladorParser.NUM = 36;
CompiladorParser.CADENA = 37;
CompiladorParser.DEC = 38;
CompiladorParser.SEMI = 39;
CompiladorParser.WS = 40;

CompiladorParser.RULE_init = 0;
CompiladorParser.RULE_contenido = 1;
CompiladorParser.RULE_inicializacion = 2;
CompiladorParser.RULE_declaracion = 3;
CompiladorParser.RULE_asignacion = 4;
CompiladorParser.RULE_print = 5;
CompiladorParser.RULE_if_estructuras = 6;
CompiladorParser.RULE_if = 7;
CompiladorParser.RULE_else_if = 8;
CompiladorParser.RULE_else = 9;
CompiladorParser.RULE_ciclos = 10;
CompiladorParser.RULE_while = 11;
CompiladorParser.RULE_doWhile = 12;
CompiladorParser.RULE_for = 13;
CompiladorParser.RULE_valor = 14;
CompiladorParser.RULE_condiciones = 15;
CompiladorParser.RULE_incremento = 16;
CompiladorParser.RULE_decremento = 17;
CompiladorParser.RULE_abloque = 18;
CompiladorParser.RULE_cbloque = 19;

class InitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_init;
    }

	TPG() {
	    return this.getToken(CompiladorParser.TPG, 0);
	};

	ALLAVE() {
	    return this.getToken(CompiladorParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(CompiladorParser.CLLAVE, 0);
	};

	contenido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContenidoContext);
	    } else {
	        return this.getTypedRuleContext(ContenidoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ContenidoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_contenido;
    }

	inicializacion() {
	    return this.getTypedRuleContext(InicializacionContext,0);
	};

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	asignacion() {
	    return this.getTypedRuleContext(AsignacionContext,0);
	};

	print() {
	    return this.getTypedRuleContext(PrintContext,0);
	};

	if_estructuras() {
	    return this.getTypedRuleContext(If_estructurasContext,0);
	};

	ciclos() {
	    return this.getTypedRuleContext(CiclosContext,0);
	};

	incremento() {
	    return this.getTypedRuleContext(IncrementoContext,0);
	};

	decremento() {
	    return this.getTypedRuleContext(DecrementoContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitContenido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InicializacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_inicializacion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IndefinidoContext extends InicializacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PR() {
	    return this.getToken(CompiladorParser.PR, 0);
	};

	ID() {
	    return this.getToken(CompiladorParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CompiladorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitIndefinido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.IndefinidoContext = IndefinidoContext;

class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_declaracion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DefinidoContext extends DeclaracionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PR() {
	    return this.getToken(CompiladorParser.PR, 0);
	};

	ID() {
	    return this.getToken(CompiladorParser.ID, 0);
	};

	ASIGNACION() {
	    return this.getToken(CompiladorParser.ASIGNACION, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMI() {
	    return this.getToken(CompiladorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitDefinido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.DefinidoContext = DefinidoContext;

class AsignacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_asignacion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AsignadoContext extends AsignacionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CompiladorParser.ID, 0);
	};

	ASIGNACION() {
	    return this.getToken(CompiladorParser.ASIGNACION, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMI() {
	    return this.getToken(CompiladorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitAsignado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.AsignadoContext = AsignadoContext;

class PrintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_print;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrintValorContext extends PrintContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IMPRESION() {
	    return this.getToken(CompiladorParser.IMPRESION, 0);
	};

	APARENTESIS() {
	    return this.getToken(CompiladorParser.APARENTESIS, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CompiladorParser.CPARENTESIS, 0);
	};

	SEMI() {
	    return this.getToken(CompiladorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitPrintValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.PrintValorContext = PrintValorContext;

class If_estructurasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_if_estructuras;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EstructuraIfContext extends If_estructurasContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	if_() {
	    return this.getTypedRuleContext(IfContext,0);
	};

	else_if = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Else_ifContext);
	    } else {
	        return this.getTypedRuleContext(Else_ifContext,i);
	    }
	};

	else_() {
	    return this.getTypedRuleContext(ElseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitEstructuraIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.EstructuraIfContext = EstructuraIfContext;

class IfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_if;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IfPuroContext extends IfContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF_BASICO() {
	    return this.getToken(CompiladorParser.IF_BASICO, 0);
	};

	APARENTESIS() {
	    return this.getToken(CompiladorParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CompiladorParser.CPARENTESIS, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	contenido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContenidoContext);
	    } else {
	        return this.getTypedRuleContext(ContenidoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitIfPuro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.IfPuroContext = IfPuroContext;

class Else_ifContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_else_if;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ElseIfPuroContext extends Else_ifContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ELSE_IF() {
	    return this.getToken(CompiladorParser.ELSE_IF, 0);
	};

	APARENTESIS() {
	    return this.getToken(CompiladorParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CompiladorParser.CPARENTESIS, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	contenido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContenidoContext);
	    } else {
	        return this.getTypedRuleContext(ContenidoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitElseIfPuro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.ElseIfPuroContext = ElseIfPuroContext;

class ElseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_else;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ElsePuroContext extends ElseContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ELSE() {
	    return this.getToken(CompiladorParser.ELSE, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	contenido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContenidoContext);
	    } else {
	        return this.getTypedRuleContext(ContenidoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitElsePuro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.ElsePuroContext = ElsePuroContext;

class CiclosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_ciclos;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ReglaWhileContext extends CiclosContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	while_() {
	    return this.getTypedRuleContext(WhileContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitReglaWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.ReglaWhileContext = ReglaWhileContext;

class ReglaDoWhileContext extends CiclosContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	doWhile() {
	    return this.getTypedRuleContext(DoWhileContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitReglaDoWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.ReglaDoWhileContext = ReglaDoWhileContext;

class ReglaForContext extends CiclosContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	for_() {
	    return this.getTypedRuleContext(ForContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitReglaFor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.ReglaForContext = ReglaForContext;

class WhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_while;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CicloWhileContext extends WhileContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	WHILE() {
	    return this.getToken(CompiladorParser.WHILE, 0);
	};

	APARENTESIS() {
	    return this.getToken(CompiladorParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CompiladorParser.CPARENTESIS, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	contenido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContenidoContext);
	    } else {
	        return this.getTypedRuleContext(ContenidoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitCicloWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.CicloWhileContext = CicloWhileContext;

class DoWhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_doWhile;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CicloDoWhileContext extends DoWhileContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DO() {
	    return this.getToken(CompiladorParser.DO, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	WHILE() {
	    return this.getToken(CompiladorParser.WHILE, 0);
	};

	APARENTESIS() {
	    return this.getToken(CompiladorParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CompiladorParser.CPARENTESIS, 0);
	};

	contenido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContenidoContext);
	    } else {
	        return this.getTypedRuleContext(ContenidoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitCicloDoWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.CicloDoWhileContext = CicloDoWhileContext;

class ForContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_for;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CicloForContext extends ForContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FOR() {
	    return this.getToken(CompiladorParser.FOR, 0);
	};

	APARENTESIS() {
	    return this.getToken(CompiladorParser.APARENTESIS, 0);
	};

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompiladorParser.SEMI);
	    } else {
	        return this.getToken(CompiladorParser.SEMI, i);
	    }
	};


	CPARENTESIS() {
	    return this.getToken(CompiladorParser.CPARENTESIS, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	declaracion() {
	    return this.getTypedRuleContext(DeclaracionContext,0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	incremento() {
	    return this.getTypedRuleContext(IncrementoContext,0);
	};

	contenido = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContenidoContext);
	    } else {
	        return this.getTypedRuleContext(ContenidoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitCicloFor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.CicloForContext = CicloForContext;

class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_valor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	APARENTESIS() {
	    return this.getToken(CompiladorParser.APARENTESIS, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(CompiladorParser.CPARENTESIS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.ParensContext = ParensContext;

class NumeroContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(CompiladorParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.NumeroContext = NumeroContext;

class MulDivContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	MUL() {
	    return this.getToken(CompiladorParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CompiladorParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.MulDivContext = MulDivContext;

class AddSubContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	ADD() {
	    return this.getToken(CompiladorParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CompiladorParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.AddSubContext = AddSubContext;

class ImplicitoContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	APARENTESIS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompiladorParser.APARENTESIS);
	    } else {
	        return this.getToken(CompiladorParser.APARENTESIS, i);
	    }
	};


	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	CPARENTESIS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompiladorParser.CPARENTESIS);
	    } else {
	        return this.getToken(CompiladorParser.CPARENTESIS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitImplicito(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.ImplicitoContext = ImplicitoContext;

class IdContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CompiladorParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.IdContext = IdContext;

class DecimalContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEC() {
	    return this.getToken(CompiladorParser.DEC, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitDecimal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.DecimalContext = DecimalContext;

class CadenasContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CADENA() {
	    return this.getToken(CompiladorParser.CADENA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitCadenas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.CadenasContext = CadenasContext;

class CondicionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_condiciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CondicionComparacionesContext extends CondicionesContext {

    constructor(parser, ctx) {
        super(parser);
        this.des = null;;
        super.copyFrom(ctx);
    }

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	MAYORQ() {
	    return this.getToken(CompiladorParser.MAYORQ, 0);
	};

	MENORQ() {
	    return this.getToken(CompiladorParser.MENORQ, 0);
	};

	MAYOR_IGUAL() {
	    return this.getToken(CompiladorParser.MAYOR_IGUAL, 0);
	};

	MENOR_IGUAL() {
	    return this.getToken(CompiladorParser.MENOR_IGUAL, 0);
	};

	IGUALDAD_DEBIL() {
	    return this.getToken(CompiladorParser.IGUALDAD_DEBIL, 0);
	};

	IGUALDAD_FUERTE() {
	    return this.getToken(CompiladorParser.IGUALDAD_FUERTE, 0);
	};

	DIF_DEBIL() {
	    return this.getToken(CompiladorParser.DIF_DEBIL, 0);
	};

	DIF_FUERTE() {
	    return this.getToken(CompiladorParser.DIF_FUERTE, 0);
	};

	APARENTESIS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompiladorParser.APARENTESIS);
	    } else {
	        return this.getToken(CompiladorParser.APARENTESIS, i);
	    }
	};


	CPARENTESIS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompiladorParser.CPARENTESIS);
	    } else {
	        return this.getToken(CompiladorParser.CPARENTESIS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitCondicionComparaciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.CondicionComparacionesContext = CondicionComparacionesContext;

class LogicasContext extends CondicionesContext {

    constructor(parser, ctx) {
        super(parser);
        this.des = null;;
        super.copyFrom(ctx);
    }

	condiciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CondicionesContext);
	    } else {
	        return this.getTypedRuleContext(CondicionesContext,i);
	    }
	};

	OR() {
	    return this.getToken(CompiladorParser.OR, 0);
	};

	AND() {
	    return this.getToken(CompiladorParser.AND, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitLogicas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.LogicasContext = LogicasContext;

class TrueOrFalseContext extends CondicionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	APARENTESIS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompiladorParser.APARENTESIS);
	    } else {
	        return this.getToken(CompiladorParser.APARENTESIS, i);
	    }
	};


	CPARENTESIS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CompiladorParser.CPARENTESIS);
	    } else {
	        return this.getToken(CompiladorParser.CPARENTESIS, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitTrueOrFalse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.TrueOrFalseContext = TrueOrFalseContext;

class IncrementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_incremento;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IncrementarContext extends IncrementoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CompiladorParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CompiladorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitIncrementar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.IncrementarContext = IncrementarContext;

class DecrementoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_decremento;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DecrementarContext extends DecrementoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CompiladorParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CompiladorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitDecrementar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.DecrementarContext = DecrementarContext;

class AbloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_abloque;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AuxScoopeDosContext extends AbloqueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ALLAVE() {
	    return this.getToken(CompiladorParser.ALLAVE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitAuxScoopeDos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.AuxScoopeDosContext = AuxScoopeDosContext;

class CbloqueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_cbloque;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AuxScoopeContext extends CbloqueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CLLAVE() {
	    return this.getToken(CompiladorParser.CLLAVE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitAuxScoope(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.AuxScoopeContext = AuxScoopeContext;


CompiladorParser.InitContext = InitContext; 
CompiladorParser.ContenidoContext = ContenidoContext; 
CompiladorParser.InicializacionContext = InicializacionContext; 
CompiladorParser.DeclaracionContext = DeclaracionContext; 
CompiladorParser.AsignacionContext = AsignacionContext; 
CompiladorParser.PrintContext = PrintContext; 
CompiladorParser.If_estructurasContext = If_estructurasContext; 
CompiladorParser.IfContext = IfContext; 
CompiladorParser.Else_ifContext = Else_ifContext; 
CompiladorParser.ElseContext = ElseContext; 
CompiladorParser.CiclosContext = CiclosContext; 
CompiladorParser.WhileContext = WhileContext; 
CompiladorParser.DoWhileContext = DoWhileContext; 
CompiladorParser.ForContext = ForContext; 
CompiladorParser.ValorContext = ValorContext; 
CompiladorParser.CondicionesContext = CondicionesContext; 
CompiladorParser.IncrementoContext = IncrementoContext; 
CompiladorParser.DecrementoContext = DecrementoContext; 
CompiladorParser.AbloqueContext = AbloqueContext; 
CompiladorParser.CbloqueContext = CbloqueContext; 
