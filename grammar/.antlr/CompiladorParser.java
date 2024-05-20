// Generated from /home/hector/6to/automatas_2/compilador-traductor_online/grammar/Compilador.g4 by ANTLR 4.13.1
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
		T__0=1, T__1=2, PR=3, IMPRESION=4, IF_BASICO=5, ELSE=6, ELSE_IF=7, DO=8, 
		WHILE=9, FOR=10, TRUE=11, FALSE=12, INT=13, FLOAT=14, CHAR=15, MUL=16, 
		DIV=17, ADD=18, SUB=19, ASIGNACION=20, MAYORQ=21, MENORQ=22, MAYOR_IGUAL=23, 
		MENOR_IGUAL=24, IGUALDAD_DEBIL=25, IGUALDAD_FUERTE=26, DIF_DEBIL=27, DIF_FUERTE=28, 
		RESIDUO=29, OR=30, AND=31, TPG=32, ALLAVE=33, CLLAVE=34, APARENTESIS=35, 
		CPARENTESIS=36, AADMIRACION=37, ID=38, NUM=39, CADENA=40, DEC=41, SEMI=42, 
		COMA=43, WS=44;
	public static final int
		RULE_init = 0, RULE_contenido = 1, RULE_inicializacion = 2, RULE_declaracion = 3, 
		RULE_asignacion = 4, RULE_print = 5, RULE_if_estructuras = 6, RULE_if = 7, 
		RULE_else_if = 8, RULE_else = 9, RULE_ciclos = 10, RULE_while = 11, RULE_doWhile = 12, 
		RULE_valor = 13, RULE_condiciones = 14, RULE_incremento = 15, RULE_decremento = 16, 
		RULE_abloque = 17, RULE_cbloque = 18;
	private static String[] makeRuleNames() {
		return new String[] {
			"init", "contenido", "inicializacion", "declaracion", "asignacion", "print", 
			"if_estructuras", "if", "else_if", "else", "ciclos", "while", "doWhile", 
			"valor", "condiciones", "incremento", "decremento", "abloque", "cbloque"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'++'", "'--'", null, "'leak'", "'si'", "'else'", "'elfito'", "'toDo'", 
			"'lewhi'", "'fofo'", "'true'", "'false'", "'nc'", "'im'", "'jgl'", "'*'", 
			"'/'", "'+'", "'-'", "'='", "'>'", "'<'", "'>='", "'<='", "'=='", "'==='", 
			"'!='", "'!=='", "'%'", "'||'", "'&&'", "'W7HLM'", "'{'", "'}'", "'('", 
			"')'", "'!'", null, null, null, null, "';'", "','"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "PR", "IMPRESION", "IF_BASICO", "ELSE", "ELSE_IF", 
			"DO", "WHILE", "FOR", "TRUE", "FALSE", "INT", "FLOAT", "CHAR", "MUL", 
			"DIV", "ADD", "SUB", "ASIGNACION", "MAYORQ", "MENORQ", "MAYOR_IGUAL", 
			"MENOR_IGUAL", "IGUALDAD_DEBIL", "IGUALDAD_FUERTE", "DIF_DEBIL", "DIF_FUERTE", 
			"RESIDUO", "OR", "AND", "TPG", "ALLAVE", "CLLAVE", "APARENTESIS", "CPARENTESIS", 
			"AADMIRACION", "ID", "NUM", "CADENA", "DEC", "SEMI", "COMA", "WS"
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
		public TerminalNode CLLAVE() { return getToken(CompiladorParser.CLLAVE, 0); }
		public List<ContenidoContext> contenido() {
			return getRuleContexts(ContenidoContext.class);
		}
		public ContenidoContext contenido(int i) {
			return getRuleContext(ContenidoContext.class,i);
		}
		public InitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_init; }
	}

	public final InitContext init() throws RecognitionException {
		InitContext _localctx = new InitContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_init);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(38);
			match(TPG);
			setState(39);
			match(ALLAVE);
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274877907768L) != 0)) {
				{
				{
				setState(40);
				contenido();
				}
				}
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(46);
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
		public InicializacionContext inicializacion() {
			return getRuleContext(InicializacionContext.class,0);
		}
		public DeclaracionContext declaracion() {
			return getRuleContext(DeclaracionContext.class,0);
		}
		public AsignacionContext asignacion() {
			return getRuleContext(AsignacionContext.class,0);
		}
		public PrintContext print() {
			return getRuleContext(PrintContext.class,0);
		}
		public If_estructurasContext if_estructuras() {
			return getRuleContext(If_estructurasContext.class,0);
		}
		public CiclosContext ciclos() {
			return getRuleContext(CiclosContext.class,0);
		}
		public IncrementoContext incremento() {
			return getRuleContext(IncrementoContext.class,0);
		}
		public DecrementoContext decremento() {
			return getRuleContext(DecrementoContext.class,0);
		}
		public ContenidoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contenido; }
	}

	public final ContenidoContext contenido() throws RecognitionException {
		ContenidoContext _localctx = new ContenidoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_contenido);
		try {
			setState(56);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				inicializacion();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(49);
				declaracion();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(50);
				asignacion();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(51);
				print();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(52);
				if_estructuras();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(53);
				ciclos();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(54);
				incremento();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(55);
				decremento();
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
			setState(58);
			match(PR);
			setState(59);
			match(ID);
			setState(61);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(60);
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
			setState(63);
			match(PR);
			setState(64);
			match(ID);
			setState(65);
			match(ASIGNACION);
			setState(66);
			valor(0);
			setState(68);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(67);
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
			setState(70);
			match(ID);
			setState(71);
			match(ASIGNACION);
			setState(72);
			valor(0);
			setState(74);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(73);
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
			setState(76);
			match(IMPRESION);
			setState(77);
			match(APARENTESIS);
			setState(78);
			valor(0);
			setState(79);
			match(CPARENTESIS);
			setState(81);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(80);
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
	public static class EstructuraIfContext extends If_estructurasContext {
		public IfContext if_() {
			return getRuleContext(IfContext.class,0);
		}
		public List<Else_ifContext> else_if() {
			return getRuleContexts(Else_ifContext.class);
		}
		public Else_ifContext else_if(int i) {
			return getRuleContext(Else_ifContext.class,i);
		}
		public ElseContext else_() {
			return getRuleContext(ElseContext.class,0);
		}
		public EstructuraIfContext(If_estructurasContext ctx) { copyFrom(ctx); }
	}

	public final If_estructurasContext if_estructuras() throws RecognitionException {
		If_estructurasContext _localctx = new If_estructurasContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_if_estructuras);
		int _la;
		try {
			_localctx = new EstructuraIfContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			if_();
			setState(87);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSE_IF) {
				{
				{
				setState(84);
				else_if();
				}
				}
				setState(89);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(91);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(90);
				else_();
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
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public List<ContenidoContext> contenido() {
			return getRuleContexts(ContenidoContext.class);
		}
		public ContenidoContext contenido(int i) {
			return getRuleContext(ContenidoContext.class,i);
		}
		public IfPuroContext(IfContext ctx) { copyFrom(ctx); }
	}

	public final IfContext if_() throws RecognitionException {
		IfContext _localctx = new IfContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_if);
		int _la;
		try {
			_localctx = new IfPuroContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			match(IF_BASICO);
			setState(94);
			match(APARENTESIS);
			setState(95);
			condiciones();
			setState(96);
			match(CPARENTESIS);
			setState(97);
			abloque();
			setState(101);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274877907768L) != 0)) {
				{
				{
				setState(98);
				contenido();
				}
				}
				setState(103);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(104);
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
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public List<ContenidoContext> contenido() {
			return getRuleContexts(ContenidoContext.class);
		}
		public ContenidoContext contenido(int i) {
			return getRuleContext(ContenidoContext.class,i);
		}
		public ElseIfPuroContext(Else_ifContext ctx) { copyFrom(ctx); }
	}

	public final Else_ifContext else_if() throws RecognitionException {
		Else_ifContext _localctx = new Else_ifContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_else_if);
		int _la;
		try {
			_localctx = new ElseIfPuroContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(106);
			match(ELSE_IF);
			setState(107);
			match(APARENTESIS);
			setState(108);
			condiciones();
			setState(109);
			match(CPARENTESIS);
			setState(110);
			abloque();
			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274877907768L) != 0)) {
				{
				{
				setState(111);
				contenido();
				}
				}
				setState(116);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
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
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public List<ContenidoContext> contenido() {
			return getRuleContexts(ContenidoContext.class);
		}
		public ContenidoContext contenido(int i) {
			return getRuleContext(ContenidoContext.class,i);
		}
		public ElsePuroContext(ElseContext ctx) { copyFrom(ctx); }
	}

	public final ElseContext else_() throws RecognitionException {
		ElseContext _localctx = new ElseContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_else);
		int _la;
		try {
			_localctx = new ElsePuroContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(119);
			match(ELSE);
			setState(120);
			abloque();
			setState(124);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274877907768L) != 0)) {
				{
				{
				setState(121);
				contenido();
				}
				}
				setState(126);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(127);
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
			setState(131);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WHILE:
				_localctx = new ReglaWhileContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(129);
				while_();
				}
				break;
			case DO:
				_localctx = new ReglaDoWhileContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(130);
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
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public List<ContenidoContext> contenido() {
			return getRuleContexts(ContenidoContext.class);
		}
		public ContenidoContext contenido(int i) {
			return getRuleContext(ContenidoContext.class,i);
		}
		public CicloWhileContext(WhileContext ctx) { copyFrom(ctx); }
	}

	public final WhileContext while_() throws RecognitionException {
		WhileContext _localctx = new WhileContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_while);
		int _la;
		try {
			_localctx = new CicloWhileContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			match(WHILE);
			setState(134);
			match(APARENTESIS);
			setState(135);
			condiciones();
			setState(136);
			match(CPARENTESIS);
			setState(137);
			abloque();
			setState(141);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274877907768L) != 0)) {
				{
				{
				setState(138);
				contenido();
				}
				}
				setState(143);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(144);
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
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public TerminalNode WHILE() { return getToken(CompiladorParser.WHILE, 0); }
		public TerminalNode APARENTESIS() { return getToken(CompiladorParser.APARENTESIS, 0); }
		public CondicionesContext condiciones() {
			return getRuleContext(CondicionesContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CompiladorParser.CPARENTESIS, 0); }
		public List<ContenidoContext> contenido() {
			return getRuleContexts(ContenidoContext.class);
		}
		public ContenidoContext contenido(int i) {
			return getRuleContext(ContenidoContext.class,i);
		}
		public CicloDoWhileContext(DoWhileContext ctx) { copyFrom(ctx); }
	}

	public final DoWhileContext doWhile() throws RecognitionException {
		DoWhileContext _localctx = new DoWhileContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_doWhile);
		int _la;
		try {
			_localctx = new CicloDoWhileContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(146);
			match(DO);
			setState(147);
			abloque();
			setState(151);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 274877907768L) != 0)) {
				{
				{
				setState(148);
				contenido();
				}
				}
				setState(153);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(154);
			cbloque();
			setState(155);
			match(WHILE);
			setState(156);
			match(APARENTESIS);
			setState(157);
			condiciones();
			setState(158);
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
	public static class ResiduoContext extends ValorContext {
		public List<ValorContext> valor() {
			return getRuleContexts(ValorContext.class);
		}
		public ValorContext valor(int i) {
			return getRuleContext(ValorContext.class,i);
		}
		public TerminalNode RESIDUO() { return getToken(CompiladorParser.RESIDUO, 0); }
		public ResiduoContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ComparacionContext extends ValorContext {
		public Token op;
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
		public ComparacionContext(ValorContext ctx) { copyFrom(ctx); }
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
	public static class ParentesisContext extends ValorContext {
		public TerminalNode APARENTESIS() { return getToken(CompiladorParser.APARENTESIS, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(CompiladorParser.CPARENTESIS, 0); }
		public ParentesisContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TrueFalseContext extends ValorContext {
		public TerminalNode TRUE() { return getToken(CompiladorParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(CompiladorParser.FALSE, 0); }
		public TrueFalseContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LogicasContext extends ValorContext {
		public Token op;
		public List<ValorContext> valor() {
			return getRuleContexts(ValorContext.class);
		}
		public ValorContext valor(int i) {
			return getRuleContext(ValorContext.class,i);
		}
		public TerminalNode OR() { return getToken(CompiladorParser.OR, 0); }
		public TerminalNode AND() { return getToken(CompiladorParser.AND, 0); }
		public LogicasContext(ValorContext ctx) { copyFrom(ctx); }
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
			setState(170);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case APARENTESIS:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(161);
				match(APARENTESIS);
				setState(162);
				valor(0);
				setState(163);
				match(CPARENTESIS);
				}
				break;
			case TRUE:
			case FALSE:
				{
				_localctx = new TrueFalseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(165);
				_la = _input.LA(1);
				if ( !(_la==TRUE || _la==FALSE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case NUM:
				{
				_localctx = new NumeroContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(166);
				match(NUM);
				}
				break;
			case DEC:
				{
				_localctx = new DecimalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(167);
				match(DEC);
				}
				break;
			case CADENA:
				{
				_localctx = new CadenasContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(168);
				match(CADENA);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(169);
				match(ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(189);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(187);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(172);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(173);
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
						setState(174);
						valor(12);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(175);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(176);
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
						setState(177);
						valor(11);
						}
						break;
					case 3:
						{
						_localctx = new ResiduoContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(178);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(179);
						match(RESIDUO);
						setState(180);
						valor(10);
						}
						break;
					case 4:
						{
						_localctx = new ComparacionContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(181);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(182);
						((ComparacionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 534773760L) != 0)) ) {
							((ComparacionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(183);
						valor(9);
						}
						break;
					case 5:
						{
						_localctx = new LogicasContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(184);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(185);
						((LogicasContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(_la==OR || _la==AND) ) {
							((LogicasContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(186);
						valor(8);
						}
						break;
					}
					} 
				}
				setState(191);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
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
	public static class TrueOrFalseContext extends CondicionesContext {
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TrueOrFalseContext(CondicionesContext ctx) { copyFrom(ctx); }
	}

	public final CondicionesContext condiciones() throws RecognitionException {
		CondicionesContext _localctx = new CondicionesContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_condiciones);
		try {
			_localctx = new TrueOrFalseContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(192);
			valor(0);
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
		public TerminalNode SEMI() { return getToken(CompiladorParser.SEMI, 0); }
		public IncrementarContext(IncrementoContext ctx) { copyFrom(ctx); }
	}

	public final IncrementoContext incremento() throws RecognitionException {
		IncrementoContext _localctx = new IncrementoContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_incremento);
		int _la;
		try {
			_localctx = new IncrementarContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(194);
			match(ID);
			setState(195);
			match(T__0);
			setState(197);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(196);
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
	public static class DecrementoContext extends ParserRuleContext {
		public DecrementoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decremento; }
	 
		public DecrementoContext() { }
		public void copyFrom(DecrementoContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DecrementarContext extends DecrementoContext {
		public TerminalNode ID() { return getToken(CompiladorParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(CompiladorParser.SEMI, 0); }
		public DecrementarContext(DecrementoContext ctx) { copyFrom(ctx); }
	}

	public final DecrementoContext decremento() throws RecognitionException {
		DecrementoContext _localctx = new DecrementoContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_decremento);
		int _la;
		try {
			_localctx = new DecrementarContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(199);
			match(ID);
			setState(200);
			match(T__1);
			setState(202);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(201);
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
	public static class AuxScopeDosContext extends AbloqueContext {
		public TerminalNode ALLAVE() { return getToken(CompiladorParser.ALLAVE, 0); }
		public AuxScopeDosContext(AbloqueContext ctx) { copyFrom(ctx); }
	}

	public final AbloqueContext abloque() throws RecognitionException {
		AbloqueContext _localctx = new AbloqueContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_abloque);
		try {
			_localctx = new AuxScopeDosContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
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
	public static class AuxScopeContext extends CbloqueContext {
		public TerminalNode CLLAVE() { return getToken(CompiladorParser.CLLAVE, 0); }
		public AuxScopeContext(CbloqueContext ctx) { copyFrom(ctx); }
	}

	public final CbloqueContext cbloque() throws RecognitionException {
		CbloqueContext _localctx = new CbloqueContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_cbloque);
		try {
			_localctx = new AuxScopeContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
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
		}
		return true;
	}
	private boolean valor_sempred(ValorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 11);
		case 1:
			return precpred(_ctx, 10);
		case 2:
			return precpred(_ctx, 9);
		case 3:
			return precpred(_ctx, 8);
		case 4:
			return precpred(_ctx, 7);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001,\u00d1\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0005\u0000*\b\u0000\n\u0000\f\u0000"+
		"-\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001"+
		"9\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002>\b\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u0003E\b"+
		"\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0003\u0004K\b"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0003"+
		"\u0005R\b\u0005\u0001\u0006\u0001\u0006\u0005\u0006V\b\u0006\n\u0006\f"+
		"\u0006Y\t\u0006\u0001\u0006\u0003\u0006\\\b\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007d\b\u0007"+
		"\n\u0007\f\u0007g\t\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0005\bq\b\b\n\b\f\bt\t\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\t\u0005\t{\b\t\n\t\f\t~\t\t\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0003\n\u0084\b\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001"+
		"\u000b\u0001\u000b\u0005\u000b\u008c\b\u000b\n\u000b\f\u000b\u008f\t\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0005\f\u0096\b\f\n\f"+
		"\f\f\u0099\t\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r"+
		"\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0003\r\u00ab\b\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005"+
		"\r\u00bc\b\r\n\r\f\r\u00bf\t\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0003\u000f\u00c6\b\u000f\u0001\u0010\u0001\u0010\u0001"+
		"\u0010\u0003\u0010\u00cb\b\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0000\u0001\u001a\u0013\u0000\u0002\u0004\u0006\b\n"+
		"\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$\u0000\u0005"+
		"\u0001\u0000\u000b\f\u0001\u0000\u0010\u0011\u0001\u0000\u0012\u0013\u0001"+
		"\u0000\u0015\u001c\u0001\u0000\u001e\u001f\u00dd\u0000&\u0001\u0000\u0000"+
		"\u0000\u00028\u0001\u0000\u0000\u0000\u0004:\u0001\u0000\u0000\u0000\u0006"+
		"?\u0001\u0000\u0000\u0000\bF\u0001\u0000\u0000\u0000\nL\u0001\u0000\u0000"+
		"\u0000\fS\u0001\u0000\u0000\u0000\u000e]\u0001\u0000\u0000\u0000\u0010"+
		"j\u0001\u0000\u0000\u0000\u0012w\u0001\u0000\u0000\u0000\u0014\u0083\u0001"+
		"\u0000\u0000\u0000\u0016\u0085\u0001\u0000\u0000\u0000\u0018\u0092\u0001"+
		"\u0000\u0000\u0000\u001a\u00aa\u0001\u0000\u0000\u0000\u001c\u00c0\u0001"+
		"\u0000\u0000\u0000\u001e\u00c2\u0001\u0000\u0000\u0000 \u00c7\u0001\u0000"+
		"\u0000\u0000\"\u00cc\u0001\u0000\u0000\u0000$\u00ce\u0001\u0000\u0000"+
		"\u0000&\'\u0005 \u0000\u0000\'+\u0005!\u0000\u0000(*\u0003\u0002\u0001"+
		"\u0000)(\u0001\u0000\u0000\u0000*-\u0001\u0000\u0000\u0000+)\u0001\u0000"+
		"\u0000\u0000+,\u0001\u0000\u0000\u0000,.\u0001\u0000\u0000\u0000-+\u0001"+
		"\u0000\u0000\u0000./\u0005\"\u0000\u0000/\u0001\u0001\u0000\u0000\u0000"+
		"09\u0003\u0004\u0002\u000019\u0003\u0006\u0003\u000029\u0003\b\u0004\u0000"+
		"39\u0003\n\u0005\u000049\u0003\f\u0006\u000059\u0003\u0014\n\u000069\u0003"+
		"\u001e\u000f\u000079\u0003 \u0010\u000080\u0001\u0000\u0000\u000081\u0001"+
		"\u0000\u0000\u000082\u0001\u0000\u0000\u000083\u0001\u0000\u0000\u0000"+
		"84\u0001\u0000\u0000\u000085\u0001\u0000\u0000\u000086\u0001\u0000\u0000"+
		"\u000087\u0001\u0000\u0000\u00009\u0003\u0001\u0000\u0000\u0000:;\u0005"+
		"\u0003\u0000\u0000;=\u0005&\u0000\u0000<>\u0005*\u0000\u0000=<\u0001\u0000"+
		"\u0000\u0000=>\u0001\u0000\u0000\u0000>\u0005\u0001\u0000\u0000\u0000"+
		"?@\u0005\u0003\u0000\u0000@A\u0005&\u0000\u0000AB\u0005\u0014\u0000\u0000"+
		"BD\u0003\u001a\r\u0000CE\u0005*\u0000\u0000DC\u0001\u0000\u0000\u0000"+
		"DE\u0001\u0000\u0000\u0000E\u0007\u0001\u0000\u0000\u0000FG\u0005&\u0000"+
		"\u0000GH\u0005\u0014\u0000\u0000HJ\u0003\u001a\r\u0000IK\u0005*\u0000"+
		"\u0000JI\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000\u0000K\t\u0001\u0000"+
		"\u0000\u0000LM\u0005\u0004\u0000\u0000MN\u0005#\u0000\u0000NO\u0003\u001a"+
		"\r\u0000OQ\u0005$\u0000\u0000PR\u0005*\u0000\u0000QP\u0001\u0000\u0000"+
		"\u0000QR\u0001\u0000\u0000\u0000R\u000b\u0001\u0000\u0000\u0000SW\u0003"+
		"\u000e\u0007\u0000TV\u0003\u0010\b\u0000UT\u0001\u0000\u0000\u0000VY\u0001"+
		"\u0000\u0000\u0000WU\u0001\u0000\u0000\u0000WX\u0001\u0000\u0000\u0000"+
		"X[\u0001\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000Z\\\u0003\u0012\t"+
		"\u0000[Z\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000\\\r\u0001"+
		"\u0000\u0000\u0000]^\u0005\u0005\u0000\u0000^_\u0005#\u0000\u0000_`\u0003"+
		"\u001c\u000e\u0000`a\u0005$\u0000\u0000ae\u0003\"\u0011\u0000bd\u0003"+
		"\u0002\u0001\u0000cb\u0001\u0000\u0000\u0000dg\u0001\u0000\u0000\u0000"+
		"ec\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000fh\u0001\u0000\u0000"+
		"\u0000ge\u0001\u0000\u0000\u0000hi\u0003$\u0012\u0000i\u000f\u0001\u0000"+
		"\u0000\u0000jk\u0005\u0007\u0000\u0000kl\u0005#\u0000\u0000lm\u0003\u001c"+
		"\u000e\u0000mn\u0005$\u0000\u0000nr\u0003\"\u0011\u0000oq\u0003\u0002"+
		"\u0001\u0000po\u0001\u0000\u0000\u0000qt\u0001\u0000\u0000\u0000rp\u0001"+
		"\u0000\u0000\u0000rs\u0001\u0000\u0000\u0000su\u0001\u0000\u0000\u0000"+
		"tr\u0001\u0000\u0000\u0000uv\u0003$\u0012\u0000v\u0011\u0001\u0000\u0000"+
		"\u0000wx\u0005\u0006\u0000\u0000x|\u0003\"\u0011\u0000y{\u0003\u0002\u0001"+
		"\u0000zy\u0001\u0000\u0000\u0000{~\u0001\u0000\u0000\u0000|z\u0001\u0000"+
		"\u0000\u0000|}\u0001\u0000\u0000\u0000}\u007f\u0001\u0000\u0000\u0000"+
		"~|\u0001\u0000\u0000\u0000\u007f\u0080\u0003$\u0012\u0000\u0080\u0013"+
		"\u0001\u0000\u0000\u0000\u0081\u0084\u0003\u0016\u000b\u0000\u0082\u0084"+
		"\u0003\u0018\f\u0000\u0083\u0081\u0001\u0000\u0000\u0000\u0083\u0082\u0001"+
		"\u0000\u0000\u0000\u0084\u0015\u0001\u0000\u0000\u0000\u0085\u0086\u0005"+
		"\t\u0000\u0000\u0086\u0087\u0005#\u0000\u0000\u0087\u0088\u0003\u001c"+
		"\u000e\u0000\u0088\u0089\u0005$\u0000\u0000\u0089\u008d\u0003\"\u0011"+
		"\u0000\u008a\u008c\u0003\u0002\u0001\u0000\u008b\u008a\u0001\u0000\u0000"+
		"\u0000\u008c\u008f\u0001\u0000\u0000\u0000\u008d\u008b\u0001\u0000\u0000"+
		"\u0000\u008d\u008e\u0001\u0000\u0000\u0000\u008e\u0090\u0001\u0000\u0000"+
		"\u0000\u008f\u008d\u0001\u0000\u0000\u0000\u0090\u0091\u0003$\u0012\u0000"+
		"\u0091\u0017\u0001\u0000\u0000\u0000\u0092\u0093\u0005\b\u0000\u0000\u0093"+
		"\u0097\u0003\"\u0011\u0000\u0094\u0096\u0003\u0002\u0001\u0000\u0095\u0094"+
		"\u0001\u0000\u0000\u0000\u0096\u0099\u0001\u0000\u0000\u0000\u0097\u0095"+
		"\u0001\u0000\u0000\u0000\u0097\u0098\u0001\u0000\u0000\u0000\u0098\u009a"+
		"\u0001\u0000\u0000\u0000\u0099\u0097\u0001\u0000\u0000\u0000\u009a\u009b"+
		"\u0003$\u0012\u0000\u009b\u009c\u0005\t\u0000\u0000\u009c\u009d\u0005"+
		"#\u0000\u0000\u009d\u009e\u0003\u001c\u000e\u0000\u009e\u009f\u0005$\u0000"+
		"\u0000\u009f\u0019\u0001\u0000\u0000\u0000\u00a0\u00a1\u0006\r\uffff\uffff"+
		"\u0000\u00a1\u00a2\u0005#\u0000\u0000\u00a2\u00a3\u0003\u001a\r\u0000"+
		"\u00a3\u00a4\u0005$\u0000\u0000\u00a4\u00ab\u0001\u0000\u0000\u0000\u00a5"+
		"\u00ab\u0007\u0000\u0000\u0000\u00a6\u00ab\u0005\'\u0000\u0000\u00a7\u00ab"+
		"\u0005)\u0000\u0000\u00a8\u00ab\u0005(\u0000\u0000\u00a9\u00ab\u0005&"+
		"\u0000\u0000\u00aa\u00a0\u0001\u0000\u0000\u0000\u00aa\u00a5\u0001\u0000"+
		"\u0000\u0000\u00aa\u00a6\u0001\u0000\u0000\u0000\u00aa\u00a7\u0001\u0000"+
		"\u0000\u0000\u00aa\u00a8\u0001\u0000\u0000\u0000\u00aa\u00a9\u0001\u0000"+
		"\u0000\u0000\u00ab\u00bd\u0001\u0000\u0000\u0000\u00ac\u00ad\n\u000b\u0000"+
		"\u0000\u00ad\u00ae\u0007\u0001\u0000\u0000\u00ae\u00bc\u0003\u001a\r\f"+
		"\u00af\u00b0\n\n\u0000\u0000\u00b0\u00b1\u0007\u0002\u0000\u0000\u00b1"+
		"\u00bc\u0003\u001a\r\u000b\u00b2\u00b3\n\t\u0000\u0000\u00b3\u00b4\u0005"+
		"\u001d\u0000\u0000\u00b4\u00bc\u0003\u001a\r\n\u00b5\u00b6\n\b\u0000\u0000"+
		"\u00b6\u00b7\u0007\u0003\u0000\u0000\u00b7\u00bc\u0003\u001a\r\t\u00b8"+
		"\u00b9\n\u0007\u0000\u0000\u00b9\u00ba\u0007\u0004\u0000\u0000\u00ba\u00bc"+
		"\u0003\u001a\r\b\u00bb\u00ac\u0001\u0000\u0000\u0000\u00bb\u00af\u0001"+
		"\u0000\u0000\u0000\u00bb\u00b2\u0001\u0000\u0000\u0000\u00bb\u00b5\u0001"+
		"\u0000\u0000\u0000\u00bb\u00b8\u0001\u0000\u0000\u0000\u00bc\u00bf\u0001"+
		"\u0000\u0000\u0000\u00bd\u00bb\u0001\u0000\u0000\u0000\u00bd\u00be\u0001"+
		"\u0000\u0000\u0000\u00be\u001b\u0001\u0000\u0000\u0000\u00bf\u00bd\u0001"+
		"\u0000\u0000\u0000\u00c0\u00c1\u0003\u001a\r\u0000\u00c1\u001d\u0001\u0000"+
		"\u0000\u0000\u00c2\u00c3\u0005&\u0000\u0000\u00c3\u00c5\u0005\u0001\u0000"+
		"\u0000\u00c4\u00c6\u0005*\u0000\u0000\u00c5\u00c4\u0001\u0000\u0000\u0000"+
		"\u00c5\u00c6\u0001\u0000\u0000\u0000\u00c6\u001f\u0001\u0000\u0000\u0000"+
		"\u00c7\u00c8\u0005&\u0000\u0000\u00c8\u00ca\u0005\u0002\u0000\u0000\u00c9"+
		"\u00cb\u0005*\u0000\u0000\u00ca\u00c9\u0001\u0000\u0000\u0000\u00ca\u00cb"+
		"\u0001\u0000\u0000\u0000\u00cb!\u0001\u0000\u0000\u0000\u00cc\u00cd\u0005"+
		"!\u0000\u0000\u00cd#\u0001\u0000\u0000\u0000\u00ce\u00cf\u0005\"\u0000"+
		"\u0000\u00cf%\u0001\u0000\u0000\u0000\u0013+8=DJQW[er|\u0083\u008d\u0097"+
		"\u00aa\u00bb\u00bd\u00c5\u00ca";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}