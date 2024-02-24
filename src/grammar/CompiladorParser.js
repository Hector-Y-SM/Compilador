// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,16,50,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,5,1,21,8,1,10,1,12,1,24,9,1,1,2,
1,2,1,2,3,2,29,8,2,1,3,1,3,1,3,1,3,1,3,3,3,36,8,3,1,4,1,4,1,4,1,4,3,4,42,
8,4,1,5,1,5,1,5,1,5,3,5,48,8,5,1,5,0,0,6,0,2,4,6,8,10,0,0,52,0,12,1,0,0,
0,2,22,1,0,0,0,4,25,1,0,0,0,6,30,1,0,0,0,8,37,1,0,0,0,10,47,1,0,0,0,12,13,
5,1,0,0,13,14,5,2,0,0,14,15,3,2,1,0,15,16,5,3,0,0,16,1,1,0,0,0,17,21,3,4,
2,0,18,21,3,6,3,0,19,21,3,8,4,0,20,17,1,0,0,0,20,18,1,0,0,0,20,19,1,0,0,
0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,3,1,0,0,0,24,22,1,0,0,0,25,
26,5,4,0,0,26,28,5,8,0,0,27,29,5,13,0,0,28,27,1,0,0,0,28,29,1,0,0,0,29,5,
1,0,0,0,30,31,5,4,0,0,31,32,5,8,0,0,32,33,5,12,0,0,33,35,3,10,5,0,34,36,
5,13,0,0,35,34,1,0,0,0,35,36,1,0,0,0,36,7,1,0,0,0,37,38,5,8,0,0,38,39,5,
12,0,0,39,41,3,10,5,0,40,42,5,13,0,0,41,40,1,0,0,0,41,42,1,0,0,0,42,9,1,
0,0,0,43,48,5,9,0,0,44,48,5,10,0,0,45,48,5,8,0,0,46,48,5,11,0,0,47,43,1,
0,0,0,47,44,1,0,0,0,47,45,1,0,0,0,47,46,1,0,0,0,48,11,1,0,0,0,6,20,22,28,
35,41,47];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, "'TPG'", "'{'", "'}'", null, "'nc'", "'im'", 
                            "'jgl'", null, null, null, null, "'='", "';'", 
                            "'\\u00BF'", "'?'" ];
    static symbolicNames = [ null, null, null, null, "PR", "INT", "FLOAT", 
                             "CHAR", "ID", "NUM", "DEC", "CADENAS", "IGUAL", 
                             "SEMICOLON", "APREGUNTA", "CPREGUNTA", "WS" ];
    static ruleNames = [ "init", "contenido", "declaraciones", "asignacionesDeclarada", 
                         "asignacionInicializada", "valores" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompiladorParser.ruleNames;
        this.literalNames = CompiladorParser.literalNames;
        this.symbolicNames = CompiladorParser.symbolicNames;
    }



	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CompiladorParser.RULE_init);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.match(CompiladorParser.T__0);
	        this.state = 13;
	        this.match(CompiladorParser.T__1);
	        this.state = 14;
	        this.contenido();
	        this.state = 15;
	        this.match(CompiladorParser.T__2);
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
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===4 || _la===8) {
	            this.state = 20;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 17;
	                this.declaraciones();
	                break;

	            case 2:
	                this.state = 18;
	                this.asignacionesDeclarada();
	                break;

	            case 3:
	                this.state = 19;
	                this.asignacionInicializada();
	                break;

	            }
	            this.state = 24;
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



	declaraciones() {
	    let localctx = new DeclaracionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CompiladorParser.RULE_declaraciones);
	    var _la = 0;
	    try {
	        localctx = new IndefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.match(CompiladorParser.PR);
	        this.state = 26;
	        this.match(CompiladorParser.ID);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 27;
	            this.match(CompiladorParser.SEMICOLON);
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



	asignacionesDeclarada() {
	    let localctx = new AsignacionesDeclaradaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CompiladorParser.RULE_asignacionesDeclarada);
	    var _la = 0;
	    try {
	        localctx = new DefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(CompiladorParser.PR);
	        this.state = 31;
	        this.match(CompiladorParser.ID);
	        this.state = 32;
	        this.match(CompiladorParser.IGUAL);
	        this.state = 33;
	        this.valores();
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 34;
	            this.match(CompiladorParser.SEMICOLON);
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



	asignacionInicializada() {
	    let localctx = new AsignacionInicializadaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CompiladorParser.RULE_asignacionInicializada);
	    var _la = 0;
	    try {
	        localctx = new AsignacionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(CompiladorParser.ID);
	        this.state = 38;
	        this.match(CompiladorParser.IGUAL);
	        this.state = 39;
	        this.valores();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 40;
	            this.match(CompiladorParser.SEMICOLON);
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
	    this.enterRule(localctx, 10, CompiladorParser.RULE_valores);
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            localctx = new NumeroContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 43;
	            this.match(CompiladorParser.NUM);
	            break;
	        case 10:
	            localctx = new DecimalContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.match(CompiladorParser.DEC);
	            break;
	        case 8:
	            localctx = new IdContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 45;
	            this.match(CompiladorParser.ID);
	            break;
	        case 11:
	            localctx = new CadenasContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 46;
	            this.match(CompiladorParser.CADENAS);
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

CompiladorParser.EOF = antlr4.Token.EOF;
CompiladorParser.T__0 = 1;
CompiladorParser.T__1 = 2;
CompiladorParser.T__2 = 3;
CompiladorParser.PR = 4;
CompiladorParser.INT = 5;
CompiladorParser.FLOAT = 6;
CompiladorParser.CHAR = 7;
CompiladorParser.ID = 8;
CompiladorParser.NUM = 9;
CompiladorParser.DEC = 10;
CompiladorParser.CADENAS = 11;
CompiladorParser.IGUAL = 12;
CompiladorParser.SEMICOLON = 13;
CompiladorParser.APREGUNTA = 14;
CompiladorParser.CPREGUNTA = 15;
CompiladorParser.WS = 16;

CompiladorParser.RULE_init = 0;
CompiladorParser.RULE_contenido = 1;
CompiladorParser.RULE_declaraciones = 2;
CompiladorParser.RULE_asignacionesDeclarada = 3;
CompiladorParser.RULE_asignacionInicializada = 4;
CompiladorParser.RULE_valores = 5;

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

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
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

	asignacionesDeclarada = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AsignacionesDeclaradaContext);
	    } else {
	        return this.getTypedRuleContext(AsignacionesDeclaradaContext,i);
	    }
	};

	asignacionInicializada = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AsignacionInicializadaContext);
	    } else {
	        return this.getTypedRuleContext(AsignacionInicializadaContext,i);
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
        this.ruleIndex = CompiladorParser.RULE_declaraciones;
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
	    return this.getToken(CompiladorParser.PR, 0);
	};

	ID() {
	    return this.getToken(CompiladorParser.ID, 0);
	};

	SEMICOLON() {
	    return this.getToken(CompiladorParser.SEMICOLON, 0);
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

class AsignacionesDeclaradaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_asignacionesDeclarada;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DefinidoContext extends AsignacionesDeclaradaContext {

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

	IGUAL() {
	    return this.getToken(CompiladorParser.IGUAL, 0);
	};

	valores() {
	    return this.getTypedRuleContext(ValoresContext,0);
	};

	SEMICOLON() {
	    return this.getToken(CompiladorParser.SEMICOLON, 0);
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

class AsignacionInicializadaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_asignacionInicializada;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AsignacionContext extends AsignacionInicializadaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CompiladorParser.ID, 0);
	};

	IGUAL() {
	    return this.getToken(CompiladorParser.IGUAL, 0);
	};

	valores() {
	    return this.getTypedRuleContext(ValoresContext,0);
	};

	SEMICOLON() {
	    return this.getToken(CompiladorParser.SEMICOLON, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitAsignacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.AsignacionContext = AsignacionContext;

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
        this.ruleIndex = CompiladorParser.RULE_valores;
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

class IdContext extends ValoresContext {

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

class DecimalContext extends ValoresContext {

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

class CadenasContext extends ValoresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CADENAS() {
	    return this.getToken(CompiladorParser.CADENAS, 0);
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


CompiladorParser.InitContext = InitContext; 
CompiladorParser.ContenidoContext = ContenidoContext; 
CompiladorParser.DeclaracionesContext = DeclaracionesContext; 
CompiladorParser.AsignacionesDeclaradaContext = AsignacionesDeclaradaContext; 
CompiladorParser.AsignacionInicializadaContext = AsignacionInicializadaContext; 
CompiladorParser.ValoresContext = ValoresContext; 
