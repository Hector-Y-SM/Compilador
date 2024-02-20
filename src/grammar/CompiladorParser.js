// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,14,62,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,1,0,1,0,1,0,1,0,1,1,5,1,19,8,1,10,1,12,1,22,9,1,1,1,5,1,25,8,
1,10,1,12,1,28,9,1,1,1,5,1,31,8,1,10,1,12,1,34,9,1,3,1,36,8,1,1,2,1,2,1,
2,3,2,41,8,2,1,3,1,3,1,3,1,3,1,3,3,3,48,8,3,1,4,1,4,1,4,1,4,3,4,54,8,4,1,
5,1,5,1,5,1,5,3,5,60,8,5,1,5,0,0,6,0,2,4,6,8,10,0,0,66,0,12,1,0,0,0,2,35,
1,0,0,0,4,37,1,0,0,0,6,42,1,0,0,0,8,49,1,0,0,0,10,59,1,0,0,0,12,13,5,1,0,
0,13,14,5,2,0,0,14,15,3,2,1,0,15,16,5,3,0,0,16,1,1,0,0,0,17,19,3,4,2,0,18,
17,1,0,0,0,19,22,1,0,0,0,20,18,1,0,0,0,20,21,1,0,0,0,21,36,1,0,0,0,22,20,
1,0,0,0,23,25,3,6,3,0,24,23,1,0,0,0,25,28,1,0,0,0,26,24,1,0,0,0,26,27,1,
0,0,0,27,36,1,0,0,0,28,26,1,0,0,0,29,31,3,8,4,0,30,29,1,0,0,0,31,34,1,0,
0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,36,1,0,0,0,34,32,1,0,0,0,35,20,1,0,0,
0,35,26,1,0,0,0,35,32,1,0,0,0,36,3,1,0,0,0,37,38,5,4,0,0,38,40,5,8,0,0,39,
41,5,13,0,0,40,39,1,0,0,0,40,41,1,0,0,0,41,5,1,0,0,0,42,43,5,4,0,0,43,44,
5,8,0,0,44,45,5,12,0,0,45,47,3,10,5,0,46,48,5,13,0,0,47,46,1,0,0,0,47,48,
1,0,0,0,48,7,1,0,0,0,49,50,5,8,0,0,50,51,5,12,0,0,51,53,3,10,5,0,52,54,5,
13,0,0,53,52,1,0,0,0,53,54,1,0,0,0,54,9,1,0,0,0,55,60,5,9,0,0,56,60,5,10,
0,0,57,60,5,8,0,0,58,60,5,11,0,0,59,55,1,0,0,0,59,56,1,0,0,0,59,57,1,0,0,
0,59,58,1,0,0,0,60,11,1,0,0,0,8,20,26,32,35,40,47,53,59];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, "'TPG'", "'{'", "'}'", null, "'int'", 
                            "'float'", "'char'", null, null, null, null, 
                            "'='", "';'" ];
    static symbolicNames = [ null, null, null, null, "PR", "INT", "FLOAT", 
                             "CHAR", "ID", "NUM", "DEC", "CADENAS", "IGUAL", 
                             "SEMICOLON", "WS" ];
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
	        this.state = 35;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PrintDeclaracionesContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 17;
	                this.declaraciones();
	                this.state = 22;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 2:
	            localctx = new PrintAsignacionesDeclaradasContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===4) {
	                this.state = 23;
	                this.asignacionesDeclarada();
	                this.state = 28;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;

	        case 3:
	            localctx = new PrintAsignacionesInicializadaContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 29;
	                this.asignacionInicializada();
	                this.state = 34;
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
	    this.enterRule(localctx, 4, CompiladorParser.RULE_declaraciones);
	    var _la = 0;
	    try {
	        localctx = new IndefinidoContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(CompiladorParser.PR);
	        this.state = 38;
	        this.match(CompiladorParser.ID);
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 39;
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
	        this.state = 42;
	        this.match(CompiladorParser.PR);
	        this.state = 43;
	        this.match(CompiladorParser.ID);
	        this.state = 44;
	        this.match(CompiladorParser.IGUAL);
	        this.state = 45;
	        this.valores();
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 46;
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
	        this.state = 49;
	        this.match(CompiladorParser.ID);
	        this.state = 50;
	        this.match(CompiladorParser.IGUAL);
	        this.state = 51;
	        this.valores();
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 52;
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
	        this.state = 59;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            localctx = new NumeroContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 55;
	            this.match(CompiladorParser.NUM);
	            break;
	        case 10:
	            localctx = new DecimalContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 56;
	            this.match(CompiladorParser.DEC);
	            break;
	        case 8:
	            localctx = new IdContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 57;
	            this.match(CompiladorParser.ID);
	            break;
	        case 11:
	            localctx = new CadenasContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 58;
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
CompiladorParser.WS = 14;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrintAsignacionesInicializadaContext extends ContenidoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

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
	        return visitor.visitPrintAsignacionesInicializada(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.PrintAsignacionesInicializadaContext = PrintAsignacionesInicializadaContext;

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
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitPrintDeclaraciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.PrintDeclaracionesContext = PrintDeclaracionesContext;

class PrintAsignacionesDeclaradasContext extends ContenidoContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

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

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitPrintAsignacionesDeclaradas(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.PrintAsignacionesDeclaradasContext = PrintAsignacionesDeclaradasContext;

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
