// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,39,221,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,1,0,1,0,1,0,1,0,1,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,49,8,1,10,1,12,1,52,9,1,1,2,1,2,1,2,3,2,57,
8,2,1,3,1,3,1,3,1,3,1,3,3,3,64,8,3,1,4,1,4,1,4,1,4,3,4,70,8,4,1,5,1,5,1,
5,1,5,1,5,3,5,77,8,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,85,8,6,10,6,12,6,88,9,6,
1,6,1,6,5,6,92,8,6,10,6,12,6,95,9,6,1,6,1,6,1,6,1,6,1,6,3,6,102,8,6,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,
1,9,1,9,1,10,1,10,3,10,127,8,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,162,8,13,1,13,
1,13,1,13,1,13,1,13,1,13,5,13,170,8,13,10,13,12,13,173,9,13,1,14,1,14,5,
14,177,8,14,10,14,12,14,180,9,14,1,14,1,14,5,14,184,8,14,10,14,12,14,187,
9,14,1,14,5,14,190,8,14,10,14,12,14,193,9,14,1,14,1,14,1,14,1,14,5,14,199,
8,14,10,14,12,14,202,9,14,3,14,204,8,14,1,14,1,14,1,14,5,14,209,8,14,10,
14,12,14,212,9,14,1,15,1,15,1,15,1,16,1,16,1,17,1,17,1,17,4,178,185,191,
200,2,26,28,18,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,0,4,1,0,
13,14,1,0,15,16,1,0,18,25,1,0,26,27,233,0,36,1,0,0,0,2,50,1,0,0,0,4,53,1,
0,0,0,6,58,1,0,0,0,8,65,1,0,0,0,10,71,1,0,0,0,12,101,1,0,0,0,14,103,1,0,
0,0,16,111,1,0,0,0,18,119,1,0,0,0,20,126,1,0,0,0,22,128,1,0,0,0,24,136,1,
0,0,0,26,161,1,0,0,0,28,203,1,0,0,0,30,213,1,0,0,0,32,216,1,0,0,0,34,218,
1,0,0,0,36,37,5,28,0,0,37,38,5,29,0,0,38,39,3,2,1,0,39,40,5,30,0,0,40,1,
1,0,0,0,41,49,3,4,2,0,42,49,3,6,3,0,43,49,3,8,4,0,44,49,3,10,5,0,45,49,3,
12,6,0,46,49,3,20,10,0,47,49,3,30,15,0,48,41,1,0,0,0,48,42,1,0,0,0,48,43,
1,0,0,0,48,44,1,0,0,0,48,45,1,0,0,0,48,46,1,0,0,0,48,47,1,0,0,0,49,52,1,
0,0,0,50,48,1,0,0,0,50,51,1,0,0,0,51,3,1,0,0,0,52,50,1,0,0,0,53,54,5,2,0,
0,54,56,5,34,0,0,55,57,5,38,0,0,56,55,1,0,0,0,56,57,1,0,0,0,57,5,1,0,0,0,
58,59,5,2,0,0,59,60,5,34,0,0,60,61,5,17,0,0,61,63,3,26,13,0,62,64,5,38,0,
0,63,62,1,0,0,0,63,64,1,0,0,0,64,7,1,0,0,0,65,66,5,34,0,0,66,67,5,17,0,0,
67,69,3,26,13,0,68,70,5,38,0,0,69,68,1,0,0,0,69,70,1,0,0,0,70,9,1,0,0,0,
71,72,5,3,0,0,72,73,5,31,0,0,73,74,3,26,13,0,74,76,5,32,0,0,75,77,5,38,0,
0,76,75,1,0,0,0,76,77,1,0,0,0,77,11,1,0,0,0,78,102,3,14,7,0,79,80,3,14,7,
0,80,81,3,18,9,0,81,102,1,0,0,0,82,86,3,14,7,0,83,85,3,16,8,0,84,83,1,0,
0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,102,1,0,0,0,88,86,1,0,0,
0,89,93,3,14,7,0,90,92,3,16,8,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,
0,93,94,1,0,0,0,94,96,1,0,0,0,95,93,1,0,0,0,96,97,3,18,9,0,97,102,1,0,0,
0,98,99,3,18,9,0,99,100,3,16,8,0,100,102,1,0,0,0,101,78,1,0,0,0,101,79,1,
0,0,0,101,82,1,0,0,0,101,89,1,0,0,0,101,98,1,0,0,0,102,13,1,0,0,0,103,104,
5,4,0,0,104,105,5,31,0,0,105,106,3,28,14,0,106,107,5,32,0,0,107,108,3,32,
16,0,108,109,3,2,1,0,109,110,3,34,17,0,110,15,1,0,0,0,111,112,5,6,0,0,112,
113,5,31,0,0,113,114,3,28,14,0,114,115,5,32,0,0,115,116,3,32,16,0,116,117,
3,2,1,0,117,118,3,34,17,0,118,17,1,0,0,0,119,120,5,5,0,0,120,121,3,32,16,
0,121,122,3,2,1,0,122,123,3,34,17,0,123,19,1,0,0,0,124,127,3,22,11,0,125,
127,3,24,12,0,126,124,1,0,0,0,126,125,1,0,0,0,127,21,1,0,0,0,128,129,5,8,
0,0,129,130,5,31,0,0,130,131,3,28,14,0,131,132,5,32,0,0,132,133,3,32,16,
0,133,134,3,2,1,0,134,135,3,34,17,0,135,23,1,0,0,0,136,137,5,7,0,0,137,138,
3,32,16,0,138,139,3,2,1,0,139,140,3,34,17,0,140,141,5,8,0,0,141,142,5,31,
0,0,142,143,3,28,14,0,143,144,5,32,0,0,144,25,1,0,0,0,145,146,6,13,-1,0,
146,162,5,35,0,0,147,162,5,37,0,0,148,162,5,36,0,0,149,162,5,34,0,0,150,
151,5,31,0,0,151,152,3,26,13,0,152,153,5,32,0,0,153,162,1,0,0,0,154,155,
5,31,0,0,155,156,3,26,13,0,156,157,5,32,0,0,157,158,5,31,0,0,158,159,3,26,
13,0,159,160,5,32,0,0,160,162,1,0,0,0,161,145,1,0,0,0,161,147,1,0,0,0,161,
148,1,0,0,0,161,149,1,0,0,0,161,150,1,0,0,0,161,154,1,0,0,0,162,171,1,0,
0,0,163,164,10,8,0,0,164,165,7,0,0,0,165,170,3,26,13,9,166,167,10,7,0,0,
167,168,7,1,0,0,168,170,3,26,13,8,169,163,1,0,0,0,169,166,1,0,0,0,170,173,
1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,27,1,0,0,0,173,171,1,0,0,0,174,
178,6,14,-1,0,175,177,5,31,0,0,176,175,1,0,0,0,177,180,1,0,0,0,178,179,1,
0,0,0,178,176,1,0,0,0,179,181,1,0,0,0,180,178,1,0,0,0,181,185,3,26,13,0,
182,184,5,32,0,0,183,182,1,0,0,0,184,187,1,0,0,0,185,186,1,0,0,0,185,183,
1,0,0,0,186,204,1,0,0,0,187,185,1,0,0,0,188,190,5,31,0,0,189,188,1,0,0,0,
190,193,1,0,0,0,191,192,1,0,0,0,191,189,1,0,0,0,192,194,1,0,0,0,193,191,
1,0,0,0,194,195,3,26,13,0,195,196,7,2,0,0,196,200,3,26,13,0,197,199,5,32,
0,0,198,197,1,0,0,0,199,202,1,0,0,0,200,201,1,0,0,0,200,198,1,0,0,0,201,
204,1,0,0,0,202,200,1,0,0,0,203,174,1,0,0,0,203,191,1,0,0,0,204,210,1,0,
0,0,205,206,10,3,0,0,206,207,7,3,0,0,207,209,3,28,14,4,208,205,1,0,0,0,209,
212,1,0,0,0,210,208,1,0,0,0,210,211,1,0,0,0,211,29,1,0,0,0,212,210,1,0,0,
0,213,214,5,34,0,0,214,215,5,1,0,0,215,31,1,0,0,0,216,217,5,29,0,0,217,33,
1,0,0,0,218,219,5,30,0,0,219,35,1,0,0,0,19,48,50,56,63,69,76,86,93,101,126,
161,169,171,178,185,191,200,203,210];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, "'++'", null, "'leak'", "'si'", "'else'", 
                            "'elfito'", "'do'", "'while'", "'for'", "'nc'", 
                            "'im'", "'jgl'", "'*'", "'/'", "'+'", "'-'", 
                            "'='", "'>'", "'<'", "'>='", "'<='", "'=='", 
                            "'==='", "'!='", "'!=='", "'||'", "'&&'", "'W7HLM'", 
                            "'{'", "'}'", "'('", "')'", "'!'", null, null, 
                            null, null, "';'" ];
    static symbolicNames = [ null, null, "PR", "IMPRESION", "IF_BASICO", 
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
                         "valor", "condiciones", "incremento", "abloque", 
                         "cbloque" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompiladorParser.ruleNames;
        this.literalNames = CompiladorParser.literalNames;
        this.symbolicNames = CompiladorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 13:
    	    		return this.valor_sempred(localctx, predIndex);
    	case 14:
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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(CompiladorParser.TPG);
	        this.state = 37;
	        this.match(CompiladorParser.ALLAVE);
	        this.state = 38;
	        this.contenido();
	        this.state = 39;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 444) !== 0) || _la===34) {
	            this.state = 48;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 41;
	                this.inicializacion();
	                break;

	            case 2:
	                this.state = 42;
	                this.declaracion();
	                break;

	            case 3:
	                this.state = 43;
	                this.asignacion();
	                break;

	            case 4:
	                this.state = 44;
	                this.print();
	                break;

	            case 5:
	                this.state = 45;
	                this.if_estructuras();
	                break;

	            case 6:
	                this.state = 46;
	                this.ciclos();
	                break;

	            case 7:
	                this.state = 47;
	                this.incremento();
	                break;

	            }
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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
	        this.state = 53;
	        this.match(CompiladorParser.PR);
	        this.state = 54;
	        this.match(CompiladorParser.ID);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 55;
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
	    var _la = 0;
	    try {
	        localctx = new DefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this.match(CompiladorParser.PR);
	        this.state = 59;
	        this.match(CompiladorParser.ID);
	        this.state = 60;
	        this.match(CompiladorParser.ASIGNACION);
	        this.state = 61;
	        this.valor(0);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
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



	asignacion() {
	    let localctx = new AsignacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CompiladorParser.RULE_asignacion);
	    var _la = 0;
	    try {
	        localctx = new AsignadoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(CompiladorParser.ID);
	        this.state = 66;
	        this.match(CompiladorParser.ASIGNACION);
	        this.state = 67;
	        this.valor(0);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 68;
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
	        this.state = 71;
	        this.match(CompiladorParser.IMPRESION);
	        this.state = 72;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 73;
	        this.valor(0);
	        this.state = 74;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
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



	if_estructuras() {
	    let localctx = new If_estructurasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CompiladorParser.RULE_if_estructuras);
	    var _la = 0;
	    try {
	        this.state = 101;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IfTradicionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.if_();
	            break;

	        case 2:
	            localctx = new IfConElseContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79;
	            this.if_();
	            this.state = 80;
	            this.else_();
	            break;

	        case 3:
	            localctx = new IfConElseIfContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 82;
	            this.if_();
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 83;
	                this.else_if();
	                this.state = 88;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 4:
	            localctx = new IfElseIf_ElseContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 89;
	            this.if_();
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 90;
	                this.else_if();
	                this.state = 95;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 96;
	            this.else_();
	            break;

	        case 5:
	            localctx = new GenerarErrorContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 98;
	            this.else_();
	            this.state = 99;
	            this.else_if();
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



	if_() {
	    let localctx = new IfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CompiladorParser.RULE_if);
	    try {
	        localctx = new IfPuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 103;
	        this.match(CompiladorParser.IF_BASICO);
	        this.state = 104;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 105;
	        this.condiciones(0);
	        this.state = 106;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 107;
	        this.abloque();
	        this.state = 108;
	        this.contenido();
	        this.state = 109;
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
	    try {
	        localctx = new ElseIfPuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(CompiladorParser.ELSE_IF);
	        this.state = 112;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 113;
	        this.condiciones(0);
	        this.state = 114;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 115;
	        this.abloque();
	        this.state = 116;
	        this.contenido();
	        this.state = 117;
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
	    try {
	        localctx = new ElsePuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(CompiladorParser.ELSE);
	        this.state = 120;
	        this.abloque();
	        this.state = 121;
	        this.contenido();
	        this.state = 122;
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
	        this.state = 126;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            localctx = new ReglaWhileContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.while_();
	            break;
	        case 7:
	            localctx = new ReglaDoWhileContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 125;
	            this.doWhile();
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
	    try {
	        localctx = new CicloWhileContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(CompiladorParser.WHILE);
	        this.state = 129;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 130;
	        this.condiciones(0);
	        this.state = 131;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 132;
	        this.abloque();
	        this.state = 133;
	        this.contenido();
	        this.state = 134;
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
	    try {
	        localctx = new CicloDoWhileContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(CompiladorParser.DO);
	        this.state = 137;
	        this.abloque();
	        this.state = 138;
	        this.contenido();
	        this.state = 139;
	        this.cbloque();
	        this.state = 140;
	        this.match(CompiladorParser.WHILE);
	        this.state = 141;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 142;
	        this.condiciones(0);
	        this.state = 143;
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


	valor(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ValorContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, CompiladorParser.RULE_valor, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 146;
	            this.match(CompiladorParser.NUM);
	            break;

	        case 2:
	            localctx = new DecimalContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 147;
	            this.match(CompiladorParser.DEC);
	            break;

	        case 3:
	            localctx = new CadenasContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 148;
	            this.match(CompiladorParser.CADENA);
	            break;

	        case 4:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 149;
	            this.match(CompiladorParser.ID);
	            break;

	        case 5:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 150;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 151;
	            this.valor(0);
	            this.state = 152;
	            this.match(CompiladorParser.CPARENTESIS);
	            break;

	        case 6:
	            localctx = new ImplicitoContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 154;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 155;
	            this.valor(0);
	            this.state = 156;
	            this.match(CompiladorParser.CPARENTESIS);
	            this.state = 157;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 158;
	            this.valor(0);
	            this.state = 159;
	            this.match(CompiladorParser.CPARENTESIS);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 171;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 169;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 163;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 164;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===13 || _la===14)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 165;
	                    this.valor(9);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 166;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 167;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===15 || _la===16)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 168;
	                    this.valor(8);
	                    break;

	                } 
	            }
	            this.state = 173;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, CompiladorParser.RULE_condiciones, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TrueOrFalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 178;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 175;
	                    this.match(CompiladorParser.APARENTESIS); 
	                }
	                this.state = 180;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	            }

	            this.state = 181;
	            this.valor(0);
	            this.state = 185;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 182;
	                    this.match(CompiladorParser.CPARENTESIS); 
	                }
	                this.state = 187;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            break;

	        case 2:
	            localctx = new CondicionComparacionesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 191;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 188;
	                    this.match(CompiladorParser.APARENTESIS); 
	                }
	                this.state = 193;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	            }

	            this.state = 194;
	            this.valor(0);
	            this.state = 195;
	            localctx.des = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 66846720) !== 0))) {
	                localctx.des = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 196;
	            this.valor(0);
	            this.state = 200;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 197;
	                    this.match(CompiladorParser.CPARENTESIS); 
	                }
	                this.state = 202;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	            }

	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 210;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicasContext(this, new CondicionesContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_condiciones);
	                this.state = 205;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 206;
	                localctx.des = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===26 || _la===27)) {
	                    localctx.des = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 207;
	                this.condiciones(4); 
	            }
	            this.state = 212;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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
	    this.enterRule(localctx, 30, CompiladorParser.RULE_incremento);
	    try {
	        localctx = new IncrementarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 213;
	        this.match(CompiladorParser.ID);
	        this.state = 214;
	        this.match(CompiladorParser.T__0);
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
	    this.enterRule(localctx, 32, CompiladorParser.RULE_abloque);
	    try {
	        localctx = new AuxScoopeDosContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
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
	    this.enterRule(localctx, 34, CompiladorParser.RULE_cbloque);
	    try {
	        localctx = new AuxScoopeContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
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
CompiladorParser.PR = 2;
CompiladorParser.IMPRESION = 3;
CompiladorParser.IF_BASICO = 4;
CompiladorParser.ELSE = 5;
CompiladorParser.ELSE_IF = 6;
CompiladorParser.DO = 7;
CompiladorParser.WHILE = 8;
CompiladorParser.FOR = 9;
CompiladorParser.INT = 10;
CompiladorParser.FLOAT = 11;
CompiladorParser.CHAR = 12;
CompiladorParser.MUL = 13;
CompiladorParser.DIV = 14;
CompiladorParser.ADD = 15;
CompiladorParser.SUB = 16;
CompiladorParser.ASIGNACION = 17;
CompiladorParser.MAYORQ = 18;
CompiladorParser.MENORQ = 19;
CompiladorParser.MAYOR_IGUAL = 20;
CompiladorParser.MENOR_IGUAL = 21;
CompiladorParser.IGUALDAD_DEBIL = 22;
CompiladorParser.IGUALDAD_FUERTE = 23;
CompiladorParser.DIF_DEBIL = 24;
CompiladorParser.DIF_FUERTE = 25;
CompiladorParser.OR = 26;
CompiladorParser.AND = 27;
CompiladorParser.TPG = 28;
CompiladorParser.ALLAVE = 29;
CompiladorParser.CLLAVE = 30;
CompiladorParser.APARENTESIS = 31;
CompiladorParser.CPARENTESIS = 32;
CompiladorParser.AADMIRACION = 33;
CompiladorParser.ID = 34;
CompiladorParser.NUM = 35;
CompiladorParser.CADENA = 36;
CompiladorParser.DEC = 37;
CompiladorParser.SEMI = 38;
CompiladorParser.WS = 39;

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
CompiladorParser.RULE_valor = 13;
CompiladorParser.RULE_condiciones = 14;
CompiladorParser.RULE_incremento = 15;
CompiladorParser.RULE_abloque = 16;
CompiladorParser.RULE_cbloque = 17;

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

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
	};

	CLLAVE() {
	    return this.getToken(CompiladorParser.CLLAVE, 0);
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

	inicializacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InicializacionContext);
	    } else {
	        return this.getTypedRuleContext(InicializacionContext,i);
	    }
	};

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	asignacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AsignacionContext);
	    } else {
	        return this.getTypedRuleContext(AsignacionContext,i);
	    }
	};

	print = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrintContext);
	    } else {
	        return this.getTypedRuleContext(PrintContext,i);
	    }
	};

	if_estructuras = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(If_estructurasContext);
	    } else {
	        return this.getTypedRuleContext(If_estructurasContext,i);
	    }
	};

	ciclos = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CiclosContext);
	    } else {
	        return this.getTypedRuleContext(CiclosContext,i);
	    }
	};

	incremento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IncrementoContext);
	    } else {
	        return this.getTypedRuleContext(IncrementoContext,i);
	    }
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


