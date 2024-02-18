// Generated from ./grammar/ArrayInit.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ArrayInitVisitor from './ArrayInitVisitor.js';

const serializedATN = [4,1,14,56,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,0,1,0,1,1,5,1,17,8,1,10,1,12,1,20,9,1,1,1,5,1,23,8,1,10,1,
12,1,26,9,1,3,1,28,8,1,1,2,1,2,1,2,3,2,33,8,2,1,3,1,3,1,3,1,3,1,3,3,3,40,
8,3,1,3,1,3,1,3,1,3,3,3,46,8,3,3,3,48,8,3,1,4,1,4,1,4,1,4,3,4,54,8,4,1,4,
0,0,5,0,2,4,6,8,0,0,60,0,10,1,0,0,0,2,27,1,0,0,0,4,29,1,0,0,0,6,47,1,0,0,
0,8,53,1,0,0,0,10,11,5,1,0,0,11,12,5,2,0,0,12,13,3,2,1,0,13,14,5,3,0,0,14,
1,1,0,0,0,15,17,3,4,2,0,16,15,1,0,0,0,17,20,1,0,0,0,18,16,1,0,0,0,18,19,
1,0,0,0,19,28,1,0,0,0,20,18,1,0,0,0,21,23,3,6,3,0,22,21,1,0,0,0,23,26,1,
0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,27,18,1,0,
0,0,27,24,1,0,0,0,28,3,1,0,0,0,29,30,5,4,0,0,30,32,5,8,0,0,31,33,5,13,0,
0,32,31,1,0,0,0,32,33,1,0,0,0,33,5,1,0,0,0,34,35,5,4,0,0,35,36,5,8,0,0,36,
37,5,12,0,0,37,39,3,8,4,0,38,40,5,13,0,0,39,38,1,0,0,0,39,40,1,0,0,0,40,
48,1,0,0,0,41,42,5,8,0,0,42,43,5,12,0,0,43,45,3,8,4,0,44,46,5,13,0,0,45,
44,1,0,0,0,45,46,1,0,0,0,46,48,1,0,0,0,47,34,1,0,0,0,47,41,1,0,0,0,48,7,
1,0,0,0,49,54,5,9,0,0,50,54,5,10,0,0,51,54,5,8,0,0,52,54,5,11,0,0,53,49,
1,0,0,0,53,50,1,0,0,0,53,51,1,0,0,0,53,52,1,0,0,0,54,9,1,0,0,0,8,18,24,27,
32,39,45,47,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ArrayInitParser extends antlr4.Parser {

    static grammarFileName = "ArrayInit.g4";
    static literalNames = [ null, "'TPG'", "'{'", "'}'", null, "'int'", 
                            "'float'", "'char'", null, null, null, null, 
                            "'='", "';'" ];
    static symbolicNames = [ null, null, null, null, "PR", "INT", "FLOAT", 
                             "CHAR", "ID", "NUM", "DEC", "CADENAS", "IGUAL", 
                             "SEMICOLON", "WS" ];
    static ruleNames = [ "init", "contenido", "declaraciones", "asignaciones", 
                         "valores" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ArrayInitParser.ruleNames;
        this.literalNames = ArrayInitParser.literalNames;
        this.symbolicNames = ArrayInitParser.symbolicNames;
    }



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ArrayInitParser.RULE_init);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(ArrayInitParser.T__0);
	        this.state = 11;
	        this.match(ArrayInitParser.T__1);
	        this.state = 12;
	        this.contenido();
	        this.state = 13;
	        this.match(ArrayInitParser.T__2);
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
	    this.enterRule(localctx, 2, ArrayInitParser.RULE_contenido);
	    var _la = 0;
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PrintDeclaracionesContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 15;
	                this.declaraciones();
	                this.state = 20;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            localctx = new PrintAsignacionesContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4 || _la===8) {
	                this.state = 21;
	                this.asignaciones();
	                this.state = 26;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
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



	declaraciones() {
	    let localctx = new DeclaracionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ArrayInitParser.RULE_declaraciones);
	    var _la = 0;
	    try {
	        localctx = new IndefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(ArrayInitParser.PR);
	        this.state = 30;
	        this.match(ArrayInitParser.ID);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 31;
	            this.match(ArrayInitParser.SEMICOLON);
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



	asignaciones() {
	    let localctx = new AsignacionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ArrayInitParser.RULE_asignaciones);
	    var _la = 0;
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new DefinidoContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.match(ArrayInitParser.PR);
	            this.state = 35;
	            this.match(ArrayInitParser.ID);
	            this.state = 36;
	            this.match(ArrayInitParser.IGUAL);
	            this.state = 37;
	            this.valores();
	            this.state = 39;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 38;
	                this.match(ArrayInitParser.SEMICOLON);
	            }

	            break;
	        case 8:
	            localctx = new AsignacionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.match(ArrayInitParser.ID);
	            this.state = 42;
	            this.match(ArrayInitParser.IGUAL);
	            this.state = 43;
	            this.valores();
	            this.state = 45;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 44;
	                this.match(ArrayInitParser.SEMICOLON);
	            }

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



	valores() {
	    let localctx = new ValoresContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ArrayInitParser.RULE_valores);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            localctx = new NumeroContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 49;
	            this.match(ArrayInitParser.NUM);
	            break;
	        case 10:
	            localctx = new DecimalContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 50;
	            this.match(ArrayInitParser.DEC);
	            break;
	        case 8:
	            localctx = new IdContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 51;
	            this.match(ArrayInitParser.ID);
	            break;
	        case 11:
	            localctx = new CadenasContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 52;
	            this.match(ArrayInitParser.CADENAS);
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


}

