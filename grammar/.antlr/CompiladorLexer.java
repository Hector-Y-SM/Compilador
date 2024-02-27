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
		T__0=1, T__1=2, PR=3, INT=4, FLOAT=5, CHAR=6, MUL=7, DIV=8, ADD=9, SUB=10, 
		TPG=11, ASIGNACION=12, ALLAVE=13, CLLAVE=14, AADMIRACION=15, ID=16, NUM=17, 
		CADENA=18, DEC=19, SEMI=20, WS=21;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "PR", "INT", "FLOAT", "CHAR", "MUL", "DIV", "ADD", "SUB", 
			"TPG", "ASIGNACION", "ALLAVE", "CLLAVE", "AADMIRACION", "ID", "NUM", 
			"CADENA", "DEC", "SEMI", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", null, "'nc'", "'im'", "'jgl'", "'*'", "'/'", "'+'", 
			"'-'", "'TPG'", "'='", "'{'", "'}'", "'!'", null, null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, "PR", "INT", "FLOAT", "CHAR", "MUL", "DIV", "ADD", 
			"SUB", "TPG", "ASIGNACION", "ALLAVE", "CLLAVE", "AADMIRACION", "ID", 
			"NUM", "CADENA", "DEC", "SEMI", "WS"
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
		"\u0004\u0000\u0015u\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002"+
		"\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002"+
		"\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0001"+
		"\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0003\u00023\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0004"+
		"\u000fT\b\u000f\u000b\u000f\f\u000fU\u0001\u0010\u0004\u0010Y\b\u0010"+
		"\u000b\u0010\f\u0010Z\u0001\u0011\u0004\u0011^\b\u0011\u000b\u0011\f\u0011"+
		"_\u0001\u0012\u0004\u0012c\b\u0012\u000b\u0012\f\u0012d\u0001\u0012\u0001"+
		"\u0012\u0004\u0012i\b\u0012\u000b\u0012\f\u0012j\u0001\u0013\u0001\u0013"+
		"\u0001\u0014\u0004\u0014p\b\u0014\u000b\u0014\f\u0014q\u0001\u0014\u0001"+
		"\u0014\u0000\u0000\u0015\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017"+
		"\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'"+
		"\u0014)\u0015\u0001\u0000\u0003\u0002\u0000AZaz\u0001\u000009\u0003\u0000"+
		"\t\n\r\r  |\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000"+
		"\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%"+
		"\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000)\u0001"+
		"\u0000\u0000\u0000\u0001+\u0001\u0000\u0000\u0000\u0003-\u0001\u0000\u0000"+
		"\u0000\u00052\u0001\u0000\u0000\u0000\u00074\u0001\u0000\u0000\u0000\t"+
		"7\u0001\u0000\u0000\u0000\u000b:\u0001\u0000\u0000\u0000\r>\u0001\u0000"+
		"\u0000\u0000\u000f@\u0001\u0000\u0000\u0000\u0011B\u0001\u0000\u0000\u0000"+
		"\u0013D\u0001\u0000\u0000\u0000\u0015F\u0001\u0000\u0000\u0000\u0017J"+
		"\u0001\u0000\u0000\u0000\u0019L\u0001\u0000\u0000\u0000\u001bN\u0001\u0000"+
		"\u0000\u0000\u001dP\u0001\u0000\u0000\u0000\u001fS\u0001\u0000\u0000\u0000"+
		"!X\u0001\u0000\u0000\u0000#]\u0001\u0000\u0000\u0000%b\u0001\u0000\u0000"+
		"\u0000\'l\u0001\u0000\u0000\u0000)o\u0001\u0000\u0000\u0000+,\u0005(\u0000"+
		"\u0000,\u0002\u0001\u0000\u0000\u0000-.\u0005)\u0000\u0000.\u0004\u0001"+
		"\u0000\u0000\u0000/3\u0003\u0007\u0003\u000003\u0003\u000b\u0005\u0000"+
		"13\u0003\t\u0004\u00002/\u0001\u0000\u0000\u000020\u0001\u0000\u0000\u0000"+
		"21\u0001\u0000\u0000\u00003\u0006\u0001\u0000\u0000\u000045\u0005n\u0000"+
		"\u000056\u0005c\u0000\u00006\b\u0001\u0000\u0000\u000078\u0005i\u0000"+
		"\u000089\u0005m\u0000\u00009\n\u0001\u0000\u0000\u0000:;\u0005j\u0000"+
		"\u0000;<\u0005g\u0000\u0000<=\u0005l\u0000\u0000=\f\u0001\u0000\u0000"+
		"\u0000>?\u0005*\u0000\u0000?\u000e\u0001\u0000\u0000\u0000@A\u0005/\u0000"+
		"\u0000A\u0010\u0001\u0000\u0000\u0000BC\u0005+\u0000\u0000C\u0012\u0001"+
		"\u0000\u0000\u0000DE\u0005-\u0000\u0000E\u0014\u0001\u0000\u0000\u0000"+
		"FG\u0005T\u0000\u0000GH\u0005P\u0000\u0000HI\u0005G\u0000\u0000I\u0016"+
		"\u0001\u0000\u0000\u0000JK\u0005=\u0000\u0000K\u0018\u0001\u0000\u0000"+
		"\u0000LM\u0005{\u0000\u0000M\u001a\u0001\u0000\u0000\u0000NO\u0005}\u0000"+
		"\u0000O\u001c\u0001\u0000\u0000\u0000PQ\u0005!\u0000\u0000Q\u001e\u0001"+
		"\u0000\u0000\u0000RT\u0007\u0000\u0000\u0000SR\u0001\u0000\u0000\u0000"+
		"TU\u0001\u0000\u0000\u0000US\u0001\u0000\u0000\u0000UV\u0001\u0000\u0000"+
		"\u0000V \u0001\u0000\u0000\u0000WY\u0007\u0001\u0000\u0000XW\u0001\u0000"+
		"\u0000\u0000YZ\u0001\u0000\u0000\u0000ZX\u0001\u0000\u0000\u0000Z[\u0001"+
		"\u0000\u0000\u0000[\"\u0001\u0000\u0000\u0000\\^\u0007\u0000\u0000\u0000"+
		"]\\\u0001\u0000\u0000\u0000^_\u0001\u0000\u0000\u0000_]\u0001\u0000\u0000"+
		"\u0000_`\u0001\u0000\u0000\u0000`$\u0001\u0000\u0000\u0000ac\u0007\u0001"+
		"\u0000\u0000ba\u0001\u0000\u0000\u0000cd\u0001\u0000\u0000\u0000db\u0001"+
		"\u0000\u0000\u0000de\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000"+
		"fh\u0005.\u0000\u0000gi\u0007\u0001\u0000\u0000hg\u0001\u0000\u0000\u0000"+
		"ij\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000"+
		"\u0000k&\u0001\u0000\u0000\u0000lm\u0005;\u0000\u0000m(\u0001\u0000\u0000"+
		"\u0000np\u0007\u0002\u0000\u0000on\u0001\u0000\u0000\u0000pq\u0001\u0000"+
		"\u0000\u0000qo\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000rs\u0001"+
		"\u0000\u0000\u0000st\u0006\u0014\u0000\u0000t*\u0001\u0000\u0000\u0000"+
		"\b\u00002UZ_djq\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}