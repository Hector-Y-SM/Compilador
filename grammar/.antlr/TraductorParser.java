// Generated from /home/hector/6to/automatas_2/compilador-traductor_online/grammar/Traductor.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class TraductorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, PR=3, MAIN=4, BREAK=5, CASE=6, CHAR=7, CONST=8, DO=9, 
		DOUBLE=10, ELSE_IF=11, ELSE=12, FLOAT=13, FOR=14, IF=15, INT=16, SWITCH=17, 
		UNSIGNED=18, VOID=19, WHILE=20, PRINTF=21, VOID_MAIN=22, TRUE=23, FALSE=24, 
		ID=25, NUM=26, CADENA=27, DEC=28, SEMI=29, COMA=30, ALLAVE=31, CLLAVE=32, 
		APARENTESIS=33, CPARENTESIS=34, AADMIRACION=35, MUL=36, DIV=37, ADD=38, 
		SUB=39, ASIGNACION=40, MAYORQ=41, MENORQ=42, MAYOR_IGUAL=43, MENOR_IGUAL=44, 
		IGUALDAD_DEBIL=45, IGUALDAD_FUERTE=46, DIF_DEBIL=47, DIF_FUERTE=48, RESIDUO=49, 
		OR=50, AND=51, WS=52;
	public static final int
		RULE_contenido = 0, RULE_relleno = 1, RULE_inicializacion = 2, RULE_declaracion = 3, 
		RULE_asignacion = 4, RULE_print = 5, RULE_if_estructuras = 6, RULE_if = 7, 
		RULE_else_if = 8, RULE_else = 9, RULE_ciclos = 10, RULE_while = 11, RULE_doWhile = 12, 
		RULE_valor = 13, RULE_condiciones = 14, RULE_incremento = 15, RULE_decremento = 16, 
		RULE_abloque = 17, RULE_cbloque = 18, RULE_valores = 19;
	private static String[] makeRuleNames() {
		return new String[] {
			"contenido", "relleno", "inicializacion", "declaracion", "asignacion", 
			"print", "if_estructuras", "if", "else_if", "else", "ciclos", "while", 
			"doWhile", "valor", "condiciones", "incremento", "decremento", "abloque", 
			"cbloque", "valores"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'++'", "'--'", null, "'main'", "'break'", "'case'", "'char'", 
			"'const'", "'do'", "'double'", "'else if'", "'else'", "'float'", "'for'", 
			"'if'", "'int'", "'switch'", "'unsigned'", "'void'", "'while'", "'printf'", 
			"'void main()'", "'true'", "'false'", null, null, null, null, "';'", 
			"','", "'{'", "'}'", "'('", "')'", "'!'", "'*'", "'/'", "'+'", "'-'", 
			"'='", "'>'", "'<'", "'>='", "'<='", "'=='", "'==='", "'!='", "'!=='", 
			"'%'", "'||'", "'&&'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "PR", "MAIN", "BREAK", "CASE", "CHAR", "CONST", "DO", 
			"DOUBLE", "ELSE_IF", "ELSE", "FLOAT", "FOR", "IF", "INT", "SWITCH", "UNSIGNED", 
			"VOID", "WHILE", "PRINTF", "VOID_MAIN", "TRUE", "FALSE", "ID", "NUM", 
			"CADENA", "DEC", "SEMI", "COMA", "ALLAVE", "CLLAVE", "APARENTESIS", "CPARENTESIS", 
			"AADMIRACION", "MUL", "DIV", "ADD", "SUB", "ASIGNACION", "MAYORQ", "MENORQ", 
			"MAYOR_IGUAL", "MENOR_IGUAL", "IGUALDAD_DEBIL", "IGUALDAD_FUERTE", "DIF_DEBIL", 
			"DIF_FUERTE", "RESIDUO", "OR", "AND", "WS"
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
	public String getGrammarFileName() { return "Traductor.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public TraductorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ContenidoContext extends ParserRuleContext {
		public TerminalNode VOID_MAIN() { return getToken(TraductorParser.VOID_MAIN, 0); }
		public TerminalNode ALLAVE() { return getToken(TraductorParser.ALLAVE, 0); }
		public TerminalNode CLLAVE() { return getToken(TraductorParser.CLLAVE, 0); }
		public List<RellenoContext> relleno() {
			return getRuleContexts(RellenoContext.class);
		}
		public RellenoContext relleno(int i) {
			return getRuleContext(RellenoContext.class,i);
		}
		public ContenidoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contenido; }
	}

	public final ContenidoContext contenido() throws RecognitionException {
		ContenidoContext _localctx = new ContenidoContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_contenido);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(40);
			match(VOID_MAIN);
			setState(41);
			match(ALLAVE);
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36733448L) != 0)) {
				{
				{
				setState(42);
				relleno();
				}
				}
				setState(47);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(48);
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
	public static class RellenoContext extends ParserRuleContext {
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
		public RellenoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relleno; }
	}

	public final RellenoContext relleno() throws RecognitionException {
		RellenoContext _localctx = new RellenoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_relleno);
		try {
			setState(58);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(50);
				inicializacion();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(51);
				declaracion();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(52);
				asignacion();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(53);
				print();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(54);
				if_estructuras();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(55);
				ciclos();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(56);
				incremento();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(57);
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
		public TerminalNode PR() { return getToken(TraductorParser.PR, 0); }
		public TerminalNode ID() { return getToken(TraductorParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(TraductorParser.SEMI, 0); }
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
			setState(60);
			match(PR);
			setState(61);
			match(ID);
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
		public TerminalNode PR() { return getToken(TraductorParser.PR, 0); }
		public TerminalNode ID() { return getToken(TraductorParser.ID, 0); }
		public TerminalNode ASIGNACION() { return getToken(TraductorParser.ASIGNACION, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(TraductorParser.SEMI, 0); }
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
			setState(65);
			match(PR);
			setState(66);
			match(ID);
			setState(67);
			match(ASIGNACION);
			setState(68);
			valor(0);
			setState(70);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(69);
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
		public TerminalNode ID() { return getToken(TraductorParser.ID, 0); }
		public TerminalNode ASIGNACION() { return getToken(TraductorParser.ASIGNACION, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(TraductorParser.SEMI, 0); }
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
			setState(72);
			match(ID);
			setState(73);
			match(ASIGNACION);
			setState(74);
			valor(0);
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
		public TerminalNode PRINTF() { return getToken(TraductorParser.PRINTF, 0); }
		public TerminalNode APARENTESIS() { return getToken(TraductorParser.APARENTESIS, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(TraductorParser.CPARENTESIS, 0); }
		public TerminalNode SEMI() { return getToken(TraductorParser.SEMI, 0); }
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
			setState(78);
			match(PRINTF);
			setState(79);
			match(APARENTESIS);
			setState(80);
			valor(0);
			setState(81);
			match(CPARENTESIS);
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(82);
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
			setState(85);
			if_();
			setState(89);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ELSE_IF) {
				{
				{
				setState(86);
				else_if();
				}
				}
				setState(91);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(93);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ELSE) {
				{
				setState(92);
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
		public TerminalNode IF() { return getToken(TraductorParser.IF, 0); }
		public TerminalNode APARENTESIS() { return getToken(TraductorParser.APARENTESIS, 0); }
		public CondicionesContext condiciones() {
			return getRuleContext(CondicionesContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(TraductorParser.CPARENTESIS, 0); }
		public AbloqueContext abloque() {
			return getRuleContext(AbloqueContext.class,0);
		}
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public List<RellenoContext> relleno() {
			return getRuleContexts(RellenoContext.class);
		}
		public RellenoContext relleno(int i) {
			return getRuleContext(RellenoContext.class,i);
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
			setState(95);
			match(IF);
			setState(96);
			match(APARENTESIS);
			setState(97);
			condiciones();
			setState(98);
			match(CPARENTESIS);
			setState(99);
			abloque();
			setState(103);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36733448L) != 0)) {
				{
				{
				setState(100);
				relleno();
				}
				}
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(106);
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
		public TerminalNode ELSE_IF() { return getToken(TraductorParser.ELSE_IF, 0); }
		public TerminalNode APARENTESIS() { return getToken(TraductorParser.APARENTESIS, 0); }
		public CondicionesContext condiciones() {
			return getRuleContext(CondicionesContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(TraductorParser.CPARENTESIS, 0); }
		public AbloqueContext abloque() {
			return getRuleContext(AbloqueContext.class,0);
		}
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public List<RellenoContext> relleno() {
			return getRuleContexts(RellenoContext.class);
		}
		public RellenoContext relleno(int i) {
			return getRuleContext(RellenoContext.class,i);
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
			setState(108);
			match(ELSE_IF);
			setState(109);
			match(APARENTESIS);
			setState(110);
			condiciones();
			setState(111);
			match(CPARENTESIS);
			setState(112);
			abloque();
			setState(116);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36733448L) != 0)) {
				{
				{
				setState(113);
				relleno();
				}
				}
				setState(118);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(119);
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
		public TerminalNode ELSE() { return getToken(TraductorParser.ELSE, 0); }
		public AbloqueContext abloque() {
			return getRuleContext(AbloqueContext.class,0);
		}
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public List<RellenoContext> relleno() {
			return getRuleContexts(RellenoContext.class);
		}
		public RellenoContext relleno(int i) {
			return getRuleContext(RellenoContext.class,i);
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
			setState(121);
			match(ELSE);
			setState(122);
			abloque();
			setState(126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36733448L) != 0)) {
				{
				{
				setState(123);
				relleno();
				}
				}
				setState(128);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(129);
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
			setState(133);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case WHILE:
				_localctx = new ReglaWhileContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(131);
				while_();
				}
				break;
			case DO:
				_localctx = new ReglaDoWhileContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(132);
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
		public TerminalNode WHILE() { return getToken(TraductorParser.WHILE, 0); }
		public TerminalNode APARENTESIS() { return getToken(TraductorParser.APARENTESIS, 0); }
		public CondicionesContext condiciones() {
			return getRuleContext(CondicionesContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(TraductorParser.CPARENTESIS, 0); }
		public AbloqueContext abloque() {
			return getRuleContext(AbloqueContext.class,0);
		}
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public List<RellenoContext> relleno() {
			return getRuleContexts(RellenoContext.class);
		}
		public RellenoContext relleno(int i) {
			return getRuleContext(RellenoContext.class,i);
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
			setState(135);
			match(WHILE);
			setState(136);
			match(APARENTESIS);
			setState(137);
			condiciones();
			setState(138);
			match(CPARENTESIS);
			setState(139);
			abloque();
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36733448L) != 0)) {
				{
				{
				setState(140);
				relleno();
				}
				}
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(146);
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
		public TerminalNode DO() { return getToken(TraductorParser.DO, 0); }
		public AbloqueContext abloque() {
			return getRuleContext(AbloqueContext.class,0);
		}
		public CbloqueContext cbloque() {
			return getRuleContext(CbloqueContext.class,0);
		}
		public TerminalNode WHILE() { return getToken(TraductorParser.WHILE, 0); }
		public TerminalNode APARENTESIS() { return getToken(TraductorParser.APARENTESIS, 0); }
		public CondicionesContext condiciones() {
			return getRuleContext(CondicionesContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(TraductorParser.CPARENTESIS, 0); }
		public List<RellenoContext> relleno() {
			return getRuleContexts(RellenoContext.class);
		}
		public RellenoContext relleno(int i) {
			return getRuleContext(RellenoContext.class,i);
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
			setState(148);
			match(DO);
			setState(149);
			abloque();
			setState(153);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 36733448L) != 0)) {
				{
				{
				setState(150);
				relleno();
				}
				}
				setState(155);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(156);
			cbloque();
			setState(157);
			match(WHILE);
			setState(158);
			match(APARENTESIS);
			setState(159);
			condiciones();
			setState(160);
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
		public TerminalNode RESIDUO() { return getToken(TraductorParser.RESIDUO, 0); }
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
		public TerminalNode MAYORQ() { return getToken(TraductorParser.MAYORQ, 0); }
		public TerminalNode MENORQ() { return getToken(TraductorParser.MENORQ, 0); }
		public TerminalNode MAYOR_IGUAL() { return getToken(TraductorParser.MAYOR_IGUAL, 0); }
		public TerminalNode MENOR_IGUAL() { return getToken(TraductorParser.MENOR_IGUAL, 0); }
		public TerminalNode IGUALDAD_DEBIL() { return getToken(TraductorParser.IGUALDAD_DEBIL, 0); }
		public TerminalNode IGUALDAD_FUERTE() { return getToken(TraductorParser.IGUALDAD_FUERTE, 0); }
		public TerminalNode DIF_DEBIL() { return getToken(TraductorParser.DIF_DEBIL, 0); }
		public TerminalNode DIF_FUERTE() { return getToken(TraductorParser.DIF_FUERTE, 0); }
		public ComparacionContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class NumeroContext extends ValorContext {
		public TerminalNode NUM() { return getToken(TraductorParser.NUM, 0); }
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
		public TerminalNode MUL() { return getToken(TraductorParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(TraductorParser.DIV, 0); }
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
		public TerminalNode ADD() { return getToken(TraductorParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(TraductorParser.SUB, 0); }
		public AddSubContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParentesisContext extends ValorContext {
		public TerminalNode APARENTESIS() { return getToken(TraductorParser.APARENTESIS, 0); }
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public TerminalNode CPARENTESIS() { return getToken(TraductorParser.CPARENTESIS, 0); }
		public ParentesisContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class TrueFalseContext extends ValorContext {
		public TerminalNode TRUE() { return getToken(TraductorParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(TraductorParser.FALSE, 0); }
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
		public TerminalNode OR() { return getToken(TraductorParser.OR, 0); }
		public TerminalNode AND() { return getToken(TraductorParser.AND, 0); }
		public LogicasContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdContext extends ValorContext {
		public TerminalNode ID() { return getToken(TraductorParser.ID, 0); }
		public IdContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DecimalContext extends ValorContext {
		public TerminalNode DEC() { return getToken(TraductorParser.DEC, 0); }
		public DecimalContext(ValorContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class CadenasContext extends ValorContext {
		public TerminalNode CADENA() { return getToken(TraductorParser.CADENA, 0); }
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
			setState(172);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case APARENTESIS:
				{
				_localctx = new ParentesisContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(163);
				match(APARENTESIS);
				setState(164);
				valor(0);
				setState(165);
				match(CPARENTESIS);
				}
				break;
			case TRUE:
			case FALSE:
				{
				_localctx = new TrueFalseContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(167);
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
				setState(168);
				match(NUM);
				}
				break;
			case DEC:
				{
				_localctx = new DecimalContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(169);
				match(DEC);
				}
				break;
			case CADENA:
				{
				_localctx = new CadenasContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(170);
				match(CADENA);
				}
				break;
			case ID:
				{
				_localctx = new IdContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(171);
				match(ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(191);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,16,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(189);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
					case 1:
						{
						_localctx = new MulDivContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(174);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(175);
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
						setState(176);
						valor(12);
						}
						break;
					case 2:
						{
						_localctx = new AddSubContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(177);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(178);
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
						setState(179);
						valor(11);
						}
						break;
					case 3:
						{
						_localctx = new ResiduoContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(180);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(181);
						match(RESIDUO);
						setState(182);
						valor(10);
						}
						break;
					case 4:
						{
						_localctx = new ComparacionContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(183);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(184);
						((ComparacionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 560750930165760L) != 0)) ) {
							((ComparacionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(185);
						valor(9);
						}
						break;
					case 5:
						{
						_localctx = new LogicasContext(new ValorContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_valor);
						setState(186);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(187);
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
						setState(188);
						valor(8);
						}
						break;
					}
					} 
				}
				setState(193);
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
			setState(194);
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
		public TerminalNode ID() { return getToken(TraductorParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(TraductorParser.SEMI, 0); }
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
			setState(196);
			match(ID);
			setState(197);
			match(T__0);
			setState(199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(198);
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
		public TerminalNode ID() { return getToken(TraductorParser.ID, 0); }
		public TerminalNode SEMI() { return getToken(TraductorParser.SEMI, 0); }
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
			setState(201);
			match(ID);
			setState(202);
			match(T__1);
			setState(204);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(203);
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
		public TerminalNode ALLAVE() { return getToken(TraductorParser.ALLAVE, 0); }
		public AuxScopeDosContext(AbloqueContext ctx) { copyFrom(ctx); }
	}

	public final AbloqueContext abloque() throws RecognitionException {
		AbloqueContext _localctx = new AbloqueContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_abloque);
		try {
			_localctx = new AuxScopeDosContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(206);
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
		public TerminalNode CLLAVE() { return getToken(TraductorParser.CLLAVE, 0); }
		public AuxScopeContext(CbloqueContext ctx) { copyFrom(ctx); }
	}

	public final CbloqueContext cbloque() throws RecognitionException {
		CbloqueContext _localctx = new CbloqueContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_cbloque);
		try {
			_localctx = new AuxScopeContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
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
	public static class ValoresContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TraductorParser.ID, 0); }
		public TerminalNode NUM() { return getToken(TraductorParser.NUM, 0); }
		public ValoresContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valores; }
	}

	public final ValoresContext valores() throws RecognitionException {
		ValoresContext _localctx = new ValoresContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_valores);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(210);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==NUM) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
		"\u0004\u00014\u00d5\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000\u0001\u0000\u0005\u0000"+
		",\b\u0000\n\u0000\f\u0000/\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0003\u0001;\b\u0001\u0001\u0002\u0001\u0002\u0001\u0002"+
		"\u0003\u0002@\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0003\u0003G\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0003\u0004M\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0003\u0005T\b\u0005\u0001\u0006\u0001\u0006"+
		"\u0005\u0006X\b\u0006\n\u0006\f\u0006[\t\u0006\u0001\u0006\u0003\u0006"+
		"^\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0005\u0007f\b\u0007\n\u0007\f\u0007i\t\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0005\bs"+
		"\b\b\n\b\f\bv\t\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0005\t}\b\t"+
		"\n\t\f\t\u0080\t\t\u0001\t\u0001\t\u0001\n\u0001\n\u0003\n\u0086\b\n\u0001"+
		"\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0005"+
		"\u000b\u008e\b\u000b\n\u000b\f\u000b\u0091\t\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\f\u0005\f\u0098\b\f\n\f\f\f\u009b\t\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0003\r\u00ad\b\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\r\u0001\r\u0005\r\u00be\b\r\n\r\f\r\u00c1\t\r"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f"+
		"\u00c8\b\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0003\u0010\u00cd\b"+
		"\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013\u0001"+
		"\u0013\u0001\u0013\u0000\u0001\u001a\u0014\u0000\u0002\u0004\u0006\b\n"+
		"\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&\u0000\u0006"+
		"\u0001\u0000\u0017\u0018\u0001\u0000$%\u0001\u0000&\'\u0001\u0000)0\u0001"+
		"\u000023\u0001\u0000\u0019\u001a\u00e0\u0000(\u0001\u0000\u0000\u0000"+
		"\u0002:\u0001\u0000\u0000\u0000\u0004<\u0001\u0000\u0000\u0000\u0006A"+
		"\u0001\u0000\u0000\u0000\bH\u0001\u0000\u0000\u0000\nN\u0001\u0000\u0000"+
		"\u0000\fU\u0001\u0000\u0000\u0000\u000e_\u0001\u0000\u0000\u0000\u0010"+
		"l\u0001\u0000\u0000\u0000\u0012y\u0001\u0000\u0000\u0000\u0014\u0085\u0001"+
		"\u0000\u0000\u0000\u0016\u0087\u0001\u0000\u0000\u0000\u0018\u0094\u0001"+
		"\u0000\u0000\u0000\u001a\u00ac\u0001\u0000\u0000\u0000\u001c\u00c2\u0001"+
		"\u0000\u0000\u0000\u001e\u00c4\u0001\u0000\u0000\u0000 \u00c9\u0001\u0000"+
		"\u0000\u0000\"\u00ce\u0001\u0000\u0000\u0000$\u00d0\u0001\u0000\u0000"+
		"\u0000&\u00d2\u0001\u0000\u0000\u0000()\u0005\u0016\u0000\u0000)-\u0005"+
		"\u001f\u0000\u0000*,\u0003\u0002\u0001\u0000+*\u0001\u0000\u0000\u0000"+
		",/\u0001\u0000\u0000\u0000-+\u0001\u0000\u0000\u0000-.\u0001\u0000\u0000"+
		"\u0000.0\u0001\u0000\u0000\u0000/-\u0001\u0000\u0000\u000001\u0005 \u0000"+
		"\u00001\u0001\u0001\u0000\u0000\u00002;\u0003\u0004\u0002\u00003;\u0003"+
		"\u0006\u0003\u00004;\u0003\b\u0004\u00005;\u0003\n\u0005\u00006;\u0003"+
		"\f\u0006\u00007;\u0003\u0014\n\u00008;\u0003\u001e\u000f\u00009;\u0003"+
		" \u0010\u0000:2\u0001\u0000\u0000\u0000:3\u0001\u0000\u0000\u0000:4\u0001"+
		"\u0000\u0000\u0000:5\u0001\u0000\u0000\u0000:6\u0001\u0000\u0000\u0000"+
		":7\u0001\u0000\u0000\u0000:8\u0001\u0000\u0000\u0000:9\u0001\u0000\u0000"+
		"\u0000;\u0003\u0001\u0000\u0000\u0000<=\u0005\u0003\u0000\u0000=?\u0005"+
		"\u0019\u0000\u0000>@\u0005\u001d\u0000\u0000?>\u0001\u0000\u0000\u0000"+
		"?@\u0001\u0000\u0000\u0000@\u0005\u0001\u0000\u0000\u0000AB\u0005\u0003"+
		"\u0000\u0000BC\u0005\u0019\u0000\u0000CD\u0005(\u0000\u0000DF\u0003\u001a"+
		"\r\u0000EG\u0005\u001d\u0000\u0000FE\u0001\u0000\u0000\u0000FG\u0001\u0000"+
		"\u0000\u0000G\u0007\u0001\u0000\u0000\u0000HI\u0005\u0019\u0000\u0000"+
		"IJ\u0005(\u0000\u0000JL\u0003\u001a\r\u0000KM\u0005\u001d\u0000\u0000"+
		"LK\u0001\u0000\u0000\u0000LM\u0001\u0000\u0000\u0000M\t\u0001\u0000\u0000"+
		"\u0000NO\u0005\u0015\u0000\u0000OP\u0005!\u0000\u0000PQ\u0003\u001a\r"+
		"\u0000QS\u0005\"\u0000\u0000RT\u0005\u001d\u0000\u0000SR\u0001\u0000\u0000"+
		"\u0000ST\u0001\u0000\u0000\u0000T\u000b\u0001\u0000\u0000\u0000UY\u0003"+
		"\u000e\u0007\u0000VX\u0003\u0010\b\u0000WV\u0001\u0000\u0000\u0000X[\u0001"+
		"\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000\u0000"+
		"Z]\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000\\^\u0003\u0012\t"+
		"\u0000]\\\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000^\r\u0001\u0000"+
		"\u0000\u0000_`\u0005\u000f\u0000\u0000`a\u0005!\u0000\u0000ab\u0003\u001c"+
		"\u000e\u0000bc\u0005\"\u0000\u0000cg\u0003\"\u0011\u0000df\u0003\u0002"+
		"\u0001\u0000ed\u0001\u0000\u0000\u0000fi\u0001\u0000\u0000\u0000ge\u0001"+
		"\u0000\u0000\u0000gh\u0001\u0000\u0000\u0000hj\u0001\u0000\u0000\u0000"+
		"ig\u0001\u0000\u0000\u0000jk\u0003$\u0012\u0000k\u000f\u0001\u0000\u0000"+
		"\u0000lm\u0005\u000b\u0000\u0000mn\u0005!\u0000\u0000no\u0003\u001c\u000e"+
		"\u0000op\u0005\"\u0000\u0000pt\u0003\"\u0011\u0000qs\u0003\u0002\u0001"+
		"\u0000rq\u0001\u0000\u0000\u0000sv\u0001\u0000\u0000\u0000tr\u0001\u0000"+
		"\u0000\u0000tu\u0001\u0000\u0000\u0000uw\u0001\u0000\u0000\u0000vt\u0001"+
		"\u0000\u0000\u0000wx\u0003$\u0012\u0000x\u0011\u0001\u0000\u0000\u0000"+
		"yz\u0005\f\u0000\u0000z~\u0003\"\u0011\u0000{}\u0003\u0002\u0001\u0000"+
		"|{\u0001\u0000\u0000\u0000}\u0080\u0001\u0000\u0000\u0000~|\u0001\u0000"+
		"\u0000\u0000~\u007f\u0001\u0000\u0000\u0000\u007f\u0081\u0001\u0000\u0000"+
		"\u0000\u0080~\u0001\u0000\u0000\u0000\u0081\u0082\u0003$\u0012\u0000\u0082"+
		"\u0013\u0001\u0000\u0000\u0000\u0083\u0086\u0003\u0016\u000b\u0000\u0084"+
		"\u0086\u0003\u0018\f\u0000\u0085\u0083\u0001\u0000\u0000\u0000\u0085\u0084"+
		"\u0001\u0000\u0000\u0000\u0086\u0015\u0001\u0000\u0000\u0000\u0087\u0088"+
		"\u0005\u0014\u0000\u0000\u0088\u0089\u0005!\u0000\u0000\u0089\u008a\u0003"+
		"\u001c\u000e\u0000\u008a\u008b\u0005\"\u0000\u0000\u008b\u008f\u0003\""+
		"\u0011\u0000\u008c\u008e\u0003\u0002\u0001\u0000\u008d\u008c\u0001\u0000"+
		"\u0000\u0000\u008e\u0091\u0001\u0000\u0000\u0000\u008f\u008d\u0001\u0000"+
		"\u0000\u0000\u008f\u0090\u0001\u0000\u0000\u0000\u0090\u0092\u0001\u0000"+
		"\u0000\u0000\u0091\u008f\u0001\u0000\u0000\u0000\u0092\u0093\u0003$\u0012"+
		"\u0000\u0093\u0017\u0001\u0000\u0000\u0000\u0094\u0095\u0005\t\u0000\u0000"+
		"\u0095\u0099\u0003\"\u0011\u0000\u0096\u0098\u0003\u0002\u0001\u0000\u0097"+
		"\u0096\u0001\u0000\u0000\u0000\u0098\u009b\u0001\u0000\u0000\u0000\u0099"+
		"\u0097\u0001\u0000\u0000\u0000\u0099\u009a\u0001\u0000\u0000\u0000\u009a"+
		"\u009c\u0001\u0000\u0000\u0000\u009b\u0099\u0001\u0000\u0000\u0000\u009c"+
		"\u009d\u0003$\u0012\u0000\u009d\u009e\u0005\u0014\u0000\u0000\u009e\u009f"+
		"\u0005!\u0000\u0000\u009f\u00a0\u0003\u001c\u000e\u0000\u00a0\u00a1\u0005"+
		"\"\u0000\u0000\u00a1\u0019\u0001\u0000\u0000\u0000\u00a2\u00a3\u0006\r"+
		"\uffff\uffff\u0000\u00a3\u00a4\u0005!\u0000\u0000\u00a4\u00a5\u0003\u001a"+
		"\r\u0000\u00a5\u00a6\u0005\"\u0000\u0000\u00a6\u00ad\u0001\u0000\u0000"+
		"\u0000\u00a7\u00ad\u0007\u0000\u0000\u0000\u00a8\u00ad\u0005\u001a\u0000"+
		"\u0000\u00a9\u00ad\u0005\u001c\u0000\u0000\u00aa\u00ad\u0005\u001b\u0000"+
		"\u0000\u00ab\u00ad\u0005\u0019\u0000\u0000\u00ac\u00a2\u0001\u0000\u0000"+
		"\u0000\u00ac\u00a7\u0001\u0000\u0000\u0000\u00ac\u00a8\u0001\u0000\u0000"+
		"\u0000\u00ac\u00a9\u0001\u0000\u0000\u0000\u00ac\u00aa\u0001\u0000\u0000"+
		"\u0000\u00ac\u00ab\u0001\u0000\u0000\u0000\u00ad\u00bf\u0001\u0000\u0000"+
		"\u0000\u00ae\u00af\n\u000b\u0000\u0000\u00af\u00b0\u0007\u0001\u0000\u0000"+
		"\u00b0\u00be\u0003\u001a\r\f\u00b1\u00b2\n\n\u0000\u0000\u00b2\u00b3\u0007"+
		"\u0002\u0000\u0000\u00b3\u00be\u0003\u001a\r\u000b\u00b4\u00b5\n\t\u0000"+
		"\u0000\u00b5\u00b6\u00051\u0000\u0000\u00b6\u00be\u0003\u001a\r\n\u00b7"+
		"\u00b8\n\b\u0000\u0000\u00b8\u00b9\u0007\u0003\u0000\u0000\u00b9\u00be"+
		"\u0003\u001a\r\t\u00ba\u00bb\n\u0007\u0000\u0000\u00bb\u00bc\u0007\u0004"+
		"\u0000\u0000\u00bc\u00be\u0003\u001a\r\b\u00bd\u00ae\u0001\u0000\u0000"+
		"\u0000\u00bd\u00b1\u0001\u0000\u0000\u0000\u00bd\u00b4\u0001\u0000\u0000"+
		"\u0000\u00bd\u00b7\u0001\u0000\u0000\u0000\u00bd\u00ba\u0001\u0000\u0000"+
		"\u0000\u00be\u00c1\u0001\u0000\u0000\u0000\u00bf\u00bd\u0001\u0000\u0000"+
		"\u0000\u00bf\u00c0\u0001\u0000\u0000\u0000\u00c0\u001b\u0001\u0000\u0000"+
		"\u0000\u00c1\u00bf\u0001\u0000\u0000\u0000\u00c2\u00c3\u0003\u001a\r\u0000"+
		"\u00c3\u001d\u0001\u0000\u0000\u0000\u00c4\u00c5\u0005\u0019\u0000\u0000"+
		"\u00c5\u00c7\u0005\u0001\u0000\u0000\u00c6\u00c8\u0005\u001d\u0000\u0000"+
		"\u00c7\u00c6\u0001\u0000\u0000\u0000\u00c7\u00c8\u0001\u0000\u0000\u0000"+
		"\u00c8\u001f\u0001\u0000\u0000\u0000\u00c9\u00ca\u0005\u0019\u0000\u0000"+
		"\u00ca\u00cc\u0005\u0002\u0000\u0000\u00cb\u00cd\u0005\u001d\u0000\u0000"+
		"\u00cc\u00cb\u0001\u0000\u0000\u0000\u00cc\u00cd\u0001\u0000\u0000\u0000"+
		"\u00cd!\u0001\u0000\u0000\u0000\u00ce\u00cf\u0005\u001f\u0000\u0000\u00cf"+
		"#\u0001\u0000\u0000\u0000\u00d0\u00d1\u0005 \u0000\u0000\u00d1%\u0001"+
		"\u0000\u0000\u0000\u00d2\u00d3\u0007\u0005\u0000\u0000\u00d3\'\u0001\u0000"+
		"\u0000\u0000\u0013-:?FLSY]gt~\u0085\u008f\u0099\u00ac\u00bd\u00bf\u00c7"+
		"\u00cc";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}