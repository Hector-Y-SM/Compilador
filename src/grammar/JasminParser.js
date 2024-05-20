// Generated from ./grammar/Jasmin.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import JasminVisitor from './JasminVisitor.js';

const serializedATN = [4,1,44,213,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,1,1,1,1,1,5,1,46,8,1,10,1,12,1,49,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,3,2,61,8,2,1,3,1,3,1,3,3,3,66,8,3,1,4,1,4,1,4,1,4,1,4,3,4,
73,8,4,1,5,1,5,1,5,1,5,3,5,79,8,5,1,6,1,6,1,6,1,6,1,6,3,6,86,8,6,1,7,1,7,
5,7,90,8,7,10,7,12,7,93,9,7,1,7,3,7,96,8,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,104,
8,8,10,8,12,8,107,9,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,5,9,117,8,9,10,9,12,
9,120,9,9,1,9,1,9,1,10,1,10,1,10,5,10,127,8,10,10,10,12,10,130,9,10,1,10,
1,10,1,11,1,11,3,11,136,8,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,144,8,12,
10,12,12,12,147,9,12,1,12,1,12,1,13,1,13,1,13,5,13,154,8,13,10,13,12,13,
157,9,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,3,14,175,8,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,5,14,192,8,14,10,14,12,14,195,9,14,1,15,1,
15,1,16,1,16,1,16,3,16,202,8,16,1,17,1,17,1,17,3,17,207,8,17,1,18,1,18,1,
19,1,19,1,19,0,1,28,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,0,5,1,0,11,12,1,0,16,17,1,0,18,19,1,0,21,28,1,0,30,31,224,0,40,1,0,
0,0,2,42,1,0,0,0,4,60,1,0,0,0,6,62,1,0,0,0,8,67,1,0,0,0,10,74,1,0,0,0,12,
80,1,0,0,0,14,87,1,0,0,0,16,97,1,0,0,0,18,110,1,0,0,0,20,123,1,0,0,0,22,
135,1,0,0,0,24,137,1,0,0,0,26,150,1,0,0,0,28,174,1,0,0,0,30,196,1,0,0,0,
32,198,1,0,0,0,34,203,1,0,0,0,36,208,1,0,0,0,38,210,1,0,0,0,40,41,3,2,1,
0,41,1,1,0,0,0,42,43,5,32,0,0,43,47,5,33,0,0,44,46,3,4,2,0,45,44,1,0,0,0,
46,49,1,0,0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,
51,5,34,0,0,51,3,1,0,0,0,52,61,3,6,3,0,53,61,3,8,4,0,54,61,3,10,5,0,55,61,
3,12,6,0,56,61,3,14,7,0,57,61,3,22,11,0,58,61,3,32,16,0,59,61,3,34,17,0,
60,52,1,0,0,0,60,53,1,0,0,0,60,54,1,0,0,0,60,55,1,0,0,0,60,56,1,0,0,0,60,
57,1,0,0,0,60,58,1,0,0,0,60,59,1,0,0,0,61,5,1,0,0,0,62,63,5,3,0,0,63,65,
5,38,0,0,64,66,5,42,0,0,65,64,1,0,0,0,65,66,1,0,0,0,66,7,1,0,0,0,67,68,5,
3,0,0,68,69,5,38,0,0,69,70,5,20,0,0,70,72,3,28,14,0,71,73,5,42,0,0,72,71,
1,0,0,0,72,73,1,0,0,0,73,9,1,0,0,0,74,75,5,38,0,0,75,76,5,20,0,0,76,78,3,
28,14,0,77,79,5,42,0,0,78,77,1,0,0,0,78,79,1,0,0,0,79,11,1,0,0,0,80,81,5,
4,0,0,81,82,5,35,0,0,82,83,3,28,14,0,83,85,5,36,0,0,84,86,5,42,0,0,85,84,
1,0,0,0,85,86,1,0,0,0,86,13,1,0,0,0,87,91,3,16,8,0,88,90,3,18,9,0,89,88,
1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,95,1,0,0,0,93,91,1,
0,0,0,94,96,3,20,10,0,95,94,1,0,0,0,95,96,1,0,0,0,96,15,1,0,0,0,97,98,5,
5,0,0,98,99,5,35,0,0,99,100,3,30,15,0,100,101,5,36,0,0,101,105,3,36,18,0,
102,104,3,4,2,0,103,102,1,0,0,0,104,107,1,0,0,0,105,103,1,0,0,0,105,106,
1,0,0,0,106,108,1,0,0,0,107,105,1,0,0,0,108,109,3,38,19,0,109,17,1,0,0,0,
110,111,5,7,0,0,111,112,5,35,0,0,112,113,3,30,15,0,113,114,5,36,0,0,114,
118,3,36,18,0,115,117,3,4,2,0,116,115,1,0,0,0,117,120,1,0,0,0,118,116,1,
0,0,0,118,119,1,0,0,0,119,121,1,0,0,0,120,118,1,0,0,0,121,122,3,38,19,0,
122,19,1,0,0,0,123,124,5,6,0,0,124,128,3,36,18,0,125,127,3,4,2,0,126,125,
1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,128,129,1,0,0,0,129,131,1,0,0,0,
130,128,1,0,0,0,131,132,3,38,19,0,132,21,1,0,0,0,133,136,3,24,12,0,134,136,
3,26,13,0,135,133,1,0,0,0,135,134,1,0,0,0,136,23,1,0,0,0,137,138,5,9,0,0,
138,139,5,35,0,0,139,140,3,30,15,0,140,141,5,36,0,0,141,145,3,36,18,0,142,
144,3,4,2,0,143,142,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,1,0,
0,0,146,148,1,0,0,0,147,145,1,0,0,0,148,149,3,38,19,0,149,25,1,0,0,0,150,
151,5,8,0,0,151,155,3,36,18,0,152,154,3,4,2,0,153,152,1,0,0,0,154,157,1,
0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,158,1,0,0,0,157,155,1,0,0,0,158,
159,3,38,19,0,159,160,5,9,0,0,160,161,5,35,0,0,161,162,3,30,15,0,162,163,
5,36,0,0,163,27,1,0,0,0,164,165,6,14,-1,0,165,166,5,35,0,0,166,167,3,28,
14,0,167,168,5,36,0,0,168,175,1,0,0,0,169,175,7,0,0,0,170,175,5,39,0,0,171,
175,5,41,0,0,172,175,5,40,0,0,173,175,5,38,0,0,174,164,1,0,0,0,174,169,1,
0,0,0,174,170,1,0,0,0,174,171,1,0,0,0,174,172,1,0,0,0,174,173,1,0,0,0,175,
193,1,0,0,0,176,177,10,11,0,0,177,178,7,1,0,0,178,192,3,28,14,12,179,180,
10,10,0,0,180,181,7,2,0,0,181,192,3,28,14,11,182,183,10,9,0,0,183,184,5,
29,0,0,184,192,3,28,14,10,185,186,10,8,0,0,186,187,7,3,0,0,187,192,3,28,
14,9,188,189,10,7,0,0,189,190,7,4,0,0,190,192,3,28,14,8,191,176,1,0,0,0,
191,179,1,0,0,0,191,182,1,0,0,0,191,185,1,0,0,0,191,188,1,0,0,0,192,195,
1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,29,1,0,0,0,195,193,1,0,0,0,196,
197,3,28,14,0,197,31,1,0,0,0,198,199,5,38,0,0,199,201,5,1,0,0,200,202,5,
42,0,0,201,200,1,0,0,0,201,202,1,0,0,0,202,33,1,0,0,0,203,204,5,38,0,0,204,
206,5,2,0,0,205,207,5,42,0,0,206,205,1,0,0,0,206,207,1,0,0,0,207,35,1,0,
0,0,208,209,5,33,0,0,209,37,1,0,0,0,210,211,5,34,0,0,211,39,1,0,0,0,19,47,
60,65,72,78,85,91,95,105,118,128,135,145,155,174,191,193,201,206];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class JasminParser extends antlr4.Parser {

    static grammarFileName = "Jasmin.g4";
    static literalNames = [ null, "'++'", "'--'", null, "'leak'", "'si'", 
                            "'else'", "'elfito'", "'toDo'", "'lewhi'", "'fofo'", 
                            "'true'", "'false'", "'nc'", "'im'", "'jgl'", 
                            "'*'", "'/'", "'+'", "'-'", "'='", "'>'", "'<'", 
                            "'>='", "'<='", "'=='", "'==='", "'!='", "'!=='", 
                            "'%'", "'||'", "'&&'", "'W7HLM'", "'{'", "'}'", 
                            "'('", "')'", "'!'", null, null, null, null, 
                            "';'", "','" ];
    static symbolicNames = [ null, null, null, "PR", "IMPRESION", "IF_BASICO", 
                             "ELSE", "ELSE_IF", "DO", "WHILE", "FOR", "TRUE", 
                             "FALSE", "INT", "FLOAT", "CHAR", "MUL", "DIV", 
                             "ADD", "SUB", "ASIGNACION", "MAYORQ", "MENORQ", 
                             "MAYOR_IGUAL", "MENOR_IGUAL", "IGUALDAD_DEBIL", 
                             "IGUALDAD_FUERTE", "DIF_DEBIL", "DIF_FUERTE", 
                             "RESIDUO", "OR", "AND", "TPG", "ALLAVE", "CLLAVE", 
                             "APARENTESIS", "CPARENTESIS", "AADMIRACION", 
                             "ID", "NUM", "CADENA", "DEC", "SEMI", "COMA", 
                             "WS" ];
    static ruleNames = [ "prog", "init", "contenido", "inicializacion", 
                         "declaracion", "asignacion", "print", "if_estructuras", 
                         "if", "else_if", "else", "ciclos", "while", "doWhile", 
                         "valor", "condiciones", "incremento", "decremento", 
                         "abloque", "cbloque" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = JasminParser.ruleNames;
        this.literalNames = JasminParser.literalNames;
        this.symbolicNames = JasminParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 14:
    	    		return this.valor_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    valor_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 11);
    		case 1:
    			return this.precpred(this._ctx, 10);
    		case 2:
    			return this.precpred(this._ctx, 9);
    		case 3:
    			return this.precpred(this._ctx, 8);
    		case 4:
    			return this.precpred(this._ctx, 7);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, JasminParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.init();
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



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, JasminParser.RULE_init);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(JasminParser.TPG);
	        this.state = 43;
	        this.match(JasminParser.ALLAVE);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 824) !== 0) || _la===38) {
	            this.state = 44;
	            this.contenido();
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this.match(JasminParser.CLLAVE);
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
	    this.enterRule(localctx, 4, JasminParser.RULE_contenido);
	    try {
	        this.state = 60;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 52;
	            this.inicializacion();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 53;
	            this.declaracion();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 54;
	            this.asignacion();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 55;
	            this.print();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 56;
	            this.if_estructuras();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 57;
	            this.ciclos();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 58;
	            this.incremento();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 59;
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
	    this.enterRule(localctx, 6, JasminParser.RULE_inicializacion);
	    var _la = 0;
	    try {
	        localctx = new IndefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(JasminParser.PR);
	        this.state = 63;
	        this.match(JasminParser.ID);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 64;
	            this.match(JasminParser.SEMI);
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
	    this.enterRule(localctx, 8, JasminParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        localctx = new DefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this.match(JasminParser.PR);
	        this.state = 68;
	        this.match(JasminParser.ID);
	        this.state = 69;
	        this.match(JasminParser.ASIGNACION);
	        this.state = 70;
	        this.valor(0);
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 71;
	            this.match(JasminParser.SEMI);
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
	    this.enterRule(localctx, 10, JasminParser.RULE_asignacion);
	    var _la = 0;
	    try {
	        localctx = new AsignadoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.match(JasminParser.ID);
	        this.state = 75;
	        this.match(JasminParser.ASIGNACION);
	        this.state = 76;
	        this.valor(0);
	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 77;
	            this.match(JasminParser.SEMI);
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
	    this.enterRule(localctx, 12, JasminParser.RULE_print);
	    var _la = 0;
	    try {
	        localctx = new PrintValorContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this.match(JasminParser.IMPRESION);
	        this.state = 81;
	        this.match(JasminParser.APARENTESIS);
	        this.state = 82;
	        this.valor(0);
	        this.state = 83;
	        this.match(JasminParser.CPARENTESIS);
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 84;
	            this.match(JasminParser.SEMI);
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
	    this.enterRule(localctx, 14, JasminParser.RULE_if_estructuras);
	    var _la = 0;
	    try {
	        localctx = new EstructuraIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.if_();
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 88;
	            this.else_if();
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 94;
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
	    this.enterRule(localctx, 16, JasminParser.RULE_if);
	    var _la = 0;
	    try {
	        localctx = new IfPuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(JasminParser.IF_BASICO);
	        this.state = 98;
	        this.match(JasminParser.APARENTESIS);
	        this.state = 99;
	        this.condiciones();
	        this.state = 100;
	        this.match(JasminParser.CPARENTESIS);
	        this.state = 101;
	        this.abloque();
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 824) !== 0) || _la===38) {
	            this.state = 102;
	            this.contenido();
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 108;
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
	    this.enterRule(localctx, 18, JasminParser.RULE_else_if);
	    var _la = 0;
	    try {
	        localctx = new ElseIfPuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.match(JasminParser.ELSE_IF);
	        this.state = 111;
	        this.match(JasminParser.APARENTESIS);
	        this.state = 112;
	        this.condiciones();
	        this.state = 113;
	        this.match(JasminParser.CPARENTESIS);
	        this.state = 114;
	        this.abloque();
	        this.state = 118;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 824) !== 0) || _la===38) {
	            this.state = 115;
	            this.contenido();
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 121;
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
	    this.enterRule(localctx, 20, JasminParser.RULE_else);
	    var _la = 0;
	    try {
	        localctx = new ElsePuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.match(JasminParser.ELSE);
	        this.state = 124;
	        this.abloque();
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 824) !== 0) || _la===38) {
	            this.state = 125;
	            this.contenido();
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 131;
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
	    this.enterRule(localctx, 22, JasminParser.RULE_ciclos);
	    try {
	        this.state = 135;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            localctx = new ReglaWhileContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.while_();
	            break;
	        case 8:
	            localctx = new ReglaDoWhileContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 134;
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
	    this.enterRule(localctx, 24, JasminParser.RULE_while);
	    var _la = 0;
	    try {
	        localctx = new CicloWhileContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(JasminParser.WHILE);
	        this.state = 138;
	        this.match(JasminParser.APARENTESIS);
	        this.state = 139;
	        this.condiciones();
	        this.state = 140;
	        this.match(JasminParser.CPARENTESIS);
	        this.state = 141;
	        this.abloque();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 824) !== 0) || _la===38) {
	            this.state = 142;
	            this.contenido();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 148;
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
	    this.enterRule(localctx, 26, JasminParser.RULE_doWhile);
	    var _la = 0;
	    try {
	        localctx = new CicloDoWhileContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        this.match(JasminParser.DO);
	        this.state = 151;
	        this.abloque();
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 824) !== 0) || _la===38) {
	            this.state = 152;
	            this.contenido();
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 158;
	        this.cbloque();
	        this.state = 159;
	        this.match(JasminParser.WHILE);
	        this.state = 160;
	        this.match(JasminParser.APARENTESIS);
	        this.state = 161;
	        this.condiciones();
	        this.state = 162;
	        this.match(JasminParser.CPARENTESIS);
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
	    this.enterRecursionRule(localctx, 28, JasminParser.RULE_valor, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 165;
	            this.match(JasminParser.APARENTESIS);
	            this.state = 166;
	            this.valor(0);
	            this.state = 167;
	            this.match(JasminParser.CPARENTESIS);
	            break;
	        case 11:
	        case 12:
	            localctx = new TrueFalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 169;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===12)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 39:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 170;
	            this.match(JasminParser.NUM);
	            break;
	        case 41:
	            localctx = new DecimalContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 171;
	            this.match(JasminParser.DEC);
	            break;
	        case 40:
	            localctx = new CadenasContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 172;
	            this.match(JasminParser.CADENA);
	            break;
	        case 38:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 173;
	            this.match(JasminParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 193;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 191;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JasminParser.RULE_valor);
	                    this.state = 176;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 177;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===16 || _la===17)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 178;
	                    this.valor(12);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JasminParser.RULE_valor);
	                    this.state = 179;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 180;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===19)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 181;
	                    this.valor(11);
	                    break;

	                case 3:
	                    localctx = new ResiduoContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JasminParser.RULE_valor);
	                    this.state = 182;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 183;
	                    this.match(JasminParser.RESIDUO);
	                    this.state = 184;
	                    this.valor(10);
	                    break;

	                case 4:
	                    localctx = new ComparacionContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JasminParser.RULE_valor);
	                    this.state = 185;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 186;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 534773760) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 187;
	                    this.valor(9);
	                    break;

	                case 5:
	                    localctx = new LogicasContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, JasminParser.RULE_valor);
	                    this.state = 188;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 189;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===30 || _la===31)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 190;
	                    this.valor(8);
	                    break;

	                } 
	            }
	            this.state = 195;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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



	condiciones() {
	    let localctx = new CondicionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, JasminParser.RULE_condiciones);
	    try {
	        localctx = new TrueOrFalseContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.valor(0);
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



	incremento() {
	    let localctx = new IncrementoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, JasminParser.RULE_incremento);
	    var _la = 0;
	    try {
	        localctx = new IncrementarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(JasminParser.ID);
	        this.state = 199;
	        this.match(JasminParser.T__0);
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 200;
	            this.match(JasminParser.SEMI);
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
	    this.enterRule(localctx, 34, JasminParser.RULE_decremento);
	    var _la = 0;
	    try {
	        localctx = new DecrementarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(JasminParser.ID);
	        this.state = 204;
	        this.match(JasminParser.T__1);
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 205;
	            this.match(JasminParser.SEMI);
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
	    this.enterRule(localctx, 36, JasminParser.RULE_abloque);
	    try {
	        localctx = new AuxScopeDosContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(JasminParser.ALLAVE);
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
	    this.enterRule(localctx, 38, JasminParser.RULE_cbloque);
	    try {
	        localctx = new AuxScopeContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(JasminParser.CLLAVE);
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

JasminParser.EOF = antlr4.Token.EOF;
JasminParser.T__0 = 1;
JasminParser.T__1 = 2;
JasminParser.PR = 3;
JasminParser.IMPRESION = 4;
JasminParser.IF_BASICO = 5;
JasminParser.ELSE = 6;
JasminParser.ELSE_IF = 7;
JasminParser.DO = 8;
JasminParser.WHILE = 9;
JasminParser.FOR = 10;
JasminParser.TRUE = 11;
JasminParser.FALSE = 12;
JasminParser.INT = 13;
JasminParser.FLOAT = 14;
JasminParser.CHAR = 15;
JasminParser.MUL = 16;
JasminParser.DIV = 17;
JasminParser.ADD = 18;
JasminParser.SUB = 19;
JasminParser.ASIGNACION = 20;
JasminParser.MAYORQ = 21;
JasminParser.MENORQ = 22;
JasminParser.MAYOR_IGUAL = 23;
JasminParser.MENOR_IGUAL = 24;
JasminParser.IGUALDAD_DEBIL = 25;
JasminParser.IGUALDAD_FUERTE = 26;
JasminParser.DIF_DEBIL = 27;
JasminParser.DIF_FUERTE = 28;
JasminParser.RESIDUO = 29;
JasminParser.OR = 30;
JasminParser.AND = 31;
JasminParser.TPG = 32;
JasminParser.ALLAVE = 33;
JasminParser.CLLAVE = 34;
JasminParser.APARENTESIS = 35;
JasminParser.CPARENTESIS = 36;
JasminParser.AADMIRACION = 37;
JasminParser.ID = 38;
JasminParser.NUM = 39;
JasminParser.CADENA = 40;
JasminParser.DEC = 41;
JasminParser.SEMI = 42;
JasminParser.COMA = 43;
JasminParser.WS = 44;

JasminParser.RULE_prog = 0;
JasminParser.RULE_init = 1;
JasminParser.RULE_contenido = 2;
JasminParser.RULE_inicializacion = 3;
JasminParser.RULE_declaracion = 4;
JasminParser.RULE_asignacion = 5;
JasminParser.RULE_print = 6;
JasminParser.RULE_if_estructuras = 7;
JasminParser.RULE_if = 8;
JasminParser.RULE_else_if = 9;
JasminParser.RULE_else = 10;
JasminParser.RULE_ciclos = 11;
JasminParser.RULE_while = 12;
JasminParser.RULE_doWhile = 13;
JasminParser.RULE_valor = 14;
JasminParser.RULE_condiciones = 15;
JasminParser.RULE_incremento = 16;
JasminParser.RULE_decremento = 17;
JasminParser.RULE_abloque = 18;
JasminParser.RULE_cbloque = 19;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = JasminParser.RULE_prog;
    }

	init() {
	    return this.getTypedRuleContext(InitContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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
        this.ruleIndex = JasminParser.RULE_init;
    }

	TPG() {
	    return this.getToken(JasminParser.TPG, 0);
	};

	ALLAVE() {
	    return this.getToken(JasminParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(JasminParser.CLLAVE, 0);
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
	    if ( visitor instanceof JasminVisitor ) {
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
        this.ruleIndex = JasminParser.RULE_contenido;
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
	    if ( visitor instanceof JasminVisitor ) {
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
        this.ruleIndex = JasminParser.RULE_inicializacion;
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
	    return this.getToken(JasminParser.PR, 0);
	};

	ID() {
	    return this.getToken(JasminParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(JasminParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitIndefinido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.IndefinidoContext = IndefinidoContext;

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
        this.ruleIndex = JasminParser.RULE_declaracion;
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
	    return this.getToken(JasminParser.PR, 0);
	};

	ID() {
	    return this.getToken(JasminParser.ID, 0);
	};

	ASIGNACION() {
	    return this.getToken(JasminParser.ASIGNACION, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMI() {
	    return this.getToken(JasminParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitDefinido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.DefinidoContext = DefinidoContext;

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
        this.ruleIndex = JasminParser.RULE_asignacion;
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
	    return this.getToken(JasminParser.ID, 0);
	};

	ASIGNACION() {
	    return this.getToken(JasminParser.ASIGNACION, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMI() {
	    return this.getToken(JasminParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitAsignado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.AsignadoContext = AsignadoContext;

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
        this.ruleIndex = JasminParser.RULE_print;
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
	    return this.getToken(JasminParser.IMPRESION, 0);
	};

	APARENTESIS() {
	    return this.getToken(JasminParser.APARENTESIS, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(JasminParser.CPARENTESIS, 0);
	};

	SEMI() {
	    return this.getToken(JasminParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitPrintValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.PrintValorContext = PrintValorContext;

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
        this.ruleIndex = JasminParser.RULE_if_estructuras;
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
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitEstructuraIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.EstructuraIfContext = EstructuraIfContext;

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
        this.ruleIndex = JasminParser.RULE_if;
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
	    return this.getToken(JasminParser.IF_BASICO, 0);
	};

	APARENTESIS() {
	    return this.getToken(JasminParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(JasminParser.CPARENTESIS, 0);
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
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitIfPuro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.IfPuroContext = IfPuroContext;

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
        this.ruleIndex = JasminParser.RULE_else_if;
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
	    return this.getToken(JasminParser.ELSE_IF, 0);
	};

	APARENTESIS() {
	    return this.getToken(JasminParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(JasminParser.CPARENTESIS, 0);
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
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitElseIfPuro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.ElseIfPuroContext = ElseIfPuroContext;

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
        this.ruleIndex = JasminParser.RULE_else;
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
	    return this.getToken(JasminParser.ELSE, 0);
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
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitElsePuro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.ElsePuroContext = ElsePuroContext;

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
        this.ruleIndex = JasminParser.RULE_ciclos;
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
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitReglaWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.ReglaWhileContext = ReglaWhileContext;

class ReglaDoWhileContext extends CiclosContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	doWhile() {
	    return this.getTypedRuleContext(DoWhileContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitReglaDoWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.ReglaDoWhileContext = ReglaDoWhileContext;

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
        this.ruleIndex = JasminParser.RULE_while;
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
	    return this.getToken(JasminParser.WHILE, 0);
	};

	APARENTESIS() {
	    return this.getToken(JasminParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(JasminParser.CPARENTESIS, 0);
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
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitCicloWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.CicloWhileContext = CicloWhileContext;

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
        this.ruleIndex = JasminParser.RULE_doWhile;
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
	    return this.getToken(JasminParser.DO, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	WHILE() {
	    return this.getToken(JasminParser.WHILE, 0);
	};

	APARENTESIS() {
	    return this.getToken(JasminParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(JasminParser.CPARENTESIS, 0);
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
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitCicloDoWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.CicloDoWhileContext = CicloDoWhileContext;

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
        this.ruleIndex = JasminParser.RULE_valor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ResiduoContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
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

	RESIDUO() {
	    return this.getToken(JasminParser.RESIDUO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitResiduo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.ResiduoContext = ResiduoContext;

class ComparacionContext extends ValorContext {

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

	MAYORQ() {
	    return this.getToken(JasminParser.MAYORQ, 0);
	};

	MENORQ() {
	    return this.getToken(JasminParser.MENORQ, 0);
	};

	MAYOR_IGUAL() {
	    return this.getToken(JasminParser.MAYOR_IGUAL, 0);
	};

	MENOR_IGUAL() {
	    return this.getToken(JasminParser.MENOR_IGUAL, 0);
	};

	IGUALDAD_DEBIL() {
	    return this.getToken(JasminParser.IGUALDAD_DEBIL, 0);
	};

	IGUALDAD_FUERTE() {
	    return this.getToken(JasminParser.IGUALDAD_FUERTE, 0);
	};

	DIF_DEBIL() {
	    return this.getToken(JasminParser.DIF_DEBIL, 0);
	};

	DIF_FUERTE() {
	    return this.getToken(JasminParser.DIF_FUERTE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitComparacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.ComparacionContext = ComparacionContext;

class NumeroContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(JasminParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.NumeroContext = NumeroContext;

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
	    return this.getToken(JasminParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(JasminParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.MulDivContext = MulDivContext;

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
	    return this.getToken(JasminParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(JasminParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.AddSubContext = AddSubContext;

class ParentesisContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	APARENTESIS() {
	    return this.getToken(JasminParser.APARENTESIS, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(JasminParser.CPARENTESIS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.ParentesisContext = ParentesisContext;

class TrueFalseContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(JasminParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(JasminParser.FALSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitTrueFalse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.TrueFalseContext = TrueFalseContext;

class LogicasContext extends ValorContext {

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

	OR() {
	    return this.getToken(JasminParser.OR, 0);
	};

	AND() {
	    return this.getToken(JasminParser.AND, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitLogicas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.LogicasContext = LogicasContext;

class IdContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(JasminParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.IdContext = IdContext;

class DecimalContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEC() {
	    return this.getToken(JasminParser.DEC, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitDecimal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.DecimalContext = DecimalContext;

class CadenasContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CADENA() {
	    return this.getToken(JasminParser.CADENA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitCadenas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.CadenasContext = CadenasContext;

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
        this.ruleIndex = JasminParser.RULE_condiciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TrueOrFalseContext extends CondicionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitTrueOrFalse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.TrueOrFalseContext = TrueOrFalseContext;

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
        this.ruleIndex = JasminParser.RULE_incremento;
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
	    return this.getToken(JasminParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(JasminParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitIncrementar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.IncrementarContext = IncrementarContext;

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
        this.ruleIndex = JasminParser.RULE_decremento;
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
	    return this.getToken(JasminParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(JasminParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitDecrementar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.DecrementarContext = DecrementarContext;

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
        this.ruleIndex = JasminParser.RULE_abloque;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AuxScopeDosContext extends AbloqueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ALLAVE() {
	    return this.getToken(JasminParser.ALLAVE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitAuxScopeDos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.AuxScopeDosContext = AuxScopeDosContext;

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
        this.ruleIndex = JasminParser.RULE_cbloque;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AuxScopeContext extends CbloqueContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CLLAVE() {
	    return this.getToken(JasminParser.CLLAVE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof JasminVisitor ) {
	        return visitor.visitAuxScope(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

JasminParser.AuxScopeContext = AuxScopeContext;


JasminParser.ProgContext = ProgContext; 
JasminParser.InitContext = InitContext; 
JasminParser.ContenidoContext = ContenidoContext; 
JasminParser.InicializacionContext = InicializacionContext; 
JasminParser.DeclaracionContext = DeclaracionContext; 
JasminParser.AsignacionContext = AsignacionContext; 
JasminParser.PrintContext = PrintContext; 
JasminParser.If_estructurasContext = If_estructurasContext; 
JasminParser.IfContext = IfContext; 
JasminParser.Else_ifContext = Else_ifContext; 
JasminParser.ElseContext = ElseContext; 
JasminParser.CiclosContext = CiclosContext; 
JasminParser.WhileContext = WhileContext; 
JasminParser.DoWhileContext = DoWhileContext; 
JasminParser.ValorContext = ValorContext; 
JasminParser.CondicionesContext = CondicionesContext; 
JasminParser.IncrementoContext = IncrementoContext; 
JasminParser.DecrementoContext = DecrementoContext; 
JasminParser.AbloqueContext = AbloqueContext; 
JasminParser.CbloqueContext = CbloqueContext; 
