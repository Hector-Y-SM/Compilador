// Generated from /home/hertorprime/6to/automatas_2/antlr4/comp/ANTLR4_base/grammar/Compilador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CompiladorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, PR=6, INT=7, FLOAT=8, CHAR=9, 
		ID=10, NUM=11, DEC=12, CADENAS=13, IGUAL=14, SEMICOLON=15, SUMA=16, RESTA=17, 
		MULTIPLI=18, DIVISION=19, APREGUNTA=20, CPREGUNTA=21, WS=22;
	public static final int
		RULE_init = 0, RULE_contenido = 1, RULE_declaraciones = 2, RULE_asignacionesDeclarada = 3, 
		RULE_asignacionInicializada = 4, RULE_valores = 5, RULE_operaciones = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"init", "contenido", "declaraciones", "asignacionesDeclarada", "asignacionInicializada", 
			"valores", "operaciones"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'TPG'", "'{'", "'}'", "'('", "')'", null, "'nc'", "'im'", "'jgl'", 
			null, null, null, null, "'='", "';'", "'+'", "'-'", "'*'", "'/'", "'\\u00BF'", 
			"'?'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, "PR", "INT", "FLOAT", "CHAR", "ID", 
			"NUM", "DEC", "CADENAS", "IGUAL", "SEMICOLON", "SUMA", "RESTA", "MULTIPLI", 
			"DIVISION", "APREGUNTA", "CPREGUNTA", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Compilador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CompiladorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InitContext extends ParserRuleContext {
		public ContenidoContext contenido() {
			return getRuleContext(ContenidoContext.class,0);
		}
		public InitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_init; }
	}

	public final InitContext init() throws RecognitionException {
		InitContext _localctx = new InitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_init);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(14);
			match(T__0);
			setState(15);
			match(T__1);
			setState(16);
			contenido();
			setState(17);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContenidoContext extends ParserRuleContext {
		public List<DeclaracionesContext> declaraciones() {
			return getRuleContexts(DeclaracionesContext.class);
		}
		public DeclaracionesContext declaraciones(int i) {
			return getRuleContext(DeclaracionesContext.class,i);
		}
		public List<AsignacionesDeclaradaContext> asignacionesDeclarada() {
			return getRuleContexts(AsignacionesDeclaradaContext.class);
		}
		public AsignacionesDeclaradaContext asignacionesDeclarada(int i) {
			return getRuleContext(AsignacionesDeclaradaContext.class,i);
		}
		public List<AsignacionInicializadaContext> asignacionInicializada() {
			return getRuleContexts(AsignacionInicializadaContext.class);
		}
		public AsignacionInicializadaContext asignacionInicializada(int i) {
			return getRuleContext(AsignacionInicializadaContext.class,i);
		}
		public ContenidoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contenido; }
	}

	public final ContenidoContext contenido() throws RecognitionException {
		ContenidoContext _localctx = new ContenidoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_contenido);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==PR || _la==ID) {
				{
				setState(22);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(19);
					declaraciones();
					}
					break;
				case 2:
					{
					setState(20);
					asignacionesDeclarada();
					}
					break;
				case 3:
					{
					setState(21);
					asignacionInicializada();
					}
					break;
				}
				}
				setState(26);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionesContext extends ParserRuleContext {
		public DeclaracionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaraciones; }
	 
		public DeclaracionesContext() { }
		public void copyFrom(DeclaracionesContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IndefinidoContext extends DeclaracionesContext {
		public TerminalNode PR() { return getToken(CompiladorParser.PR, 0); }
		public TerminalNode ID() { return getToken(CompiladorParser.ID, 0); }
		public TerminalNode SEMICOLON() { return getToken(CompiladorParser.SEMICOLON, 0); }
		public IndefinidoContext(DeclaracionesContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionesContext declaraciones() throws RecognitionException {
		DeclaracionesContext _localctx = new DeclaracionesContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaraciones);
		int _la;
		try {
			_localctx = new IndefinidoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(27);
			match(PR);
			setState(28);
			match(ID);
			setState(30);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(29);
				match(SEMICOLON);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionesDeclaradaContext extends ParserRuleContext {
		public AsignacionesDeclaradaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asignacionesDeclarada; }
	 
		public AsignacionesDeclaradaContext() { }
		public void copyFrom(AsignacionesDeclaradaContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DefinidoContext extends AsignacionesDeclaradaContext {
		public TerminalNode PR() { return getToken(CompiladorParser.PR, 0); }
		public TerminalNode ID() { return getToken(CompiladorParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(CompiladorParser.IGUAL, 0); }
		public ValoresContext valores() {
			return getRuleContext(ValoresContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(CompiladorParser.SEMICOLON, 0); }
		public DefinidoContext(AsignacionesDeclaradaContext ctx) { copyFrom(ctx); }
	}

	public final AsignacionesDeclaradaContext asignacionesDeclarada() throws RecognitionException {
		AsignacionesDeclaradaContext _localctx = new AsignacionesDeclaradaContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_asignacionesDeclarada);
		int _la;
		try {
			_localctx = new DefinidoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(32);
			match(PR);
			setState(33);
			match(ID);
			setState(34);
			match(IGUAL);
			setState(35);
			valores();
			setState(37);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(36);
				match(SEMICOLON);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionInicializadaContext extends ParserRuleContext {
		public AsignacionInicializadaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asignacionInicializada; }
	 
		public AsignacionInicializadaContext() { }
		public void copyFrom(AsignacionInicializadaContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionContext extends AsignacionInicializadaContext {
		public TerminalNode ID() { return getToken(CompiladorParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(CompiladorParser.IGUAL, 0); }
		public ValoresContext valores() {
			return getRuleContext(ValoresContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(CompiladorParser.SEMICOLON, 0); }
		public AsignacionContext(AsignacionInicializadaContext ctx) { copyFrom(ctx); }
	}

	public final AsignacionInicializadaContext asignacionInicializada() throws RecognitionException {
		AsignacionInicializadaContext _localctx = new AsignacionInicializadaContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_asignacionInicializada);
		int _la;
		try {
			_localctx = new AsignacionContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			match(ID);
			setState(40);
			match(IGUAL);
			setState(41);
			valores();
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(42);
				match(SEMICOLON);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValoresContext extends ParserRuleContext {
		public ValoresContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valores; }
	 
		public ValoresContext() { }
		public void copyFrom(ValoresContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PrintOperacionesContext extends ValoresContext {
		public OperacionesContext operaciones() {
			return getRuleContext(OperacionesContext.class,0);
		}
		public PrintOperacionesContext(ValoresContext ctx) { copyFrom(ctx); }
	}

	public final ValoresContext valores() throws RecognitionException {
		ValoresContext _localctx = new ValoresContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_valores);
		try {
			_localctx = new PrintOperacionesContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			operaciones(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class OperacionesContext extends ParserRuleContext {
		public OperacionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operaciones; }
	 
		public OperacionesContext() { }
		public void copyFrom(OperacionesContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParensContext extends OperacionesContext {
		public OperacionesContext operaciones() {
			return getRuleContext(OperacionesContext.class,0);
		}
		public ParensContext(OperacionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends OperacionesContext {
		public TerminalNode NUM() { return getToken(CompiladorParser.NUM, 0); }
		public NumeroContext(OperacionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MulDivContext extends OperacionesContext {
		public Token op;
		public List<OperacionesContext> operaciones() {
			return getRuleContexts(OperacionesContext.class);
		}
		public OperacionesContext operaciones(int i) {
			return getRuleContext(OperacionesContext.class,i);
		}
		public TerminalNode MULTIPLI() { return getToken(CompiladorParser.MULTIPLI, 0); }
		public TerminalNode DIVISION() { return getToken(CompiladorParser.DIVISION, 0); }
		public MulDivContext(OperacionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AddSubContext extends OperacionesContext {
		public Token op;
		public List<OperacionesContext> operaciones() {
			return getRuleContexts(OperacionesContext.class);
		}
		public OperacionesContext operaciones(int i) {
			return getRuleContext(OperacionesContext.class,i);
		}
		public TerminalNode SUMA() { return getToken(CompiladorParser.SUMA, 0); }
		public TerminalNode RESTA() { return getToken(CompiladorParser.RESTA, 0); }
		public AddSubContext(OperacionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends OperacionesContext {
		public TerminalNode ID() { return getToken(CompiladorParser.ID, 0); }
		public IdContext(OperacionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DecimalContext extends OperacionesContext {
		public TerminalNode DEC() { return getToken(CompiladorParser.DEC, 0); }
		public DecimalContext(OperacionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CadenasContext extends OperacionesContext {
		public TerminalNode CADENAS() { return getToken(CompiladorParser.CADENAS, 0); }
		public CadenasContext(OperacionesContext ctx) { copyFrom(ctx); }
	}

	public final OperacionesContext operaciones() throws RecognitionException {
		return operaciones(0);
	}

	private OperacionesContext operaciones(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		OperacionesContext _localctx = new OperacionesContext(_ctx, _parentState);
		OperacionesContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_operaciones, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUM:
				{
				_localctx = new NumeroContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(48);
				match(NUM);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(49);
				match(ID);
				}
				break;
			case DEC:
				{
				_localctx = new DecimalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(50);
				match(DEC);
				}
				break;
			case CADENAS:
				{
				_localctx = new CadenasContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(51);
				match(CADENAS);
				}
				break;
			case T__3:
				{
				_localctx = new ParensContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(52);
				match(T__3);
				setState(53);
				operaciones(0);
				setState(54);
				match(T__4);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(66);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(64);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new OperacionesContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_operaciones);
						setState(58);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(59);
						((MulDivContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==MULTIPLI || _la==DIVISION) ) {
							((MulDivContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(60);
						operaciones(4);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new OperacionesContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_operaciones);
						setState(61);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						{
						setState(62);
						((AddSubContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==SUMA || _la==RESTA) ) {
							((AddSubContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						}
						setState(63);
						operaciones(3);
						}
						break;
					}
					} 
				}
				setState(68);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 6:
			return operaciones_sempred((OperacionesContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean operaciones_sempred(OperacionesContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 3);
		case 1:
			return precpred(_ctx, 2);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0016F\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0005"+
		"\u0001\u0017\b\u0001\n\u0001\f\u0001\u001a\t\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u0002\u001f\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u0003&\b\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u0004,\b\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u00069\b\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006"+
		"A\b\u0006\n\u0006\f\u0006D\t\u0006\u0001\u0006\u0000\u0001\f\u0007\u0000"+
		"\u0002\u0004\u0006\b\n\f\u0000\u0002\u0001\u0000\u0012\u0013\u0001\u0000"+
		"\u0010\u0011J\u0000\u000e\u0001\u0000\u0000\u0000\u0002\u0018\u0001\u0000"+
		"\u0000\u0000\u0004\u001b\u0001\u0000\u0000\u0000\u0006 \u0001\u0000\u0000"+
		"\u0000\b\'\u0001\u0000\u0000\u0000\n-\u0001\u0000\u0000\u0000\f8\u0001"+
		"\u0000\u0000\u0000\u000e\u000f\u0005\u0001\u0000\u0000\u000f\u0010\u0005"+
		"\u0002\u0000\u0000\u0010\u0011\u0003\u0002\u0001\u0000\u0011\u0012\u0005"+
		"\u0003\u0000\u0000\u0012\u0001\u0001\u0000\u0000\u0000\u0013\u0017\u0003"+
		"\u0004\u0002\u0000\u0014\u0017\u0003\u0006\u0003\u0000\u0015\u0017\u0003"+
		"\b\u0004\u0000\u0016\u0013\u0001\u0000\u0000\u0000\u0016\u0014\u0001\u0000"+
		"\u0000\u0000\u0016\u0015\u0001\u0000\u0000\u0000\u0017\u001a\u0001\u0000"+
		"\u0000\u0000\u0018\u0016\u0001\u0000\u0000\u0000\u0018\u0019\u0001\u0000"+
		"\u0000\u0000\u0019\u0003\u0001\u0000\u0000\u0000\u001a\u0018\u0001\u0000"+
		"\u0000\u0000\u001b\u001c\u0005\u0006\u0000\u0000\u001c\u001e\u0005\n\u0000"+
		"\u0000\u001d\u001f\u0005\u000f\u0000\u0000\u001e\u001d\u0001\u0000\u0000"+
		"\u0000\u001e\u001f\u0001\u0000\u0000\u0000\u001f\u0005\u0001\u0000\u0000"+
		"\u0000 !\u0005\u0006\u0000\u0000!\"\u0005\n\u0000\u0000\"#\u0005\u000e"+
		"\u0000\u0000#%\u0003\n\u0005\u0000$&\u0005\u000f\u0000\u0000%$\u0001\u0000"+
		"\u0000\u0000%&\u0001\u0000\u0000\u0000&\u0007\u0001\u0000\u0000\u0000"+
		"\'(\u0005\n\u0000\u0000()\u0005\u000e\u0000\u0000)+\u0003\n\u0005\u0000"+
		"*,\u0005\u000f\u0000\u0000+*\u0001\u0000\u0000\u0000+,\u0001\u0000\u0000"+
		"\u0000,\t\u0001\u0000\u0000\u0000-.\u0003\f\u0006\u0000.\u000b\u0001\u0000"+
		"\u0000\u0000/0\u0006\u0006\uffff\uffff\u000009\u0005\u000b\u0000\u0000"+
		"19\u0005\n\u0000\u000029\u0005\f\u0000\u000039\u0005\r\u0000\u000045\u0005"+
		"\u0004\u0000\u000056\u0003\f\u0006\u000067\u0005\u0005\u0000\u000079\u0001"+
		"\u0000\u0000\u00008/\u0001\u0000\u0000\u000081\u0001\u0000\u0000\u0000"+
		"82\u0001\u0000\u0000\u000083\u0001\u0000\u0000\u000084\u0001\u0000\u0000"+
		"\u00009B\u0001\u0000\u0000\u0000:;\n\u0003\u0000\u0000;<\u0007\u0000\u0000"+
		"\u0000<A\u0003\f\u0006\u0004=>\n\u0002\u0000\u0000>?\u0007\u0001\u0000"+
		"\u0000?A\u0003\f\u0006\u0003@:\u0001\u0000\u0000\u0000@=\u0001\u0000\u0000"+
		"\u0000AD\u0001\u0000\u0000\u0000B@\u0001\u0000\u0000\u0000BC\u0001\u0000"+
		"\u0000\u0000C\r\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000\b\u0016"+
		"\u0018\u001e%+8@B";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}