class IfConElseIfContext extends If_estructurasContext {

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

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitIfConElseIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.IfConElseIfContext = IfConElseIfContext;

class GenerarErrorContext extends If_estructurasContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	else_() {
	    return this.getTypedRuleContext(ElseContext,0);
	};

	else_if() {
	    return this.getTypedRuleContext(Else_ifContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitGenerarError(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.GenerarErrorContext = GenerarErrorContext;

class IfTradicionalContext extends If_estructurasContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	if_() {
	    return this.getTypedRuleContext(IfContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitIfTradicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.IfTradicionalContext = IfTradicionalContext;

class IfConElseContext extends If_estructurasContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	if_() {
	    return this.getTypedRuleContext(IfContext,0);
	};

	else_() {
	    return this.getTypedRuleContext(ElseContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitIfConElse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.IfConElseContext = IfConElseContext;

class IfElseIf_ElseContext extends If_estructurasContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	if_() {
	    return this.getTypedRuleContext(IfContext,0);
	};

	else_() {
	    return this.getTypedRuleContext(ElseContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitIfElseIf_Else(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.IfElseIf_ElseContext = IfElseIf_ElseContext;

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

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
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

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
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

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
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

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
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

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
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

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitCicloDoWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.CicloDoWhileContext = CicloDoWhileContext;

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

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitIncrementar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.IncrementarContext = IncrementarContext;

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
CompiladorParser.ValorContext = ValorContext; 
CompiladorParser.CondicionesContext = CondicionesContext; 
CompiladorParser.IncrementoContext = IncrementoContext; 
CompiladorParser.AbloqueContext = AbloqueContext; 
CompiladorParser.CbloqueContext = CbloqueContext; 
