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
		T__0=1, T__1=2, T__2=3, PR=4, INT=5, FLOAT=6, CHAR=7, ID=8, NUM=9, DEC=10, 
		CADENAS=11, IGUAL=12, SEMICOLON=13, WS=14;
	public static final int
		RULE_init = 0, RULE_contenido = 1, RULE_declaraciones = 2, RULE_asignacionesDeclarada = 3, 
		RULE_asignacionInicializada = 4, RULE_valores = 5;
	private static String[] makeRuleNames() {
		return new String[] {
			"init", "contenido", "declaraciones", "asignacionesDeclarada", "asignacionInicializada", 
			"valores"
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
			setState(12);
			match(T__0);
			setState(13);
			match(T__1);
			setState(14);
			contenido();
			setState(15);
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
	public static class PrintAsignacionesInicializadaContext extends ContenidoContext {
		public List<AsignacionInicializadaContext> asignacionInicializada() {
			return getRuleContexts(AsignacionInicializadaContext.class);
		}
		public AsignacionInicializadaContext asignacionInicializada(int i) {
			return getRuleContext(AsignacionInicializadaContext.class,i);
		}
		public PrintAsignacionesInicializadaContext(ContenidoContext ctx) { copyFrom(ctx); }
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
	public static class PrintAsignacionesDeclaradasContext extends ContenidoContext {
		public List<AsignacionesDeclaradaContext> asignacionesDeclarada() {
			return getRuleContexts(AsignacionesDeclaradaContext.class);
		}
		public AsignacionesDeclaradaContext asignacionesDeclarada(int i) {
			return getRuleContext(AsignacionesDeclaradaContext.class,i);
		}
		public PrintAsignacionesDeclaradasContext(ContenidoContext ctx) { copyFrom(ctx); }
	}

	public final ContenidoContext contenido() throws RecognitionException {
		ContenidoContext _localctx = new ContenidoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_contenido);
		int _la;
		try {
			setState(35);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				_localctx = new PrintDeclaracionesContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(20);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==PR) {
					{
					{
					setState(17);
					declaraciones();
					}
					}
					setState(22);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 2:
				_localctx = new PrintAsignacionesDeclaradasContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(26);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==PR) {
					{
					{
					setState(23);
					asignacionesDeclarada();
					}
					}
					setState(28);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 3:
				_localctx = new PrintAsignacionesInicializadaContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(32);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ID) {
					{
					{
					setState(29);
					asignacionInicializada();
					}
					}
					setState(34);
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
			setState(37);
			match(PR);
			setState(38);
			match(ID);
			setState(40);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(39);
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
			setState(42);
			match(PR);
			setState(43);
			match(ID);
			setState(44);
			match(IGUAL);
			setState(45);
			valores();
			setState(47);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(46);
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
			setState(49);
			match(ID);
			setState(50);
			match(IGUAL);
			setState(51);
			valores();
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMICOLON) {
				{
				setState(52);
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
	public static class NumeroContext extends ValoresContext {
		public TerminalNode NUM() { return getToken(CompiladorParser.NUM, 0); }
		public NumeroContext(ValoresContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ValoresContext {
		public TerminalNode ID() { return getToken(CompiladorParser.ID, 0); }
		public IdContext(ValoresContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DecimalContext extends ValoresContext {
		public TerminalNode DEC() { return getToken(CompiladorParser.DEC, 0); }
		public DecimalContext(ValoresContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CadenasContext extends ValoresContext {
		public TerminalNode CADENAS() { return getToken(CompiladorParser.CADENAS, 0); }
		public CadenasContext(ValoresContext ctx) { copyFrom(ctx); }
	}

	public final ValoresContext valores() throws RecognitionException {
		ValoresContext _localctx = new ValoresContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_valores);
		try {
			setState(59);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUM:
				_localctx = new NumeroContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(55);
				match(NUM);
				}
				break;
			case DEC:
				_localctx = new DecimalContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(56);
				match(DEC);
				}
				break;
			case ID:
				_localctx = new IdContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(57);
				match(ID);
				}
				break;
			case CADENAS:
				_localctx = new CadenasContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(58);
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
		"\u0004\u0001\u000e>\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0005\u0001\u0013\b\u0001\n\u0001\f\u0001\u0016\t\u0001"+
		"\u0001\u0001\u0005\u0001\u0019\b\u0001\n\u0001\f\u0001\u001c\t\u0001\u0001"+
		"\u0001\u0005\u0001\u001f\b\u0001\n\u0001\f\u0001\"\t\u0001\u0003\u0001"+
		"$\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002)\b\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00030\b"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u00046\b"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005<\b"+
		"\u0005\u0001\u0005\u0000\u0000\u0006\u0000\u0002\u0004\u0006\b\n\u0000"+
		"\u0000B\u0000\f\u0001\u0000\u0000\u0000\u0002#\u0001\u0000\u0000\u0000"+
		"\u0004%\u0001\u0000\u0000\u0000\u0006*\u0001\u0000\u0000\u0000\b1\u0001"+
		"\u0000\u0000\u0000\n;\u0001\u0000\u0000\u0000\f\r\u0005\u0001\u0000\u0000"+
		"\r\u000e\u0005\u0002\u0000\u0000\u000e\u000f\u0003\u0002\u0001\u0000\u000f"+
		"\u0010\u0005\u0003\u0000\u0000\u0010\u0001\u0001\u0000\u0000\u0000\u0011"+
		"\u0013\u0003\u0004\u0002\u0000\u0012\u0011\u0001\u0000\u0000\u0000\u0013"+
		"\u0016\u0001\u0000\u0000\u0000\u0014\u0012\u0001\u0000\u0000\u0000\u0014"+
		"\u0015\u0001\u0000\u0000\u0000\u0015$\u0001\u0000\u0000\u0000\u0016\u0014"+
		"\u0001\u0000\u0000\u0000\u0017\u0019\u0003\u0006\u0003\u0000\u0018\u0017"+
		"\u0001\u0000\u0000\u0000\u0019\u001c\u0001\u0000\u0000\u0000\u001a\u0018"+
		"\u0001\u0000\u0000\u0000\u001a\u001b\u0001\u0000\u0000\u0000\u001b$\u0001"+
		"\u0000\u0000\u0000\u001c\u001a\u0001\u0000\u0000\u0000\u001d\u001f\u0003"+
		"\b\u0004\u0000\u001e\u001d\u0001\u0000\u0000\u0000\u001f\"\u0001\u0000"+
		"\u0000\u0000 \u001e\u0001\u0000\u0000\u0000 !\u0001\u0000\u0000\u0000"+
		"!$\u0001\u0000\u0000\u0000\" \u0001\u0000\u0000\u0000#\u0014\u0001\u0000"+
		"\u0000\u0000#\u001a\u0001\u0000\u0000\u0000# \u0001\u0000\u0000\u0000"+
		"$\u0003\u0001\u0000\u0000\u0000%&\u0005\u0004\u0000\u0000&(\u0005\b\u0000"+
		"\u0000\')\u0005\r\u0000\u0000(\'\u0001\u0000\u0000\u0000()\u0001\u0000"+
		"\u0000\u0000)\u0005\u0001\u0000\u0000\u0000*+\u0005\u0004\u0000\u0000"+
		"+,\u0005\b\u0000\u0000,-\u0005\f\u0000\u0000-/\u0003\n\u0005\u0000.0\u0005"+
		"\r\u0000\u0000/.\u0001\u0000\u0000\u0000/0\u0001\u0000\u0000\u00000\u0007"+
		"\u0001\u0000\u0000\u000012\u0005\b\u0000\u000023\u0005\f\u0000\u00003"+
		"5\u0003\n\u0005\u000046\u0005\r\u0000\u000054\u0001\u0000\u0000\u0000"+
		"56\u0001\u0000\u0000\u00006\t\u0001\u0000\u0000\u00007<\u0005\t\u0000"+
		"\u00008<\u0005\n\u0000\u00009<\u0005\b\u0000\u0000:<\u0005\u000b\u0000"+
		"\u0000;7\u0001\u0000\u0000\u0000;8\u0001\u0000\u0000\u0000;9\u0001\u0000"+
		"\u0000\u0000;:\u0001\u0000\u0000\u0000<\u000b\u0001\u0000\u0000\u0000"+
		"\b\u0014\u001a #(/5;";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}