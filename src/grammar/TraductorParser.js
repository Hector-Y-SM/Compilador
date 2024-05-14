// Generated from ./grammar/Traductor.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TraductorVisitor from './TraductorVisitor.js';

const serializedATN = [4,1,49,18,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,5,0,9,8,
0,10,0,12,0,12,9,0,1,1,1,1,1,2,1,2,1,2,1,10,0,3,0,2,4,0,2,3,0,1,4,6,14,16,
19,3,0,22,26,28,45,47,48,16,0,10,1,0,0,0,2,13,1,0,0,0,4,15,1,0,0,0,6,9,3,
2,1,0,7,9,3,4,2,0,8,6,1,0,0,0,8,7,1,0,0,0,9,12,1,0,0,0,10,11,1,0,0,0,10,
8,1,0,0,0,11,1,1,0,0,0,12,10,1,0,0,0,13,14,7,0,0,0,14,3,1,0,0,0,15,16,7,
1,0,0,16,5,1,0,0,0,2,8,10];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TraductorParser extends antlr4.Parser {

    static grammarFileName = "Traductor.g4";
    static literalNames = [ null, "'main'", "'break'", "'case'", "'char'", 
                            "'const'", "'do'", "'double'", "'else if'", 
                            "'else'", "'float'", "'for'", "'if'", "'int'", 
                            "'switch'", "'unsigned'", "'void'", "'while'", 
                            "'printf'", "'void main()'", "'true'", "'false'", 
                            null, null, null, null, "';'", "','", "'{'", 
                            "'}'", "'('", "')'", "'!'", "'*'", "'/'", "'+'", 
                            "'-'", "'='", "'>'", "'<'", "'>='", "'<='", 
                            "'=='", "'==='", "'!='", "'!=='", "'%'", "'||'", 
                            "'&&'" ];
    static symbolicNames = [ null, "MAIN", "BREAK", "CASE", "CHAR", "CONST", 
                             "DO", "DOUBLE", "ELSE_IF", "ELSE", "FLOAT", 
                             "FOR", "IF", "INT", "SWITCH", "UNSIGNED", "VOID", 
                             "WHILE", "PRINTF", "VOID_MAIN", "TRUE", "FALSE", 
                             "ID", "NUM", "CADENA", "DEC", "SEMI", "COMA", 
                             "ALLAVE", "CLLAVE", "APARENTESIS", "CPARENTESIS", 
                             "AADMIRACION", "MUL", "DIV", "ADD", "SUB", 
                             "ASIGNACION", "MAYORQ", "MENORQ", "MAYOR_IGUAL", 
                             "MENOR_IGUAL", "IGUALDAD_DEBIL", "IGUALDAD_FUERTE", 
                             "DIF_DEBIL", "DIF_FUERTE", "RESIDUO", "OR", 
                             "AND", "WS" ];
    static ruleNames = [ "contenido", "pr", "varios" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TraductorParser.ruleNames;
        this.literalNames = TraductorParser.literalNames;
        this.symbolicNames = TraductorParser.symbolicNames;
    }



	contenido() {
	    let localctx = new ContenidoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TraductorParser.RULE_contenido);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1+1) {
	                this.state = 8;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 1:
	                case 2:
	                case 3:
	                case 4:
	                case 6:
	                case 7:
	                case 8:
	                case 9:
	                case 10:
	                case 11:
	                case 12:
	                case 13:
	                case 14:
	                case 16:
	                case 17:
	                case 18:
	                case 19:
	                    this.state = 6;
	                    this.pr();
	                    break;
	                case 22:
	                case 23:
	                case 24:
	                case 25:
	                case 26:
	                case 28:
	                case 29:
	                case 30:
	                case 31:
	                case 32:
	                case 33:
	                case 34:
	                case 35:
	                case 36:
	                case 37:
	                case 38:
	                case 39:
	                case 40:
	                case 41:
	                case 42:
	                case 43:
	                case 44:
	                case 45:
	                case 47:
	                case 48:
	                    this.state = 7;
	                    this.varios();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 12;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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



	pr() {
	    let localctx = new PrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TraductorParser.RULE_pr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1015774) !== 0))) {
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



	varios() {
	    let localctx = new VariosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TraductorParser.RULE_varios);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        _la = this._input.LA(1);
	        if(!(((((_la - 22)) & ~0x1f) === 0 && ((1 << (_la - 22)) & 117440479) !== 0))) {
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
TraductorParser.MAIN = 1;
TraductorParser.BREAK = 2;
TraductorParser.CASE = 3;
TraductorParser.CHAR = 4;
TraductorParser.CONST = 5;
TraductorParser.DO = 6;
TraductorParser.DOUBLE = 7;
TraductorParser.ELSE_IF = 8;
TraductorParser.ELSE = 9;
TraductorParser.FLOAT = 10;
TraductorParser.FOR = 11;
TraductorParser.IF = 12;
TraductorParser.INT = 13;
TraductorParser.SWITCH = 14;
TraductorParser.UNSIGNED = 15;
TraductorParser.VOID = 16;
TraductorParser.WHILE = 17;
TraductorParser.PRINTF = 18;
TraductorParser.VOID_MAIN = 19;
TraductorParser.TRUE = 20;
TraductorParser.FALSE = 21;
TraductorParser.ID = 22;
TraductorParser.NUM = 23;
TraductorParser.CADENA = 24;
TraductorParser.DEC = 25;
TraductorParser.SEMI = 26;
TraductorParser.COMA = 27;
TraductorParser.ALLAVE = 28;
TraductorParser.CLLAVE = 29;
TraductorParser.APARENTESIS = 30;
TraductorParser.CPARENTESIS = 31;
TraductorParser.AADMIRACION = 32;
TraductorParser.MUL = 33;
TraductorParser.DIV = 34;
TraductorParser.ADD = 35;
TraductorParser.SUB = 36;
TraductorParser.ASIGNACION = 37;
TraductorParser.MAYORQ = 38;
TraductorParser.MENORQ = 39;
TraductorParser.MAYOR_IGUAL = 40;
TraductorParser.MENOR_IGUAL = 41;
TraductorParser.IGUALDAD_DEBIL = 42;
TraductorParser.IGUALDAD_FUERTE = 43;
TraductorParser.DIF_DEBIL = 44;
TraductorParser.DIF_FUERTE = 45;
TraductorParser.RESIDUO = 46;
TraductorParser.OR = 47;
TraductorParser.AND = 48;
TraductorParser.WS = 49;

TraductorParser.RULE_contenido = 0;
TraductorParser.RULE_pr = 1;
TraductorParser.RULE_varios = 2;

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

	pr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrContext);
	    } else {
	        return this.getTypedRuleContext(PrContext,i);
	    }
	};

	varios = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariosContext);
	    } else {
	        return this.getTypedRuleContext(VariosContext,i);
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



class PrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TraductorParser.RULE_pr;
    }

	VOID_MAIN() {
	    return this.getToken(TraductorParser.VOID_MAIN, 0);
	};

	MAIN() {
	    return this.getToken(TraductorParser.MAIN, 0);
	};

	BREAK() {
	    return this.getToken(TraductorParser.BREAK, 0);
	};

	CASE() {
	    return this.getToken(TraductorParser.CASE, 0);
	};

	CHAR() {
	    return this.getToken(TraductorParser.CHAR, 0);
	};

	DO() {
	    return this.getToken(TraductorParser.DO, 0);
	};

	DOUBLE() {
	    return this.getToken(TraductorParser.DOUBLE, 0);
	};

	ELSE_IF() {
	    return this.getToken(TraductorParser.ELSE_IF, 0);
	};

	ELSE() {
	    return this.getToken(TraductorParser.ELSE, 0);
	};

	FLOAT() {
	    return this.getToken(TraductorParser.FLOAT, 0);
	};

	FOR() {
	    return this.getToken(TraductorParser.FOR, 0);
	};

	IF() {
	    return this.getToken(TraductorParser.IF, 0);
	};

	INT() {
	    return this.getToken(TraductorParser.INT, 0);
	};

	SWITCH() {
	    return this.getToken(TraductorParser.SWITCH, 0);
	};

	VOID() {
	    return this.getToken(TraductorParser.VOID, 0);
	};

	WHILE() {
	    return this.getToken(TraductorParser.WHILE, 0);
	};

	PRINTF() {
	    return this.getToken(TraductorParser.PRINTF, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitPr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TraductorParser.RULE_varios;
    }

	ID() {
	    return this.getToken(TraductorParser.ID, 0);
	};

	NUM() {
	    return this.getToken(TraductorParser.NUM, 0);
	};

	CADENA() {
	    return this.getToken(TraductorParser.CADENA, 0);
	};

	DEC() {
	    return this.getToken(TraductorParser.DEC, 0);
	};

	APARENTESIS() {
	    return this.getToken(TraductorParser.APARENTESIS, 0);
	};

	CPARENTESIS() {
	    return this.getToken(TraductorParser.CPARENTESIS, 0);
	};

	ALLAVE() {
	    return this.getToken(TraductorParser.ALLAVE, 0);
	};

	CLLAVE() {
	    return this.getToken(TraductorParser.CLLAVE, 0);
	};

	AADMIRACION() {
	    return this.getToken(TraductorParser.AADMIRACION, 0);
	};

	MUL() {
	    return this.getToken(TraductorParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(TraductorParser.DIV, 0);
	};

	ADD() {
	    return this.getToken(TraductorParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(TraductorParser.SUB, 0);
	};

	ASIGNACION() {
	    return this.getToken(TraductorParser.ASIGNACION, 0);
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

	OR() {
	    return this.getToken(TraductorParser.OR, 0);
	};

	AND() {
	    return this.getToken(TraductorParser.AND, 0);
	};

	SEMI() {
	    return this.getToken(TraductorParser.SEMI, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof TraductorVisitor ) {
	        return visitor.visitVarios(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




TraductorParser.ContenidoContext = ContenidoContext; 
TraductorParser.PrContext = PrContext; 
TraductorParser.VariosContext = VariosContext; 
