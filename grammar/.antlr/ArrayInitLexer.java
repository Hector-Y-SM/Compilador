// Generated from /home/hertorprime/6to/automatas_2/antlr4/comp/ANTLR4_base/grammar/ArrayInit.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class ArrayInitLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, PR=5, INT=6, FLOAT=7, CHAR=8, ID=9, NUM=10, 
		DEC=11, WS=12;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "PR", "INT", "FLOAT", "CHAR", "ID", "NUM", 
			"DEC", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'TPG'", "'{'", "'}'", "'='", null, "'int'", "'float'", "'char'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, "PR", "INT", "FLOAT", "CHAR", "ID", "NUM", 
			"DEC", "WS"
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


	public ArrayInitLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ArrayInit.g4"; }

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
		"\u0004\u0000\fS\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0003\u0004\'\b\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0004\b9\b\b\u000b\b\f\b:\u0001\t\u0004\t>\b\t\u000b"+
		"\t\f\t?\u0001\n\u0004\nC\b\n\u000b\n\f\nD\u0001\n\u0001\n\u0004\nI\b\n"+
		"\u000b\n\f\nJ\u0001\u000b\u0004\u000bN\b\u000b\u000b\u000b\f\u000bO\u0001"+
		"\u000b\u0001\u000b\u0000\u0000\f\u0001\u0001\u0003\u0002\u0005\u0003\u0007"+
		"\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b"+
		"\u0017\f\u0001\u0000\u0003\u0002\u0000AZaz\u0001\u000009\u0002\u0000\t"+
		"\t  Y\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000"+
		"\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000"+
		"\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000"+
		"\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000"+
		"\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000"+
		"\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0001"+
		"\u0019\u0001\u0000\u0000\u0000\u0003\u001d\u0001\u0000\u0000\u0000\u0005"+
		"\u001f\u0001\u0000\u0000\u0000\u0007!\u0001\u0000\u0000\u0000\t&\u0001"+
		"\u0000\u0000\u0000\u000b(\u0001\u0000\u0000\u0000\r,\u0001\u0000\u0000"+
		"\u0000\u000f2\u0001\u0000\u0000\u0000\u00118\u0001\u0000\u0000\u0000\u0013"+
		"=\u0001\u0000\u0000\u0000\u0015B\u0001\u0000\u0000\u0000\u0017M\u0001"+
		"\u0000\u0000\u0000\u0019\u001a\u0005T\u0000\u0000\u001a\u001b\u0005P\u0000"+
		"\u0000\u001b\u001c\u0005G\u0000\u0000\u001c\u0002\u0001\u0000\u0000\u0000"+
		"\u001d\u001e\u0005{\u0000\u0000\u001e\u0004\u0001\u0000\u0000\u0000\u001f"+
		" \u0005}\u0000\u0000 \u0006\u0001\u0000\u0000\u0000!\"\u0005=\u0000\u0000"+
		"\"\b\u0001\u0000\u0000\u0000#\'\u0003\u000b\u0005\u0000$\'\u0003\r\u0006"+
		"\u0000%\'\u0003\u000f\u0007\u0000&#\u0001\u0000\u0000\u0000&$\u0001\u0000"+
		"\u0000\u0000&%\u0001\u0000\u0000\u0000\'\n\u0001\u0000\u0000\u0000()\u0005"+
		"i\u0000\u0000)*\u0005n\u0000\u0000*+\u0005t\u0000\u0000+\f\u0001\u0000"+
		"\u0000\u0000,-\u0005f\u0000\u0000-.\u0005l\u0000\u0000./\u0005o\u0000"+
		"\u0000/0\u0005a\u0000\u000001\u0005t\u0000\u00001\u000e\u0001\u0000\u0000"+
		"\u000023\u0005c\u0000\u000034\u0005h\u0000\u000045\u0005a\u0000\u0000"+
		"56\u0005r\u0000\u00006\u0010\u0001\u0000\u0000\u000079\u0007\u0000\u0000"+
		"\u000087\u0001\u0000\u0000\u00009:\u0001\u0000\u0000\u0000:8\u0001\u0000"+
		"\u0000\u0000:;\u0001\u0000\u0000\u0000;\u0012\u0001\u0000\u0000\u0000"+
		"<>\u0007\u0001\u0000\u0000=<\u0001\u0000\u0000\u0000>?\u0001\u0000\u0000"+
		"\u0000?=\u0001\u0000\u0000\u0000?@\u0001\u0000\u0000\u0000@\u0014\u0001"+
		"\u0000\u0000\u0000AC\u0007\u0001\u0000\u0000BA\u0001\u0000\u0000\u0000"+
		"CD\u0001\u0000\u0000\u0000DB\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000"+
		"\u0000EF\u0001\u0000\u0000\u0000FH\t\u0000\u0000\u0000GI\u0007\u0001\u0000"+
		"\u0000HG\u0001\u0000\u0000\u0000IJ\u0001\u0000\u0000\u0000JH\u0001\u0000"+
		"\u0000\u0000JK\u0001\u0000\u0000\u0000K\u0016\u0001\u0000\u0000\u0000"+
		"LN\u0007\u0002\u0000\u0000ML\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000"+
		"\u0000OM\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000PQ\u0001\u0000"+
		"\u0000\u0000QR\u0006\u000b\u0000\u0000R\u0018\u0001\u0000\u0000\u0000"+
		"\u0007\u0000&:?DJO\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}