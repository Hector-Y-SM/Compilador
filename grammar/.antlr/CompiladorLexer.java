// Generated from /home/hertorprime/6to/automatas_2/antlr4/comp/ANTLR4_base/grammar/Compilador.g4 by ANTLR 4.13.1
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
		T__0=1, T__1=2, T__2=3, PR=4, INT=5, FLOAT=6, CHAR=7, ID=8, NUM=9, DEC=10, 
		CADENAS=11, IGUAL=12, SEMICOLON=13, APREGUNTA=14, CPREGUNTA=15, WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "PR", "INT", "FLOAT", "CHAR", "ID", "NUM", "DEC", 
			"CADENAS", "IGUAL", "SEMICOLON", "APREGUNTA", "CPREGUNTA", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'TPG'", "'{'", "'}'", null, "'nc'", "'im'", "'jgl'", null, null, 
			null, null, "'='", "';'", "'\\u00BF'", "'?'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "PR", "INT", "FLOAT", "CHAR", "ID", "NUM", "DEC", 
			"CADENAS", "IGUAL", "SEMICOLON", "APREGUNTA", "CPREGUNTA", "WS"
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
		"\u0004\u0000\u0010e\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u0003-\b\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0007\u0004\u0007:\b\u0007\u000b\u0007\f\u0007;\u0001\b\u0004"+
		"\b?\b\b\u000b\b\f\b@\u0001\t\u0004\tD\b\t\u000b\t\f\tE\u0001\t\u0001\t"+
		"\u0004\tJ\b\t\u000b\t\f\tK\u0001\n\u0001\n\u0005\nP\b\n\n\n\f\nS\t\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0004\u000f`\b\u000f\u000b\u000f\f\u000f"+
		"a\u0001\u000f\u0001\u000f\u0001Q\u0000\u0010\u0001\u0001\u0003\u0002\u0005"+
		"\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n"+
		"\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010\u0001"+
		"\u0000\u0003\u0006\u0000(9??AZ__az\u00bf\u00bf\u0001\u000009\u0002\u0000"+
		"\t\n  l\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000"+
		"\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000"+
		"\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000"+
		"\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000"+
		"\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000"+
		"\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000"+
		"\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000"+
		"\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0001"+
		"!\u0001\u0000\u0000\u0000\u0003%\u0001\u0000\u0000\u0000\u0005\'\u0001"+
		"\u0000\u0000\u0000\u0007,\u0001\u0000\u0000\u0000\t.\u0001\u0000\u0000"+
		"\u0000\u000b1\u0001\u0000\u0000\u0000\r4\u0001\u0000\u0000\u0000\u000f"+
		"9\u0001\u0000\u0000\u0000\u0011>\u0001\u0000\u0000\u0000\u0013C\u0001"+
		"\u0000\u0000\u0000\u0015M\u0001\u0000\u0000\u0000\u0017V\u0001\u0000\u0000"+
		"\u0000\u0019X\u0001\u0000\u0000\u0000\u001bZ\u0001\u0000\u0000\u0000\u001d"+
		"\\\u0001\u0000\u0000\u0000\u001f_\u0001\u0000\u0000\u0000!\"\u0005T\u0000"+
		"\u0000\"#\u0005P\u0000\u0000#$\u0005G\u0000\u0000$\u0002\u0001\u0000\u0000"+
		"\u0000%&\u0005{\u0000\u0000&\u0004\u0001\u0000\u0000\u0000\'(\u0005}\u0000"+
		"\u0000(\u0006\u0001\u0000\u0000\u0000)-\u0003\t\u0004\u0000*-\u0003\u000b"+
		"\u0005\u0000+-\u0003\r\u0006\u0000,)\u0001\u0000\u0000\u0000,*\u0001\u0000"+
		"\u0000\u0000,+\u0001\u0000\u0000\u0000-\b\u0001\u0000\u0000\u0000./\u0005"+
		"n\u0000\u0000/0\u0005c\u0000\u00000\n\u0001\u0000\u0000\u000012\u0005"+
		"i\u0000\u000023\u0005m\u0000\u00003\f\u0001\u0000\u0000\u000045\u0005"+
		"j\u0000\u000056\u0005g\u0000\u000067\u0005l\u0000\u00007\u000e\u0001\u0000"+
		"\u0000\u00008:\u0007\u0000\u0000\u000098\u0001\u0000\u0000\u0000:;\u0001"+
		"\u0000\u0000\u0000;9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000"+
		"<\u0010\u0001\u0000\u0000\u0000=?\u0007\u0001\u0000\u0000>=\u0001\u0000"+
		"\u0000\u0000?@\u0001\u0000\u0000\u0000@>\u0001\u0000\u0000\u0000@A\u0001"+
		"\u0000\u0000\u0000A\u0012\u0001\u0000\u0000\u0000BD\u0007\u0001\u0000"+
		"\u0000CB\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000\u0000EC\u0001\u0000"+
		"\u0000\u0000EF\u0001\u0000\u0000\u0000FG\u0001\u0000\u0000\u0000GI\t\u0000"+
		"\u0000\u0000HJ\u0007\u0001\u0000\u0000IH\u0001\u0000\u0000\u0000JK\u0001"+
		"\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000KL\u0001\u0000\u0000\u0000"+
		"L\u0014\u0001\u0000\u0000\u0000MQ\u0005\"\u0000\u0000NP\t\u0000\u0000"+
		"\u0000ON\u0001\u0000\u0000\u0000PS\u0001\u0000\u0000\u0000QR\u0001\u0000"+
		"\u0000\u0000QO\u0001\u0000\u0000\u0000RT\u0001\u0000\u0000\u0000SQ\u0001"+
		"\u0000\u0000\u0000TU\u0005\"\u0000\u0000U\u0016\u0001\u0000\u0000\u0000"+
		"VW\u0005=\u0000\u0000W\u0018\u0001\u0000\u0000\u0000XY\u0005;\u0000\u0000"+
		"Y\u001a\u0001\u0000\u0000\u0000Z[\u0005\u00bf\u0000\u0000[\u001c\u0001"+
		"\u0000\u0000\u0000\\]\u0005?\u0000\u0000]\u001e\u0001\u0000\u0000\u0000"+
		"^`\u0007\u0002\u0000\u0000_^\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000"+
		"\u0000a_\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000bc\u0001\u0000"+
		"\u0000\u0000cd\u0006\u000f\u0000\u0000d \u0001\u0000\u0000\u0000\b\u0000"+
		",;@EKQa\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}