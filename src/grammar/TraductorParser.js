// Generated from ./grammar/Traductor.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TraductorVisitor from './TraductorVisitor.js';

const serializedATN = [4,1,52,213,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,1,
0,1,0,1,0,5,0,44,8,0,10,0,12,0,47,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,3,1,59,8,1,1,2,1,2,1,2,3,2,64,8,2,1,3,1,3,1,3,1,3,1,3,3,3,71,8,3,1,
4,1,4,1,4,1,4,3,4,77,8,4,1,5,1,5,1,5,1,5,1,5,3,5,84,8,5,1,6,1,6,5,6,88,8,
6,10,6,12,6,91,9,6,1,6,3,6,94,8,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,102,8,7,10,
7,12,7,105,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,115,8,8,10,8,12,8,118,
9,8,1,8,1,8,1,9,1,9,1,9,5,9,125,8,9,10,9,12,9,128,9,9,1,9,1,9,1,10,1,10,
3,10,134,8,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,142,8,11,10,11,12,11,145,
9,11,1,11,1,11,1,12,1,12,1,12,5,12,152,8,12,10,12,12,12,155,9,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
3,13,173,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,5,13,190,8,13,10,13,12,13,193,9,13,1,14,1,14,1,15,1,15,1,
15,3,15,200,8,15,1,16,1,16,1,16,3,16,205,8,16,1,17,1,17,1,18,1,18,1,19,1,
19,1,19,0,1,26,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
0,6,1,0,23,24,1,0,36,37,1,0,38,39,1,0,41,48,1,0,50,51,1,0,25,26,224,0,40,
1,0,0,0,2,58,1,0,0,0,4,60,1,0,0,0,6,65,1,0,0,0,8,72,1,0,0,0,10,78,1,0,0,
0,12,85,1,0,0,0,14,95,1,0,0,0,16,108,1,0,0,0,18,121,1,0,0,0,20,133,1,0,0,
0,22,135,1,0,0,0,24,148,1,0,0,0,26,172,1,0,0,0,28,194,1,0,0,0,30,196,1,0,
0,0,32,201,1,0,0,0,34,206,1,0,0,0,36,208,1,0,0,0,38,210,1,0,0,0,40,41,5,
22,0,0,41,45,5,31,0,0,42,44,3,2,1,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,1,
0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,45,1,0,0,0,48,49,5,32,0,0,49,1,1,0,
0,0,50,59,3,4,2,0,51,59,3,6,3,0,52,59,3,8,4,0,53,59,3,10,5,0,54,59,3,12,
6,0,55,59,3,20,10,0,56,59,3,30,15,0,57,59,3,32,16,0,58,50,1,0,0,0,58,51,
1,0,0,0,58,52,1,0,0,0,58,53,1,0,0,0,58,54,1,0,0,0,58,55,1,0,0,0,58,56,1,
0,0,0,58,57,1,0,0,0,59,3,1,0,0,0,60,61,5,3,0,0,61,63,5,25,0,0,62,64,5,29,
0,0,63,62,1,0,0,0,63,64,1,0,0,0,64,5,1,0,0,0,65,66,5,3,0,0,66,67,5,25,0,
0,67,68,5,40,0,0,68,70,3,26,13,0,69,71,5,29,0,0,70,69,1,0,0,0,70,71,1,0,
0,0,71,7,1,0,0,0,72,73,5,25,0,0,73,74,5,40,0,0,74,76,3,26,13,0,75,77,5,29,
0,0,76,75,1,0,0,0,76,77,1,0,0,0,77,9,1,0,0,0,78,79,5,21,0,0,79,80,5,33,0,
0,80,81,3,26,13,0,81,83,5,34,0,0,82,84,5,29,0,0,83,82,1,0,0,0,83,84,1,0,
0,0,84,11,1,0,0,0,85,89,3,14,7,0,86,88,3,16,8,0,87,86,1,0,0,0,88,91,1,0,
0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,92,94,3,18,9,
0,93,92,1,0,0,0,93,94,1,0,0,0,94,13,1,0,0,0,95,96,5,15,0,0,96,97,5,33,0,
0,97,98,3,28,14,0,98,99,5,34,0,0,99,103,3,34,17,0,100,102,3,2,1,0,101,100,
1,0,0,0,102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,106,1,0,0,0,
105,103,1,0,0,0,106,107,3,36,18,0,107,15,1,0,0,0,108,109,5,11,0,0,109,110,
5,33,0,0,110,111,3,28,14,0,111,112,5,34,0,0,112,116,3,34,17,0,113,115,3,
2,1,0,114,113,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,
119,1,0,0,0,118,116,1,0,0,0,119,120,3,36,18,0,120,17,1,0,0,0,121,122,5,12,
0,0,122,126,3,34,17,0,123,125,3,2,1,0,124,123,1,0,0,0,125,128,1,0,0,0,126,
124,1,0,0,0,126,127,1,0,0,0,127,129,1,0,0,0,128,126,1,0,0,0,129,130,3,36,
18,0,130,19,1,0,0,0,131,134,3,22,11,0,132,134,3,24,12,0,133,131,1,0,0,0,
133,132,1,0,0,0,134,21,1,0,0,0,135,136,5,20,0,0,136,137,5,33,0,0,137,138,
3,28,14,0,138,139,5,34,0,0,139,143,3,34,17,0,140,142,3,2,1,0,141,140,1,0,
0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,146,1,0,0,0,145,
143,1,0,0,0,146,147,3,36,18,0,147,23,1,0,0,0,148,149,5,9,0,0,149,153,3,34,
17,0,150,152,3,2,1,0,151,150,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,
154,1,0,0,0,154,156,1,0,0,0,155,153,1,0,0,0,156,157,3,36,18,0,157,158,5,
20,0,0,158,159,5,33,0,0,159,160,3,28,14,0,160,161,5,34,0,0,161,25,1,0,0,
0,162,163,6,13,-1,0,163,164,5,33,0,0,164,165,3,26,13,0,165,166,5,34,0,0,
166,173,1,0,0,0,167,173,7,0,0,0,168,173,5,26,0,0,169,173,5,28,0,0,170,173,
5,27,0,0,171,173,5,25,0,0,172,162,1,0,0,0,172,167,1,0,0,0,172,168,1,0,0,
0,172,169,1,0,0,0,172,170,1,0,0,0,172,171,1,0,0,0,173,191,1,0,0,0,174,175,
10,11,0,0,175,176,7,1,0,0,176,190,3,26,13,12,177,178,10,10,0,0,178,179,7,
2,0,0,179,190,3,26,13,11,180,181,10,9,0,0,181,182,5,49,0,0,182,190,3,26,
13,10,183,184,10,8,0,0,184,185,7,3,0,0,185,190,3,26,13,9,186,187,10,7,0,
0,187,188,7,4,0,0,188,190,3,26,13,8,189,174,1,0,0,0,189,177,1,0,0,0,189,
180,1,0,0,0,189,183,1,0,0,0,189,186,1,0,0,0,190,193,1,0,0,0,191,189,1,0,
0,0,191,192,1,0,0,0,192,27,1,0,0,0,193,191,1,0,0,0,194,195,3,26,13,0,195,
29,1,0,0,0,196,197,5,25,0,0,197,199,5,1,0,0,198,200,5,29,0,0,199,198,1,0,
0,0,199,200,1,0,0,0,200,31,1,0,0,0,201,202,5,25,0,0,202,204,5,2,0,0,203,
205,5,29,0,0,204,203,1,0,0,0,204,205,1,0,0,0,205,33,1,0,0,0,206,207,5,31,
0,0,207,35,1,0,0,0,208,209,5,32,0,0,209,37,1,0,0,0,210,211,7,5,0,0,211,39,
1,0,0,0,19,45,58,63,70,76,83,89,93,103,116,126,133,143,153,172,189,191,199,
204];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TraductorParser extends antlr4.Parser {

    static grammarFileName = "Traductor.g4";
    static literalNames = [ null, "'++'", "'--'", null, "'main'", "'break'", 
                            "'case'", "'char'", "'const'", "'do'", "'double'", 
                            "'else if'", "'else'", "'float'", "'for'", "'if'", 
                            "'int'", "'switch'", "'unsigned'", "'void'", 
                            "'while'", "'printf'", "'void main()'", "'true'", 
                            "'false'", null, null, null, null, "';'", "','", 
                            "'{'", "'}'", "'('", "')'", "'!'", "'*'", "'/'", 
                            "'+'", "'-'", "'='", "'>'", "'<'", "'>='", "'<='", 
                            "'=='", "'==='", "'!='", "'!=='", "'%'", "'||'", 
                            "'&&'" ];
    static symbolicNames = [ null, null, null, "PR", "MAIN", "BREAK", "CASE", 
                             "CHAR", "CONST", "DO", "DOUBLE", "ELSE_IF", 
                             "ELSE", "FLOAT", "FOR", "IF", "INT", "SWITCH", 
                             "UNSIGNED", "VOID", "WHILE", "PRINTF", "VOID_MAIN", 
                             "TRUE", "FALSE", "ID", "NUM", "CADENA", "DEC", 
                             "SEMI", "COMA", "ALLAVE", "CLLAVE", "APARENTESIS", 
                             "CPARENTESIS", "AADMIRACION", "MUL", "DIV", 
                             "ADD", "SUB", "ASIGNACION", "MAYORQ", "MENORQ", 
                             "MAYOR_IGUAL", "MENOR_IGUAL", "IGUALDAD_DEBIL", 
                             "IGUALDAD_FUERTE", "DIF_DEBIL", "DIF_FUERTE", 
                             "RESIDUO", "OR", "AND", "WS" ];
    static ruleNames = [ "contenido", "relleno", "inicializacion", "declaracion", 
                         "asignacion", "print", "if_estructuras", "if", 
                         "else_if", "else", "ciclos", "while", "doWhile", 
                         "valor", "condiciones", "incremento", "decremento", 
                         "abloque", "cbloque", "valores" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TraductorParser.ruleNames;
        this.literalNames = TraductorParser.literalNames;
        this.symbolicNames = TraductorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 13:
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




	contenido() {
	    let localctx = new ContenidoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TraductorParser.RULE_contenido);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 40;
	        this.match(TraductorParser.VOID_MAIN);
	        this.state = 41;
	        this.match(TraductorParser.ALLAVE);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 36733448) !== 0)) {
	            this.state = 42;
	            this.relleno();
	            this.state = 47;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 48;
	        this.match(TraductorParser.CLLAVE);
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



	relleno() {
	    let localctx = new RellenoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TraductorParser.RULE_relleno);
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
	    this.enterRule(localctx, 4, TraductorParser.RULE_inicializacion);
	    var _la = 0;
	    try {
	        localctx = new IndefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this.match(TraductorParser.PR);
	        this.state = 61;
	        this.match(TraductorParser.ID);
	        this.state = 63;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 62;
	            this.match(TraductorParser.SEMI);
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
	    this.enterRule(localctx, 6, TraductorParser.RULE_declaracion);
	    var _la = 0;
	    try {
	        localctx = new DefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.match(TraductorParser.PR);
	        this.state = 66;
	        this.match(TraductorParser.ID);
	        this.state = 67;
	        this.match(TraductorParser.ASIGNACION);
	        this.state = 68;
	        this.valor(0);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 69;
	            this.match(TraductorParser.SEMI);
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
	    this.enterRule(localctx, 8, TraductorParser.RULE_asignacion);
	    var _la = 0;
	    try {
	        localctx = new AsignadoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(TraductorParser.ID);
	        this.state = 73;
	        this.match(TraductorParser.ASIGNACION);
	        this.state = 74;
	        this.valor(0);
	        this.state = 76;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 75;
	            this.match(TraductorParser.SEMI);
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
	    this.enterRule(localctx, 10, TraductorParser.RULE_print);
	    var _la = 0;
	    try {
	        localctx = new PrintValorContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(TraductorParser.PRINTF);
	        this.state = 79;
	        this.match(TraductorParser.APARENTESIS);
	        this.state = 80;
	        this.valor(0);
	        this.state = 81;
	        this.match(TraductorParser.CPARENTESIS);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 82;
	            this.match(TraductorParser.SEMI);
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
	    this.enterRule(localctx, 12, TraductorParser.RULE_if_estructuras);
	    var _la = 0;
	    try {
	        localctx = new EstructuraIfContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.if_();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 86;
	            this.else_if();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
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
	    this.enterRule(localctx, 14, TraductorParser.RULE_if);
	    var _la = 0;
	    try {
	        localctx = new IfPuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(TraductorParser.IF);
	        this.state = 96;
	        this.match(TraductorParser.APARENTESIS);
	        this.state = 97;
	        this.condiciones();
	        this.state = 98;
	        this.match(TraductorParser.CPARENTESIS);
	        this.state = 99;
	        this.abloque();
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 36733448) !== 0)) {
	            this.state = 100;
	            this.relleno();
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
	    this.enterRule(localctx, 16, TraductorParser.RULE_else_if);
	    var _la = 0;
	    try {
	        localctx = new ElseIfPuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.match(TraductorParser.ELSE_IF);
	        this.state = 109;
	        this.match(TraductorParser.APARENTESIS);
	        this.state = 110;
	        this.condiciones();
	        this.state = 111;
	        this.match(TraductorParser.CPARENTESIS);
	        this.state = 112;
	        this.abloque();
	        this.state = 116;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 36733448) !== 0)) {
	            this.state = 113;
	            this.relleno();
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
	    this.enterRule(localctx, 18, TraductorParser.RULE_else);
	    var _la = 0;
	    try {
	        localctx = new ElsePuroContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(TraductorParser.ELSE);
	        this.state = 122;
	        this.abloque();
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 36733448) !== 0)) {
	            this.state = 123;
	            this.relleno();
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
	    this.enterRule(localctx, 20, TraductorParser.RULE_ciclos);
	    try {
	        this.state = 133;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            localctx = new ReglaWhileContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 131;
	            this.while_();
	            break;
	        case 9:
	            localctx = new ReglaDoWhileContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 132;
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
	    this.enterRule(localctx, 22, TraductorParser.RULE_while);
	    var _la = 0;
	    try {
	        localctx = new CicloWhileContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(TraductorParser.WHILE);
	        this.state = 136;
	        this.match(TraductorParser.APARENTESIS);
	        this.state = 137;
	        this.condiciones();
	        this.state = 138;
	        this.match(TraductorParser.CPARENTESIS);
	        this.state = 139;
	        this.abloque();
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 36733448) !== 0)) {
	            this.state = 140;
	            this.relleno();
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 146;
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
	    this.enterRule(localctx, 24, TraductorParser.RULE_doWhile);
	    var _la = 0;
	    try {
	        localctx = new CicloDoWhileContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(TraductorParser.DO);
	        this.state = 149;
	        this.abloque();
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 36733448) !== 0)) {
	            this.state = 150;
	            this.relleno();
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 156;
	        this.cbloque();
	        this.state = 157;
	        this.match(TraductorParser.WHILE);
	        this.state = 158;
	        this.match(TraductorParser.APARENTESIS);
	        this.state = 159;
	        this.condiciones();
	        this.state = 160;
	        this.match(TraductorParser.CPARENTESIS);
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
	    this.enterRecursionRule(localctx, 26, TraductorParser.RULE_valor, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 33:
	            localctx = new ParentesisContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 163;
	            this.match(TraductorParser.APARENTESIS);
	            this.state = 164;
	            this.valor(0);
	            this.state = 165;
	            this.match(TraductorParser.CPARENTESIS);
	            break;
	        case 23:
	        case 24:
	            localctx = new TrueFalseContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 167;
	            _la = this._input.LA(1);
	            if(!(_la===23 || _la===24)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 26:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 168;
	            this.match(TraductorParser.NUM);
	            break;
	        case 28:
	            localctx = new DecimalContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 169;
	            this.match(TraductorParser.DEC);
	            break;
	        case 27:
	            localctx = new CadenasContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 170;
	            this.match(TraductorParser.CADENA);
	            break;
	        case 25:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 171;
	            this.match(TraductorParser.ID);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 191;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 189;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TraductorParser.RULE_valor);
	                    this.state = 174;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 175;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===36 || _la===37)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 176;
	                    this.valor(12);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TraductorParser.RULE_valor);
	                    this.state = 177;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 178;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===38 || _la===39)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 179;
	                    this.valor(11);
	                    break;

	                case 3:
	                    localctx = new ResiduoContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TraductorParser.RULE_valor);
	                    this.state = 180;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 181;
	                    this.match(TraductorParser.RESIDUO);
	                    this.state = 182;
	                    this.valor(10);
	                    break;

	                case 4:
	                    localctx = new ComparacionContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TraductorParser.RULE_valor);
	                    this.state = 183;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 184;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 255) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 185;
	                    this.valor(9);
	                    break;

	                case 5:
	                    localctx = new LogicasContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, TraductorParser.RULE_valor);
	                    this.state = 186;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 187;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===50 || _la===51)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 188;
	                    this.valor(8);
	                    break;

	                } 
	            }
	            this.state = 193;
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
	    this.enterRule(localctx, 28, TraductorParser.RULE_condiciones);
	    try {
	        localctx = new TrueOrFalseContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
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
	    this.enterRule(localctx, 30, TraductorParser.RULE_incremento);
	    var _la = 0;
	    try {
	        localctx = new IncrementarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.match(TraductorParser.ID);
	        this.state = 197;
	        this.match(TraductorParser.T__0);
	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 198;
	            this.match(TraductorParser.SEMI);
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
	    this.enterRule(localctx, 32, TraductorParser.RULE_decremento);
	    var _la = 0;
	    try {
	        localctx = new DecrementarContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.match(TraductorParser.ID);
	        this.state = 202;
	        this.match(TraductorParser.T__1);
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 203;
	            this.match(TraductorParser.SEMI);
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
	    this.enterRule(localctx, 34, TraductorParser.RULE_abloque);
	    try {
	        localctx = new AuxScopeDosContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(TraductorParser.ALLAVE);
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
	    this.enterRule(localctx, 36, TraductorParser.RULE_cbloque);
	    try {
	        localctx = new AuxScopeContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 208;
	        this.match(TraductorParser.CLLAVE);
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



	valores() {
	    let localctx = new ValoresContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, TraductorParser.RULE_valores);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        _la = this._input.LA(1);
	        if(!(_la===25 || _la===26)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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


}

TraductorParser.EOF = antlr4.Token.EOF;
TraductorParser.T__0 = 1;
TraductorParser.T__1 = 2;
TraductorParser.PR = 3;
TraductorParser.MAIN = 4;
TraductorParser.BREAK = 5;
TraductorParser.CASE = 6;
TraductorParser.CHAR = 7;
TraductorParser.CONST = 8;
TraductorParser.DO = 9;
TraductorParser.DOUBLE = 10;
TraductorParser.ELSE_IF = 11;
TraductorParser.ELSE = 12;
TraductorParser.FLOAT = 13;
TraductorParser.FOR = 14;
TraductorParser.IF = 15;
TraductorParser.INT = 16;
TraductorParser.SWITCH = 17;
TraductorParser.UNSIGNED = 18;
TraductorParser.VOID = 19;
TraductorParser.WHILE = 20;
TraductorParser.PRINTF = 21;
TraductorParser.VOID_MAIN = 22;
TraductorParser.TRUE = 23;
TraductorParser.FALSE = 24;
TraductorParser.ID = 25;
TraductorParser.NUM = 26;
TraductorParser.CADENA = 27;
TraductorParser.DEC = 28;
TraductorParser.SEMI = 29;
TraductorParser.COMA = 30;
TraductorParser.ALLAVE = 31;
TraductorParser.CLLAVE = 32;
TraductorParser.APARENTESIS = 33;
TraductorParser.CPARENTESIS = 34;
TraductorParser.AADMIRACION = 35;
TraductorParser.MUL = 36;
TraductorParser.DIV = 37;
TraductorParser.ADD = 38;
TraductorParser.SUB = 39;
TraductorParser.ASIGNACION = 40;
TraductorParser.MAYORQ = 41;
TraductorParser.MENORQ = 42;
TraductorParser.MAYOR_IGUAL = 43;
TraductorParser.MENOR_IGUAL = 44;
TraductorParser.IGUALDAD_DEBIL = 45;
TraductorParser.IGUALDAD_FUERTE = 46;
TraductorParser.DIF_DEBIL = 47;
TraductorParser.DIF_FUERTE = 48;
TraductorParser.RESIDUO = 49;
TraductorParser.OR = 50;
TraductorParser.AND = 51;
TraductorParser.WS = 52;

TraductorParser.RULE_contenido = 0;
TraductorParser.RULE_relleno = 1;
TraductorParser.RULE_inicializacion = 2;
TraductorParser.RULE_declaracion = 3;
TraductorParser.RULE_asignacion = 4;
TraductorParser.RULE_print = 5;
TraductorParser.RULE_if_estructuras = 6;
TraductorParser.RULE_if = 7;
TraductorParser.RULE_else_if = 8;
TraductorParser.RULE_else = 9;
TraductorParser.RULE_ciclos = 10;
TraductorParser.RULE_while = 11;
TraductorParser.RULE_doWhile = 12;
TraductorParser.RULE_valor = 13;
TraductorParser.RULE_condiciones = 14;
TraductorParser.RULE_incremento = 15;
TraductorParser.RULE_decremento = 16;
TraductorParser.RULE_abloque = 17;
TraductorParser.RULE_cbloque = 18;
TraductorParser.RULE_valores = 19;

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
        this.ruleIndex = TraductorParser.RULE_contenido;
    }

	VOID_MAIN() {
	    return this.getToken(TraductorParser.VOID_MAIN, 0);
	};

	ALLAVE() {
	    return this.getToken(TraductorParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(TraductorParser.CLLAVE, 0);
	};

	relleno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RellenoContext);
	    } else {
	        return this.getTypedRuleContext(RellenoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitContenido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RellenoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TraductorParser.RULE_relleno;
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
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitRelleno(this);
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
        this.ruleIndex = TraductorParser.RULE_inicializacion;
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
	    return this.getToken(TraductorParser.PR, 0);
	};

	ID() {
	    return this.getToken(TraductorParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(TraductorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitIndefinido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.IndefinidoContext = IndefinidoContext;

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
        this.ruleIndex = TraductorParser.RULE_declaracion;
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
	    return this.getToken(TraductorParser.PR, 0);
	};

	ID() {
	    return this.getToken(TraductorParser.ID, 0);
	};

	ASIGNACION() {
	    return this.getToken(TraductorParser.ASIGNACION, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMI() {
	    return this.getToken(TraductorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitDefinido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.DefinidoContext = DefinidoContext;

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
        this.ruleIndex = TraductorParser.RULE_asignacion;
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
	    return this.getToken(TraductorParser.ID, 0);
	};

	ASIGNACION() {
	    return this.getToken(TraductorParser.ASIGNACION, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	SEMI() {
	    return this.getToken(TraductorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitAsignado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.AsignadoContext = AsignadoContext;

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
        this.ruleIndex = TraductorParser.RULE_print;
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

	PRINTF() {
	    return this.getToken(TraductorParser.PRINTF, 0);
	};

	APARENTESIS() {
	    return this.getToken(TraductorParser.APARENTESIS, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(TraductorParser.CPARENTESIS, 0);
	};

	SEMI() {
	    return this.getToken(TraductorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitPrintValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.PrintValorContext = PrintValorContext;

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
        this.ruleIndex = TraductorParser.RULE_if_estructuras;
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
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitEstructuraIf(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.EstructuraIfContext = EstructuraIfContext;

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
        this.ruleIndex = TraductorParser.RULE_if;
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

	IF() {
	    return this.getToken(TraductorParser.IF, 0);
	};

	APARENTESIS() {
	    return this.getToken(TraductorParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(TraductorParser.CPARENTESIS, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	relleno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RellenoContext);
	    } else {
	        return this.getTypedRuleContext(RellenoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitIfPuro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.IfPuroContext = IfPuroContext;

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
        this.ruleIndex = TraductorParser.RULE_else_if;
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
	    return this.getToken(TraductorParser.ELSE_IF, 0);
	};

	APARENTESIS() {
	    return this.getToken(TraductorParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(TraductorParser.CPARENTESIS, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	relleno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RellenoContext);
	    } else {
	        return this.getTypedRuleContext(RellenoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitElseIfPuro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.ElseIfPuroContext = ElseIfPuroContext;

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
        this.ruleIndex = TraductorParser.RULE_else;
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
	    return this.getToken(TraductorParser.ELSE, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	relleno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RellenoContext);
	    } else {
	        return this.getTypedRuleContext(RellenoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitElsePuro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.ElsePuroContext = ElsePuroContext;

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
        this.ruleIndex = TraductorParser.RULE_ciclos;
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
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitReglaWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.ReglaWhileContext = ReglaWhileContext;

class ReglaDoWhileContext extends CiclosContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	doWhile() {
	    return this.getTypedRuleContext(DoWhileContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitReglaDoWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.ReglaDoWhileContext = ReglaDoWhileContext;

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
        this.ruleIndex = TraductorParser.RULE_while;
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
	    return this.getToken(TraductorParser.WHILE, 0);
	};

	APARENTESIS() {
	    return this.getToken(TraductorParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(TraductorParser.CPARENTESIS, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	relleno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RellenoContext);
	    } else {
	        return this.getTypedRuleContext(RellenoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitCicloWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.CicloWhileContext = CicloWhileContext;

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
        this.ruleIndex = TraductorParser.RULE_doWhile;
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
	    return this.getToken(TraductorParser.DO, 0);
	};

	abloque() {
	    return this.getTypedRuleContext(AbloqueContext,0);
	};

	cbloque() {
	    return this.getTypedRuleContext(CbloqueContext,0);
	};

	WHILE() {
	    return this.getToken(TraductorParser.WHILE, 0);
	};

	APARENTESIS() {
	    return this.getToken(TraductorParser.APARENTESIS, 0);
	};

	condiciones() {
	    return this.getTypedRuleContext(CondicionesContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(TraductorParser.CPARENTESIS, 0);
	};

	relleno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RellenoContext);
	    } else {
	        return this.getTypedRuleContext(RellenoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitCicloDoWhile(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.CicloDoWhileContext = CicloDoWhileContext;

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
        this.ruleIndex = TraductorParser.RULE_valor;
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
	    return this.getToken(TraductorParser.RESIDUO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitResiduo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.ResiduoContext = ResiduoContext;

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
	    return this.getToken(TraductorParser.MAYORQ, 0);
	};

	MENORQ() {
	    return this.getToken(TraductorParser.MENORQ, 0);
	};

	MAYOR_IGUAL() {
	    return this.getToken(TraductorParser.MAYOR_IGUAL, 0);
	};

	MENOR_IGUAL() {
	    return this.getToken(TraductorParser.MENOR_IGUAL, 0);
	};

	IGUALDAD_DEBIL() {
	    return this.getToken(TraductorParser.IGUALDAD_DEBIL, 0);
	};

	IGUALDAD_FUERTE() {
	    return this.getToken(TraductorParser.IGUALDAD_FUERTE, 0);
	};

	DIF_DEBIL() {
	    return this.getToken(TraductorParser.DIF_DEBIL, 0);
	};

	DIF_FUERTE() {
	    return this.getToken(TraductorParser.DIF_FUERTE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitComparacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.ComparacionContext = ComparacionContext;

class NumeroContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(TraductorParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.NumeroContext = NumeroContext;

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
	    return this.getToken(TraductorParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(TraductorParser.DIV, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.MulDivContext = MulDivContext;

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
	    return this.getToken(TraductorParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(TraductorParser.SUB, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.AddSubContext = AddSubContext;

class ParentesisContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	APARENTESIS() {
	    return this.getToken(TraductorParser.APARENTESIS, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	CPARENTESIS() {
	    return this.getToken(TraductorParser.CPARENTESIS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitParentesis(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.ParentesisContext = ParentesisContext;

class TrueFalseContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(TraductorParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(TraductorParser.FALSE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitTrueFalse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.TrueFalseContext = TrueFalseContext;

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
	    return this.getToken(TraductorParser.OR, 0);
	};

	AND() {
	    return this.getToken(TraductorParser.AND, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitLogicas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.LogicasContext = LogicasContext;

class IdContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(TraductorParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.IdContext = IdContext;

class DecimalContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEC() {
	    return this.getToken(TraductorParser.DEC, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitDecimal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.DecimalContext = DecimalContext;

class CadenasContext extends ValorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CADENA() {
	    return this.getToken(TraductorParser.CADENA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitCadenas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.CadenasContext = CadenasContext;

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
        this.ruleIndex = TraductorParser.RULE_condiciones;
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
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitTrueOrFalse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.TrueOrFalseContext = TrueOrFalseContext;

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
        this.ruleIndex = TraductorParser.RULE_incremento;
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
	    return this.getToken(TraductorParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(TraductorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitIncrementar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.IncrementarContext = IncrementarContext;

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
        this.ruleIndex = TraductorParser.RULE_decremento;
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
	    return this.getToken(TraductorParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(TraductorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitDecrementar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.DecrementarContext = DecrementarContext;

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
        this.ruleIndex = TraductorParser.RULE_abloque;
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
	    return this.getToken(TraductorParser.ALLAVE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitAuxScopeDos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.AuxScopeDosContext = AuxScopeDosContext;

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
        this.ruleIndex = TraductorParser.RULE_cbloque;
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
	    return this.getToken(TraductorParser.CLLAVE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitAuxScope(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

TraductorParser.AuxScopeContext = AuxScopeContext;

class ValoresContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TraductorParser.RULE_valores;
    }

	ID() {
	    return this.getToken(TraductorParser.ID, 0);
	};

	NUM() {
	    return this.getToken(TraductorParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitValores(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TraductorParser.ContenidoContext = ContenidoContext; 
TraductorParser.RellenoContext = RellenoContext; 
TraductorParser.InicializacionContext = InicializacionContext; 
TraductorParser.DeclaracionContext = DeclaracionContext; 
TraductorParser.AsignacionContext = AsignacionContext; 
TraductorParser.PrintContext = PrintContext; 
TraductorParser.If_estructurasContext = If_estructurasContext; 
TraductorParser.IfContext = IfContext; 
TraductorParser.Else_ifContext = Else_ifContext; 
TraductorParser.ElseContext = ElseContext; 
TraductorParser.CiclosContext = CiclosContext; 
TraductorParser.WhileContext = WhileContext; 
TraductorParser.DoWhileContext = DoWhileContext; 
TraductorParser.ValorContext = ValorContext; 
TraductorParser.CondicionesContext = CondicionesContext; 
TraductorParser.IncrementoContext = IncrementoContext; 
TraductorParser.DecrementoContext = DecrementoContext; 
TraductorParser.AbloqueContext = AbloqueContext; 
TraductorParser.CbloqueContext = CbloqueContext; 
TraductorParser.ValoresContext = ValoresContext; 
