// Generated from /home/hector/6to/automatas_2/Compilador/grammar/CommonLexerRules.g4 by ANTLR 4.13.1
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
		IMPRESION=1, INT=2, FLOAT=3, CHAR=4, MUL=5, DIV=6, ADD=7, SUB=8, ASIGNACION=9, 
		TPG=10, ABLOQUE=11, CBLOQUE=12, ALLAVE=13, CLLAVE=14, APARENTESIS=15, 
		CPARENTESIS=16, AADMIRACION=17, ID=18, NUM=19, CADENA=20, DEC=21, SEMI=22, 
		WS=23;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"IMPRESION", "INT", "FLOAT", "CHAR", "MUL", "DIV", "ADD", "SUB", "ASIGNACION", 
			"TPG", "ABLOQUE", "CBLOQUE", "ALLAVE", "CLLAVE", "APARENTESIS", "CPARENTESIS", 
			"AADMIRACION", "ID", "NUM", "CADENA", "DEC", "SEMI", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'leak'", "'nc'", "'im'", "'jgl'", "'*'", "'/'", "'+'", "'-'", 
			"'='", "'W7HLM'", "'>_'", "'_<'", "'{'", "'}'", "'('", "')'", "'!'", 
			null, null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "IMPRESION", "INT", "FLOAT", "CHAR", "MUL", "DIV", "ADD", "SUB", 
			"ASIGNACION", "TPG", "ABLOQUE", "CBLOQUE", "ALLAVE", "CLLAVE", "APARENTESIS", 
			"CPARENTESIS", "AADMIRACION", "ID", "NUM", "CADENA", "DEC", "SEMI", "WS"
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
		"\u0004\u0000\u0017\u0081\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0006"+
		"\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001"+
		"\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0004\u0011`\b"+
		"\u0011\u000b\u0011\f\u0011a\u0001\u0012\u0004\u0012e\b\u0012\u000b\u0012"+
		"\f\u0012f\u0001\u0013\u0004\u0013j\b\u0013\u000b\u0013\f\u0013k\u0001"+
		"\u0014\u0004\u0014o\b\u0014\u000b\u0014\f\u0014p\u0001\u0014\u0001\u0014"+
		"\u0004\u0014u\b\u0014\u000b\u0014\f\u0014v\u0001\u0015\u0001\u0015\u0001"+
		"\u0016\u0004\u0016|\b\u0016\u000b\u0016\f\u0016}\u0001\u0016\u0001\u0016"+
		"\u0000\u0000\u0017\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005"+
		"\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019"+
		"\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015"+
		"+\u0016-\u0017\u0001\u0000\u0004\u0004\u000009AZ__az\u0001\u000009\u0002"+
		"\u0000AZaz\u0003\u0000\t\n\r\r  \u0086\u0000\u0001\u0001\u0000\u0000\u0000"+
		"\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000"+
		"\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000"+
		"\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f"+
		"\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013"+
		"\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017"+
		"\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b"+
		"\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f"+
		"\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000"+
		"\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000"+
		"\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000\u0000\u0000\u0000"+
		"-\u0001\u0000\u0000\u0000\u0001/\u0001\u0000\u0000\u0000\u00034\u0001"+
		"\u0000\u0000\u0000\u00057\u0001\u0000\u0000\u0000\u0007:\u0001\u0000\u0000"+
		"\u0000\t>\u0001\u0000\u0000\u0000\u000b@\u0001\u0000\u0000\u0000\rB\u0001"+
		"\u0000\u0000\u0000\u000fD\u0001\u0000\u0000\u0000\u0011F\u0001\u0000\u0000"+
		"\u0000\u0013H\u0001\u0000\u0000\u0000\u0015N\u0001\u0000\u0000\u0000\u0017"+
		"Q\u0001\u0000\u0000\u0000\u0019T\u0001\u0000\u0000\u0000\u001bV\u0001"+
		"\u0000\u0000\u0000\u001dX\u0001\u0000\u0000\u0000\u001fZ\u0001\u0000\u0000"+
		"\u0000!\\\u0001\u0000\u0000\u0000#_\u0001\u0000\u0000\u0000%d\u0001\u0000"+
		"\u0000\u0000\'i\u0001\u0000\u0000\u0000)n\u0001\u0000\u0000\u0000+x\u0001"+
		"\u0000\u0000\u0000-{\u0001\u0000\u0000\u0000/0\u0005l\u0000\u000001\u0005"+
		"e\u0000\u000012\u0005a\u0000\u000023\u0005k\u0000\u00003\u0002\u0001\u0000"+
		"\u0000\u000045\u0005n\u0000\u000056\u0005c\u0000\u00006\u0004\u0001\u0000"+
		"\u0000\u000078\u0005i\u0000\u000089\u0005m\u0000\u00009\u0006\u0001\u0000"+
		"\u0000\u0000:;\u0005j\u0000\u0000;<\u0005g\u0000\u0000<=\u0005l\u0000"+
		"\u0000=\b\u0001\u0000\u0000\u0000>?\u0005*\u0000\u0000?\n\u0001\u0000"+
		"\u0000\u0000@A\u0005/\u0000\u0000A\f\u0001\u0000\u0000\u0000BC\u0005+"+
		"\u0000\u0000C\u000e\u0001\u0000\u0000\u0000DE\u0005-\u0000\u0000E\u0010"+
		"\u0001\u0000\u0000\u0000FG\u0005=\u0000\u0000G\u0012\u0001\u0000\u0000"+
		"\u0000HI\u0005W\u0000\u0000IJ\u00057\u0000\u0000JK\u0005H\u0000\u0000"+
		"KL\u0005L\u0000\u0000LM\u0005M\u0000\u0000M\u0014\u0001\u0000\u0000\u0000"+
		"NO\u0005>\u0000\u0000OP\u0005_\u0000\u0000P\u0016\u0001\u0000\u0000\u0000"+
		"QR\u0005_\u0000\u0000RS\u0005<\u0000\u0000S\u0018\u0001\u0000\u0000\u0000"+
		"TU\u0005{\u0000\u0000U\u001a\u0001\u0000\u0000\u0000VW\u0005}\u0000\u0000"+
		"W\u001c\u0001\u0000\u0000\u0000XY\u0005(\u0000\u0000Y\u001e\u0001\u0000"+
		"\u0000\u0000Z[\u0005)\u0000\u0000[ \u0001\u0000\u0000\u0000\\]\u0005!"+
		"\u0000\u0000]\"\u0001\u0000\u0000\u0000^`\u0007\u0000\u0000\u0000_^\u0001"+
		"\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000a_\u0001\u0000\u0000\u0000"+
		"ab\u0001\u0000\u0000\u0000b$\u0001\u0000\u0000\u0000ce\u0007\u0001\u0000"+
		"\u0000dc\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000fd\u0001\u0000"+
		"\u0000\u0000fg\u0001\u0000\u0000\u0000g&\u0001\u0000\u0000\u0000hj\u0007"+
		"\u0002\u0000\u0000ih\u0001\u0000\u0000\u0000jk\u0001\u0000\u0000\u0000"+
		"ki\u0001\u0000\u0000\u0000kl\u0001\u0000\u0000\u0000l(\u0001\u0000\u0000"+
		"\u0000mo\u0007\u0001\u0000\u0000nm\u0001\u0000\u0000\u0000op\u0001\u0000"+
		"\u0000\u0000pn\u0001\u0000\u0000\u0000pq\u0001\u0000\u0000\u0000qr\u0001"+
		"\u0000\u0000\u0000rt\u0005.\u0000\u0000su\u0007\u0001\u0000\u0000ts\u0001"+
		"\u0000\u0000\u0000uv\u0001\u0000\u0000\u0000vt\u0001\u0000\u0000\u0000"+
		"vw\u0001\u0000\u0000\u0000w*\u0001\u0000\u0000\u0000xy\u0005;\u0000\u0000"+
		"y,\u0001\u0000\u0000\u0000z|\u0007\u0003\u0000\u0000{z\u0001\u0000\u0000"+
		"\u0000|}\u0001\u0000\u0000\u0000}{\u0001\u0000\u0000\u0000}~\u0001\u0000"+
		"\u0000\u0000~\u007f\u0001\u0000\u0000\u0000\u007f\u0080\u0006\u0016\u0000"+
		"\u0000\u0080.\u0001\u0000\u0000\u0000\u0007\u0000afkpv}\u0001\u0006\u0000"+
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