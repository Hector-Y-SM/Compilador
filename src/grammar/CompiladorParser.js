// Generated from ./grammar/Compilador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CompiladorVisitor from './CompiladorVisitor.js';

const serializedATN = [4,1,24,81,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,24,8,1,10,1,12,1,
27,9,1,1,2,1,2,1,2,3,2,32,8,2,1,3,1,3,1,3,1,3,1,3,3,3,39,8,3,1,4,1,4,1,4,
1,4,3,4,45,8,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,
6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,68,8,6,1,6,1,6,1,6,1,6,1,6,1,6,5,6,76,8,6,
10,6,12,6,79,9,6,1,6,0,1,12,7,0,2,4,6,8,10,12,0,2,1,0,6,7,1,0,8,9,87,0,14,
1,0,0,0,2,25,1,0,0,0,4,28,1,0,0,0,6,33,1,0,0,0,8,40,1,0,0,0,10,46,1,0,0,
0,12,67,1,0,0,0,14,15,5,11,0,0,15,16,5,12,0,0,16,17,3,2,1,0,17,18,5,13,0,
0,18,1,1,0,0,0,19,24,3,4,2,0,20,24,3,6,3,0,21,24,3,8,4,0,22,24,3,10,5,0,
23,19,1,0,0,0,23,20,1,0,0,0,23,21,1,0,0,0,23,22,1,0,0,0,24,27,1,0,0,0,25,
23,1,0,0,0,25,26,1,0,0,0,26,3,1,0,0,0,27,25,1,0,0,0,28,29,5,1,0,0,29,31,
5,19,0,0,30,32,5,23,0,0,31,30,1,0,0,0,31,32,1,0,0,0,32,5,1,0,0,0,33,34,5,
1,0,0,34,35,5,19,0,0,35,36,5,10,0,0,36,38,3,12,6,0,37,39,5,23,0,0,38,37,
1,0,0,0,38,39,1,0,0,0,39,7,1,0,0,0,40,41,5,19,0,0,41,42,5,10,0,0,42,44,3,
12,6,0,43,45,5,23,0,0,44,43,1,0,0,0,44,45,1,0,0,0,45,9,1,0,0,0,46,47,5,2,
0,0,47,48,5,16,0,0,48,49,3,12,6,0,49,50,5,17,0,0,50,11,1,0,0,0,51,52,6,6,
-1,0,52,68,5,20,0,0,53,68,5,22,0,0,54,68,5,21,0,0,55,68,5,19,0,0,56,57,5,
16,0,0,57,58,3,12,6,0,58,59,5,17,0,0,59,68,1,0,0,0,60,61,5,16,0,0,61,62,
3,12,6,0,62,63,5,17,0,0,63,64,5,16,0,0,64,65,3,12,6,0,65,66,5,17,0,0,66,
68,1,0,0,0,67,51,1,0,0,0,67,53,1,0,0,0,67,54,1,0,0,0,67,55,1,0,0,0,67,56,
1,0,0,0,67,60,1,0,0,0,68,77,1,0,0,0,69,70,10,8,0,0,70,71,7,0,0,0,71,76,3,
12,6,9,72,73,10,7,0,0,73,74,7,1,0,0,74,76,3,12,6,8,75,69,1,0,0,0,75,72,1,
0,0,0,76,79,1,0,0,0,77,75,1,0,0,0,77,78,1,0,0,0,78,13,1,0,0,0,79,77,1,0,
0,0,8,23,25,31,38,44,67,75,77];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CompiladorParser extends antlr4.Parser {

    static grammarFileName = "Compilador.g4";
    static literalNames = [ null, null, "'leak'", "'nc'", "'im'", "'jgl'", 
                            "'*'", "'/'", "'+'", "'-'", "'='", "'W7HLM'", 
                            "'>_'", "'_<'", "'{'", "'}'", "'('", "')'", 
                            "'!'", null, null, null, null, "';'" ];
    static symbolicNames = [ null, "PR", "IMPRESION", "INT", "FLOAT", "CHAR", 
                             "MUL", "DIV", "ADD", "SUB", "ASIGNACION", "TPG", 
                             "ABLOQUE", "CBLOQUE", "ALLAVE", "CLLAVE", "APARENTESIS", 
                             "CPARENTESIS", "AADMIRACION", "ID", "NUM", 
                             "CADENA", "DEC", "SEMI", "WS" ];
    static ruleNames = [ "init", "contenido", "inicializacion", "declaracion", 
                         "asignacion", "print", "valor" ];

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
    	    		return this.valor_sempred(localctx, predIndex);
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




	init() {
	    let localctx = new InitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CompiladorParser.RULE_init);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        this.match(CompiladorParser.TPG);
	        this.state = 15;
	        this.match(CompiladorParser.ABLOQUE);
	        this.state = 16;
	        this.contenido();
	        this.state = 17;
	        this.match(CompiladorParser.CBLOQUE);
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
	        this.state = 25;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 524294) !== 0)) {
	            this.state = 23;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 19;
	                this.inicializacion();
	                break;

	            case 2:
	                this.state = 20;
	                this.declaracion();
	                break;

	            case 3:
	                this.state = 21;
	                this.asignacion();
	                break;

	            case 4:
	                this.state = 22;
	                this.print();
	                break;

	            }
	            this.state = 27;
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
	        this.state = 28;
	        this.match(CompiladorParser.PR);
	        this.state = 29;
	        this.match(CompiladorParser.ID);
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 30;
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
	        this.state = 33;
	        this.match(CompiladorParser.PR);
	        this.state = 34;
	        this.match(CompiladorParser.ID);
	        this.state = 35;
	        this.match(CompiladorParser.ASIGNACION);
	        this.state = 36;
	        this.valor(0);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 37;
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
	        this.state = 40;
	        this.match(CompiladorParser.ID);
	        this.state = 41;
	        this.match(CompiladorParser.ASIGNACION);
	        this.state = 42;
	        this.valor(0);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23) {
	            this.state = 43;
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
	    try {
	        localctx = new PrintValorContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(CompiladorParser.IMPRESION);
	        this.state = 47;
	        this.match(CompiladorParser.APARENTESIS);
	        this.state = 48;
	        this.valor(0);
	        this.state = 49;
	        this.match(CompiladorParser.CPARENTESIS);
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
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, CompiladorParser.RULE_valor, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NumeroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 52;
	            this.match(CompiladorParser.NUM);
	            break;

	        case 2:
	            localctx = new DecimalContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 53;
	            this.match(CompiladorParser.DEC);
	            break;

	        case 3:
	            localctx = new CadenasContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 54;
	            this.match(CompiladorParser.CADENA);
	            break;

	        case 4:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 55;
	            this.match(CompiladorParser.ID);
	            break;

	        case 5:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 56;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 57;
	            this.valor(0);
	            this.state = 58;
	            this.match(CompiladorParser.CPARENTESIS);
	            break;

	        case 6:
	            localctx = new ImplicitoContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 60;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 61;
	            this.valor(0);
	            this.state = 62;
	            this.match(CompiladorParser.CPARENTESIS);
	            this.state = 63;
	            this.match(CompiladorParser.APARENTESIS);
	            this.state = 64;
	            this.valor(0);
	            this.state = 65;
	            this.match(CompiladorParser.CPARENTESIS);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 77;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 75;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 69;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 70;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===6 || _la===7)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 71;
	                    this.valor(9);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ValorContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CompiladorParser.RULE_valor);
	                    this.state = 72;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 73;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===8 || _la===9)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 74;
	                    this.valor(8);
	                    break;

	                } 
	            }
	            this.state = 79;
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
CompiladorParser.PR = 1;
CompiladorParser.IMPRESION = 2;
CompiladorParser.INT = 3;
CompiladorParser.FLOAT = 4;
CompiladorParser.CHAR = 5;
CompiladorParser.MUL = 6;
CompiladorParser.DIV = 7;
CompiladorParser.ADD = 8;
CompiladorParser.SUB = 9;
CompiladorParser.ASIGNACION = 10;
CompiladorParser.TPG = 11;
CompiladorParser.ABLOQUE = 12;
CompiladorParser.CBLOQUE = 13;
CompiladorParser.ALLAVE = 14;
CompiladorParser.CLLAVE = 15;
CompiladorParser.APARENTESIS = 16;
CompiladorParser.CPARENTESIS = 17;
CompiladorParser.AADMIRACION = 18;
CompiladorParser.ID = 19;
CompiladorParser.NUM = 20;
CompiladorParser.CADENA = 21;
CompiladorParser.DEC = 22;
CompiladorParser.SEMI = 23;
CompiladorParser.WS = 24;

CompiladorParser.RULE_init = 0;
CompiladorParser.RULE_contenido = 1;
CompiladorParser.RULE_inicializacion = 2;
CompiladorParser.RULE_declaracion = 3;
CompiladorParser.RULE_asignacion = 4;
CompiladorParser.RULE_print = 5;
CompiladorParser.RULE_valor = 6;

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

	ABLOQUE() {
	    return this.getToken(CompiladorParser.ABLOQUE, 0);
	};

	contenido() {
	    return this.getTypedRuleContext(ContenidoContext,0);
	};

	CBLOQUE() {
	    return this.getToken(CompiladorParser.CBLOQUE, 0);
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

	accept(visitor) {
	    if ( visitor instanceof CompiladorVisitor ) {
	        return visitor.visitPrintValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CompiladorParser.PrintValorContext = PrintValorContext;

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


CompiladorParser.InitContext = InitContext; 
CompiladorParser.ContenidoContext = ContenidoContext; 
CompiladorParser.InicializacionContext = InicializacionContext; 
CompiladorParser.DeclaracionContext = DeclaracionContext; 
CompiladorParser.AsignacionContext = AsignacionContext; 
CompiladorParser.PrintContext = PrintContext; 
CompiladorParser.ValorContext = ValorContext; 
