// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,35,164,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,5,1,39,8,1,10,1,12,1,42,
9,1,1,2,1,2,1,2,3,2,47,8,2,1,3,1,3,1,3,1,3,1,3,3,3,54,8,3,1,4,1,4,1,4,1,
4,3,4,60,8,4,1,5,1,5,1,5,1,5,1,5,3,5,67,8,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,
75,8,6,10,6,12,6,78,9,6,1,6,1,6,5,6,82,8,6,10,6,12,6,85,9,6,1,6,1,6,1,6,
1,6,1,6,3,6,92,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,131,8,10,1,10,1,10,1,10,1,10,
1,10,1,10,5,10,139,8,10,10,10,12,10,142,9,10,1,11,1,11,1,11,1,11,1,11,1,
11,3,11,150,8,11,1,11,1,11,1,11,5,11,155,8,11,10,11,12,11,158,9,11,1,12,
1,12,1,13,1,13,1,13,0,2,20,22,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,
4,1,0,9,10,1,0,11,12,1,0,14,21,1,0,22,23,173,0,28,1,0,0,0,2,40,1,0,0,0,4,
43,1,0,0,0,6,48,1,0,0,0,8,55,1,0,0,0,10,61,1,0,0,0,12,91,1,0,0,0,14,93,1,
0,0,0,16,101,1,0,0,0,18,109,1,0,0,0,20,130,1,0,0,0,22,149,1,0,0,0,24,159,
1,0,0,0,26,161,1,0,0,0,28,29,5,24,0,0,29,30,5,25,0,0,30,31,3,2,1,0,31,32,
5,26,0,0,32,1,1,0,0,0,33,39,3,4,2,0,34,39,3,6,3,0,35,39,3,8,4,0,36,39,3,
10,5,0,37,39,3,12,6,0,38,33,1,0,0,0,38,34,1,0,0,0,38,35,1,0,0,0,38,36,1,
0,0,0,38,37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,3,1,0,0,
0,42,40,1,0,0,0,43,44,5,1,0,0,44,46,5,30,0,0,45,47,5,34,0,0,46,45,1,0,0,
0,46,47,1,0,0,0,47,5,1,0,0,0,48,49,5,1,0,0,49,50,5,30,0,0,50,51,5,13,0,0,
51,53,3,20,10,0,52,54,5,34,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,7,1,0,0,0,
55,56,5,30,0,0,56,57,5,13,0,0,57,59,3,20,10,0,58,60,5,34,0,0,59,58,1,0,0,
0,59,60,1,0,0,0,60,9,1,0,0,0,61,62,5,2,0,0,62,63,5,27,0,0,63,64,3,20,10,
0,64,66,5,28,0,0,65,67,5,34,0,0,66,65,1,0,0,0,66,67,1,0,0,0,67,11,1,0,0,
0,68,92,3,14,7,0,69,70,3,14,7,0,70,71,3,18,9,0,71,92,1,0,0,0,72,76,3,14,
7,0,73,75,3,16,8,0,74,73,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,
0,77,92,1,0,0,0,78,76,1,0,0,0,79,83,3,14,7,0,80,82,3,16,8,0,81,80,1,0,0,
0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,0,0,85,83,1,0,0,0,
86,87,3,18,9,0,87,92,1,0,0,0,88,89,3,18,9,0,89,90,3,16,8,0,90,92,1,0,0,0,
91,68,1,0,0,0,91,69,1,0,0,0,91,72,1,0,0,0,91,79,1,0,0,0,91,88,1,0,0,0,92,
13,1,0,0,0,93,94,5,3,0,0,94,95,5,27,0,0,95,96,3,22,11,0,96,97,5,28,0,0,97,
98,3,24,12,0,98,99,3,2,1,0,99,100,3,26,13,0,100,15,1,0,0,0,101,102,5,5,0,
0,102,103,5,27,0,0,103,104,3,22,11,0,104,105,5,28,0,0,105,106,3,24,12,0,
106,107,3,2,1,0,107,108,3,26,13,0,108,17,1,0,0,0,109,110,5,4,0,0,110,111,
3,24,12,0,111,112,3,2,1,0,112,113,3,26,13,0,113,19,1,0,0,0,114,115,6,10,
-1,0,115,131,5,31,0,0,116,131,5,33,0,0,117,131,5,32,0,0,118,131,5,30,0,0,
119,120,5,27,0,0,120,121,3,20,10,0,121,122,5,28,0,0,122,131,1,0,0,0,123,
124,5,27,0,0,124,125,3,20,10,0,125,126,5,28,0,0,126,127,5,27,0,0,127,128,
3,20,10,0,128,129,5,28,0,0,129,131,1,0,0,0,130,114,1,0,0,0,130,116,1,0,0,
0,130,117,1,0,0,0,130,118,1,0,0,0,130,119,1,0,0,0,130,123,1,0,0,0,131,140,
1,0,0,0,132,133,10,8,0,0,133,134,7,0,0,0,134,139,3,20,10,9,135,136,10,7,
0,0,136,137,7,1,0,0,137,139,3,20,10,8,138,132,1,0,0,0,138,135,1,0,0,0,139,
142,1,0,0,0,140,138,1,0,0,0,140,141,1,0,0,0,141,21,1,0,0,0,142,140,1,0,0,
0,143,144,6,11,-1,0,144,150,3,20,10,0,145,146,3,20,10,0,146,147,7,2,0,0,
147,148,3,20,10,0,148,150,1,0,0,0,149,143,1,0,0,0,149,145,1,0,0,0,150,156,
1,0,0,0,151,152,10,3,0,0,152,153,7,3,0,0,153,155,3,22,11,4,154,151,1,0,0,
0,155,158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,23,1,0,0,0,158,156,
1,0,0,0,159,160,5,25,0,0,160,25,1,0,0,0,161,162,5,26,0,0,162,27,1,0,0,0,
14,38,40,46,53,59,66,76,83,91,130,138,140,149,156];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, null, "'leak'", "'if'", "'else'", "'else if'", 
                            "'nc'", "'im'", "'jgl'", "'*'", "'/'", "'+'", 
                            "'-'", "'='", "'>'", "'<'", "'>='", "'<='", 
                            "'=='", "'==='", "'!='", "'!=='", "'||'", "'&&'", 
                            "'W7HLM'", "'{'", "'}'", "'('", "')'", "'!'", 
                            null, null, null, null, "';'" ];
    static symbolicNames = [ null, "PR", "IMPRESION", "IF_BASICO", "ELSE", 
                             "ELSE_IF", "INT", "FLOAT", "CHAR", "MUL", "DIV", 
                             "ADD", "SUB", "ASIGNACION", "MAYORQ", "MENORQ", 
                             "MAYOR_IGUAL", "MENOR_IGUAL", "IGUALDAD_DEBIL", 
                             "IGUALDAD_FUERTE", "DIF_DEBIL", "DIF_FUERTE", 
                             "OR", "AND", "TPG", "ALLAVE", "CLLAVE", "APARENTESIS", 
                             "CPARENTESIS", "AADMIRACION", "ID", "NUM", 
                             "CADENA", "DEC", "SEMI", "WS" ];
    static ruleNames = [ "init", "contenido", "inicializacion", "declaracion", 
                         "asignacion", "print", "if_estructuras", "if", 
                         "else_if", "else", "valor", "condiciones", "abloque", 
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
    	case 10:
    	    		return this.valor_sempred(localctx, predIndex);
    	case 11:
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
	        this.state = 28;
	        this.match(CompiladorParser.TPG);
	        this.state = 29;
	        this.match(CompiladorParser.ALLAVE);
	        this.state = 30;
	        this.contenido();
	        this.state = 31;
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
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073741854) !== 0)) {
	            this.state = 38;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 33;
	                this.inicializacion();
	                break;

	            case 2:
	                this.state = 34;
	                this.declaracion();
	                break;

	            case 3:
	                this.state = 35;
	                this.asignacion();
	                break;

	            case 4:
	                this.state = 36;
	                this.print();
	                break;

	            case 5:
	                this.state = 37;
	                this.if_estructuras();
	                break;

	            }
	            this.state = 42;
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
	        this.state = 43;
	        this.match(CompiladorParser.PR);
	        this.state = 44;
	        this.match(CompiladorParser.ID);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 45;
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
	        this.state = 48;
	        this.match(CompiladorParser.PR);
	        this.state = 49;
	        this.match(CompiladorParser.ID);
	        this.state = 50;
	        this.match(CompiladorParser.ASIGNACION);
	        this.state = 51;
	        this.valor(0);
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 52;
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
	        this.state = 55;
	        this.match(CompiladorParser.ID);
	        this.state = 56;
	        this.match(CompiladorParser.ASIGNACION);
	        this.state = 57;
	        this.valor(0);
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 58;
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
	        this.state = 61;
	        this.match(CompiladorParser.IMPRESION);
	        this.state = 62;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 63;
	        this.valor(0);
	        this.state = 64;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 65;
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
	        this.state = 91;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IfTradicionalContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 68;
	            this.if_();
	            break;

	        case 2:
	            localctx = new IfConElseContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 69;
	            this.if_();
	            this.state = 70;
	            this.else_();
	            break;

	        case 3:
	            localctx = new IfConElseIfContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 72;
	            this.if_();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 73;
	                this.else_if();
	                this.state = 78;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 4:
	            localctx = new IfElseIf_ElseContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 79;
	            this.if_();
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 80;
	                this.else_if();
	                this.state = 85;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 86;
	            this.else_();
	            break;

	        case 5:
	            localctx = new GenerarErrorContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 88;
	            this.else_();
	            this.state = 89;
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
	        this.state = 93;
	        this.match(CompiladorParser.IF_BASICO);
	        this.state = 94;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 95;
	        this.condiciones(0);
	        this.state = 96;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 97;
	        this.abloque();
	        this.state = 98;
	        this.contenido();
	        this.state = 99;
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
	        this.state = 101;
	        this.match(CompiladorParser.ELSE_IF);
	        this.state = 102;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 103;
	        this.condiciones(0);
	        this.state = 104;
	        this.match(CompiladorParser.CPARENTESIS);
	        this.state = 105;
	        this.abloque();
	        this.state = 106;
	        this.contenido();
	        this.state = 107;
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
	        this.state = 109;
	        this.match(CompiladorParser.ELSE);
	        this.state = 110;
	        this.abloque();
	        this.state = 111;
	        this.contenido();
	        this.state = 112;
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
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, CompiladorParser.RULE_valor, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 115;
	            this.match(CompiladorParser.NUM);
	            break;

	        case 2:
	            localctx = new DecimalContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 116;
	            this.match(CompiladorParser.DEC);
	            break;

	        case 3:
	            localctx = new CadenasContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 117;
	            this.match(CompiladorParser.CADENA);
	            break;

	        case 4:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 118;
	            this.match(CompiladorParser.ID);
	            break;

	        case 5:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 119;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 120;
	            this.valor(0);
	            this.state = 121;
	            this.match(CompiladorParser.CPARENTESIS);
	            break;

	        case 6:
	            localctx = new ImplicitoContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 123;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 124;
	            this.valor(0);
	            this.state = 125;
	            this.match(CompiladorParser.CPARENTESIS);
	            this.state = 126;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 127;
	            this.valor(0);
	            this.state = 128;
	            this.match(CompiladorParser.CPARENTESIS);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 140;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 138;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 132;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 133;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===10)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 134;
	                    this.valor(9);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 135;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 136;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===11 || _la===12)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 137;
	                    this.valor(8);
	                    break;

	                } 
	            }
	            this.state = 142;
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
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, CompiladorParser.RULE_condiciones, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TrueOrFalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 144;
	            this.valor(0);
	            break;

	        case 2:
	            localctx = new CondicionComparacionesContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 145;
	            this.valor(0);
	            this.state = 146;
	            localctx.des = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4177920) !== 0))) {
	                localctx.des = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 147;
	            this.valor(0);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 156;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicasContext(this, new CondicionesContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_condiciones);
	                this.state = 151;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 152;
	                localctx.des = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!(_la===22 || _la===23)) {
	                    localctx.des = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 153;
	                this.condiciones(4); 
	            }
	            this.state = 158;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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
	    this.enterRule(localctx, 24, CompiladorParser.RULE_abloque);
	    try {
	        localctx = new AuxScoopeDosContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
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
	    this.enterRule(localctx, 26, CompiladorParser.RULE_cbloque);
	    try {
	        localctx = new AuxScoopeContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
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
CompiladorParser.INT = 6;
CompiladorParser.FLOAT = 7;
CompiladorParser.CHAR = 8;
CompiladorParser.MUL = 9;
CompiladorParser.DIV = 10;
CompiladorParser.ADD = 11;
CompiladorParser.SUB = 12;
CompiladorParser.ASIGNACION = 13;
CompiladorParser.MAYORQ = 14;
CompiladorParser.MENORQ = 15;
CompiladorParser.MAYOR_IGUAL = 16;
CompiladorParser.MENOR_IGUAL = 17;
CompiladorParser.IGUALDAD_DEBIL = 18;
CompiladorParser.IGUALDAD_FUERTE = 19;
CompiladorParser.DIF_DEBIL = 20;
CompiladorParser.DIF_FUERTE = 21;
CompiladorParser.OR = 22;
CompiladorParser.AND = 23;
CompiladorParser.TPG = 24;
CompiladorParser.ALLAVE = 25;
CompiladorParser.CLLAVE = 26;
CompiladorParser.APARENTESIS = 27;
CompiladorParser.CPARENTESIS = 28;
CompiladorParser.AADMIRACION = 29;
CompiladorParser.ID = 30;
CompiladorParser.NUM = 31;
CompiladorParser.CADENA = 32;
CompiladorParser.DEC = 33;
CompiladorParser.SEMI = 34;
CompiladorParser.WS = 35;

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
CompiladorParser.RULE_valor = 10;
CompiladorParser.RULE_condiciones = 11;
CompiladorParser.RULE_abloque = 12;
CompiladorParser.RULE_cbloque = 13;

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
CompiladorParser.ValorContext = ValorContext; 
CompiladorParser.CondicionesContext = CondicionesContext; 
CompiladorParser.AbloqueContext = AbloqueContext; 
CompiladorParser.CbloqueContext = CbloqueContext; 
