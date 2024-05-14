// Generated from /home/hector/6to/automatas_2/Compilador/grammar/Traductor.g4 by ANTLR 4.13.1
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
		MAIN=1, BREAK=2, CASE=3, CHAR=4, CONST=5, DO=6, DOUBLE=7, ELSE_IF=8, ELSE=9, 
		FLOAT=10, FOR=11, IF=12, INT=13, SWITCH=14, UNSIGNED=15, VOID=16, WHILE=17, 
		PRINTF=18, VOID_MAIN=19, TRUE=20, FALSE=21, ID=22, NUM=23, CADENA=24, 
		DEC=25, SEMI=26, COMA=27, ALLAVE=28, CLLAVE=29, APARENTESIS=30, CPARENTESIS=31, 
		AADMIRACION=32, MUL=33, DIV=34, ADD=35, SUB=36, ASIGNACION=37, MAYORQ=38, 
		MENORQ=39, MAYOR_IGUAL=40, MENOR_IGUAL=41, IGUALDAD_DEBIL=42, IGUALDAD_FUERTE=43, 
		DIF_DEBIL=44, DIF_FUERTE=45, RESIDUO=46, OR=47, AND=48, WS=49;
	public static final int
		RULE_contenido = 0, RULE_pr = 1, RULE_varios = 2;
	private static String[] makeRuleNames() {
		return new String[] {
			"contenido", "pr", "varios"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'main'", "'break'", "'case'", "'char'", "'const'", "'do'", "'double'", 
			"'else if'", "'else'", "'float'", "'for'", "'if'", "'int'", "'switch'", 
			"'unsigned'", "'void'", "'while'", "'printf'", "'void main()'", "'true'", 
			"'false'", null, null, null, null, "';'", "','", "'{'", "'}'", "'('", 
			"')'", "'!'", "'*'", "'/'", "'+'", "'-'", "'='", "'>'", "'<'", "'>='", 
			"'<='", "'=='", "'==='", "'!='", "'!=='", "'%'", "'||'", "'&&'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "MAIN", "BREAK", "CASE", "CHAR", "CONST", "DO", "DOUBLE", "ELSE_IF", 
			"ELSE", "FLOAT", "FOR", "IF", "INT", "SWITCH", "UNSIGNED", "VOID", "WHILE", 
			"PRINTF", "VOID_MAIN", "TRUE", "FALSE", "ID", "NUM", "CADENA", "DEC", 
			"SEMI", "COMA", "ALLAVE", "CLLAVE", "APARENTESIS", "CPARENTESIS", "AADMIRACION", 
			"MUL", "DIV", "ADD", "SUB", "ASIGNACION", "MAYORQ", "MENORQ", "MAYOR_IGUAL", 
			"MENOR_IGUAL", "IGUALDAD_DEBIL", "IGUALDAD_FUERTE", "DIF_DEBIL", "DIF_FUERTE", 
			"RESIDUO", "OR", "AND", "WS"
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
		public List<PrContext> pr() {
			return getRuleContexts(PrContext.class);
		}
		public PrContext pr(int i) {
			return getRuleContext(PrContext.class,i);
		}
		public List<VariosContext> varios() {
			return getRuleContexts(VariosContext.class);
		}
		public VariosContext varios(int i) {
			return getRuleContext(VariosContext.class,i);
		}
		public ContenidoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_contenido; }
	}

	public final ContenidoContext contenido() throws RecognitionException {
		ContenidoContext _localctx = new ContenidoContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_contenido);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(10);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
			while ( _alt!=1 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1+1 ) {
					{
					setState(8);
					_errHandler.sync(this);
					switch (_input.LA(1)) {
					case MAIN:
					case BREAK:
					case CASE:
					case CHAR:
					case DO:
					case DOUBLE:
					case ELSE_IF:
					case ELSE:
					case FLOAT:
					case FOR:
					case IF:
					case INT:
					case SWITCH:
					case VOID:
					case WHILE:
					case PRINTF:
					case VOID_MAIN:
						{
						setState(6);
						pr();
						}
						break;
					case ID:
					case NUM:
					case CADENA:
					case DEC:
					case SEMI:
					case ALLAVE:
					case CLLAVE:
					case APARENTESIS:
					case CPARENTESIS:
					case AADMIRACION:
					case MUL:
					case DIV:
					case ADD:
					case SUB:
					case ASIGNACION:
					case MAYORQ:
					case MENORQ:
					case MAYOR_IGUAL:
					case MENOR_IGUAL:
					case IGUALDAD_DEBIL:
					case IGUALDAD_FUERTE:
					case DIF_DEBIL:
					case DIF_FUERTE:
					case OR:
					case AND:
						{
						setState(7);
						varios();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					} 
				}
				setState(12);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
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
	public static class PrContext extends ParserRuleContext {
		public TerminalNode VOID_MAIN() { return getToken(TraductorParser.VOID_MAIN, 0); }
		public TerminalNode MAIN() { return getToken(TraductorParser.MAIN, 0); }
		public TerminalNode BREAK() { return getToken(TraductorParser.BREAK, 0); }
		public TerminalNode CASE() { return getToken(TraductorParser.CASE, 0); }
		public TerminalNode CHAR() { return getToken(TraductorParser.CHAR, 0); }
		public TerminalNode DO() { return getToken(TraductorParser.DO, 0); }
		public TerminalNode DOUBLE() { return getToken(TraductorParser.DOUBLE, 0); }
		public TerminalNode ELSE_IF() { return getToken(TraductorParser.ELSE_IF, 0); }
		public TerminalNode ELSE() { return getToken(TraductorParser.ELSE, 0); }
		public TerminalNode FLOAT() { return getToken(TraductorParser.FLOAT, 0); }
		public TerminalNode FOR() { return getToken(TraductorParser.FOR, 0); }
		public TerminalNode IF() { return getToken(TraductorParser.IF, 0); }
		public TerminalNode INT() { return getToken(TraductorParser.INT, 0); }
		public TerminalNode SWITCH() { return getToken(TraductorParser.SWITCH, 0); }
		public TerminalNode VOID() { return getToken(TraductorParser.VOID, 0); }
		public TerminalNode WHILE() { return getToken(TraductorParser.WHILE, 0); }
		public TerminalNode PRINTF() { return getToken(TraductorParser.PRINTF, 0); }
		public PrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pr; }
	}

	public final PrContext pr() throws RecognitionException {
		PrContext _localctx = new PrContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_pr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(13);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1015774L) != 0)) ) {
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

	@SuppressWarnings("CheckReturnValue")
	public static class VariosContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(TraductorParser.ID, 0); }
		public TerminalNode NUM() { return getToken(TraductorParser.NUM, 0); }
		public TerminalNode CADENA() { return getToken(TraductorParser.CADENA, 0); }
		public TerminalNode DEC() { return getToken(TraductorParser.DEC, 0); }
		public TerminalNode APARENTESIS() { return getToken(TraductorParser.APARENTESIS, 0); }
		public TerminalNode CPARENTESIS() { return getToken(TraductorParser.CPARENTESIS, 0); }
		public TerminalNode ALLAVE() { return getToken(TraductorParser.ALLAVE, 0); }
		public TerminalNode CLLAVE() { return getToken(TraductorParser.CLLAVE, 0); }
		public TerminalNode AADMIRACION() { return getToken(TraductorParser.AADMIRACION, 0); }
		public TerminalNode MUL() { return getToken(TraductorParser.MUL, 0); }
		public TerminalNode DIV() { return getToken(TraductorParser.DIV, 0); }
		public TerminalNode ADD() { return getToken(TraductorParser.ADD, 0); }
		public TerminalNode SUB() { return getToken(TraductorParser.SUB, 0); }
		public TerminalNode ASIGNACION() { return getToken(TraductorParser.ASIGNACION, 0); }
		public TerminalNode MAYORQ() { return getToken(TraductorParser.MAYORQ, 0); }
		public TerminalNode MENORQ() { return getToken(TraductorParser.MENORQ, 0); }
		public TerminalNode MAYOR_IGUAL() { return getToken(TraductorParser.MAYOR_IGUAL, 0); }
		public TerminalNode MENOR_IGUAL() { return getToken(TraductorParser.MENOR_IGUAL, 0); }
		public TerminalNode IGUALDAD_DEBIL() { return getToken(TraductorParser.IGUALDAD_DEBIL, 0); }
		public TerminalNode IGUALDAD_FUERTE() { return getToken(TraductorParser.IGUALDAD_FUERTE, 0); }
		public TerminalNode DIF_DEBIL() { return getToken(TraductorParser.DIF_DEBIL, 0); }
		public TerminalNode DIF_FUERTE() { return getToken(TraductorParser.DIF_FUERTE, 0); }
		public TerminalNode OR() { return getToken(TraductorParser.OR, 0); }
		public TerminalNode AND() { return getToken(TraductorParser.AND, 0); }
		public TerminalNode SEMI() { return getToken(TraductorParser.SEMI, 0); }
		public VariosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varios; }
	}

	public final VariosContext varios() throws RecognitionException {
		VariosContext _localctx = new VariosContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_varios);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(15);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 492581070831616L) != 0)) ) {
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

	public static final String _serializedATN =
		"\u0004\u00011\u0012\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0001\u0000\u0001\u0000\u0005\u0000\t\b\u0000\n\u0000"+
		"\f\u0000\f\t\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0001\n\u0000\u0003\u0000\u0002\u0004\u0000\u0002\u0003\u0000\u0001"+
		"\u0004\u0006\u000e\u0010\u0013\u0003\u0000\u0016\u001a\u001c-/0\u0010"+
		"\u0000\n\u0001\u0000\u0000\u0000\u0002\r\u0001\u0000\u0000\u0000\u0004"+
		"\u000f\u0001\u0000\u0000\u0000\u0006\t\u0003\u0002\u0001\u0000\u0007\t"+
		"\u0003\u0004\u0002\u0000\b\u0006\u0001\u0000\u0000\u0000\b\u0007\u0001"+
		"\u0000\u0000\u0000\t\f\u0001\u0000\u0000\u0000\n\u000b\u0001\u0000\u0000"+
		"\u0000\n\b\u0001\u0000\u0000\u0000\u000b\u0001\u0001\u0000\u0000\u0000"+
		"\f\n\u0001\u0000\u0000\u0000\r\u000e\u0007\u0000\u0000\u0000\u000e\u0003"+
		"\u0001\u0000\u0000\u0000\u000f\u0010\u0007\u0001\u0000\u0000\u0010\u0005"+
		"\u0001\u0000\u0000\u0000\u0002\b\n";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}