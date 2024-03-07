// Generated from /home/hector/6to/automatas_2/Compilador/grammar/Compilador.g4 by ANTLR 4.13.1
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
		PR=1, IMPRESION=2, INT=3, FLOAT=4, CHAR=5, MUL=6, DIV=7, ADD=8, SUB=9, 
		TPG=10, ABLOQUE=11, CBLOQUE=12, ASIGNACION=13, ALLAVE=14, CLLAVE=15, APARENTESIS=16, 
		CPARENTESIS=17, AADMIRACION=18, ID=19, NUM=20, CADENA=21, DEC=22, SEMI=23, 
		WS=24;
	public static final int
		RULE_init = 0, RULE_contenido = 1, RULE_inicializacion = 2, RULE_declaracion = 3, 
		RULE_asignacion = 4, RULE_print = 5, RULE_valor = 6;
	private static String[] makeRuleNames() {
		return new String[] {
			"init", "contenido", "inicializacion", "declaracion", "asignacion", "print", 
			"valor"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'leak'", "'nc'", "'im'", "'jgl'", "'*'", "'/'", "'+'", "'-'", 
			"'_W7HLM_'", "'>_'", "'_<'", "'='", "'{'", "'}'", "'('", "')'", "'!'", 
			null, null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PR", "IMPRESION", "INT", "FLOAT", "CHAR", "MUL", "DIV", "ADD", 
			"SUB", "TPG", "ABLOQUE", "CBLOQUE", "ASIGNACION", "ALLAVE", "CLLAVE", 
			"APARENTESIS", "CPARENTESIS", "AADMIRACION", "ID", "NUM", "CADENA", "DEC", 
			"SEMI", "WS"
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
		public TerminalNode TPG() { return getToken(CompiladorParser.TPG, 0); }
		public TerminalNode ABLOQUE() { return getToken(CompiladorParser.ABLOQUE, 0); }
		public ContenidoContext contenido() {
			return getRuleContext(ContenidoContext.class,0);
		}
		public TerminalNode CBLOQUE() { return getToken(CompiladorParser.CBLOQUE, 0); }
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
			match(TPG);
			setState(15);
			match(ABLOQUE);
			setState(16);
			contenido();
			setState(17);
			match(CBLOQUE);
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
		public List<InicializacionContext> inicializacion() {
			return getRuleContexts(InicializacionContext.class);
		}
		public InicializacionContext inicializacion(int i) {
			return getRuleContext(InicializacionContext.class,i);
		}
		public List<DeclaracionContext> declaracion() {
			return getRuleContexts(DeclaracionContext.class);
		}
		public DeclaracionContext declaracion(int i) {
			return getRuleContext(DeclaracionContext.class,i);
		}
		public List<AsignacionContext> asignacion() {
			return getRuleContexts(AsignacionContext.class);
		}
		public AsignacionContext asignacion(int i) {
			return getRuleContext(AsignacionContext.class,i);
		}
		public List<PrintContext> print() {
			return getRuleContexts(PrintContext.class);
		}
		public PrintContext print(int i) {
			return getRuleContext(PrintContext.class,i);
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
			setState(25);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 524294L) != 0)) {
				{
				setState(23);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(19);
					inicializacion();
					}
					break;
				case 2:
					{
					setState(20);
					declaracion();
					}
					break;
				case 3:
					{
					setState(21);
					asignacion();
					}
					break;
				case 4:
					{
					setState(22);
					print();
					}
					break;
				}
				}
				setState(27);
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
	public static class InicializacionContext extends ParserRuleContext {
		public InicializacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_inicializacion; }
	 
		public InicializacionContext() { }
		public void copyFrom(InicializacionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IndefinidoContext extends InicializacionContext {
		public TerminalNode PR() { return getToken(CompiladorParser.PR, 0); }
		public TerminalNode ID() { return getToken(CompiladorParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CompiladorParser.SEMI, 0); }
		public IndefinidoContext(InicializacionContext ctx) { copyFrom(ctx); }
	}

	public final InicializacionContext inicializacion() throws RecognitionException {
		InicializacionContext _localctx = new InicializacionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_inicializacion);
		int _la;
		try {
			_localctx = new IndefinidoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			match(PR);
			setState(29);
			match(ID);
			setState(31);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(30);
				match(SEMI);
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
	public static class DeclaracionContext extends ParserRuleContext {
		public DeclaracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracion; }
	 
		public DeclaracionContext() { }
		public void copyFrom(DeclaracionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DefinidoContext extends DeclaracionContext {
		public TerminalNode PR() { return getToken(CompiladorParser.PR, 0); }
		public TerminalNode ID() { return getToken(CompiladorParser.ID, 0); }
		public TerminalNode ASIGNACION() { return getToken(CompiladorParser.ASIGNACION, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CompiladorParser.SEMI, 0); }
		public DefinidoContext(DeclaracionContext ctx) { copyFrom(ctx); }
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_declaracion);
		int _la;
		try {
			_localctx = new DefinidoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			match(PR);
			setState(34);
			match(ID);
			setState(35);
			match(ASIGNACION);
			setState(36);
			valor(0);
			setState(38);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(37);
				match(SEMI);
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
	public static class AsignacionContext extends ParserRuleContext {
		public AsignacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asignacion; }
	 
		public AsignacionContext() { }
		public void copyFrom(AsignacionContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AsignadoContext extends AsignacionContext {
		public TerminalNode ID() { return getToken(CompiladorParser.ID, 0); }
		public TerminalNode ASIGNACION() { return getToken(CompiladorParser.ASIGNACION, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(CompiladorParser.SEMI, 0); }
		public AsignadoContext(AsignacionContext ctx) { copyFrom(ctx); }
	}

	public final AsignacionContext asignacion() throws RecognitionException {
		AsignacionContext _localctx = new AsignacionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_asignacion);
		int _la;
		try {
			_localctx = new AsignadoContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(ID);
			setState(41);
			match(ASIGNACION);
			setState(42);
			valor(0);
			setState(44);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(43);
				match(SEMI);
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
	public static class PrintContext extends ParserRuleContext {
		public PrintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_print; }
	 
		public PrintContext() { }
		public void copyFrom(PrintContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PrintValorContext extends PrintContext {
		public TerminalNode IMPRESION() { return getToken(CompiladorParser.IMPRESION, 0); }
		public TerminalNode APARENTESIS() { return getToken(CompiladorParser.APARENTESIS, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CompiladorParser.CPARENTESIS, 0); }
		public PrintValorContext(PrintContext ctx) { copyFrom(ctx); }
	}

	public final PrintContext print() throws RecognitionException {
		PrintContext _localctx = new PrintContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_print);
		try {
			_localctx = new PrintValorContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			match(IMPRESION);
			setState(47);
			match(APARENTESIS);
			setState(48);
			valor(0);
			setState(49);
			match(CPARENTESIS);
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
	public static class ValorContext extends ParserRuleContext {
		public ValorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor; }
	 
		public ValorContext() { }
		public void copyFrom(ValorContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParensContext extends ValorContext {
		public TerminalNode APARENTESIS() { return getToken(CompiladorParser.APARENTESIS, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CompiladorParser.CPARENTESIS, 0); }
		public ParensContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends ValorContext {
		public TerminalNode NUM() { return getToken(CompiladorParser.NUM, 0); }
		public NumeroContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MulDivContext extends ValorContext {
		public Token op;
		public List<ValorContext> valor() {
			return getRuleContexts(ValorContext.class);
		}
		public ValorContext valor(int i) {
			return getRuleContext(ValorContext.class,i);
		}
		public TerminalNode MUL() { return getToken(CompiladorParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(CompiladorParser.DIV, 0); }
		public MulDivContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AddSubContext extends ValorContext {
		public Token op;
		public List<ValorContext> valor() {
			return getRuleContexts(ValorContext.class);
		}
		public ValorContext valor(int i) {
			return getRuleContext(ValorContext.class,i);
		}
		public TerminalNode ADD() { return getToken(CompiladorParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(CompiladorParser.SUB, 0); }
		public AddSubContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ImplicitoContext extends ValorContext {
		public List<TerminalNode> APARENTESIS() { return getTokens(CompiladorParser.APARENTESIS); }
		public TerminalNode APARENTESIS(int i) {
			return getToken(CompiladorParser.APARENTESIS, i);
		}
		public List<ValorContext> valor() {
			return getRuleContexts(ValorContext.class);
		}
		public ValorContext valor(int i) {
			return getRuleContext(ValorContext.class,i);
		}
		public List<TerminalNode> CPARENTESIS() { return getTokens(CompiladorParser.CPARENTESIS); }
		public TerminalNode CPARENTESIS(int i) {
			return getToken(CompiladorParser.CPARENTESIS, i);
		}
		public ImplicitoContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ValorContext {
		public TerminalNode ID() { return getToken(CompiladorParser.ID, 0); }
		public IdContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DecimalContext extends ValorContext {
		public TerminalNode DEC() { return getToken(CompiladorParser.DEC, 0); }
		public DecimalContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CadenasContext extends ValorContext {
		public TerminalNode CADENA() { return getToken(CompiladorParser.CADENA, 0); }
		public CadenasContext(ValorContext ctx) { copyFrom(ctx); }
	}

	public final ValorContext valor() throws RecognitionException {
		return valor(0);
	}

	private ValorContext valor(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ValorContext _localctx = new ValorContext(_ctx, _parentState);
		ValorContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_valor, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				{
				_localctx = new NumeroContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(52);
				match(NUM);
				}
				break;
			case 2:
				{
				_localctx = new DecimalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(53);
				match(DEC);
				}
				break;
			case 3:
				{
				_localctx = new CadenasContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(54);
				match(CADENA);
				}
				break;
			case 4:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(55);
				match(ID);
				}
				break;
			case 5:
				{
				_localctx = new ParensContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(56);
				match(APARENTESIS);
				setState(57);
				valor(0);
				setState(58);
				match(CPARENTESIS);
				}
				break;
			case 6:
				{
				_localctx = new ImplicitoContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(60);
				match(APARENTESIS);
				setState(61);
				valor(0);
				setState(62);
				match(CPARENTESIS);
				setState(63);
				match(APARENTESIS);
				setState(64);
				valor(0);
				setState(65);
				match(CPARENTESIS);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(77);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,7,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(75);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(69);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(70);
						((MulDivContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==MUL || _la==DIV) ) {
							((MulDivContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(71);
						valor(9);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(72);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(73);
						((AddSubContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==ADD || _la==SUB) ) {
							((AddSubContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(74);
						valor(8);
						}
						break;
					}
					} 
				}
				setState(79);
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
			return valor_sempred((ValorContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean valor_sempred(ValorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 8);
		case 1:
			return precpred(_ctx, 7);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0018Q\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0001\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0005\u0001\u0018\b\u0001\n\u0001\f\u0001\u001b\t\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0003\u0002 \b\u0002\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003\'\b\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004-\b\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0003\u0006D\b\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006L\b\u0006"+
		"\n\u0006\f\u0006O\t\u0006\u0001\u0006\u0000\u0001\f\u0007\u0000\u0002"+
		"\u0004\u0006\b\n\f\u0000\u0002\u0001\u0000\u0006\u0007\u0001\u0000\b\t"+
		"W\u0000\u000e\u0001\u0000\u0000\u0000\u0002\u0019\u0001\u0000\u0000\u0000"+
		"\u0004\u001c\u0001\u0000\u0000\u0000\u0006!\u0001\u0000\u0000\u0000\b"+
		"(\u0001\u0000\u0000\u0000\n.\u0001\u0000\u0000\u0000\fC\u0001\u0000\u0000"+
		"\u0000\u000e\u000f\u0005\n\u0000\u0000\u000f\u0010\u0005\u000b\u0000\u0000"+
		"\u0010\u0011\u0003\u0002\u0001\u0000\u0011\u0012\u0005\f\u0000\u0000\u0012"+
		"\u0001\u0001\u0000\u0000\u0000\u0013\u0018\u0003\u0004\u0002\u0000\u0014"+
		"\u0018\u0003\u0006\u0003\u0000\u0015\u0018\u0003\b\u0004\u0000\u0016\u0018"+
		"\u0003\n\u0005\u0000\u0017\u0013\u0001\u0000\u0000\u0000\u0017\u0014\u0001"+
		"\u0000\u0000\u0000\u0017\u0015\u0001\u0000\u0000\u0000\u0017\u0016\u0001"+
		"\u0000\u0000\u0000\u0018\u001b\u0001\u0000\u0000\u0000\u0019\u0017\u0001"+
		"\u0000\u0000\u0000\u0019\u001a\u0001\u0000\u0000\u0000\u001a\u0003\u0001"+
		"\u0000\u0000\u0000\u001b\u0019\u0001\u0000\u0000\u0000\u001c\u001d\u0005"+
		"\u0001\u0000\u0000\u001d\u001f\u0005\u0013\u0000\u0000\u001e \u0005\u0017"+
		"\u0000\u0000\u001f\u001e\u0001\u0000\u0000\u0000\u001f \u0001\u0000\u0000"+
		"\u0000 \u0005\u0001\u0000\u0000\u0000!\"\u0005\u0001\u0000\u0000\"#\u0005"+
		"\u0013\u0000\u0000#$\u0005\r\u0000\u0000$&\u0003\f\u0006\u0000%\'\u0005"+
		"\u0017\u0000\u0000&%\u0001\u0000\u0000\u0000&\'\u0001\u0000\u0000\u0000"+
		"\'\u0007\u0001\u0000\u0000\u0000()\u0005\u0013\u0000\u0000)*\u0005\r\u0000"+
		"\u0000*,\u0003\f\u0006\u0000+-\u0005\u0017\u0000\u0000,+\u0001\u0000\u0000"+
		"\u0000,-\u0001\u0000\u0000\u0000-\t\u0001\u0000\u0000\u0000./\u0005\u0002"+
		"\u0000\u0000/0\u0005\u0010\u0000\u000001\u0003\f\u0006\u000012\u0005\u0011"+
		"\u0000\u00002\u000b\u0001\u0000\u0000\u000034\u0006\u0006\uffff\uffff"+
		"\u00004D\u0005\u0014\u0000\u00005D\u0005\u0016\u0000\u00006D\u0005\u0015"+
		"\u0000\u00007D\u0005\u0013\u0000\u000089\u0005\u0010\u0000\u00009:\u0003"+
		"\f\u0006\u0000:;\u0005\u0011\u0000\u0000;D\u0001\u0000\u0000\u0000<=\u0005"+
		"\u0010\u0000\u0000=>\u0003\f\u0006\u0000>?\u0005\u0011\u0000\u0000?@\u0005"+
		"\u0010\u0000\u0000@A\u0003\f\u0006\u0000AB\u0005\u0011\u0000\u0000BD\u0001"+
		"\u0000\u0000\u0000C3\u0001\u0000\u0000\u0000C5\u0001\u0000\u0000\u0000"+
		"C6\u0001\u0000\u0000\u0000C7\u0001\u0000\u0000\u0000C8\u0001\u0000\u0000"+
		"\u0000C<\u0001\u0000\u0000\u0000DM\u0001\u0000\u0000\u0000EF\n\b\u0000"+
		"\u0000FG\u0007\u0000\u0000\u0000GL\u0003\f\u0006\tHI\n\u0007\u0000\u0000"+
		"IJ\u0007\u0001\u0000\u0000JL\u0003\f\u0006\bKE\u0001\u0000\u0000\u0000"+
		"KH\u0001\u0000\u0000\u0000LO\u0001\u0000\u0000\u0000MK\u0001\u0000\u0000"+
		"\u0000MN\u0001\u0000\u0000\u0000N\r\u0001\u0000\u0000\u0000OM\u0001\u0000"+
		"\u0000\u0000\b\u0017\u0019\u001f&,CKM";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}