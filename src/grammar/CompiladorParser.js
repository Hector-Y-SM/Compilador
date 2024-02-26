// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,22,70,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,5,1,23,8,1,10,1,12,1,26,
9,1,1,2,1,2,1,2,3,2,31,8,2,1,3,1,3,1,3,1,3,1,3,3,3,38,8,3,1,4,1,4,1,4,1,
4,3,4,44,8,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,57,8,6,1,6,
1,6,1,6,1,6,1,6,1,6,5,6,65,8,6,10,6,12,6,68,9,6,1,6,0,1,12,7,0,2,4,6,8,10,
12,0,2,1,0,18,19,1,0,16,17,74,0,14,1,0,0,0,2,24,1,0,0,0,4,27,1,0,0,0,6,32,
1,0,0,0,8,39,1,0,0,0,10,45,1,0,0,0,12,56,1,0,0,0,14,15,5,1,0,0,15,16,5,2,
0,0,16,17,3,2,1,0,17,18,5,3,0,0,18,1,1,0,0,0,19,23,3,4,2,0,20,23,3,6,3,0,
21,23,3,8,4,0,22,19,1,0,0,0,22,20,1,0,0,0,22,21,1,0,0,0,23,26,1,0,0,0,24,
22,1,0,0,0,24,25,1,0,0,0,25,3,1,0,0,0,26,24,1,0,0,0,27,28,5,6,0,0,28,30,
5,10,0,0,29,31,5,15,0,0,30,29,1,0,0,0,30,31,1,0,0,0,31,5,1,0,0,0,32,33,5,
6,0,0,33,34,5,10,0,0,34,35,5,14,0,0,35,37,3,10,5,0,36,38,5,15,0,0,37,36,
1,0,0,0,37,38,1,0,0,0,38,7,1,0,0,0,39,40,5,10,0,0,40,41,5,14,0,0,41,43,3,
10,5,0,42,44,5,15,0,0,43,42,1,0,0,0,43,44,1,0,0,0,44,9,1,0,0,0,45,46,3,12,
6,0,46,11,1,0,0,0,47,48,6,6,-1,0,48,57,5,11,0,0,49,57,5,10,0,0,50,57,5,12,
0,0,51,57,5,13,0,0,52,53,5,4,0,0,53,54,3,12,6,0,54,55,5,5,0,0,55,57,1,0,
0,0,56,47,1,0,0,0,56,49,1,0,0,0,56,50,1,0,0,0,56,51,1,0,0,0,56,52,1,0,0,
0,57,66,1,0,0,0,58,59,10,3,0,0,59,60,7,0,0,0,60,65,3,12,6,4,61,62,10,2,0,
0,62,63,7,1,0,0,63,65,3,12,6,3,64,58,1,0,0,0,64,61,1,0,0,0,65,68,1,0,0,0,
66,64,1,0,0,0,66,67,1,0,0,0,67,13,1,0,0,0,68,66,1,0,0,0,8,22,24,30,37,43,
56,64,66];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, "'TPG'", "'{'", "'}'", "'('", "')'", null, 
                            "'nc'", "'im'", "'jgl'", null, null, null, null, 
                            "'='", "';'", "'+'", "'-'", "'*'", "'/'", "'\\u00BF'", 
                            "'?'" ];
    static symbolicNames = [ null, null, null, null, null, null, "PR", "INT", 
                             "FLOAT", "CHAR", "ID", "NUM", "DEC", "CADENAS", 
                             "IGUAL", "SEMICOLON", "SUMA", "RESTA", "MULTIPLI", 
                             "DIVISION", "APREGUNTA", "CPREGUNTA", "WS" ];
    static ruleNames = [ "init", "contenido", "declaraciones", "asignacionesDeclarada", 
                         "asignacionInicializada", "valores", "operaciones" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CompiladorParser.ruleNames;
        this.literalNames = CompiladorParser.literalNames;
        this.symbolicNames = CompiladorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 6:
    	    		return this.operaciones_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    operaciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		case 1:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CompiladorParser.RULE_init);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.match(CompiladorParser.T__0);
	        this.state = 15;
	        this.match(CompiladorParser.T__1);
	        this.state = 16;
	        this.contenido();
	        this.state = 17;
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
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===10) {
	            this.state = 22;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 19;
	                this.declaraciones();
	                break;

	            case 2:
	                this.state = 20;
	                this.asignacionesDeclarada();
	                break;

	            case 3:
	                this.state = 21;
	                this.asignacionInicializada();
	                break;

	            }
	            this.state = 26;
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
	        this.state = 27;
	        this.match(CompiladorParser.PR);
	        this.state = 28;
	        this.match(CompiladorParser.ID);
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 29;
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
	        this.state = 32;
	        this.match(CompiladorParser.PR);
	        this.state = 33;
	        this.match(CompiladorParser.ID);
	        this.state = 34;
	        this.match(CompiladorParser.IGUAL);
	        this.state = 35;
	        this.valores();
	        this.state = 37;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 36;
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
	        this.state = 39;
	        this.match(CompiladorParser.ID);
	        this.state = 40;
	        this.match(CompiladorParser.IGUAL);
	        this.state = 41;
	        this.valores();
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 42;
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
	        localctx = new PrintOperacionesContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.operaciones(0);
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


	operaciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new OperacionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, CompiladorParser.RULE_operaciones, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 48;
	            this.match(CompiladorParser.NUM);
	            break;
	        case 10:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 49;
	            this.match(CompiladorParser.ID);
	            break;
	        case 12:
	            localctx = new DecimalContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 50;
	            this.match(CompiladorParser.DEC);
	            break;
	        case 13:
	            localctx = new CadenasContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 51;
	            this.match(CompiladorParser.CADENAS);
	            break;
	        case 4:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 52;
	            this.match(CompiladorParser.T__3);
	            this.state = 53;
	            this.operaciones(0);
	            this.state = 54;
	            this.match(CompiladorParser.T__4);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 64;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new OperacionesContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_operaciones);
	                    this.state = 58;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 59;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===19)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 60;
	                    this.operaciones(4);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new OperacionesContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_operaciones);
	                    this.state = 61;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }

	                    this.state = 62;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===16 || _la===17)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 63;
	                    this.operaciones(3);
	                    break;

	                } 
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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


}

