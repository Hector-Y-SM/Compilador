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
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, PR=6, INT=7, FLOAT=8, CHAR=9, 
		ID=10, NUM=11, DEC=12, CADENAS=13, IGUAL=14, SEMICOLON=15, SUMA=16, RESTA=17, 
		MULTIPLI=18, DIVISION=19, APREGUNTA=20, CPREGUNTA=21, WS=22;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "PR", "INT", "FLOAT", "CHAR", 
			"ID", "NUM", "DEC", "CADENAS", "IGUAL", "SEMICOLON", "SUMA", "RESTA", 
			"MULTIPLI", "DIVISION", "APREGUNTA", "CPREGUNTA", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'TPG'", "'{'", "'}'", "'('", "')'", null, "'nc'", "'im'", "'jgl'", 
			null, null, null, null, "'='", "';'", "'+'", "'-'", "'*'", "'/'", "'\\u00BF'", 
			"'?'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, "PR", "INT", "FLOAT", "CHAR", "ID", 
			"NUM", "DEC", "CADENAS", "IGUAL", "SEMICOLON", "SUMA", "RESTA", "MULTIPLI", 
			"DIVISION", "APREGUNTA", "CPREGUNTA", "WS"
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
		"\u0004\u0000\u0016}\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002"+
		"\u0015\u0007\u0015\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001"+
		"\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005=\b"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0004\tJ\b\t\u000b\t\f"+
		"\tK\u0001\n\u0004\nO\b\n\u000b\n\f\nP\u0001\u000b\u0004\u000bT\b\u000b"+
		"\u000b\u000b\f\u000bU\u0001\u000b\u0001\u000b\u0004\u000bZ\b\u000b\u000b"+
		"\u000b\f\u000b[\u0001\f\u0001\f\u0005\f`\b\f\n\f\f\fc\t\f\u0001\f\u0001"+
		"\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001"+
		"\u0013\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0015\u0004\u0015x\b"+
		"\u0015\u000b\u0015\f\u0015y\u0001\u0015\u0001\u0015\u0001a\u0000\u0016"+
		"\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r"+
		"\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e"+
		"\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016\u0001"+
		"\u0000\u0003\u0004\u000009AZ__az\u0001\u000009\u0003\u0000\t\n\r\r  \u0084"+
		"\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000"+
		"\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000"+
		"\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000"+
		"\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011"+
		"\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015"+
		"\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019"+
		"\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001"+
		"\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000"+
		"\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000"+
		"\u0000+\u0001\u0000\u0000\u0000\u0001-\u0001\u0000\u0000\u0000\u00031"+
		"\u0001\u0000\u0000\u0000\u00053\u0001\u0000\u0000\u0000\u00075\u0001\u0000"+
		"\u0000\u0000\t7\u0001\u0000\u0000\u0000\u000b<\u0001\u0000\u0000\u0000"+
		"\r>\u0001\u0000\u0000\u0000\u000fA\u0001\u0000\u0000\u0000\u0011D\u0001"+
		"\u0000\u0000\u0000\u0013I\u0001\u0000\u0000\u0000\u0015N\u0001\u0000\u0000"+
		"\u0000\u0017S\u0001\u0000\u0000\u0000\u0019]\u0001\u0000\u0000\u0000\u001b"+
		"f\u0001\u0000\u0000\u0000\u001dh\u0001\u0000\u0000\u0000\u001fj\u0001"+
		"\u0000\u0000\u0000!l\u0001\u0000\u0000\u0000#n\u0001\u0000\u0000\u0000"+
		"%p\u0001\u0000\u0000\u0000\'r\u0001\u0000\u0000\u0000)t\u0001\u0000\u0000"+
		"\u0000+w\u0001\u0000\u0000\u0000-.\u0005T\u0000\u0000./\u0005P\u0000\u0000"+
		"/0\u0005G\u0000\u00000\u0002\u0001\u0000\u0000\u000012\u0005{\u0000\u0000"+
		"2\u0004\u0001\u0000\u0000\u000034\u0005}\u0000\u00004\u0006\u0001\u0000"+
		"\u0000\u000056\u0005(\u0000\u00006\b\u0001\u0000\u0000\u000078\u0005)"+
		"\u0000\u00008\n\u0001\u0000\u0000\u00009=\u0003\r\u0006\u0000:=\u0003"+
		"\u000f\u0007\u0000;=\u0003\u0011\b\u0000<9\u0001\u0000\u0000\u0000<:\u0001"+
		"\u0000\u0000\u0000<;\u0001\u0000\u0000\u0000=\f\u0001\u0000\u0000\u0000"+
		">?\u0005n\u0000\u0000?@\u0005c\u0000\u0000@\u000e\u0001\u0000\u0000\u0000"+
		"AB\u0005i\u0000\u0000BC\u0005m\u0000\u0000C\u0010\u0001\u0000\u0000\u0000"+
		"DE\u0005j\u0000\u0000EF\u0005g\u0000\u0000FG\u0005l\u0000\u0000G\u0012"+
		"\u0001\u0000\u0000\u0000HJ\u0007\u0000\u0000\u0000IH\u0001\u0000\u0000"+
		"\u0000JK\u0001\u0000\u0000\u0000KI\u0001\u0000\u0000\u0000KL\u0001\u0000"+
		"\u0000\u0000L\u0014\u0001\u0000\u0000\u0000MO\u0007\u0001\u0000\u0000"+
		"NM\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000PN\u0001\u0000\u0000"+
		"\u0000PQ\u0001\u0000\u0000\u0000Q\u0016\u0001\u0000\u0000\u0000RT\u0007"+
		"\u0001\u0000\u0000SR\u0001\u0000\u0000\u0000TU\u0001\u0000\u0000\u0000"+
		"US\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000\u0000VW\u0001\u0000\u0000"+
		"\u0000WY\t\u0000\u0000\u0000XZ\u0007\u0001\u0000\u0000YX\u0001\u0000\u0000"+
		"\u0000Z[\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000[\\\u0001\u0000"+
		"\u0000\u0000\\\u0018\u0001\u0000\u0000\u0000]a\u0005\"\u0000\u0000^`\t"+
		"\u0000\u0000\u0000_^\u0001\u0000\u0000\u0000`c\u0001\u0000\u0000\u0000"+
		"ab\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000bd\u0001\u0000\u0000"+
		"\u0000ca\u0001\u0000\u0000\u0000de\u0005\"\u0000\u0000e\u001a\u0001\u0000"+
		"\u0000\u0000fg\u0005=\u0000\u0000g\u001c\u0001\u0000\u0000\u0000hi\u0005"+
		";\u0000\u0000i\u001e\u0001\u0000\u0000\u0000jk\u0005+\u0000\u0000k \u0001"+
		"\u0000\u0000\u0000lm\u0005-\u0000\u0000m\"\u0001\u0000\u0000\u0000no\u0005"+
		"*\u0000\u0000o$\u0001\u0000\u0000\u0000pq\u0005/\u0000\u0000q&\u0001\u0000"+
		"\u0000\u0000rs\u0005\u00bf\u0000\u0000s(\u0001\u0000\u0000\u0000tu\u0005"+
		"?\u0000\u0000u*\u0001\u0000\u0000\u0000vx\u0007\u0002\u0000\u0000wv\u0001"+
		"\u0000\u0000\u0000xy\u0001\u0000\u0000\u0000yw\u0001\u0000\u0000\u0000"+
		"yz\u0001\u0000\u0000\u0000z{\u0001\u0000\u0000\u0000{|\u0006\u0015\u0000"+
		"\u0000|,\u0001\u0000\u0000\u0000\b\u0000<KPU[ay\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}