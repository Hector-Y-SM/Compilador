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
		T__0=1, PR=2, IMPRESION=3, IF_BASICO=4, ELSE=5, ELSE_IF=6, DO=7, WHILE=8, 
		FOR=9, INT=10, FLOAT=11, CHAR=12, MUL=13, DIV=14, ADD=15, SUB=16, ASIGNACION=17, 
		MAYORQ=18, MENORQ=19, MAYOR_IGUAL=20, MENOR_IGUAL=21, IGUALDAD_DEBIL=22, 
		IGUALDAD_FUERTE=23, DIF_DEBIL=24, DIF_FUERTE=25, OR=26, AND=27, TPG=28, 
		ALLAVE=29, CLLAVE=30, APARENTESIS=31, CPARENTESIS=32, AADMIRACION=33, 
		ID=34, NUM=35, CADENA=36, DEC=37, SEMI=38, WS=39;
	public static final int
		RULE_init = 0, RULE_contenido = 1, RULE_inicializacion = 2, RULE_declaracion = 3, 
		RULE_asignacion = 4, RULE_print = 5, RULE_if_estructuras = 6, RULE_if = 7, 
		RULE_else_if = 8, RULE_else = 9, RULE_ciclos = 10, RULE_while = 11, RULE_doWhile = 12, 
		RULE_valor = 13, RULE_condiciones = 14, RULE_incremento = 15, RULE_abloque = 16, 
		RULE_cbloque = 17;
	private static String[] makeRuleNames() {
		return new String[] {
			"init", "contenido", "inicializacion", "declaracion", "asignacion", "print", 
			"if_estructuras", "if", "else_if", "else", "ciclos", "while", "doWhile", 
			"valor", "condiciones", "incremento", "abloque", "cbloque"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'++'", null, "'leak'", "'si'", "'else'", "'elfito'", "'do'", "'while'", 
			"'for'", "'nc'", "'im'", "'jgl'", "'*'", "'/'", "'+'", "'-'", "'='", 
			"'>'", "'<'", "'>='", "'<='", "'=='", "'==='", "'!='", "'!=='", "'||'", 
			"'&&'", "'W7HLM'", "'{'", "'}'", "'('", "')'", "'!'", null, null, null, 
			null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, "PR", "IMPRESION", "IF_BASICO", "ELSE", "ELSE_IF", "DO", 
			"WHILE", "FOR", "INT", "FLOAT", "CHAR", "MUL", "DIV", "ADD", "SUB", "ASIGNACION", 
			"MAYORQ", "MENORQ", "MAYOR_IGUAL", "MENOR_IGUAL", "IGUALDAD_DEBIL", "IGUALDAD_FUERTE", 
			"DIF_DEBIL", "DIF_FUERTE", "OR", "AND", "TPG", "ALLAVE", "CLLAVE", "APARENTESIS", 
			"CPARENTESIS", "AADMIRACION", "ID", "NUM", "CADENA", "DEC", "SEMI", "WS"
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
		public TerminalNode ALLAVE() { return getToken(CompiladorParser.ALLAVE, 0); }
		public ContenidoContext contenido() {
			return getRuleContext(ContenidoContext.class,0);
		}
		public TerminalNode CLLAVE() { return getToken(CompiladorParser.CLLAVE, 0); }
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
			setState(36);
			match(TPG);
			setState(37);
			match(ALLAVE);
			setState(38);
			contenido();
			setState(39);
			match(CLLAVE);
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
		public List<If_estructurasContext> if_estructuras() {
			return getRuleContexts(If_estructurasContext.class);
		}
		public If_estructurasContext if_estructuras(int i) {
			return getRuleContext(If_estructurasContext.class,i);
		}
		public List<CiclosContext> ciclos() {
			return getRuleContexts(CiclosContext.class);
		}
		public CiclosContext ciclos(int i) {
			return getRuleContext(CiclosContext.class,i);
		}
		public List<IncrementoContext> incremento() {
			return getRuleContexts(IncrementoContext.class);
		}
		public IncrementoContext incremento(int i) {
			return getRuleContext(IncrementoContext.class,i);
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
			setState(50);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17179869628L) != 0)) {
				{
				setState(48);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(41);
					inicializacion();
					}
					break;
				case 2:
					{
					setState(42);
					declaracion();
					}
					break;
				case 3:
					{
					setState(43);
					asignacion();
					}
					break;
				case 4:
					{
					setState(44);
					print();
					}
					break;
				case 5:
					{
					setState(45);
					if_estructuras();
					}
					break;
				case 6:
					{
					setState(46);
					ciclos();
					}
					break;
				case 7:
					{
					setState(47);
					incremento();
					}
					break;
				}
				}
				setState(52);
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
			setState(53);
			match(PR);
			setState(54);
			match(ID);
			setState(56);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(55);
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
			setState(58);
			match(PR);
			setState(59);
			match(ID);
			setState(60);
			match(ASIGNACION);
			setState(61);
			valor(0);
			setState(63);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(62);
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
			setState(65);
			match(ID);
			setState(66);
			match(ASIGNACION);
			setState(67);
			valor(0);
			setState(69);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(68);
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
		public TerminalNode SEMI() { return getToken(CompiladorParser.SEMI, 0); }
		public PrintValorContext(PrintContext ctx) { copyFrom(ctx); }
	}

	public final PrintContext print() throws RecognitionException {
		PrintContext _localctx = new PrintContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_print);
		int _la;
		try {
			_localctx = new PrintValorContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			match(IMPRESION);
			setState(72);
			match(APARENTESIS);
			setState(73);
			valor(0);
			setState(74);
			match(CPARENTESIS);
			setState(76);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(75);
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
	public static class If_estructurasContext extends ParserRuleContext {
		public If_estructurasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_estructuras; }
	 
		public If_estructurasContext() { }
		public void copyFrom(If_estructurasContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfConElseIfContext extends If_estructurasContext {
		public IfContext if_() {
			return getRuleContext(IfContext.class,0);
		}
		public List<Else_ifContext> else_if() {
			return getRuleContexts(Else_ifContext.class);
		}
		public Else_ifContext else_if(int i) {
			return getRuleContext(Else_ifContext.class,i);
		}
		public IfConElseIfContext(If_estructurasContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class GenerarErrorContext extends If_estructurasContext {
		public ElseContext else_() {
			return getRuleContext(ElseContext.class,0);
		}
		public Else_ifContext else_if() {
			return getRuleContext(Else_ifContext.class,0);
		}
		public GenerarErrorContext(If_estructurasContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfTradicionalContext extends If_estructurasContext {
		public IfContext if_() {
			return getRuleContext(IfContext.class,0);
		}
		public IfTradicionalContext(If_estructurasContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfConElseContext extends If_estructurasContext {
		public IfContext if_() {
			return getRuleContext(IfContext.class,0);
		}
		public ElseContext else_() {
			return getRuleContext(ElseContext.class,0);
		}
		public IfConElseContext(If_estructurasContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfElseIf_ElseContext extends If_estructurasContext {
		public IfContext if_() {
			return getRuleContext(IfContext.class,0);
		}
		public ElseContext else_() {
			return getRuleContext(ElseContext.class,0);
		}
		public List<Else_ifContext> else_if() {
			return getRuleContexts(Else_ifContext.class);
		}
		public Else_ifContext else_if(int i) {
			return getRuleContext(Else_ifContext.class,i);
		}
		public IfElseIf_ElseContext(If_estructurasContext ctx) { copyFrom(ctx); }
	}

	public final If_estructurasContext if_estructuras() throws RecognitionException {
		If_estructurasContext _localctx = new If_estructurasContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_if_estructuras);
		int _la;
		try {
			setState(101);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				_localctx = new IfTradicionalContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(78);
				if_();
				}
				break;
			case 2:
				_localctx = new IfConElseContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(79);
				if_();
				setState(80);
				else_();
				}
				break;
			case 3:
				_localctx = new IfConElseIfContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(82);
				if_();
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ELSE_IF) {
					{
					{
					setState(83);
					else_if();
					}
					}
					setState(88);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 4:
				_localctx = new IfElseIf_ElseContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(89);
				if_();
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ELSE_IF) {
					{
					{
					setState(90);
					else_if();
					}
					}
					setState(95);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(96);
				else_();
				}
				break;
			case 5:
				_localctx = new GenerarErrorContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(98);
				else_();
				setState(99);
				else_if();
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
	public static class IfContext extends ParserRuleContext {
		public IfContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if; }
	 
		public IfContext() { }
		public void copyFrom(IfContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IfPuroContext extends IfContext {
		public TerminalNode IF_BASICO() { return getToken(CompiladorParser.IF_BASICO, 0); }
		public TerminalNode APARENTESIS() { return getToken(CompiladorParser.APARENTESIS, 0); }
		public CondicionesContext condiciones() {
			return getRuleContext(CondicionesContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CompiladorParser.CPARENTESIS, 0); }
		public AbloqueContext abloque() {
			return getRuleContext(AbloqueContext.class,0);
		}
		public ContenidoContext contenido() {
			return getRuleContext(ContenidoContext.class,0);
		}
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public IfPuroContext(IfContext ctx) { copyFrom(ctx); }
	}

	public final IfContext if_() throws RecognitionException {
		IfContext _localctx = new IfContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_if);
		try {
			_localctx = new IfPuroContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(103);
			match(IF_BASICO);
			setState(104);
			match(APARENTESIS);
			setState(105);
			condiciones(0);
			setState(106);
			match(CPARENTESIS);
			setState(107);
			abloque();
			setState(108);
			contenido();
			setState(109);
			cbloque();
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
	public static class Else_ifContext extends ParserRuleContext {
		public Else_ifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_else_if; }
	 
		public Else_ifContext() { }
		public void copyFrom(Else_ifContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ElseIfPuroContext extends Else_ifContext {
		public TerminalNode ELSE_IF() { return getToken(CompiladorParser.ELSE_IF, 0); }
		public TerminalNode APARENTESIS() { return getToken(CompiladorParser.APARENTESIS, 0); }
		public CondicionesContext condiciones() {
			return getRuleContext(CondicionesContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CompiladorParser.CPARENTESIS, 0); }
		public AbloqueContext abloque() {
			return getRuleContext(AbloqueContext.class,0);
		}
		public ContenidoContext contenido() {
			return getRuleContext(ContenidoContext.class,0);
		}
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public ElseIfPuroContext(Else_ifContext ctx) { copyFrom(ctx); }
	}

	public final Else_ifContext else_if() throws RecognitionException {
		Else_ifContext _localctx = new Else_ifContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_else_if);
		try {
			_localctx = new ElseIfPuroContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			match(ELSE_IF);
			setState(112);
			match(APARENTESIS);
			setState(113);
			condiciones(0);
			setState(114);
			match(CPARENTESIS);
			setState(115);
			abloque();
			setState(116);
			contenido();
			setState(117);
			cbloque();
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
	public static class ElseContext extends ParserRuleContext {
		public ElseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_else; }
	 
		public ElseContext() { }
		public void copyFrom(ElseContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ElsePuroContext extends ElseContext {
		public TerminalNode ELSE() { return getToken(CompiladorParser.ELSE, 0); }
		public AbloqueContext abloque() {
			return getRuleContext(AbloqueContext.class,0);
		}
		public ContenidoContext contenido() {
			return getRuleContext(ContenidoContext.class,0);
		}
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public ElsePuroContext(ElseContext ctx) { copyFrom(ctx); }
	}

	public final ElseContext else_() throws RecognitionException {
		ElseContext _localctx = new ElseContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_else);
		try {
			_localctx = new ElsePuroContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			match(ELSE);
			setState(120);
			abloque();
			setState(121);
			contenido();
			setState(122);
			cbloque();
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
	public static class CiclosContext extends ParserRuleContext {
		public CiclosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ciclos; }
	 
		public CiclosContext() { }
		public void copyFrom(CiclosContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReglaWhileContext extends CiclosContext {
		public WhileContext while_() {
			return getRuleContext(WhileContext.class,0);
		}
		public ReglaWhileContext(CiclosContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ReglaDoWhileContext extends CiclosContext {
		public DoWhileContext doWhile() {
			return getRuleContext(DoWhileContext.class,0);
		}
		public ReglaDoWhileContext(CiclosContext ctx) { copyFrom(ctx); }
	}

	public final CiclosContext ciclos() throws RecognitionException {
		CiclosContext _localctx = new CiclosContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_ciclos);
		try {
			setState(126);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WHILE:
				_localctx = new ReglaWhileContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(124);
				while_();
				}
				break;
			case DO:
				_localctx = new ReglaDoWhileContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(125);
				doWhile();
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
	public static class WhileContext extends ParserRuleContext {
		public WhileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while; }
	 
		public WhileContext() { }
		public void copyFrom(WhileContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CicloWhileContext extends WhileContext {
		public TerminalNode WHILE() { return getToken(CompiladorParser.WHILE, 0); }
		public TerminalNode APARENTESIS() { return getToken(CompiladorParser.APARENTESIS, 0); }
		public CondicionesContext condiciones() {
			return getRuleContext(CondicionesContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CompiladorParser.CPARENTESIS, 0); }
		public AbloqueContext abloque() {
			return getRuleContext(AbloqueContext.class,0);
		}
		public ContenidoContext contenido() {
			return getRuleContext(ContenidoContext.class,0);
		}
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public CicloWhileContext(WhileContext ctx) { copyFrom(ctx); }
	}

	public final WhileContext while_() throws RecognitionException {
		WhileContext _localctx = new WhileContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_while);
		try {
			_localctx = new CicloWhileContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(WHILE);
			setState(129);
			match(APARENTESIS);
			setState(130);
			condiciones(0);
			setState(131);
			match(CPARENTESIS);
			setState(132);
			abloque();
			setState(133);
			contenido();
			setState(134);
			cbloque();
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
	public static class DoWhileContext extends ParserRuleContext {
		public DoWhileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_doWhile; }
	 
		public DoWhileContext() { }
		public void copyFrom(DoWhileContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CicloDoWhileContext extends DoWhileContext {
		public TerminalNode DO() { return getToken(CompiladorParser.DO, 0); }
		public AbloqueContext abloque() {
			return getRuleContext(AbloqueContext.class,0);
		}
		public ContenidoContext contenido() {
			return getRuleContext(ContenidoContext.class,0);
		}
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public TerminalNode WHILE() { return getToken(CompiladorParser.WHILE, 0); }
		public TerminalNode APARENTESIS() { return getToken(CompiladorParser.APARENTESIS, 0); }
		public CondicionesContext condiciones() {
			return getRuleContext(CondicionesContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CompiladorParser.CPARENTESIS, 0); }
		public CicloDoWhileContext(DoWhileContext ctx) { copyFrom(ctx); }
	}

	public final DoWhileContext doWhile() throws RecognitionException {
		DoWhileContext _localctx = new DoWhileContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_doWhile);
		try {
			_localctx = new CicloDoWhileContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(DO);
			setState(137);
			abloque();
			setState(138);
			contenido();
			setState(139);
			cbloque();
			setState(140);
			match(WHILE);
			setState(141);
			match(APARENTESIS);
			setState(142);
			condiciones(0);
			setState(143);
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
		int _startState = 26;
		enterRecursionRule(_localctx, 26, RULE_valor, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				_localctx = new NumeroContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(146);
				match(NUM);
				}
				break;
			case 2:
				{
				_localctx = new DecimalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(147);
				match(DEC);
				}
				break;
			case 3:
				{
				_localctx = new CadenasContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(148);
				match(CADENA);
				}
				break;
			case 4:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(149);
				match(ID);
				}
				break;
			case 5:
				{
				_localctx = new ParensContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(150);
				match(APARENTESIS);
				setState(151);
				valor(0);
				setState(152);
				match(CPARENTESIS);
				}
				break;
			case 6:
				{
				_localctx = new ImplicitoContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(154);
				match(APARENTESIS);
				setState(155);
				valor(0);
				setState(156);
				match(CPARENTESIS);
				setState(157);
				match(APARENTESIS);
				setState(158);
				valor(0);
				setState(159);
				match(CPARENTESIS);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(171);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(169);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,11,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(163);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(164);
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
						setState(165);
						valor(9);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(166);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(167);
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
						setState(168);
						valor(8);
						}
						break;
					}
					} 
				}
				setState(173);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
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

	@SuppressWarnings("CheckReturnValue")
	public static class CondicionesContext extends ParserRuleContext {
		public CondicionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condiciones; }
	 
		public CondicionesContext() { }
		public void copyFrom(CondicionesContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CondicionComparacionesContext extends CondicionesContext {
		public Token des;
		public List<ValorContext> valor() {
			return getRuleContexts(ValorContext.class);
		}
		public ValorContext valor(int i) {
			return getRuleContext(ValorContext.class,i);
		}
		public TerminalNode MAYORQ() { return getToken(CompiladorParser.MAYORQ, 0); }
		public TerminalNode MENORQ() { return getToken(CompiladorParser.MENORQ, 0); }
		public TerminalNode MAYOR_IGUAL() { return getToken(CompiladorParser.MAYOR_IGUAL, 0); }
		public TerminalNode MENOR_IGUAL() { return getToken(CompiladorParser.MENOR_IGUAL, 0); }
		public TerminalNode IGUALDAD_DEBIL() { return getToken(CompiladorParser.IGUALDAD_DEBIL, 0); }
		public TerminalNode IGUALDAD_FUERTE() { return getToken(CompiladorParser.IGUALDAD_FUERTE, 0); }
		public TerminalNode DIF_DEBIL() { return getToken(CompiladorParser.DIF_DEBIL, 0); }
		public TerminalNode DIF_FUERTE() { return getToken(CompiladorParser.DIF_FUERTE, 0); }
		public List<TerminalNode> APARENTESIS() { return getTokens(CompiladorParser.APARENTESIS); }
		public TerminalNode APARENTESIS(int i) {
			return getToken(CompiladorParser.APARENTESIS, i);
		}
		public List<TerminalNode> CPARENTESIS() { return getTokens(CompiladorParser.CPARENTESIS); }
		public TerminalNode CPARENTESIS(int i) {
			return getToken(CompiladorParser.CPARENTESIS, i);
		}
		public CondicionComparacionesContext(CondicionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LogicasContext extends CondicionesContext {
		public Token des;
		public List<CondicionesContext> condiciones() {
			return getRuleContexts(CondicionesContext.class);
		}
		public CondicionesContext condiciones(int i) {
			return getRuleContext(CondicionesContext.class,i);
		}
		public TerminalNode OR() { return getToken(CompiladorParser.OR, 0); }
		public TerminalNode AND() { return getToken(CompiladorParser.AND, 0); }
		public LogicasContext(CondicionesContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TrueOrFalseContext extends CondicionesContext {
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public List<TerminalNode> APARENTESIS() { return getTokens(CompiladorParser.APARENTESIS); }
		public TerminalNode APARENTESIS(int i) {
			return getToken(CompiladorParser.APARENTESIS, i);
		}
		public List<TerminalNode> CPARENTESIS() { return getTokens(CompiladorParser.CPARENTESIS); }
		public TerminalNode CPARENTESIS(int i) {
			return getToken(CompiladorParser.CPARENTESIS, i);
		}
		public TrueOrFalseContext(CondicionesContext ctx) { copyFrom(ctx); }
	}

	public final CondicionesContext condiciones() throws RecognitionException {
		return condiciones(0);
	}

	private CondicionesContext condiciones(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		CondicionesContext _localctx = new CondicionesContext(_ctx, _parentState);
		CondicionesContext _prevctx = _localctx;
		int _startState = 28;
		enterRecursionRule(_localctx, 28, RULE_condiciones, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				_localctx = new TrueOrFalseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(178);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(175);
						match(APARENTESIS);
						}
						} 
					}
					setState(180);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				}
				setState(181);
				valor(0);
				setState(185);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(182);
						match(CPARENTESIS);
						}
						} 
					}
					setState(187);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				}
				}
				break;
			case 2:
				{
				_localctx = new CondicionComparacionesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(191);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(188);
						match(APARENTESIS);
						}
						} 
					}
					setState(193);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
				}
				setState(194);
				valor(0);
				setState(195);
				((CondicionComparacionesContext)_localctx).des = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 66846720L) != 0)) ) {
					((CondicionComparacionesContext)_localctx).des = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(196);
				valor(0);
				setState(200);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(197);
						match(CPARENTESIS);
						}
						} 
					}
					setState(202);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(210);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicasContext(new CondicionesContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_condiciones);
					setState(205);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(206);
					((LogicasContext)_localctx).des = _input.LT(1);
					_la = _input.LA(1);
					if ( !(_la==OR || _la==AND) ) {
						((LogicasContext)_localctx).des = (Token)_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(207);
					condiciones(4);
					}
					} 
				}
				setState(212);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
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

	@SuppressWarnings("CheckReturnValue")
	public static class IncrementoContext extends ParserRuleContext {
		public IncrementoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_incremento; }
	 
		public IncrementoContext() { }
		public void copyFrom(IncrementoContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IncrementarContext extends IncrementoContext {
		public TerminalNode ID() { return getToken(CompiladorParser.ID, 0); }
		public IncrementarContext(IncrementoContext ctx) { copyFrom(ctx); }
	}

	public final IncrementoContext incremento() throws RecognitionException {
		IncrementoContext _localctx = new IncrementoContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_incremento);
		try {
			_localctx = new IncrementarContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			match(ID);
			setState(214);
			match(T__0);
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
	public static class AbloqueContext extends ParserRuleContext {
		public AbloqueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_abloque; }
	 
		public AbloqueContext() { }
		public void copyFrom(AbloqueContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AuxScoopeDosContext extends AbloqueContext {
		public TerminalNode ALLAVE() { return getToken(CompiladorParser.ALLAVE, 0); }
		public AuxScoopeDosContext(AbloqueContext ctx) { copyFrom(ctx); }
	}

	public final AbloqueContext abloque() throws RecognitionException {
		AbloqueContext _localctx = new AbloqueContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_abloque);
		try {
			_localctx = new AuxScoopeDosContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			match(ALLAVE);
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
	public static class CbloqueContext extends ParserRuleContext {
		public CbloqueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cbloque; }
	 
		public CbloqueContext() { }
		public void copyFrom(CbloqueContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class AuxScoopeContext extends CbloqueContext {
		public TerminalNode CLLAVE() { return getToken(CompiladorParser.CLLAVE, 0); }
		public AuxScoopeContext(CbloqueContext ctx) { copyFrom(ctx); }
	}

	public final CbloqueContext cbloque() throws RecognitionException {
		CbloqueContext _localctx = new CbloqueContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_cbloque);
		try {
			_localctx = new AuxScoopeContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(218);
			match(CLLAVE);
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 13:
			return valor_sempred((ValorContext)_localctx, predIndex);
		case 14:
			return condiciones_sempred((CondicionesContext)_localctx, predIndex);
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
	private boolean condiciones_sempred(CondicionesContext _localctx, int predIndex) {
		switch (predIndex) {
		case 2:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\'\u00dd\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0005\u00011\b\u0001"+
		"\n\u0001\f\u00014\t\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002"+
		"9\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u0003@\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0003\u0004F\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0003\u0005M\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006U\b\u0006\n\u0006\f\u0006"+
		"X\t\u0006\u0001\u0006\u0001\u0006\u0005\u0006\\\b\u0006\n\u0006\f\u0006"+
		"_\t\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0003\u0006f\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0003\n\u007f\b\n\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u00a2\b\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u00aa\b\r\n\r\f\r\u00ad"+
		"\t\r\u0001\u000e\u0001\u000e\u0005\u000e\u00b1\b\u000e\n\u000e\f\u000e"+
		"\u00b4\t\u000e\u0001\u000e\u0001\u000e\u0005\u000e\u00b8\b\u000e\n\u000e"+
		"\f\u000e\u00bb\t\u000e\u0001\u000e\u0005\u000e\u00be\b\u000e\n\u000e\f"+
		"\u000e\u00c1\t\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0005"+
		"\u000e\u00c7\b\u000e\n\u000e\f\u000e\u00ca\t\u000e\u0003\u000e\u00cc\b"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0005\u000e\u00d1\b\u000e\n"+
		"\u000e\f\u000e\u00d4\t\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011\u0004\u00b2\u00b9"+
		"\u00bf\u00c8\u0002\u001a\u001c\u0012\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"\u0000\u0004\u0001"+
		"\u0000\r\u000e\u0001\u0000\u000f\u0010\u0001\u0000\u0012\u0019\u0001\u0000"+
		"\u001a\u001b\u00e9\u0000$\u0001\u0000\u0000\u0000\u00022\u0001\u0000\u0000"+
		"\u0000\u00045\u0001\u0000\u0000\u0000\u0006:\u0001\u0000\u0000\u0000\b"+
		"A\u0001\u0000\u0000\u0000\nG\u0001\u0000\u0000\u0000\fe\u0001\u0000\u0000"+
		"\u0000\u000eg\u0001\u0000\u0000\u0000\u0010o\u0001\u0000\u0000\u0000\u0012"+
		"w\u0001\u0000\u0000\u0000\u0014~\u0001\u0000\u0000\u0000\u0016\u0080\u0001"+
		"\u0000\u0000\u0000\u0018\u0088\u0001\u0000\u0000\u0000\u001a\u00a1\u0001"+
		"\u0000\u0000\u0000\u001c\u00cb\u0001\u0000\u0000\u0000\u001e\u00d5\u0001"+
		"\u0000\u0000\u0000 \u00d8\u0001\u0000\u0000\u0000\"\u00da\u0001\u0000"+
		"\u0000\u0000$%\u0005\u001c\u0000\u0000%&\u0005\u001d\u0000\u0000&\'\u0003"+
		"\u0002\u0001\u0000\'(\u0005\u001e\u0000\u0000(\u0001\u0001\u0000\u0000"+
		"\u0000)1\u0003\u0004\u0002\u0000*1\u0003\u0006\u0003\u0000+1\u0003\b\u0004"+
		"\u0000,1\u0003\n\u0005\u0000-1\u0003\f\u0006\u0000.1\u0003\u0014\n\u0000"+
		"/1\u0003\u001e\u000f\u00000)\u0001\u0000\u0000\u00000*\u0001\u0000\u0000"+
		"\u00000+\u0001\u0000\u0000\u00000,\u0001\u0000\u0000\u00000-\u0001\u0000"+
		"\u0000\u00000.\u0001\u0000\u0000\u00000/\u0001\u0000\u0000\u000014\u0001"+
		"\u0000\u0000\u000020\u0001\u0000\u0000\u000023\u0001\u0000\u0000\u0000"+
		"3\u0003\u0001\u0000\u0000\u000042\u0001\u0000\u0000\u000056\u0005\u0002"+
		"\u0000\u000068\u0005\"\u0000\u000079\u0005&\u0000\u000087\u0001\u0000"+
		"\u0000\u000089\u0001\u0000\u0000\u00009\u0005\u0001\u0000\u0000\u0000"+
		":;\u0005\u0002\u0000\u0000;<\u0005\"\u0000\u0000<=\u0005\u0011\u0000\u0000"+
		"=?\u0003\u001a\r\u0000>@\u0005&\u0000\u0000?>\u0001\u0000\u0000\u0000"+
		"?@\u0001\u0000\u0000\u0000@\u0007\u0001\u0000\u0000\u0000AB\u0005\"\u0000"+
		"\u0000BC\u0005\u0011\u0000\u0000CE\u0003\u001a\r\u0000DF\u0005&\u0000"+
		"\u0000ED\u0001\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000F\t\u0001\u0000"+
		"\u0000\u0000GH\u0005\u0003\u0000\u0000HI\u0005\u001f\u0000\u0000IJ\u0003"+
		"\u001a\r\u0000JL\u0005 \u0000\u0000KM\u0005&\u0000\u0000LK\u0001\u0000"+
		"\u0000\u0000LM\u0001\u0000\u0000\u0000M\u000b\u0001\u0000\u0000\u0000"+
		"Nf\u0003\u000e\u0007\u0000OP\u0003\u000e\u0007\u0000PQ\u0003\u0012\t\u0000"+
		"Qf\u0001\u0000\u0000\u0000RV\u0003\u000e\u0007\u0000SU\u0003\u0010\b\u0000"+
		"TS\u0001\u0000\u0000\u0000UX\u0001\u0000\u0000\u0000VT\u0001\u0000\u0000"+
		"\u0000VW\u0001\u0000\u0000\u0000Wf\u0001\u0000\u0000\u0000XV\u0001\u0000"+
		"\u0000\u0000Y]\u0003\u000e\u0007\u0000Z\\\u0003\u0010\b\u0000[Z\u0001"+
		"\u0000\u0000\u0000\\_\u0001\u0000\u0000\u0000][\u0001\u0000\u0000\u0000"+
		"]^\u0001\u0000\u0000\u0000^`\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000"+
		"\u0000`a\u0003\u0012\t\u0000af\u0001\u0000\u0000\u0000bc\u0003\u0012\t"+
		"\u0000cd\u0003\u0010\b\u0000df\u0001\u0000\u0000\u0000eN\u0001\u0000\u0000"+
		"\u0000eO\u0001\u0000\u0000\u0000eR\u0001\u0000\u0000\u0000eY\u0001\u0000"+
		"\u0000\u0000eb\u0001\u0000\u0000\u0000f\r\u0001\u0000\u0000\u0000gh\u0005"+
		"\u0004\u0000\u0000hi\u0005\u001f\u0000\u0000ij\u0003\u001c\u000e\u0000"+
		"jk\u0005 \u0000\u0000kl\u0003 \u0010\u0000lm\u0003\u0002\u0001\u0000m"+
		"n\u0003\"\u0011\u0000n\u000f\u0001\u0000\u0000\u0000op\u0005\u0006\u0000"+
		"\u0000pq\u0005\u001f\u0000\u0000qr\u0003\u001c\u000e\u0000rs\u0005 \u0000"+
		"\u0000st\u0003 \u0010\u0000tu\u0003\u0002\u0001\u0000uv\u0003\"\u0011"+
		"\u0000v\u0011\u0001\u0000\u0000\u0000wx\u0005\u0005\u0000\u0000xy\u0003"+
		" \u0010\u0000yz\u0003\u0002\u0001\u0000z{\u0003\"\u0011\u0000{\u0013\u0001"+
		"\u0000\u0000\u0000|\u007f\u0003\u0016\u000b\u0000}\u007f\u0003\u0018\f"+
		"\u0000~|\u0001\u0000\u0000\u0000~}\u0001\u0000\u0000\u0000\u007f\u0015"+
		"\u0001\u0000\u0000\u0000\u0080\u0081\u0005\b\u0000\u0000\u0081\u0082\u0005"+
		"\u001f\u0000\u0000\u0082\u0083\u0003\u001c\u000e\u0000\u0083\u0084\u0005"+
		" \u0000\u0000\u0084\u0085\u0003 \u0010\u0000\u0085\u0086\u0003\u0002\u0001"+
		"\u0000\u0086\u0087\u0003\"\u0011\u0000\u0087\u0017\u0001\u0000\u0000\u0000"+
		"\u0088\u0089\u0005\u0007\u0000\u0000\u0089\u008a\u0003 \u0010\u0000\u008a"+
		"\u008b\u0003\u0002\u0001\u0000\u008b\u008c\u0003\"\u0011\u0000\u008c\u008d"+
		"\u0005\b\u0000\u0000\u008d\u008e\u0005\u001f\u0000\u0000\u008e\u008f\u0003"+
		"\u001c\u000e\u0000\u008f\u0090\u0005 \u0000\u0000\u0090\u0019\u0001\u0000"+
		"\u0000\u0000\u0091\u0092\u0006\r\uffff\uffff\u0000\u0092\u00a2\u0005#"+
		"\u0000\u0000\u0093\u00a2\u0005%\u0000\u0000\u0094\u00a2\u0005$\u0000\u0000"+
		"\u0095\u00a2\u0005\"\u0000\u0000\u0096\u0097\u0005\u001f\u0000\u0000\u0097"+
		"\u0098\u0003\u001a\r\u0000\u0098\u0099\u0005 \u0000\u0000\u0099\u00a2"+
		"\u0001\u0000\u0000\u0000\u009a\u009b\u0005\u001f\u0000\u0000\u009b\u009c"+
		"\u0003\u001a\r\u0000\u009c\u009d\u0005 \u0000\u0000\u009d\u009e\u0005"+
		"\u001f\u0000\u0000\u009e\u009f\u0003\u001a\r\u0000\u009f\u00a0\u0005 "+
		"\u0000\u0000\u00a0\u00a2\u0001\u0000\u0000\u0000\u00a1\u0091\u0001\u0000"+
		"\u0000\u0000\u00a1\u0093\u0001\u0000\u0000\u0000\u00a1\u0094\u0001\u0000"+
		"\u0000\u0000\u00a1\u0095\u0001\u0000\u0000\u0000\u00a1\u0096\u0001\u0000"+
		"\u0000\u0000\u00a1\u009a\u0001\u0000\u0000\u0000\u00a2\u00ab\u0001\u0000"+
		"\u0000\u0000\u00a3\u00a4\n\b\u0000\u0000\u00a4\u00a5\u0007\u0000\u0000"+
		"\u0000\u00a5\u00aa\u0003\u001a\r\t\u00a6\u00a7\n\u0007\u0000\u0000\u00a7"+
		"\u00a8\u0007\u0001\u0000\u0000\u00a8\u00aa\u0003\u001a\r\b\u00a9\u00a3"+
		"\u0001\u0000\u0000\u0000\u00a9\u00a6\u0001\u0000\u0000\u0000\u00aa\u00ad"+
		"\u0001\u0000\u0000\u0000\u00ab\u00a9\u0001\u0000\u0000\u0000\u00ab\u00ac"+
		"\u0001\u0000\u0000\u0000\u00ac\u001b\u0001\u0000\u0000\u0000\u00ad\u00ab"+
		"\u0001\u0000\u0000\u0000\u00ae\u00b2\u0006\u000e\uffff\uffff\u0000\u00af"+
		"\u00b1\u0005\u001f\u0000\u0000\u00b0\u00af\u0001\u0000\u0000\u0000\u00b1"+
		"\u00b4\u0001\u0000\u0000\u0000\u00b2\u00b3\u0001\u0000\u0000\u0000\u00b2"+
		"\u00b0\u0001\u0000\u0000\u0000\u00b3\u00b5\u0001\u0000\u0000\u0000\u00b4"+
		"\u00b2\u0001\u0000\u0000\u0000\u00b5\u00b9\u0003\u001a\r\u0000\u00b6\u00b8"+
		"\u0005 \u0000\u0000\u00b7\u00b6\u0001\u0000\u0000\u0000\u00b8\u00bb\u0001"+
		"\u0000\u0000\u0000\u00b9\u00ba\u0001\u0000\u0000\u0000\u00b9\u00b7\u0001"+
		"\u0000\u0000\u0000\u00ba\u00cc\u0001\u0000\u0000\u0000\u00bb\u00b9\u0001"+
		"\u0000\u0000\u0000\u00bc\u00be\u0005\u001f\u0000\u0000\u00bd\u00bc\u0001"+
		"\u0000\u0000\u0000\u00be\u00c1\u0001\u0000\u0000\u0000\u00bf\u00c0\u0001"+
		"\u0000\u0000\u0000\u00bf\u00bd\u0001\u0000\u0000\u0000\u00c0\u00c2\u0001"+
		"\u0000\u0000\u0000\u00c1\u00bf\u0001\u0000\u0000\u0000\u00c2\u00c3\u0003"+
		"\u001a\r\u0000\u00c3\u00c4\u0007\u0002\u0000\u0000\u00c4\u00c8\u0003\u001a"+
		"\r\u0000\u00c5\u00c7\u0005 \u0000\u0000\u00c6\u00c5\u0001\u0000\u0000"+
		"\u0000\u00c7\u00ca\u0001\u0000\u0000\u0000\u00c8\u00c9\u0001\u0000\u0000"+
		"\u0000\u00c8\u00c6\u0001\u0000\u0000\u0000\u00c9\u00cc\u0001\u0000\u0000"+
		"\u0000\u00ca\u00c8\u0001\u0000\u0000\u0000\u00cb\u00ae\u0001\u0000\u0000"+
		"\u0000\u00cb\u00bf\u0001\u0000\u0000\u0000\u00cc\u00d2\u0001\u0000\u0000"+
		"\u0000\u00cd\u00ce\n\u0003\u0000\u0000\u00ce\u00cf\u0007\u0003\u0000\u0000"+
		"\u00cf\u00d1\u0003\u001c\u000e\u0004\u00d0\u00cd\u0001\u0000\u0000\u0000"+
		"\u00d1\u00d4\u0001\u0000\u0000\u0000\u00d2\u00d0\u0001\u0000\u0000\u0000"+
		"\u00d2\u00d3\u0001\u0000\u0000\u0000\u00d3\u001d\u0001\u0000\u0000\u0000"+
		"\u00d4\u00d2\u0001\u0000\u0000\u0000\u00d5\u00d6\u0005\"\u0000\u0000\u00d6"+
		"\u00d7\u0005\u0001\u0000\u0000\u00d7\u001f\u0001\u0000\u0000\u0000\u00d8"+
		"\u00d9\u0005\u001d\u0000\u0000\u00d9!\u0001\u0000\u0000\u0000\u00da\u00db"+
		"\u0005\u001e\u0000\u0000\u00db#\u0001\u0000\u0000\u0000\u0013028?ELV]"+
		"e~\u00a1\u00a9\u00ab\u00b2\u00b9\u00bf\u00c8\u00cb\u00d2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}