CompiladorParser.EOF = antlr4.Token.EOF;
CompiladorParser.T__0 = 1;
CompiladorParser.T__1 = 2;
CompiladorParser.T__2 = 3;
CompiladorParser.T__3 = 4;
CompiladorParser.T__4 = 5;
CompiladorParser.PR = 6;
CompiladorParser.INT = 7;
CompiladorParser.FLOAT = 8;
CompiladorParser.CHAR = 9;
CompiladorParser.ID = 10;
CompiladorParser.NUM = 11;
CompiladorParser.DEC = 12;
CompiladorParser.CADENAS = 13;
CompiladorParser.IGUAL = 14;
CompiladorParser.SEMICOLON = 15;
CompiladorParser.SUMA = 16;
CompiladorParser.RESTA = 17;
CompiladorParser.MULTIPLI = 18;
CompiladorParser.DIVISION = 19;
CompiladorParser.APREGUNTA = 20;
CompiladorParser.CPREGUNTA = 21;
CompiladorParser.WS = 22;

CompiladorParser.RULE_init = 0;
CompiladorParser.RULE_contenido = 1;
CompiladorParser.RULE_declaraciones = 2;
CompiladorParser.RULE_asignacionesDeclarada = 3;
CompiladorParser.RULE_asignacionInicializada = 4;
CompiladorParser.RULE_valores = 5;
CompiladorParser.RULE_operaciones = 6;

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


class PrintOperacionesContext extends ValoresContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	operaciones() {
	    return this.getTypedRuleContext(OperacionesContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitPrintOperaciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.PrintOperacionesContext = PrintOperacionesContext;

class OperacionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CompiladorParser.RULE_operaciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends OperacionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	operaciones() {
	    return this.getTypedRuleContext(OperacionesContext,0);
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

class NumeroContext extends OperacionesContext {

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

class MulDivContext extends OperacionesContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	operaciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionesContext);
	    } else {
	        return this.getTypedRuleContext(OperacionesContext,i);
	    }
	};

	MULTIPLI() {
	    return this.getToken(CompiladorParser.MULTIPLI, 0);
	};

	DIVISION() {
	    return this.getToken(CompiladorParser.DIVISION, 0);
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

class AddSubContext extends OperacionesContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	operaciones = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionesContext);
	    } else {
	        return this.getTypedRuleContext(OperacionesContext,i);
	    }
	};

	SUMA() {
	    return this.getToken(CompiladorParser.SUMA, 0);
	};

	RESTA() {
	    return this.getToken(CompiladorParser.RESTA, 0);
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

class IdContext extends OperacionesContext {

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

class DecimalContext extends OperacionesContext {

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

class CadenasContext extends OperacionesContext {

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
CompiladorParser.OperacionesContext = OperacionesContext; 