ArrayInitParser.EOF = antlr4.Token.EOF;
ArrayInitParser.T__0 = 1;
ArrayInitParser.T__1 = 2;
ArrayInitParser.T__2 = 3;
ArrayInitParser.PR = 4;
ArrayInitParser.INT = 5;
ArrayInitParser.FLOAT = 6;
ArrayInitParser.CHAR = 7;
ArrayInitParser.ID = 8;
ArrayInitParser.NUM = 9;
ArrayInitParser.DEC = 10;
ArrayInitParser.CADENAS = 11;
ArrayInitParser.IGUAL = 12;
ArrayInitParser.SEMICOLON = 13;
ArrayInitParser.WS = 14;

ArrayInitParser.RULE_init = 0;
ArrayInitParser.RULE_contenido = 1;
ArrayInitParser.RULE_declaraciones = 2;
ArrayInitParser.RULE_asignaciones = 3;
ArrayInitParser.RULE_valores = 4;

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
        this.ruleIndex = ArrayInitParser.RULE_init;
    }

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
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
        this.ruleIndex = ArrayInitParser.RULE_contenido;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrintDeclaracionesContext extends ContenidoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	declaraciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionesContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionesContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitPrintDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.PrintDeclaracionesContext = PrintDeclaracionesContext;

class PrintAsignacionesContext extends ContenidoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	asignaciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AsignacionesContext);
	    } else {
	        return this.getTypedRuleContext(AsignacionesContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitPrintAsignaciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.PrintAsignacionesContext = PrintAsignacionesContext;

class DeclaracionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_declaraciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IndefinidoContext extends DeclaracionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PR() {
	    return this.getToken(ArrayInitParser.PR, 0);
	};

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	SEMICOLON() {
	    return this.getToken(ArrayInitParser.SEMICOLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitIndefinido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.IndefinidoContext = IndefinidoContext;

class AsignacionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArrayInitParser.RULE_asignaciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AsignacionContext extends AsignacionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(ArrayInitParser.IGUAL, 0);
	};

	valores() {
	    return this.getTypedRuleContext(ValoresContext,0);
	};

	SEMICOLON() {
	    return this.getToken(ArrayInitParser.SEMICOLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.AsignacionContext = AsignacionContext;

class DefinidoContext extends AsignacionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PR() {
	    return this.getToken(ArrayInitParser.PR, 0);
	};

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(ArrayInitParser.IGUAL, 0);
	};

	valores() {
	    return this.getTypedRuleContext(ValoresContext,0);
	};

	SEMICOLON() {
	    return this.getToken(ArrayInitParser.SEMICOLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitDefinido(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.DefinidoContext = DefinidoContext;

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
        this.ruleIndex = ArrayInitParser.RULE_valores;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NumeroContext extends ValoresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUM() {
	    return this.getToken(ArrayInitParser.NUM, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.NumeroContext = NumeroContext;

class IdContext extends ValoresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(ArrayInitParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.IdContext = IdContext;

class DecimalContext extends ValoresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DEC() {
	    return this.getToken(ArrayInitParser.DEC, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitDecimal(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.DecimalContext = DecimalContext;

class CadenasContext extends ValoresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CADENAS() {
	    return this.getToken(ArrayInitParser.CADENAS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof ArrayInitVisitor ) {
	        return visitor.visitCadenas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ArrayInitParser.CadenasContext = CadenasContext;


ArrayInitParser.InitContext = InitContext; 
ArrayInitParser.ContenidoContext = ContenidoContext; 
ArrayInitParser.DeclaracionesContext = DeclaracionesContext; 
ArrayInitParser.AsignacionesContext = AsignacionesContext; 
ArrayInitParser.ValoresContext = ValoresContext; 
