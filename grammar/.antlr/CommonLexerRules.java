// Generated from /home/hertorprime/6to/automatas_2/antlr4/comp/ANTLR4_base/grammar/CommonLexerRules.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class CommonLexerRules extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		INT=1, FLOAT=2, CHAR=3, ID=4, NUM=5, DEC=6, CADENAS=7, IGUAL=8, SEMICOLON=9, 
		SUMA=10, RESTA=11, MULTIPLI=12, DIVISION=13, APREGUNTA=14, CPREGUNTA=15, 
		WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"INT", "FLOAT", "CHAR", "ID", "NUM", "DEC", "CADENAS", "IGUAL", "SEMICOLON", 
			"SUMA", "RESTA", "MULTIPLI", "DIVISION", "APREGUNTA", "CPREGUNTA", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'nc'", "'im'", "'jgl'", null, null, null, null, "'='", "';'", 
			"'+'", "'-'", "'*'", "'/'", "'\\u00BF'", "'?'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "INT", "FLOAT", "CHAR", "ID", "NUM", "DEC", "CADENAS", "IGUAL", 
			"SEMICOLON", "SUMA", "RESTA", "MULTIPLI", "DIVISION", "APREGUNTA", "CPREGUNTA", 
			"WS"
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


	public CommonLexerRules(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "CommonLexerRules.g4"; }

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
		"\u0004\u0000\u0010`\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0004\u0003-\b\u0003\u000b\u0003\f\u0003.\u0001\u0004\u0004\u0004"+
		"2\b\u0004\u000b\u0004\f\u00043\u0001\u0005\u0004\u00057\b\u0005\u000b"+
		"\u0005\f\u00058\u0001\u0005\u0001\u0005\u0004\u0005=\b\u0005\u000b\u0005"+
		"\f\u0005>\u0001\u0006\u0001\u0006\u0005\u0006C\b\u0006\n\u0006\f\u0006"+
		"F\t\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0004\u000f[\b"+
		"\u000f\u000b\u000f\f\u000f\\\u0001\u000f\u0001\u000f\u0001D\u0000\u0010"+
		"\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r"+
		"\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010\u0001\u0000\u0003\u0004\u000009AZ__az\u0001\u0000"+
		"09\u0003\u0000\t\n\r\r  e\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000"+
		"\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000"+
		"\u0000\u0000\u0001!\u0001\u0000\u0000\u0000\u0003$\u0001\u0000\u0000\u0000"+
		"\u0005\'\u0001\u0000\u0000\u0000\u0007,\u0001\u0000\u0000\u0000\t1\u0001"+
		"\u0000\u0000\u0000\u000b6\u0001\u0000\u0000\u0000\r@\u0001\u0000\u0000"+
		"\u0000\u000fI\u0001\u0000\u0000\u0000\u0011K\u0001\u0000\u0000\u0000\u0013"+
		"M\u0001\u0000\u0000\u0000\u0015O\u0001\u0000\u0000\u0000\u0017Q\u0001"+
		"\u0000\u0000\u0000\u0019S\u0001\u0000\u0000\u0000\u001bU\u0001\u0000\u0000"+
		"\u0000\u001dW\u0001\u0000\u0000\u0000\u001fZ\u0001\u0000\u0000\u0000!"+
		"\"\u0005n\u0000\u0000\"#\u0005c\u0000\u0000#\u0002\u0001\u0000\u0000\u0000"+
		"$%\u0005i\u0000\u0000%&\u0005m\u0000\u0000&\u0004\u0001\u0000\u0000\u0000"+
		"\'(\u0005j\u0000\u0000()\u0005g\u0000\u0000)*\u0005l\u0000\u0000*\u0006"+
		"\u0001\u0000\u0000\u0000+-\u0007\u0000\u0000\u0000,+\u0001\u0000\u0000"+
		"\u0000-.\u0001\u0000\u0000\u0000.,\u0001\u0000\u0000\u0000./\u0001\u0000"+
		"\u0000\u0000/\b\u0001\u0000\u0000\u000002\u0007\u0001\u0000\u000010\u0001"+
		"\u0000\u0000\u000023\u0001\u0000\u0000\u000031\u0001\u0000\u0000\u0000"+
		"34\u0001\u0000\u0000\u00004\n\u0001\u0000\u0000\u000057\u0007\u0001\u0000"+
		"\u000065\u0001\u0000\u0000\u000078\u0001\u0000\u0000\u000086\u0001\u0000"+
		"\u0000\u000089\u0001\u0000\u0000\u00009:\u0001\u0000\u0000\u0000:<\t\u0000"+
		"\u0000\u0000;=\u0007\u0001\u0000\u0000<;\u0001\u0000\u0000\u0000=>\u0001"+
		"\u0000\u0000\u0000><\u0001\u0000\u0000\u0000>?\u0001\u0000\u0000\u0000"+
		"?\f\u0001\u0000\u0000\u0000@D\u0005\"\u0000\u0000AC\t\u0000\u0000\u0000"+
		"BA\u0001\u0000\u0000\u0000CF\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000"+
		"\u0000DB\u0001\u0000\u0000\u0000EG\u0001\u0000\u0000\u0000FD\u0001\u0000"+
		"\u0000\u0000GH\u0005\"\u0000\u0000H\u000e\u0001\u0000\u0000\u0000IJ\u0005"+
		"=\u0000\u0000J\u0010\u0001\u0000\u0000\u0000KL\u0005;\u0000\u0000L\u0012"+
		"\u0001\u0000\u0000\u0000MN\u0005+\u0000\u0000N\u0014\u0001\u0000\u0000"+
		"\u0000OP\u0005-\u0000\u0000P\u0016\u0001\u0000\u0000\u0000QR\u0005*\u0000"+
		"\u0000R\u0018\u0001\u0000\u0000\u0000ST\u0005/\u0000\u0000T\u001a\u0001"+
		"\u0000\u0000\u0000UV\u0005\u00bf\u0000\u0000V\u001c\u0001\u0000\u0000"+
		"\u0000WX\u0005?\u0000\u0000X\u001e\u0001\u0000\u0000\u0000Y[\u0007\u0002"+
		"\u0000\u0000ZY\u0001\u0000\u0000\u0000[\\\u0001\u0000\u0000\u0000\\Z\u0001"+
		"\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000"+
		"^_\u0006\u000f\u0000\u0000_ \u0001\u0000\u0000\u0000\u0007\u0000.38>D"+
		"\\\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}