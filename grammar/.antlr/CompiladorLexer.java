// Generated from /home/hector/6to/automatas_2/Compilador/grammar/Compilador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CompiladorLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		PR=1, IMPRESION=2, IF_BASICO=3, INT=4, FLOAT=5, CHAR=6, MUL=7, DIV=8, 
		ADD=9, SUB=10, ASIGNACION=11, MAYORQ=12, MENORQ=13, MAYOR_IGUAL=14, MENOR_IGUAL=15, 
		IGUALDAD_BASE=16, IGUALDAD_FUERTE=17, OR=18, AND=19, TPG=20, ABLOQUE=21, 
		CBLOQUE=22, ALLAVE=23, CLLAVE=24, APARENTESIS=25, CPARENTESIS=26, AADMIRACION=27, 
		ID=28, NUM=29, CADENA=30, DEC=31, SEMI=32, WS=33;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PR", "IMPRESION", "IF_BASICO", "INT", "FLOAT", "CHAR", "MUL", "DIV", 
			"ADD", "SUB", "ASIGNACION", "MAYORQ", "MENORQ", "MAYOR_IGUAL", "MENOR_IGUAL", 
			"IGUALDAD_BASE", "IGUALDAD_FUERTE", "OR", "AND", "TPG", "ABLOQUE", "CBLOQUE", 
			"ALLAVE", "CLLAVE", "APARENTESIS", "CPARENTESIS", "AADMIRACION", "ID", 
			"NUM", "CADENA", "DEC", "SEMI", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'leak'", "'if'", "'nc'", "'im'", "'jgl'", "'*'", "'/'", 
			"'+'", "'-'", "'='", "'>'", "'<'", "'>='", "'<='", "'=='", "'==='", "'||'", 
			"'&&'", "'W7HLM'", "'>_'", "'_<'", "'{'", "'}'", "'('", "')'", "'!'", 
			null, null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PR", "IMPRESION", "IF_BASICO", "INT", "FLOAT", "CHAR", "MUL", 
			"DIV", "ADD", "SUB", "ASIGNACION", "MAYORQ", "MENORQ", "MAYOR_IGUAL", 
			"MENOR_IGUAL", "IGUALDAD_BASE", "IGUALDAD_FUERTE", "OR", "AND", "TPG", 
			"ABLOQUE", "CBLOQUE", "ALLAVE", "CLLAVE", "APARENTESIS", "CPARENTESIS", 
			"AADMIRACION", "ID", "NUM", "CADENA", "DEC", "SEMI", "WS"
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


	public CompiladorLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Compilador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000!\u00b8\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002"+
		"\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002"+
		"\u0018\u0007\u0018\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002"+
		"\u001b\u0007\u001b\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002"+
		"\u001e\u0007\u001e\u0002\u001f\u0007\u001f\u0002 \u0007 \u0001\u0000\u0001"+
		"\u0000\u0001\u0000\u0003\u0000G\b\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016\u0001\u0017"+
		"\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019\u0001\u001a"+
		"\u0001\u001a\u0001\u001b\u0004\u001b\u0093\b\u001b\u000b\u001b\f\u001b"+
		"\u0094\u0001\u001c\u0004\u001c\u0098\b\u001c\u000b\u001c\f\u001c\u0099"+
		"\u0001\u001d\u0001\u001d\u0005\u001d\u009e\b\u001d\n\u001d\f\u001d\u00a1"+
		"\t\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0004\u001e\u00a6\b\u001e"+
		"\u000b\u001e\f\u001e\u00a7\u0001\u001e\u0001\u001e\u0004\u001e\u00ac\b"+
		"\u001e\u000b\u001e\f\u001e\u00ad\u0001\u001f\u0001\u001f\u0001 \u0004"+
		" \u00b3\b \u000b \f \u00b4\u0001 \u0001 \u0001\u009f\u0000!\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f"+
		"\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/\u0018"+
		"1\u00193\u001a5\u001b7\u001c9\u001d;\u001e=\u001f? A!\u0001\u0000\u0003"+
		"\u0004\u000009AZ__az\u0001\u000009\u0003\u0000\t\n\r\r  \u00bf\u0000\u0001"+
		"\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005"+
		"\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001"+
		"\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000"+
		"\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000"+
		"\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000"+
		"\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000"+
		"\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000"+
		"\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000"+
		"\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000"+
		"\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001"+
		"\u0000\u0000\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000"+
		"\u0000\u00001\u0001\u0000\u0000\u0000\u00003\u0001\u0000\u0000\u0000\u0000"+
		"5\u0001\u0000\u0000\u0000\u00007\u0001\u0000\u0000\u0000\u00009\u0001"+
		"\u0000\u0000\u0000\u0000;\u0001\u0000\u0000\u0000\u0000=\u0001\u0000\u0000"+
		"\u0000\u0000?\u0001\u0000\u0000\u0000\u0000A\u0001\u0000\u0000\u0000\u0001"+
		"F\u0001\u0000\u0000\u0000\u0003H\u0001\u0000\u0000\u0000\u0005M\u0001"+
		"\u0000\u0000\u0000\u0007P\u0001\u0000\u0000\u0000\tS\u0001\u0000\u0000"+
		"\u0000\u000bV\u0001\u0000\u0000\u0000\rZ\u0001\u0000\u0000\u0000\u000f"+
		"\\\u0001\u0000\u0000\u0000\u0011^\u0001\u0000\u0000\u0000\u0013`\u0001"+
		"\u0000\u0000\u0000\u0015b\u0001\u0000\u0000\u0000\u0017d\u0001\u0000\u0000"+
		"\u0000\u0019f\u0001\u0000\u0000\u0000\u001bh\u0001\u0000\u0000\u0000\u001d"+
		"k\u0001\u0000\u0000\u0000\u001fn\u0001\u0000\u0000\u0000!q\u0001\u0000"+
		"\u0000\u0000#u\u0001\u0000\u0000\u0000%x\u0001\u0000\u0000\u0000\'{\u0001"+
		"\u0000\u0000\u0000)\u0081\u0001\u0000\u0000\u0000+\u0084\u0001\u0000\u0000"+
		"\u0000-\u0087\u0001\u0000\u0000\u0000/\u0089\u0001\u0000\u0000\u00001"+
		"\u008b\u0001\u0000\u0000\u00003\u008d\u0001\u0000\u0000\u00005\u008f\u0001"+
		"\u0000\u0000\u00007\u0092\u0001\u0000\u0000\u00009\u0097\u0001\u0000\u0000"+
		"\u0000;\u009b\u0001\u0000\u0000\u0000=\u00a5\u0001\u0000\u0000\u0000?"+
		"\u00af\u0001\u0000\u0000\u0000A\u00b2\u0001\u0000\u0000\u0000CG\u0003"+
		"\u0007\u0003\u0000DG\u0003\u000b\u0005\u0000EG\u0003\t\u0004\u0000FC\u0001"+
		"\u0000\u0000\u0000FD\u0001\u0000\u0000\u0000FE\u0001\u0000\u0000\u0000"+
		"G\u0002\u0001\u0000\u0000\u0000HI\u0005l\u0000\u0000IJ\u0005e\u0000\u0000"+
		"JK\u0005a\u0000\u0000KL\u0005k\u0000\u0000L\u0004\u0001\u0000\u0000\u0000"+
		"MN\u0005i\u0000\u0000NO\u0005f\u0000\u0000O\u0006\u0001\u0000\u0000\u0000"+
		"PQ\u0005n\u0000\u0000QR\u0005c\u0000\u0000R\b\u0001\u0000\u0000\u0000"+
		"ST\u0005i\u0000\u0000TU\u0005m\u0000\u0000U\n\u0001\u0000\u0000\u0000"+
		"VW\u0005j\u0000\u0000WX\u0005g\u0000\u0000XY\u0005l\u0000\u0000Y\f\u0001"+
		"\u0000\u0000\u0000Z[\u0005*\u0000\u0000[\u000e\u0001\u0000\u0000\u0000"+
		"\\]\u0005/\u0000\u0000]\u0010\u0001\u0000\u0000\u0000^_\u0005+\u0000\u0000"+
		"_\u0012\u0001\u0000\u0000\u0000`a\u0005-\u0000\u0000a\u0014\u0001\u0000"+
		"\u0000\u0000bc\u0005=\u0000\u0000c\u0016\u0001\u0000\u0000\u0000de\u0005"+
		">\u0000\u0000e\u0018\u0001\u0000\u0000\u0000fg\u0005<\u0000\u0000g\u001a"+
		"\u0001\u0000\u0000\u0000hi\u0005>\u0000\u0000ij\u0005=\u0000\u0000j\u001c"+
		"\u0001\u0000\u0000\u0000kl\u0005<\u0000\u0000lm\u0005=\u0000\u0000m\u001e"+
		"\u0001\u0000\u0000\u0000no\u0005=\u0000\u0000op\u0005=\u0000\u0000p \u0001"+
		"\u0000\u0000\u0000qr\u0005=\u0000\u0000rs\u0005=\u0000\u0000st\u0005="+
		"\u0000\u0000t\"\u0001\u0000\u0000\u0000uv\u0005|\u0000\u0000vw\u0005|"+
		"\u0000\u0000w$\u0001\u0000\u0000\u0000xy\u0005&\u0000\u0000yz\u0005&\u0000"+
		"\u0000z&\u0001\u0000\u0000\u0000{|\u0005W\u0000\u0000|}\u00057\u0000\u0000"+
		"}~\u0005H\u0000\u0000~\u007f\u0005L\u0000\u0000\u007f\u0080\u0005M\u0000"+
		"\u0000\u0080(\u0001\u0000\u0000\u0000\u0081\u0082\u0005>\u0000\u0000\u0082"+
		"\u0083\u0005_\u0000\u0000\u0083*\u0001\u0000\u0000\u0000\u0084\u0085\u0005"+
		"_\u0000\u0000\u0085\u0086\u0005<\u0000\u0000\u0086,\u0001\u0000\u0000"+
		"\u0000\u0087\u0088\u0005{\u0000\u0000\u0088.\u0001\u0000\u0000\u0000\u0089"+
		"\u008a\u0005}\u0000\u0000\u008a0\u0001\u0000\u0000\u0000\u008b\u008c\u0005"+
		"(\u0000\u0000\u008c2\u0001\u0000\u0000\u0000\u008d\u008e\u0005)\u0000"+
		"\u0000\u008e4\u0001\u0000\u0000\u0000\u008f\u0090\u0005!\u0000\u0000\u0090"+
		"6\u0001\u0000\u0000\u0000\u0091\u0093\u0007\u0000\u0000\u0000\u0092\u0091"+
		"\u0001\u0000\u0000\u0000\u0093\u0094\u0001\u0000\u0000\u0000\u0094\u0092"+
		"\u0001\u0000\u0000\u0000\u0094\u0095\u0001\u0000\u0000\u0000\u00958\u0001"+
		"\u0000\u0000\u0000\u0096\u0098\u0007\u0001\u0000\u0000\u0097\u0096\u0001"+
		"\u0000\u0000\u0000\u0098\u0099\u0001\u0000\u0000\u0000\u0099\u0097\u0001"+
		"\u0000\u0000\u0000\u0099\u009a\u0001\u0000\u0000\u0000\u009a:\u0001\u0000"+
		"\u0000\u0000\u009b\u009f\u0005\"\u0000\u0000\u009c\u009e\t\u0000\u0000"+
		"\u0000\u009d\u009c\u0001\u0000\u0000\u0000\u009e\u00a1\u0001\u0000\u0000"+
		"\u0000\u009f\u00a0\u0001\u0000\u0000\u0000\u009f\u009d\u0001\u0000\u0000"+
		"\u0000\u00a0\u00a2\u0001\u0000\u0000\u0000\u00a1\u009f\u0001\u0000\u0000"+
		"\u0000\u00a2\u00a3\u0005\"\u0000\u0000\u00a3<\u0001\u0000\u0000\u0000"+
		"\u00a4\u00a6\u0007\u0001\u0000\u0000\u00a5\u00a4\u0001\u0000\u0000\u0000"+
		"\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7\u00a5\u0001\u0000\u0000\u0000"+
		"\u00a7\u00a8\u0001\u0000\u0000\u0000\u00a8\u00a9\u0001\u0000\u0000\u0000"+
		"\u00a9\u00ab\u0005.\u0000\u0000\u00aa\u00ac\u0007\u0001\u0000\u0000\u00ab"+
		"\u00aa\u0001\u0000\u0000\u0000\u00ac\u00ad\u0001\u0000\u0000\u0000\u00ad"+
		"\u00ab\u0001\u0000\u0000\u0000\u00ad\u00ae\u0001\u0000\u0000\u0000\u00ae"+
		">\u0001\u0000\u0000\u0000\u00af\u00b0\u0005;\u0000\u0000\u00b0@\u0001"+
		"\u0000\u0000\u0000\u00b1\u00b3\u0007\u0002\u0000\u0000\u00b2\u00b1\u0001"+
		"\u0000\u0000\u0000\u00b3\u00b4\u0001\u0000\u0000\u0000\u00b4\u00b2\u0001"+
		"\u0000\u0000\u0000\u00b4\u00b5\u0001\u0000\u0000\u0000\u00b5\u00b6\u0001"+
		"\u0000\u0000\u0000\u00b6\u00b7\u0006 \u0000\u0000\u00b7B\u0001\u0000\u0000"+
		"\u0000\b\u0000F\u0094\u0099\u009f\u00a7\u00ad\u00b4\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}