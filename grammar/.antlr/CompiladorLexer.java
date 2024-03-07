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
		PR=1, IMPRESION=2, INT=3, FLOAT=4, CHAR=5, MUL=6, DIV=7, ADD=8, SUB=9, 
		TPG=10, ABLOQUE=11, CBLOQUE=12, ASIGNACION=13, ALLAVE=14, CLLAVE=15, APARENTESIS=16, 
		CPARENTESIS=17, AADMIRACION=18, ID=19, NUM=20, CADENA=21, DEC=22, SEMI=23, 
		WS=24;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PR", "IMPRESION", "INT", "FLOAT", "CHAR", "MUL", "DIV", "ADD", "SUB", 
			"TPG", "ABLOQUE", "CBLOQUE", "ASIGNACION", "ALLAVE", "CLLAVE", "APARENTESIS", 
			"CPARENTESIS", "AADMIRACION", "ID", "NUM", "CADENA", "DEC", "SEMI", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'leak'", "'nc'", "'im'", "'jgl'", "'*'", "'/'", "'+'", "'-'", 
			"'_W7HLM_'", "'>_'", "'_<'", "'='", "'{'", "'}'", "'('", "')'", "'!'", 
			null, null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PR", "IMPRESION", "INT", "FLOAT", "CHAR", "MUL", "DIV", "ADD", 
			"SUB", "TPG", "ABLOQUE", "CBLOQUE", "ASIGNACION", "ALLAVE", "CLLAVE", 
			"APARENTESIS", "CPARENTESIS", "AADMIRACION", "ID", "NUM", "CADENA", "DEC", 
			"SEMI", "WS"
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
		"\u0004\u0000\u0018\u008a\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u00005\b\u0000\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001"+
		"\u000e\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001"+
		"\u0011\u0001\u0012\u0004\u0012i\b\u0012\u000b\u0012\f\u0012j\u0001\u0013"+
		"\u0004\u0013n\b\u0013\u000b\u0013\f\u0013o\u0001\u0014\u0004\u0014s\b"+
		"\u0014\u000b\u0014\f\u0014t\u0001\u0015\u0004\u0015x\b\u0015\u000b\u0015"+
		"\f\u0015y\u0001\u0015\u0001\u0015\u0004\u0015~\b\u0015\u000b\u0015\f\u0015"+
		"\u007f\u0001\u0016\u0001\u0016\u0001\u0017\u0004\u0017\u0085\b\u0017\u000b"+
		"\u0017\f\u0017\u0086\u0001\u0017\u0001\u0017\u0000\u0000\u0018\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f"+
		"\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/\u0018"+
		"\u0001\u0000\u0004\u0004\u000009AZ__az\u0001\u000009\u0002\u0000AZaz\u0003"+
		"\u0000\t\n\r\r  \u0091\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000"+
		"\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000"+
		"\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000"+
		"\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000\u0000\u0000"+
		")\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000-\u0001"+
		"\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000\u00014\u0001\u0000\u0000"+
		"\u0000\u00036\u0001\u0000\u0000\u0000\u0005;\u0001\u0000\u0000\u0000\u0007"+
		">\u0001\u0000\u0000\u0000\tA\u0001\u0000\u0000\u0000\u000bE\u0001\u0000"+
		"\u0000\u0000\rG\u0001\u0000\u0000\u0000\u000fI\u0001\u0000\u0000\u0000"+
		"\u0011K\u0001\u0000\u0000\u0000\u0013M\u0001\u0000\u0000\u0000\u0015U"+
		"\u0001\u0000\u0000\u0000\u0017X\u0001\u0000\u0000\u0000\u0019[\u0001\u0000"+
		"\u0000\u0000\u001b]\u0001\u0000\u0000\u0000\u001d_\u0001\u0000\u0000\u0000"+
		"\u001fa\u0001\u0000\u0000\u0000!c\u0001\u0000\u0000\u0000#e\u0001\u0000"+
		"\u0000\u0000%h\u0001\u0000\u0000\u0000\'m\u0001\u0000\u0000\u0000)r\u0001"+
		"\u0000\u0000\u0000+w\u0001\u0000\u0000\u0000-\u0081\u0001\u0000\u0000"+
		"\u0000/\u0084\u0001\u0000\u0000\u000015\u0003\u0005\u0002\u000025\u0003"+
		"\t\u0004\u000035\u0003\u0007\u0003\u000041\u0001\u0000\u0000\u000042\u0001"+
		"\u0000\u0000\u000043\u0001\u0000\u0000\u00005\u0002\u0001\u0000\u0000"+
		"\u000067\u0005l\u0000\u000078\u0005e\u0000\u000089\u0005a\u0000\u0000"+
		"9:\u0005k\u0000\u0000:\u0004\u0001\u0000\u0000\u0000;<\u0005n\u0000\u0000"+
		"<=\u0005c\u0000\u0000=\u0006\u0001\u0000\u0000\u0000>?\u0005i\u0000\u0000"+
		"?@\u0005m\u0000\u0000@\b\u0001\u0000\u0000\u0000AB\u0005j\u0000\u0000"+
		"BC\u0005g\u0000\u0000CD\u0005l\u0000\u0000D\n\u0001\u0000\u0000\u0000"+
		"EF\u0005*\u0000\u0000F\f\u0001\u0000\u0000\u0000GH\u0005/\u0000\u0000"+
		"H\u000e\u0001\u0000\u0000\u0000IJ\u0005+\u0000\u0000J\u0010\u0001\u0000"+
		"\u0000\u0000KL\u0005-\u0000\u0000L\u0012\u0001\u0000\u0000\u0000MN\u0005"+
		"_\u0000\u0000NO\u0005W\u0000\u0000OP\u00057\u0000\u0000PQ\u0005H\u0000"+
		"\u0000QR\u0005L\u0000\u0000RS\u0005M\u0000\u0000ST\u0005_\u0000\u0000"+
		"T\u0014\u0001\u0000\u0000\u0000UV\u0005>\u0000\u0000VW\u0005_\u0000\u0000"+
		"W\u0016\u0001\u0000\u0000\u0000XY\u0005_\u0000\u0000YZ\u0005<\u0000\u0000"+
		"Z\u0018\u0001\u0000\u0000\u0000[\\\u0005=\u0000\u0000\\\u001a\u0001\u0000"+
		"\u0000\u0000]^\u0005{\u0000\u0000^\u001c\u0001\u0000\u0000\u0000_`\u0005"+
		"}\u0000\u0000`\u001e\u0001\u0000\u0000\u0000ab\u0005(\u0000\u0000b \u0001"+
		"\u0000\u0000\u0000cd\u0005)\u0000\u0000d\"\u0001\u0000\u0000\u0000ef\u0005"+
		"!\u0000\u0000f$\u0001\u0000\u0000\u0000gi\u0007\u0000\u0000\u0000hg\u0001"+
		"\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000"+
		"jk\u0001\u0000\u0000\u0000k&\u0001\u0000\u0000\u0000ln\u0007\u0001\u0000"+
		"\u0000ml\u0001\u0000\u0000\u0000no\u0001\u0000\u0000\u0000om\u0001\u0000"+
		"\u0000\u0000op\u0001\u0000\u0000\u0000p(\u0001\u0000\u0000\u0000qs\u0007"+
		"\u0002\u0000\u0000rq\u0001\u0000\u0000\u0000st\u0001\u0000\u0000\u0000"+
		"tr\u0001\u0000\u0000\u0000tu\u0001\u0000\u0000\u0000u*\u0001\u0000\u0000"+
		"\u0000vx\u0007\u0001\u0000\u0000wv\u0001\u0000\u0000\u0000xy\u0001\u0000"+
		"\u0000\u0000yw\u0001\u0000\u0000\u0000yz\u0001\u0000\u0000\u0000z{\u0001"+
		"\u0000\u0000\u0000{}\u0005.\u0000\u0000|~\u0007\u0001\u0000\u0000}|\u0001"+
		"\u0000\u0000\u0000~\u007f\u0001\u0000\u0000\u0000\u007f}\u0001\u0000\u0000"+
		"\u0000\u007f\u0080\u0001\u0000\u0000\u0000\u0080,\u0001\u0000\u0000\u0000"+
		"\u0081\u0082\u0005;\u0000\u0000\u0082.\u0001\u0000\u0000\u0000\u0083\u0085"+
		"\u0007\u0003\u0000\u0000\u0084\u0083\u0001\u0000\u0000\u0000\u0085\u0086"+
		"\u0001\u0000\u0000\u0000\u0086\u0084\u0001\u0000\u0000\u0000\u0086\u0087"+
		"\u0001\u0000\u0000\u0000\u0087\u0088\u0001\u0000\u0000\u0000\u0088\u0089"+
		"\u0006\u0017\u0000\u0000\u00890\u0001\u0000\u0000\u0000\b\u00004joty\u007f"+
		"\u0086\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}