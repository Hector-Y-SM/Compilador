// Generated from /home/hertorprime/6to/automatas_2/antlr4/comp/ANTLR4_base/grammar/ArrayInit.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ArrayInitParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, PR=4, INT=5, FLOAT=6, CHAR=7, ID=8, NUM=9, DEC=10, 
		CADENAS=11, IGUAL=12, SEMICOLON=13, WS=14;
	public static final int
		RULE_init = 0, RULE_contenido = 1, RULE_declaraciones = 2, RULE_asignaciones = 3, 
		RULE_valores = 4;
	private static String[] makeRuleNames() {
		return new String[] {
			"init", "contenido", "declaraciones", "asignaciones", "valores"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'TPG'", "'{'", "'}'", null, "'int'", "'float'", "'char'", null, 
			null, null, null, "'='", "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "PR", "INT", "FLOAT", "CHAR", "ID", "NUM", "DEC", 
			"CADENAS", "IGUAL", "SEMICOLON", "WS"
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
	public String getGrammarFileName() { return "ArrayInit.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ArrayInitParser(TokenStream input) {
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
			setState(10);
			match(T__0);
			setState(11);
			match(T__1);
			setState(12);
			contenido();
			setState(13);
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
		public ContenidoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contenido; }
	 
		public ContenidoContext() { }
		public void copyFrom(ContenidoContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PrintDeclaracionesContext extends ContenidoContext {
		public List<DeclaracionesContext> declaraciones() {
			return getRuleContexts(DeclaracionesContext.class);
		}
		public DeclaracionesContext declaraciones(int i) {
			return getRuleContext(DeclaracionesContext.class,i);
		}
		public PrintDeclaracionesContext(ContenidoContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PrintAsignacionesContext extends ContenidoContext {
		public List<AsignacionesContext> asignaciones() {
			return getRuleContexts(AsignacionesContext.class);
		}
		public AsignacionesContext asignaciones(int i) {
			return getRuleContext(AsignacionesContext.class,i);
		}
		public PrintAsignacionesContext(ContenidoContext ctx) { copyFrom(ctx); }
	}

	public final ContenidoContext contenido() throws RecognitionException {
		ContenidoContext _localctx = new ContenidoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_contenido);
		int _la;
		try {
			setState(27);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				_localctx = new PrintDeclaracionesContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(18);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==PR) {
					{
					{
					setState(15);
					declaraciones();
					}
					}
					setState(20);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				_localctx = new PrintAsignacionesContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(24);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==PR || _la==ID) {
					{
					{
					setState(21);
					asignaciones();
					}
					}
					setState(26);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
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
		public TerminalNode PR() { return getToken(ArrayInitParser.PR, 0); }
		public TerminalNode ID() { return getToken(ArrayInitParser.ID, 0); }
		public TerminalNode SEMICOLON() { return getToken(ArrayInitParser.SEMICOLON, 0); }
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
			setState(29);
			match(PR);
			setState(30);
			match(ID);
			setState(32);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(31);
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
	public static class AsignacionesContext extends ParserRuleContext {
		public AsignacionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asignaciones; }
	 
		public AsignacionesContext() { }
		public void copyFrom(AsignacionesContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AsignacionContext extends AsignacionesContext {
		public TerminalNode ID() { return getToken(ArrayInitParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(ArrayInitParser.IGUAL, 0); }
		public ValoresContext valores() {
			return getRuleContext(ValoresContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(ArrayInitParser.SEMICOLON, 0); }
		public AsignacionContext(AsignacionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DefinidoContext extends AsignacionesContext {
		public TerminalNode PR() { return getToken(ArrayInitParser.PR, 0); }
		public TerminalNode ID() { return getToken(ArrayInitParser.ID, 0); }
		public TerminalNode IGUAL() { return getToken(ArrayInitParser.IGUAL, 0); }
		public ValoresContext valores() {
			return getRuleContext(ValoresContext.class,0);
		}
		public TerminalNode SEMICOLON() { return getToken(ArrayInitParser.SEMICOLON, 0); }
		public DefinidoContext(AsignacionesContext ctx) { copyFrom(ctx); }
	}

	public final AsignacionesContext asignaciones() throws RecognitionException {
		AsignacionesContext _localctx = new AsignacionesContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_asignaciones);
		int _la;
		try {
			setState(47);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case PR:
				_localctx = new DefinidoContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(34);
				match(PR);
				setState(35);
				match(ID);
				setState(36);
				match(IGUAL);
				setState(37);
				valores();
				setState(39);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMICOLON) {
					{
					setState(38);
					match(SEMICOLON);
					}
				}

				}
				break;
			case ID:
				_localctx = new AsignacionContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(41);
				match(ID);
				setState(42);
				match(IGUAL);
				setState(43);
				valores();
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==SEMICOLON) {
					{
					setState(44);
					match(SEMICOLON);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public static class NumeroContext extends ValoresContext {
		public TerminalNode NUM() { return getToken(ArrayInitParser.NUM, 0); }
		public NumeroContext(ValoresContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ValoresContext {
		public TerminalNode ID() { return getToken(ArrayInitParser.ID, 0); }
		public IdContext(ValoresContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DecimalContext extends ValoresContext {
		public TerminalNode DEC() { return getToken(ArrayInitParser.DEC, 0); }
		public DecimalContext(ValoresContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CadenasContext extends ValoresContext {
		public TerminalNode CADENAS() { return getToken(ArrayInitParser.CADENAS, 0); }
		public CadenasContext(ValoresContext ctx) { copyFrom(ctx); }
	}

	public final ValoresContext valores() throws RecognitionException {
		ValoresContext _localctx = new ValoresContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_valores);
		try {
			setState(53);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUM:
				_localctx = new NumeroContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(49);
				match(NUM);
				}
				break;
			case DEC:
				_localctx = new DecimalContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(50);
				match(DEC);
				}
				break;
			case ID:
				_localctx = new IdContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(51);
				match(ID);
				}
				break;
			case CADENAS:
				_localctx = new CadenasContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(52);
				match(CADENAS);
				}
				break;
			default:
				throw new NoViableAltException(this);
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

	public static final String _serializedATN =
		"\u0004\u0001\u000e8\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0005"+
		"\u0001\u0011\b\u0001\n\u0001\f\u0001\u0014\t\u0001\u0001\u0001\u0005\u0001"+
		"\u0017\b\u0001\n\u0001\f\u0001\u001a\t\u0001\u0003\u0001\u001c\b\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002!\b\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003(\b\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003.\b\u0003"+
		"\u0003\u00030\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0003\u00046\b\u0004\u0001\u0004\u0000\u0000\u0005\u0000\u0002\u0004"+
		"\u0006\b\u0000\u0000<\u0000\n\u0001\u0000\u0000\u0000\u0002\u001b\u0001"+
		"\u0000\u0000\u0000\u0004\u001d\u0001\u0000\u0000\u0000\u0006/\u0001\u0000"+
		"\u0000\u0000\b5\u0001\u0000\u0000\u0000\n\u000b\u0005\u0001\u0000\u0000"+
		"\u000b\f\u0005\u0002\u0000\u0000\f\r\u0003\u0002\u0001\u0000\r\u000e\u0005"+
		"\u0003\u0000\u0000\u000e\u0001\u0001\u0000\u0000\u0000\u000f\u0011\u0003"+
		"\u0004\u0002\u0000\u0010\u000f\u0001\u0000\u0000\u0000\u0011\u0014\u0001"+
		"\u0000\u0000\u0000\u0012\u0010\u0001\u0000\u0000\u0000\u0012\u0013\u0001"+
		"\u0000\u0000\u0000\u0013\u001c\u0001\u0000\u0000\u0000\u0014\u0012\u0001"+
		"\u0000\u0000\u0000\u0015\u0017\u0003\u0006\u0003\u0000\u0016\u0015\u0001"+
		"\u0000\u0000\u0000\u0017\u001a\u0001\u0000\u0000\u0000\u0018\u0016\u0001"+
		"\u0000\u0000\u0000\u0018\u0019\u0001\u0000\u0000\u0000\u0019\u001c\u0001"+
		"\u0000\u0000\u0000\u001a\u0018\u0001\u0000\u0000\u0000\u001b\u0012\u0001"+
		"\u0000\u0000\u0000\u001b\u0018\u0001\u0000\u0000\u0000\u001c\u0003\u0001"+
		"\u0000\u0000\u0000\u001d\u001e\u0005\u0004\u0000\u0000\u001e \u0005\b"+
		"\u0000\u0000\u001f!\u0005\r\u0000\u0000 \u001f\u0001\u0000\u0000\u0000"+
		" !\u0001\u0000\u0000\u0000!\u0005\u0001\u0000\u0000\u0000\"#\u0005\u0004"+
		"\u0000\u0000#$\u0005\b\u0000\u0000$%\u0005\f\u0000\u0000%\'\u0003\b\u0004"+
		"\u0000&(\u0005\r\u0000\u0000\'&\u0001\u0000\u0000\u0000\'(\u0001\u0000"+
		"\u0000\u0000(0\u0001\u0000\u0000\u0000)*\u0005\b\u0000\u0000*+\u0005\f"+
		"\u0000\u0000+-\u0003\b\u0004\u0000,.\u0005\r\u0000\u0000-,\u0001\u0000"+
		"\u0000\u0000-.\u0001\u0000\u0000\u0000.0\u0001\u0000\u0000\u0000/\"\u0001"+
		"\u0000\u0000\u0000/)\u0001\u0000\u0000\u00000\u0007\u0001\u0000\u0000"+
		"\u000016\u0005\t\u0000\u000026\u0005\n\u0000\u000036\u0005\b\u0000\u0000"+
		"46\u0005\u000b\u0000\u000051\u0001\u0000\u0000\u000052\u0001\u0000\u0000"+
		"\u000053\u0001\u0000\u0000\u000054\u0001\u0000\u0000\u00006\t\u0001\u0000"+
		"\u0000\u0000\b\u0012\u0018\u001b \'-/5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}