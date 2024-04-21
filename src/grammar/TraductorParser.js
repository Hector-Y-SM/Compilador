// Generated from ./grammar/Traductor.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import TraductorVisitor from './TraductorVisitor.js';

const serializedATN = [4,1,71,18,2,0,7,0,2,1,7,1,2,2,7,2,1,0,1,0,5,0,9,8,
0,10,0,12,0,12,9,0,1,1,1,1,1,2,1,2,1,2,1,10,0,3,0,2,4,0,2,10,0,1,5,9,12,
15,16,18,19,22,22,28,28,32,32,34,34,36,36,45,45,1,0,46,70,16,0,10,1,0,0,
0,2,13,1,0,0,0,4,15,1,0,0,0,6,9,3,2,1,0,7,9,3,4,2,0,8,6,1,0,0,0,8,7,1,0,
0,0,9,12,1,0,0,0,10,11,1,0,0,0,10,8,1,0,0,0,11,1,1,0,0,0,12,10,1,0,0,0,13,
14,7,0,0,0,14,3,1,0,0,0,15,16,7,1,0,0,16,5,1,0,0,0,2,8,10];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TraductorParser extends antlr4.Parser {

    static grammarFileName = "Traductor.g4";
    static literalNames = [ null, "'main'", "'auto'", "'break'", "'case'", 
                            "'char'", "'const'", "'continue'", "'default'", 
                            "'do'", "'double'", "'else if'", "'else'", "'enum'", 
                            "'extern'", "'float'", "'for'", "'goto'", "'if'", 
                            "'int'", "'long'", "'register'", "'return'", 
                            "'short'", "'signed'", "'sizeof'", "'static'", 
                            "'struct'", "'switch'", "'typedef'", "'union'", 
                            "'unsigned'", "'void'", "'volatile'", "'while'", 
                            "'include'", "'printf'", "'scanf'", "'fprintf'", 
                            "'fscanf'", "'sprintf'", "'fseek'", "'fopen'", 
                            "'fclose'", "'getch'", "'void main()'", null, 
                            null, null, null, "';'", "'{'", "'}'", "'('", 
                            "')'", "'!'", "'*'", "'/'", "'+'", "'-'", "'='", 
                            "'>'", "'<'", "'>='", "'<='", "'=='", "'==='", 
                            "'!='", "'!=='", "'||'", "'&&'" ];
    static symbolicNames = [ null, "MAIN", "AUTO", "BREAK", "CASE", "CHAR", 
                             "CONST", "CONTINUE", "DEFAULT", "DO", "DOUBLE", 
                             "ELSE_IF", "ELSE", "ENUM", "EXTERN", "FLOAT", 
                             "FOR", "GOTO", "IF", "INT", "LONG", "REGISTER", 
                             "RETURN", "SHORT", "SIGNED", "SIZEOF", "STATIC", 
                             "STRUCT", "SWITCH", "TYPEDEF", "UNION", "UNSIGNED", 
                             "VOID", "VOLATILE", "WHILE", "INCLUDE", "PRINTF", 
                             "SCANF", "FPRINTF", "FSCANF", "SPRINTF", "FSEEK", 
                             "FOPEN", "FCLOSE", "GETCH", "VOID_MAIN", "ID", 
                             "NUM", "CADENA", "DEC", "SEMI", "ALLAVE", "CLLAVE", 
                             "APARENTESIS", "CPARENTESIS", "AADMIRACION", 
                             "MUL", "DIV", "ADD", "SUB", "ASIGNACION", "MAYORQ", 
                             "MENORQ", "MAYOR_IGUAL", "MENOR_IGUAL", "IGUALDAD_DEBIL", 
                             "IGUALDAD_FUERTE", "DIF_DEBIL", "DIF_FUERTE", 
                             "OR", "AND", "WS" ];
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
	                case 5:
	                case 9:
	                case 10:
	                case 11:
	                case 12:
	                case 15:
	                case 16:
	                case 18:
	                case 19:
	                case 22:
	                case 28:
	                case 32:
	                case 34:
	                case 36:
	                case 45:
	                    this.state = 6;
	                    this.pr();
	                    break;
	                case 46:
	                case 47:
	                case 48:
	                case 49:
	                case 50:
	                case 51:
	                case 52:
	                case 53:
	                case 54:
	                case 55:
	                case 56:
	                case 57:
	                case 58:
	                case 59:
	                case 60:
	                case 61:
	                case 62:
	                case 63:
	                case 64:
	                case 65:
	                case 66:
	                case 67:
	                case 68:
	                case 69:
	                case 70:
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
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 273522238) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 8213) !== 0))) {
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
	        if(!(((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 33554431) !== 0))) {
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
TraductorParser.AUTO = 2;
TraductorParser.BREAK = 3;
TraductorParser.CASE = 4;
TraductorParser.CHAR = 5;
TraductorParser.CONST = 6;
TraductorParser.CONTINUE = 7;
TraductorParser.DEFAULT = 8;
TraductorParser.DO = 9;
TraductorParser.DOUBLE = 10;
TraductorParser.ELSE_IF = 11;
TraductorParser.ELSE = 12;
TraductorParser.ENUM = 13;
TraductorParser.EXTERN = 14;
TraductorParser.FLOAT = 15;
TraductorParser.FOR = 16;
TraductorParser.GOTO = 17;
TraductorParser.IF = 18;
TraductorParser.INT = 19;
TraductorParser.LONG = 20;
TraductorParser.REGISTER = 21;
TraductorParser.RETURN = 22;
TraductorParser.SHORT = 23;
TraductorParser.SIGNED = 24;
TraductorParser.SIZEOF = 25;
TraductorParser.STATIC = 26;
TraductorParser.STRUCT = 27;
TraductorParser.SWITCH = 28;
TraductorParser.TYPEDEF = 29;
TraductorParser.UNION = 30;
TraductorParser.UNSIGNED = 31;
TraductorParser.VOID = 32;
TraductorParser.VOLATILE = 33;
TraductorParser.WHILE = 34;
TraductorParser.INCLUDE = 35;
TraductorParser.PRINTF = 36;
TraductorParser.SCANF = 37;
TraductorParser.FPRINTF = 38;
TraductorParser.FSCANF = 39;
TraductorParser.SPRINTF = 40;
TraductorParser.FSEEK = 41;
TraductorParser.FOPEN = 42;
TraductorParser.FCLOSE = 43;
TraductorParser.GETCH = 44;
TraductorParser.VOID_MAIN = 45;
TraductorParser.ID = 46;
TraductorParser.NUM = 47;
TraductorParser.CADENA = 48;
TraductorParser.DEC = 49;
TraductorParser.SEMI = 50;
TraductorParser.ALLAVE = 51;
TraductorParser.CLLAVE = 52;
TraductorParser.APARENTESIS = 53;
TraductorParser.CPARENTESIS = 54;
TraductorParser.AADMIRACION = 55;
TraductorParser.MUL = 56;
TraductorParser.DIV = 57;
TraductorParser.ADD = 58;
TraductorParser.SUB = 59;
TraductorParser.ASIGNACION = 60;
TraductorParser.MAYORQ = 61;
TraductorParser.MENORQ = 62;
TraductorParser.MAYOR_IGUAL = 63;
TraductorParser.MENOR_IGUAL = 64;
TraductorParser.IGUALDAD_DEBIL = 65;
TraductorParser.IGUALDAD_FUERTE = 66;
TraductorParser.DIF_DEBIL = 67;
TraductorParser.DIF_FUERTE = 68;
TraductorParser.OR = 69;
TraductorParser.AND = 70;
TraductorParser.WS = 71;

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

	AUTO() {
	    return this.getToken(TraductorParser.AUTO, 0);
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

	RETURN() {
	    return this.getToken(TraductorParser.RETURN, 0);
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
