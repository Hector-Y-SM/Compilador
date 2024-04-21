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
		PR=1, IMPRESION=2, IF_BASICO=3, ELSE=4, ELSE_IF=5, INT=6, FLOAT=7, CHAR=8, 
		MUL=9, DIV=10, ADD=11, SUB=12, ASIGNACION=13, MAYORQ=14, MENORQ=15, MAYOR_IGUAL=16, 
		MENOR_IGUAL=17, IGUALDAD_DEBIL=18, IGUALDAD_FUERTE=19, DIF_DEBIL=20, DIF_FUERTE=21, 
		OR=22, AND=23, TPG=24, ALLAVE=25, CLLAVE=26, APARENTESIS=27, CPARENTESIS=28, 
		AADMIRACION=29, ID=30, NUM=31, CADENA=32, DEC=33, SEMI=34, WS=35;
	public static final int
		RULE_init = 0, RULE_contenido = 1, RULE_inicializacion = 2, RULE_declaracion = 3, 
		RULE_asignacion = 4, RULE_print = 5, RULE_if_estructuras = 6, RULE_if = 7, 
		RULE_else_if = 8, RULE_else = 9, RULE_valor = 10, RULE_condiciones = 11, 
		RULE_abloque = 12, RULE_cbloque = 13;
	private static String[] makeRuleNames() {
		return new String[] {
			"init", "contenido", "inicializacion", "declaracion", "asignacion", "print", 
			"if_estructuras", "if", "else_if", "else", "valor", "condiciones", "abloque", 
			"cbloque"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'leak'", "'si'", "'else'", "'elfito'", "'nc'", "'im'", "'jgl'", 
			"'*'", "'/'", "'+'", "'-'", "'='", "'>'", "'<'", "'>='", "'<='", "'=='", 
			"'==='", "'!='", "'!=='", "'||'", "'&&'", "'W7HLM'", "'{'", "'}'", "'('", 
			"')'", "'!'", null, null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PR", "IMPRESION", "IF_BASICO", "ELSE", "ELSE_IF", "INT", "FLOAT", 
			"CHAR", "MUL", "DIV", "ADD", "SUB", "ASIGNACION", "MAYORQ", "MENORQ", 
			"MAYOR_IGUAL", "MENOR_IGUAL", "IGUALDAD_DEBIL", "IGUALDAD_FUERTE", "DIF_DEBIL", 
			"DIF_FUERTE", "OR", "AND", "TPG", "ALLAVE", "CLLAVE", "APARENTESIS", 
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
			setState(28);
			match(TPG);
			setState(29);
			match(ALLAVE);
			setState(30);
			contenido();
			setState(31);
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
			setState(40);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1073741854L) != 0)) {
				{
				setState(38);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
				case 1:
					{
					setState(33);
					inicializacion();
					}
					break;
				case 2:
					{
					setState(34);
					declaracion();
					}
					break;
				case 3:
					{
					setState(35);
					asignacion();
					}
					break;
				case 4:
					{
					setState(36);
					print();
					}
					break;
				case 5:
					{
					setState(37);
					if_estructuras();
					}
					break;
				}
				}
				setState(42);
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
			setState(43);
			match(PR);
			setState(44);
			match(ID);
			setState(46);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(45);
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
			setState(48);
			match(PR);
			setState(49);
			match(ID);
			setState(50);
			match(ASIGNACION);
			setState(51);
			valor(0);
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(52);
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
			setState(55);
			match(ID);
			setState(56);
			match(ASIGNACION);
			setState(57);
			valor(0);
			setState(59);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(58);
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
			setState(61);
			match(IMPRESION);
			setState(62);
			match(APARENTESIS);
			setState(63);
			valor(0);
			setState(64);
			match(CPARENTESIS);
			setState(66);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(65);
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
			setState(91);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				_localctx = new IfTradicionalContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(68);
				if_();
				}
				break;
			case 2:
				_localctx = new IfConElseContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(69);
				if_();
				setState(70);
				else_();
				}
				break;
			case 3:
				_localctx = new IfConElseIfContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(72);
				if_();
				setState(76);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ELSE_IF) {
					{
					{
					setState(73);
					else_if();
					}
					}
					setState(78);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			case 4:
				_localctx = new IfElseIf_ElseContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(79);
				if_();
				setState(83);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==ELSE_IF) {
					{
					{
					setState(80);
					else_if();
					}
					}
					setState(85);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(86);
				else_();
				}
				break;
			case 5:
				_localctx = new GenerarErrorContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(88);
				else_();
				setState(89);
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
			setState(93);
			match(IF_BASICO);
			setState(94);
			match(APARENTESIS);
			setState(95);
			condiciones(0);
			setState(96);
			match(CPARENTESIS);
			setState(97);
			abloque();
			setState(98);
			contenido();
			setState(99);
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
			setState(101);
			match(ELSE_IF);
			setState(102);
			match(APARENTESIS);
			setState(103);
			condiciones(0);
			setState(104);
			match(CPARENTESIS);
			setState(105);
			abloque();
			setState(106);
			contenido();
			setState(107);
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
			setState(109);
			match(ELSE);
			setState(110);
			abloque();
			setState(111);
			contenido();
			setState(112);
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
		int _startState = 20;
		enterRecursionRule(_localctx, 20, RULE_valor, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(130);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				{
				_localctx = new NumeroContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(115);
				match(NUM);
				}
				break;
			case 2:
				{
				_localctx = new DecimalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(116);
				match(DEC);
				}
				break;
			case 3:
				{
				_localctx = new CadenasContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(117);
				match(CADENA);
				}
				break;
			case 4:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(118);
				match(ID);
				}
				break;
			case 5:
				{
				_localctx = new ParensContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(119);
				match(APARENTESIS);
				setState(120);
				valor(0);
				setState(121);
				match(CPARENTESIS);
				}
				break;
			case 6:
				{
				_localctx = new ImplicitoContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(123);
				match(APARENTESIS);
				setState(124);
				valor(0);
				setState(125);
				match(CPARENTESIS);
				setState(126);
				match(APARENTESIS);
				setState(127);
				valor(0);
				setState(128);
				match(CPARENTESIS);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(140);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(138);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(132);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(133);
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
						setState(134);
						valor(9);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(135);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(136);
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
						setState(137);
						valor(8);
						}
						break;
					}
					} 
				}
				setState(142);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,11,_ctx);
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
		int _startState = 22;
		enterRecursionRule(_localctx, 22, RULE_condiciones, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				_localctx = new TrueOrFalseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(147);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(144);
						match(APARENTESIS);
						}
						} 
					}
					setState(149);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,12,_ctx);
				}
				setState(150);
				valor(0);
				setState(154);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(151);
						match(CPARENTESIS);
						}
						} 
					}
					setState(156);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,13,_ctx);
				}
				}
				break;
			case 2:
				{
				_localctx = new CondicionComparacionesContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(160);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(157);
						match(APARENTESIS);
						}
						} 
					}
					setState(162);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,14,_ctx);
				}
				setState(163);
				valor(0);
				setState(164);
				((CondicionComparacionesContext)_localctx).des = _input.LT(1);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 4177920L) != 0)) ) {
					((CondicionComparacionesContext)_localctx).des = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(165);
				valor(0);
				setState(169);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
				while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1+1 ) {
						{
						{
						setState(166);
						match(CPARENTESIS);
						}
						} 
					}
					setState(171);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
				}
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(179);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicasContext(new CondicionesContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_condiciones);
					setState(174);
					if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
					setState(175);
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
					setState(176);
					condiciones(4);
					}
					} 
				}
				setState(181);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
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
		enterRule(_localctx, 24, RULE_abloque);
		try {
			_localctx = new AuxScoopeDosContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
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
		enterRule(_localctx, 26, RULE_cbloque);
		try {
			_localctx = new AuxScoopeContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
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
		case 10:
			return valor_sempred((ValorContext)_localctx, predIndex);
		case 11:
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
		"\u0004\u0001#\u00bb\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0005\u0001\'\b\u0001\n\u0001\f\u0001*\t\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0003\u0002/\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u00036\b\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u0004<\b\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005C\b\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006"+
		"K\b\u0006\n\u0006\f\u0006N\t\u0006\u0001\u0006\u0001\u0006\u0005\u0006"+
		"R\b\u0006\n\u0006\f\u0006U\t\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0003\u0006\\\b\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0003\n\u0083\b\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0005\n\u008b\b\n\n\n\f\n\u008e\t\n\u0001\u000b\u0001\u000b"+
		"\u0005\u000b\u0092\b\u000b\n\u000b\f\u000b\u0095\t\u000b\u0001\u000b\u0001"+
		"\u000b\u0005\u000b\u0099\b\u000b\n\u000b\f\u000b\u009c\t\u000b\u0001\u000b"+
		"\u0005\u000b\u009f\b\u000b\n\u000b\f\u000b\u00a2\t\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0005\u000b\u00a8\b\u000b\n\u000b\f\u000b"+
		"\u00ab\t\u000b\u0003\u000b\u00ad\b\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0005\u000b\u00b2\b\u000b\n\u000b\f\u000b\u00b5\t\u000b\u0001\f"+
		"\u0001\f\u0001\r\u0001\r\u0001\r\u0004\u0093\u009a\u00a0\u00a9\u0002\u0014"+
		"\u0016\u000e\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016"+
		"\u0018\u001a\u0000\u0004\u0001\u0000\t\n\u0001\u0000\u000b\f\u0001\u0000"+
		"\u000e\u0015\u0001\u0000\u0016\u0017\u00c8\u0000\u001c\u0001\u0000\u0000"+
		"\u0000\u0002(\u0001\u0000\u0000\u0000\u0004+\u0001\u0000\u0000\u0000\u0006"+
		"0\u0001\u0000\u0000\u0000\b7\u0001\u0000\u0000\u0000\n=\u0001\u0000\u0000"+
		"\u0000\f[\u0001\u0000\u0000\u0000\u000e]\u0001\u0000\u0000\u0000\u0010"+
		"e\u0001\u0000\u0000\u0000\u0012m\u0001\u0000\u0000\u0000\u0014\u0082\u0001"+
		"\u0000\u0000\u0000\u0016\u00ac\u0001\u0000\u0000\u0000\u0018\u00b6\u0001"+
		"\u0000\u0000\u0000\u001a\u00b8\u0001\u0000\u0000\u0000\u001c\u001d\u0005"+
		"\u0018\u0000\u0000\u001d\u001e\u0005\u0019\u0000\u0000\u001e\u001f\u0003"+
		"\u0002\u0001\u0000\u001f \u0005\u001a\u0000\u0000 \u0001\u0001\u0000\u0000"+
		"\u0000!\'\u0003\u0004\u0002\u0000\"\'\u0003\u0006\u0003\u0000#\'\u0003"+
		"\b\u0004\u0000$\'\u0003\n\u0005\u0000%\'\u0003\f\u0006\u0000&!\u0001\u0000"+
		"\u0000\u0000&\"\u0001\u0000\u0000\u0000&#\u0001\u0000\u0000\u0000&$\u0001"+
		"\u0000\u0000\u0000&%\u0001\u0000\u0000\u0000\'*\u0001\u0000\u0000\u0000"+
		"(&\u0001\u0000\u0000\u0000()\u0001\u0000\u0000\u0000)\u0003\u0001\u0000"+
		"\u0000\u0000*(\u0001\u0000\u0000\u0000+,\u0005\u0001\u0000\u0000,.\u0005"+
		"\u001e\u0000\u0000-/\u0005\"\u0000\u0000.-\u0001\u0000\u0000\u0000./\u0001"+
		"\u0000\u0000\u0000/\u0005\u0001\u0000\u0000\u000001\u0005\u0001\u0000"+
		"\u000012\u0005\u001e\u0000\u000023\u0005\r\u0000\u000035\u0003\u0014\n"+
		"\u000046\u0005\"\u0000\u000054\u0001\u0000\u0000\u000056\u0001\u0000\u0000"+
		"\u00006\u0007\u0001\u0000\u0000\u000078\u0005\u001e\u0000\u000089\u0005"+
		"\r\u0000\u00009;\u0003\u0014\n\u0000:<\u0005\"\u0000\u0000;:\u0001\u0000"+
		"\u0000\u0000;<\u0001\u0000\u0000\u0000<\t\u0001\u0000\u0000\u0000=>\u0005"+
		"\u0002\u0000\u0000>?\u0005\u001b\u0000\u0000?@\u0003\u0014\n\u0000@B\u0005"+
		"\u001c\u0000\u0000AC\u0005\"\u0000\u0000BA\u0001\u0000\u0000\u0000BC\u0001"+
		"\u0000\u0000\u0000C\u000b\u0001\u0000\u0000\u0000D\\\u0003\u000e\u0007"+
		"\u0000EF\u0003\u000e\u0007\u0000FG\u0003\u0012\t\u0000G\\\u0001\u0000"+
		"\u0000\u0000HL\u0003\u000e\u0007\u0000IK\u0003\u0010\b\u0000JI\u0001\u0000"+
		"\u0000\u0000KN\u0001\u0000\u0000\u0000LJ\u0001\u0000\u0000\u0000LM\u0001"+
		"\u0000\u0000\u0000M\\\u0001\u0000\u0000\u0000NL\u0001\u0000\u0000\u0000"+
		"OS\u0003\u000e\u0007\u0000PR\u0003\u0010\b\u0000QP\u0001\u0000\u0000\u0000"+
		"RU\u0001\u0000\u0000\u0000SQ\u0001\u0000\u0000\u0000ST\u0001\u0000\u0000"+
		"\u0000TV\u0001\u0000\u0000\u0000US\u0001\u0000\u0000\u0000VW\u0003\u0012"+
		"\t\u0000W\\\u0001\u0000\u0000\u0000XY\u0003\u0012\t\u0000YZ\u0003\u0010"+
		"\b\u0000Z\\\u0001\u0000\u0000\u0000[D\u0001\u0000\u0000\u0000[E\u0001"+
		"\u0000\u0000\u0000[H\u0001\u0000\u0000\u0000[O\u0001\u0000\u0000\u0000"+
		"[X\u0001\u0000\u0000\u0000\\\r\u0001\u0000\u0000\u0000]^\u0005\u0003\u0000"+
		"\u0000^_\u0005\u001b\u0000\u0000_`\u0003\u0016\u000b\u0000`a\u0005\u001c"+
		"\u0000\u0000ab\u0003\u0018\f\u0000bc\u0003\u0002\u0001\u0000cd\u0003\u001a"+
		"\r\u0000d\u000f\u0001\u0000\u0000\u0000ef\u0005\u0005\u0000\u0000fg\u0005"+
		"\u001b\u0000\u0000gh\u0003\u0016\u000b\u0000hi\u0005\u001c\u0000\u0000"+
		"ij\u0003\u0018\f\u0000jk\u0003\u0002\u0001\u0000kl\u0003\u001a\r\u0000"+
		"l\u0011\u0001\u0000\u0000\u0000mn\u0005\u0004\u0000\u0000no\u0003\u0018"+
		"\f\u0000op\u0003\u0002\u0001\u0000pq\u0003\u001a\r\u0000q\u0013\u0001"+
		"\u0000\u0000\u0000rs\u0006\n\uffff\uffff\u0000s\u0083\u0005\u001f\u0000"+
		"\u0000t\u0083\u0005!\u0000\u0000u\u0083\u0005 \u0000\u0000v\u0083\u0005"+
		"\u001e\u0000\u0000wx\u0005\u001b\u0000\u0000xy\u0003\u0014\n\u0000yz\u0005"+
		"\u001c\u0000\u0000z\u0083\u0001\u0000\u0000\u0000{|\u0005\u001b\u0000"+
		"\u0000|}\u0003\u0014\n\u0000}~\u0005\u001c\u0000\u0000~\u007f\u0005\u001b"+
		"\u0000\u0000\u007f\u0080\u0003\u0014\n\u0000\u0080\u0081\u0005\u001c\u0000"+
		"\u0000\u0081\u0083\u0001\u0000\u0000\u0000\u0082r\u0001\u0000\u0000\u0000"+
		"\u0082t\u0001\u0000\u0000\u0000\u0082u\u0001\u0000\u0000\u0000\u0082v"+
		"\u0001\u0000\u0000\u0000\u0082w\u0001\u0000\u0000\u0000\u0082{\u0001\u0000"+
		"\u0000\u0000\u0083\u008c\u0001\u0000\u0000\u0000\u0084\u0085\n\b\u0000"+
		"\u0000\u0085\u0086\u0007\u0000\u0000\u0000\u0086\u008b\u0003\u0014\n\t"+
		"\u0087\u0088\n\u0007\u0000\u0000\u0088\u0089\u0007\u0001\u0000\u0000\u0089"+
		"\u008b\u0003\u0014\n\b\u008a\u0084\u0001\u0000\u0000\u0000\u008a\u0087"+
		"\u0001\u0000\u0000\u0000\u008b\u008e\u0001\u0000\u0000\u0000\u008c\u008a"+
		"\u0001\u0000\u0000\u0000\u008c\u008d\u0001\u0000\u0000\u0000\u008d\u0015"+
		"\u0001\u0000\u0000\u0000\u008e\u008c\u0001\u0000\u0000\u0000\u008f\u0093"+
		"\u0006\u000b\uffff\uffff\u0000\u0090\u0092\u0005\u001b\u0000\u0000\u0091"+
		"\u0090\u0001\u0000\u0000\u0000\u0092\u0095\u0001\u0000\u0000\u0000\u0093"+
		"\u0094\u0001\u0000\u0000\u0000\u0093\u0091\u0001\u0000\u0000\u0000\u0094"+
		"\u0096\u0001\u0000\u0000\u0000\u0095\u0093\u0001\u0000\u0000\u0000\u0096"+
		"\u009a\u0003\u0014\n\u0000\u0097\u0099\u0005\u001c\u0000\u0000\u0098\u0097"+
		"\u0001\u0000\u0000\u0000\u0099\u009c\u0001\u0000\u0000\u0000\u009a\u009b"+
		"\u0001\u0000\u0000\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009b\u00ad"+
		"\u0001\u0000\u0000\u0000\u009c\u009a\u0001\u0000\u0000\u0000\u009d\u009f"+
		"\u0005\u001b\u0000\u0000\u009e\u009d\u0001\u0000\u0000\u0000\u009f\u00a2"+
		"\u0001\u0000\u0000\u0000\u00a0\u00a1\u0001\u0000\u0000\u0000\u00a0\u009e"+
		"\u0001\u0000\u0000\u0000\u00a1\u00a3\u0001\u0000\u0000\u0000\u00a2\u00a0"+
		"\u0001\u0000\u0000\u0000\u00a3\u00a4\u0003\u0014\n\u0000\u00a4\u00a5\u0007"+
		"\u0002\u0000\u0000\u00a5\u00a9\u0003\u0014\n\u0000\u00a6\u00a8\u0005\u001c"+
		"\u0000\u0000\u00a7\u00a6\u0001\u0000\u0000\u0000\u00a8\u00ab\u0001\u0000"+
		"\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000\u0000\u00a9\u00a7\u0001\u0000"+
		"\u0000\u0000\u00aa\u00ad\u0001\u0000\u0000\u0000\u00ab\u00a9\u0001\u0000"+
		"\u0000\u0000\u00ac\u008f\u0001\u0000\u0000\u0000\u00ac\u00a0\u0001\u0000"+
		"\u0000\u0000\u00ad\u00b3\u0001\u0000\u0000\u0000\u00ae\u00af\n\u0003\u0000"+
		"\u0000\u00af\u00b0\u0007\u0003\u0000\u0000\u00b0\u00b2\u0003\u0016\u000b"+
		"\u0004\u00b1\u00ae\u0001\u0000\u0000\u0000\u00b2\u00b5\u0001\u0000\u0000"+
		"\u0000\u00b3\u00b1\u0001\u0000\u0000\u0000\u00b3\u00b4\u0001\u0000\u0000"+
		"\u0000\u00b4\u0017\u0001\u0000\u0000\u0000\u00b5\u00b3\u0001\u0000\u0000"+
		"\u0000\u00b6\u00b7\u0005\u0019\u0000\u0000\u00b7\u0019\u0001\u0000\u0000"+
		"\u0000\u00b8\u00b9\u0005\u001a\u0000\u0000\u00b9\u001b\u0001\u0000\u0000"+
		"\u0000\u0012&(.5;BLS[\u0082\u008a\u008c\u0093\u009a\u00a0\u00a9\u00ac"+
		"\u00b3";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}