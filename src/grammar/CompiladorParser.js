// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,36,201,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,
1,43,8,1,10,1,12,1,46,9,1,1,2,1,2,1,2,3,2,51,8,2,1,3,1,3,1,3,1,3,1,3,3,3,
58,8,3,1,4,1,4,1,4,1,4,3,4,64,8,4,1,5,1,5,1,5,1,5,1,5,3,5,71,8,5,1,6,1,6,
1,6,1,6,1,6,1,6,5,6,79,8,6,10,6,12,6,82,9,6,1,6,1,6,5,6,86,8,6,10,6,12,6,
89,9,6,1,6,1,6,1,6,1,6,1,6,3,6,96,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,145,8,12,1,12,1,12,1,12,1,12,1,12,
1,12,5,12,153,8,12,10,12,12,12,156,9,12,1,13,1,13,5,13,160,8,13,10,13,12,
13,163,9,13,1,13,1,13,5,13,167,8,13,10,13,12,13,170,9,13,1,13,5,13,173,8,
13,10,13,12,13,176,9,13,1,13,1,13,1,13,1,13,5,13,182,8,13,10,13,12,13,185,
9,13,3,13,187,8,13,1,13,1,13,1,13,5,13,192,8,13,10,13,12,13,195,9,13,1,14,
1,14,1,15,1,15,1,15,4,161,168,174,183,2,24,26,16,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,0,4,1,0,10,11,1,0,12,13,1,0,15,22,1,0,23,24,212,0,32,1,
0,0,0,2,44,1,0,0,0,4,47,1,0,0,0,6,52,1,0,0,0,8,59,1,0,0,0,10,65,1,0,0,0,
12,95,1,0,0,0,14,97,1,0,0,0,16,105,1,0,0,0,18,113,1,0,0,0,20,118,1,0,0,0,
22,120,1,0,0,0,24,144,1,0,0,0,26,186,1,0,0,0,28,196,1,0,0,0,30,198,1,0,0,
0,32,33,5,25,0,0,33,34,5,26,0,0,34,35,3,2,1,0,35,36,5,27,0,0,36,1,1,0,0,
0,37,43,3,4,2,0,38,43,3,6,3,0,39,43,3,8,4,0,40,43,3,10,5,0,41,43,3,12,6,
0,42,37,1,0,0,0,42,38,1,0,0,0,42,39,1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,
43,46,1,0,0,0,44,42,1,0,0,0,44,45,1,0,0,0,45,3,1,0,0,0,46,44,1,0,0,0,47,
48,5,1,0,0,48,50,5,31,0,0,49,51,5,35,0,0,50,49,1,0,0,0,50,51,1,0,0,0,51,
5,1,0,0,0,52,53,5,1,0,0,53,54,5,31,0,0,54,55,5,14,0,0,55,57,3,24,12,0,56,
58,5,35,0,0,57,56,1,0,0,0,57,58,1,0,0,0,58,7,1,0,0,0,59,60,5,31,0,0,60,61,
5,14,0,0,61,63,3,24,12,0,62,64,5,35,0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,9,
1,0,0,0,65,66,5,2,0,0,66,67,5,28,0,0,67,68,3,24,12,0,68,70,5,29,0,0,69,71,
5,35,0,0,70,69,1,0,0,0,70,71,1,0,0,0,71,11,1,0,0,0,72,96,3,14,7,0,73,74,
3,14,7,0,74,75,3,18,9,0,75,96,1,0,0,0,76,80,3,14,7,0,77,79,3,16,8,0,78,77,
1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,96,1,0,0,0,82,80,1,
0,0,0,83,87,3,14,7,0,84,86,3,16,8,0,85,84,1,0,0,0,86,89,1,0,0,0,87,85,1,
0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,91,3,18,9,0,91,96,1,0,
0,0,92,93,3,18,9,0,93,94,3,16,8,0,94,96,1,0,0,0,95,72,1,0,0,0,95,73,1,0,
0,0,95,76,1,0,0,0,95,83,1,0,0,0,95,92,1,0,0,0,96,13,1,0,0,0,97,98,5,3,0,
0,98,99,5,28,0,0,99,100,3,26,13,0,100,101,5,29,0,0,101,102,3,28,14,0,102,
103,3,2,1,0,103,104,3,30,15,0,104,15,1,0,0,0,105,106,5,5,0,0,106,107,5,28,
0,0,107,108,3,26,13,0,108,109,5,29,0,0,109,110,3,28,14,0,110,111,3,2,1,0,
111,112,3,30,15,0,112,17,1,0,0,0,113,114,5,4,0,0,114,115,3,28,14,0,115,116,
3,2,1,0,116,117,3,30,15,0,117,19,1,0,0,0,118,119,3,22,11,0,119,21,1,0,0,
0,120,121,5,6,0,0,121,122,5,28,0,0,122,123,3,26,13,0,123,124,5,29,0,0,124,
125,3,28,14,0,125,126,3,2,1,0,126,127,3,30,15,0,127,23,1,0,0,0,128,129,6,
12,-1,0,129,145,5,32,0,0,130,145,5,34,0,0,131,145,5,33,0,0,132,145,5,31,
0,0,133,134,5,28,0,0,134,135,3,24,12,0,135,136,5,29,0,0,136,145,1,0,0,0,
137,138,5,28,0,0,138,139,3,24,12,0,139,140,5,29,0,0,140,141,5,28,0,0,141,
142,3,24,12,0,142,143,5,29,0,0,143,145,1,0,0,0,144,128,1,0,0,0,144,130,1,
0,0,0,144,131,1,0,0,0,144,132,1,0,0,0,144,133,1,0,0,0,144,137,1,0,0,0,145,
154,1,0,0,0,146,147,10,8,0,0,147,148,7,0,0,0,148,153,3,24,12,9,149,150,10,
7,0,0,150,151,7,1,0,0,151,153,3,24,12,8,152,146,1,0,0,0,152,149,1,0,0,0,
153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,25,1,0,0,0,156,154,1,
0,0,0,157,161,6,13,-1,0,158,160,5,28,0,0,159,158,1,0,0,0,160,163,1,0,0,0,
161,162,1,0,0,0,161,159,1,0,0,0,162,164,1,0,0,0,163,161,1,0,0,0,164,168,
3,24,12,0,165,167,5,29,0,0,166,165,1,0,0,0,167,170,1,0,0,0,168,169,1,0,0,
0,168,166,1,0,0,0,169,187,1,0,0,0,170,168,1,0,0,0,171,173,5,28,0,0,172,171,
1,0,0,0,173,176,1,0,0,0,174,175,1,0,0,0,174,172,1,0,0,0,175,177,1,0,0,0,
176,174,1,0,0,0,177,178,3,24,12,0,178,179,7,2,0,0,179,183,3,24,12,0,180,
182,5,29,0,0,181,180,1,0,0,0,182,185,1,0,0,0,183,184,1,0,0,0,183,181,1,0,
0,0,184,187,1,0,0,0,185,183,1,0,0,0,186,157,1,0,0,0,186,174,1,0,0,0,187,
193,1,0,0,0,188,189,10,3,0,0,189,190,7,3,0,0,190,192,3,26,13,4,191,188,1,
0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,27,1,0,0,0,195,
193,1,0,0,0,196,197,5,26,0,0,197,29,1,0,0,0,198,199,5,27,0,0,199,31,1,0,
0,0,18,42,44,50,57,63,70,80,87,95,144,152,154,161,168,174,183,186,193];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, null, "'leak'", "'si'", "'else'", "'elfito'", 
                            "'while'", "'nc'", "'im'", "'jgl'", "'*'", "'/'", 
                            "'+'", "'-'", "'='", "'>'", "'<'", "'>='", "'<='", 
                            "'=='", "'==='", "'!='", "'!=='", "'||'", "'&&'", 
                            "'W7HLM'", "'{'", "'}'", "'('", "')'", "'!'", 
                            null, null, null, null, "';'" ];
    static symbolicNames = [ null, "PR", "IMPRESION", "IF_BASICO", "ELSE", 
                             "ELSE_IF", "WHILE", "INT", "FLOAT", "CHAR", 
                             "MUL", "DIV", "ADD", "SUB", "ASIGNACION", "MAYORQ", 
                             "MENORQ", "MAYOR_IGUAL", "MENOR_IGUAL", "IGUALDAD_DEBIL", 
                             "IGUALDAD_FUERTE", "DIF_DEBIL", "DIF_FUERTE", 
                             "OR", "AND", "TPG", "ALLAVE", "CLLAVE", "APARENTESIS", 
                             "CPARENTESIS", "AADMIRACION", "ID", "NUM", 
                             "CADENA", "DEC", "SEMI", "WS" ];
    static ruleNames = [ "init", "contenido", "inicializacion", "declaracion", 
                         "asignacion", "print", "if_estructuras", "if", 
                         "else_if", "else", "ciclos", "while", "valor", 
                         "condiciones", "abloque", "cbloque" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompiladorParser.ruleNames;
        this.literalNames = CompiladorParser.literalNames;
        this.symbolicNames = CompiladorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 12:
    	    		return this.valor_sempred(localctx, predIndex);
    	case 13:
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
	        this.state = 32;
	        this.match(CompiladorParser.TPG);
	        this.state = 33;
	        this.match(CompiladorParser.ALLAVE);
	        this.state = 34;
	        this.contenido();
	        this.state = 35;
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
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147483678) !== 0)) {
	            this.state = 42;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 37;
	                this.inicializacion();
	                break;

	            case 2:
	                this.state = 38;
	                this.declaracion();
	                break;

	            case 3:
	                this.state = 39;
	                this.asignacion();
	                break;

	            case 4:
	                this.state = 40;
	                this.print();
	                break;

	            case 5:
	                this.state = 41;
	                this.if_estructuras();
	                break;

	            }
	            this.state = 46;
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
	        this.state = 47;
	        this.match(CompiladorParser.PR);
	        this.state = 48;
	        this.match(CompiladorParser.ID);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 49;
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
	        this.state = 52;
	        this.match(CompiladorParser.PR);
	        this.state = 53;
	        this.match(CompiladorParser.ID);
	        this.state = 54;
	        this.match(CompiladorParser.ASIGNACION);
	        this.state = 55;
	        this.valor(0);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 56;
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
	        this.state = 59;
	        this.match(CompiladorParser.ID);
	        this.state = 60;
	        this.match(CompiladorParser.ASIGNACION);
	        this.state = 61;
	        this.valor(0);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
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



	print() {
	    let localctx = new PrintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CompiladorParser.RULE_print);
	    var _la = 0;
	    try {
	        localctx = new PrintValorContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(CompiladorParser.IMPRESION);
	        this.state = 66;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 67;
	        this.valor(0);
	        this.state = 68;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
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



	if_estructuras() {
	    let localctx = new If_estructurasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CompiladorParser.RULE_if_estructuras);
	    var _la = 0;
	    try {
	        this.state = 95;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IfTradicionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 72;
	            this.if_();
	            break;

	        case 2:
	            localctx = new IfConElseContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.if_();
	            this.state = 74;
	            this.else_();
	            break;

	        case 3:
	            localctx = new IfConElseIfContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 76;
	            this.if_();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 77;
	                this.else_if();
	                this.state = 82;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 4:
	            localctx = new IfElseIf_ElseContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 83;
	            this.if_();
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 84;
	                this.else_if();
	                this.state = 89;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 90;
	            this.else_();
	            break;

	        case 5:
	            localctx = new GenerarErrorContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 92;
	            this.else_();
	            this.state = 93;
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
	        this.state = 97;
	        this.match(CompiladorParser.IF_BASICO);
	        this.state = 98;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 99;
	        this.condiciones(0);
	        this.state = 100;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 101;
	        this.abloque();
	        this.state = 102;
	        this.contenido();
	        this.state = 103;
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
	        this.state = 105;
	        this.match(CompiladorParser.ELSE_IF);
	        this.state = 106;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 107;
	        this.condiciones(0);
	        this.state = 108;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 109;
	        this.abloque();
	        this.state = 110;
	        this.contenido();
	        this.state = 111;
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
	        this.state = 113;
	        this.match(CompiladorParser.ELSE);
	        this.state = 114;
	        this.abloque();
	        this.state = 115;
	        this.contenido();
	        this.state = 116;
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
	        localctx = new ReglaWhileContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 118;
	        this.while_();
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
	        this.state = 120;
	        this.match(CompiladorParser.WHILE);
	        this.state = 121;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 122;
	        this.condiciones(0);
	        this.state = 123;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 124;
	        this.abloque();
	        this.state = 125;
	        this.contenido();
	        this.state = 126;
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
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, CompiladorParser.RULE_valor, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 129;
	            this.match(CompiladorParser.NUM);
	            break;

	        case 2:
	            localctx = new DecimalContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 130;
	            this.match(CompiladorParser.DEC);
	            break;

	        case 3:
	            localctx = new CadenasContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 131;
	            this.match(CompiladorParser.CADENA);
	            break;

	        case 4:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 132;
	            this.match(CompiladorParser.ID);
	            break;

	        case 5:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 133;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 134;
	            this.valor(0);
	            this.state = 135;
	            this.match(CompiladorParser.CPARENTESIS);
	            break;

	        case 6:
	            localctx = new ImplicitoContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 137;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 138;
	            this.valor(0);
	            this.state = 139;
	            this.match(CompiladorParser.CPARENTESIS);
	            this.state = 140;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 141;
	            this.valor(0);
	            this.state = 142;
	            this.match(CompiladorParser.CPARENTESIS);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 154;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 152;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 146;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 147;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===10 || _la===11)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 148;
	                    this.valor(9);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 149;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 150;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===12 || _la===13)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 151;
	                    this.valor(8);
	                    break;

	                } 
	            }
	            this.state = 156;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
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
	    const _startState = 26;
	    this.enterRecursionRule(localctx, 26, CompiladorParser.RULE_condiciones, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TrueOrFalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 161;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 158;
	                    this.match(CompiladorParser.APARENTESIS); 
	                }
	                this.state = 163;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	            }

	            this.state = 164;
	            this.valor(0);
	            this.state = 168;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 165;
	                    this.match(CompiladorParser.CPARENTESIS); 
	                }
	                this.state = 170;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	            }

	            break;

	        case 2:
	            localctx = new CondicionComparacionesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 174;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 171;
	                    this.match(CompiladorParser.APARENTESIS); 
	                }
	                this.state = 176;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            this.state = 177;
	            this.valor(0);
	            this.state = 178;
	            localctx.des = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8355840) !== 0))) {
	                localctx.des = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 179;
	            this.valor(0);
	            this.state = 183;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	            while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1+1) {
	                    this.state = 180;
	                    this.match(CompiladorParser.CPARENTESIS); 
	                }
	                this.state = 185;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	            }

	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 193;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicasContext(this, new CondicionesContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_condiciones);
	                this.state = 188;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 189;
	                localctx.des = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===23 || _la===24)) {
	                    localctx.des = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 190;
	                this.condiciones(4); 
	            }
	            this.state = 195;
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



	abloque() {
	    let localctx = new AbloqueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, CompiladorParser.RULE_abloque);
	    try {
	        localctx = new AuxScoopeDosContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
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
	    this.enterRule(localctx, 30, CompiladorParser.RULE_cbloque);
	    try {
	        localctx = new AuxScoopeContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
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
CompiladorParser.PR = 1;
CompiladorParser.IMPRESION = 2;
CompiladorParser.IF_BASICO = 3;
CompiladorParser.ELSE = 4;
CompiladorParser.ELSE_IF = 5;
CompiladorParser.WHILE = 6;
CompiladorParser.INT = 7;
CompiladorParser.FLOAT = 8;
CompiladorParser.CHAR = 9;
CompiladorParser.MUL = 10;
CompiladorParser.DIV = 11;
CompiladorParser.ADD = 12;
CompiladorParser.SUB = 13;
CompiladorParser.ASIGNACION = 14;
CompiladorParser.MAYORQ = 15;
CompiladorParser.MENORQ = 16;
CompiladorParser.MAYOR_IGUAL = 17;
CompiladorParser.MENOR_IGUAL = 18;
CompiladorParser.IGUALDAD_DEBIL = 19;
CompiladorParser.IGUALDAD_FUERTE = 20;
CompiladorParser.DIF_DEBIL = 21;
CompiladorParser.DIF_FUERTE = 22;
CompiladorParser.OR = 23;
CompiladorParser.AND = 24;
CompiladorParser.TPG = 25;
CompiladorParser.ALLAVE = 26;
CompiladorParser.CLLAVE = 27;
CompiladorParser.APARENTESIS = 28;
CompiladorParser.CPARENTESIS = 29;
CompiladorParser.AADMIRACION = 30;
CompiladorParser.ID = 31;
CompiladorParser.NUM = 32;
CompiladorParser.CADENA = 33;
CompiladorParser.DEC = 34;
CompiladorParser.SEMI = 35;
CompiladorParser.WS = 36;

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
CompiladorParser.RULE_valor = 12;
CompiladorParser.RULE_condiciones = 13;
CompiladorParser.RULE_abloque = 14;
CompiladorParser.RULE_cbloque = 15;

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
CompiladorParser.ValorContext = ValorContext; 
CompiladorParser.CondicionesContext = CondicionesContext; 
CompiladorParser.AbloqueContext = AbloqueContext; 
CompiladorParser.CbloqueContext = CbloqueContext; 
