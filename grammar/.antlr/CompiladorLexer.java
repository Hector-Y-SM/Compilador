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
		ADD=9, SUB=10, ASIGNACION=11, TPG=12, ABLOQUE=13, CBLOQUE=14, ALLAVE=15, 
		CLLAVE=16, APARENTESIS=17, CPARENTESIS=18, AADMIRACION=19, ID=20, NUM=21, 
		CADENA=22, DEC=23, SEMI=24, WS=25;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"PR", "IMPRESION", "IF_BASICO", "INT", "FLOAT", "CHAR", "MUL", "DIV", 
			"ADD", "SUB", "ASIGNACION", "TPG", "ABLOQUE", "CBLOQUE", "ALLAVE", "CLLAVE", 
			"APARENTESIS", "CPARENTESIS", "AADMIRACION", "ID", "NUM", "CADENA", "DEC", 
			"SEMI", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, "'leak'", "'if'", "'nc'", "'im'", "'jgl'", "'*'", "'/'", 
			"'+'", "'-'", "'='", "'W7HLM'", "'>_'", "'_<'", "'{'", "'}'", "'('", 
			"')'", "'!'", null, null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "PR", "IMPRESION", "IF_BASICO", "INT", "FLOAT", "CHAR", "MUL", 
			"DIV", "ADD", "SUB", "ASIGNACION", "TPG", "ABLOQUE", "CBLOQUE", "ALLAVE", 
			"CLLAVE", "APARENTESIS", "CPARENTESIS", "AADMIRACION", "ID", "NUM", "CADENA", 
			"DEC", "SEMI", "WS"
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
		"\u0004\u0000\u0019\u0091\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017"+
		"\u0002\u0018\u0007\u0018\u0001\u0000\u0001\u0000\u0001\u0000\u0003\u0000"+
		"7\b\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001"+
		"\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001"+
		"\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001\u0013"+
		"\u0004\u0013l\b\u0013\u000b\u0013\f\u0013m\u0001\u0014\u0004\u0014q\b"+
		"\u0014\u000b\u0014\f\u0014r\u0001\u0015\u0001\u0015\u0005\u0015w\b\u0015"+
		"\n\u0015\f\u0015z\t\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0004\u0016"+
		"\u007f\b\u0016\u000b\u0016\f\u0016\u0080\u0001\u0016\u0001\u0016\u0004"+
		"\u0016\u0085\b\u0016\u000b\u0016\f\u0016\u0086\u0001\u0017\u0001\u0017"+
		"\u0001\u0018\u0004\u0018\u008c\b\u0018\u000b\u0018\f\u0018\u008d\u0001"+
		"\u0018\u0001\u0018\u0001x\u0000\u0019\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012"+
		"%\u0013\'\u0014)\u0015+\u0016-\u0017/\u00181\u0019\u0001\u0000\u0003\u0004"+
		"\u000009AZ__az\u0001\u000009\u0003\u0000\t\n\r\r  \u0098\u0000\u0001\u0001"+
		"\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001"+
		"\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000"+
		"\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000"+
		"\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000"+
		"\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000\u0000"+
		"\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000\u0000"+
		"\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000\'"+
		"\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001\u0000"+
		"\u0000\u0000\u0000-\u0001\u0000\u0000\u0000\u0000/\u0001\u0000\u0000\u0000"+
		"\u00001\u0001\u0000\u0000\u0000\u00016\u0001\u0000\u0000\u0000\u00038"+
		"\u0001\u0000\u0000\u0000\u0005=\u0001\u0000\u0000\u0000\u0007@\u0001\u0000"+
		"\u0000\u0000\tC\u0001\u0000\u0000\u0000\u000bF\u0001\u0000\u0000\u0000"+
		"\rJ\u0001\u0000\u0000\u0000\u000fL\u0001\u0000\u0000\u0000\u0011N\u0001"+
		"\u0000\u0000\u0000\u0013P\u0001\u0000\u0000\u0000\u0015R\u0001\u0000\u0000"+
		"\u0000\u0017T\u0001\u0000\u0000\u0000\u0019Z\u0001\u0000\u0000\u0000\u001b"+
		"]\u0001\u0000\u0000\u0000\u001d`\u0001\u0000\u0000\u0000\u001fb\u0001"+
		"\u0000\u0000\u0000!d\u0001\u0000\u0000\u0000#f\u0001\u0000\u0000\u0000"+
		"%h\u0001\u0000\u0000\u0000\'k\u0001\u0000\u0000\u0000)p\u0001\u0000\u0000"+
		"\u0000+t\u0001\u0000\u0000\u0000-~\u0001\u0000\u0000\u0000/\u0088\u0001"+
		"\u0000\u0000\u00001\u008b\u0001\u0000\u0000\u000037\u0003\u0007\u0003"+
		"\u000047\u0003\u000b\u0005\u000057\u0003\t\u0004\u000063\u0001\u0000\u0000"+
		"\u000064\u0001\u0000\u0000\u000065\u0001\u0000\u0000\u00007\u0002\u0001"+
		"\u0000\u0000\u000089\u0005l\u0000\u00009:\u0005e\u0000\u0000:;\u0005a"+
		"\u0000\u0000;<\u0005k\u0000\u0000<\u0004\u0001\u0000\u0000\u0000=>\u0005"+
		"i\u0000\u0000>?\u0005f\u0000\u0000?\u0006\u0001\u0000\u0000\u0000@A\u0005"+
		"n\u0000\u0000AB\u0005c\u0000\u0000B\b\u0001\u0000\u0000\u0000CD\u0005"+
		"i\u0000\u0000DE\u0005m\u0000\u0000E\n\u0001\u0000\u0000\u0000FG\u0005"+
		"j\u0000\u0000GH\u0005g\u0000\u0000HI\u0005l\u0000\u0000I\f\u0001\u0000"+
		"\u0000\u0000JK\u0005*\u0000\u0000K\u000e\u0001\u0000\u0000\u0000LM\u0005"+
		"/\u0000\u0000M\u0010\u0001\u0000\u0000\u0000NO\u0005+\u0000\u0000O\u0012"+
		"\u0001\u0000\u0000\u0000PQ\u0005-\u0000\u0000Q\u0014\u0001\u0000\u0000"+
		"\u0000RS\u0005=\u0000\u0000S\u0016\u0001\u0000\u0000\u0000TU\u0005W\u0000"+
		"\u0000UV\u00057\u0000\u0000VW\u0005H\u0000\u0000WX\u0005L\u0000\u0000"+
		"XY\u0005M\u0000\u0000Y\u0018\u0001\u0000\u0000\u0000Z[\u0005>\u0000\u0000"+
		"[\\\u0005_\u0000\u0000\\\u001a\u0001\u0000\u0000\u0000]^\u0005_\u0000"+
		"\u0000^_\u0005<\u0000\u0000_\u001c\u0001\u0000\u0000\u0000`a\u0005{\u0000"+
		"\u0000a\u001e\u0001\u0000\u0000\u0000bc\u0005}\u0000\u0000c \u0001\u0000"+
		"\u0000\u0000de\u0005(\u0000\u0000e\"\u0001\u0000\u0000\u0000fg\u0005)"+
		"\u0000\u0000g$\u0001\u0000\u0000\u0000hi\u0005!\u0000\u0000i&\u0001\u0000"+
		"\u0000\u0000jl\u0007\u0000\u0000\u0000kj\u0001\u0000\u0000\u0000lm\u0001"+
		"\u0000\u0000\u0000mk\u0001\u0000\u0000\u0000mn\u0001\u0000\u0000\u0000"+
		"n(\u0001\u0000\u0000\u0000oq\u0007\u0001\u0000\u0000po\u0001\u0000\u0000"+
		"\u0000qr\u0001\u0000\u0000\u0000rp\u0001\u0000\u0000\u0000rs\u0001\u0000"+
		"\u0000\u0000s*\u0001\u0000\u0000\u0000tx\u0005\"\u0000\u0000uw\t\u0000"+
		"\u0000\u0000vu\u0001\u0000\u0000\u0000wz\u0001\u0000\u0000\u0000xy\u0001"+
		"\u0000\u0000\u0000xv\u0001\u0000\u0000\u0000y{\u0001\u0000\u0000\u0000"+
		"zx\u0001\u0000\u0000\u0000{|\u0005\"\u0000\u0000|,\u0001\u0000\u0000\u0000"+
		"}\u007f\u0007\u0001\u0000\u0000~}\u0001\u0000\u0000\u0000\u007f\u0080"+
		"\u0001\u0000\u0000\u0000\u0080~\u0001\u0000\u0000\u0000\u0080\u0081\u0001"+
		"\u0000\u0000\u0000\u0081\u0082\u0001\u0000\u0000\u0000\u0082\u0084\u0005"+
		".\u0000\u0000\u0083\u0085\u0007\u0001\u0000\u0000\u0084\u0083\u0001\u0000"+
		"\u0000\u0000\u0085\u0086\u0001\u0000\u0000\u0000\u0086\u0084\u0001\u0000"+
		"\u0000\u0000\u0086\u0087\u0001\u0000\u0000\u0000\u0087.\u0001\u0000\u0000"+
		"\u0000\u0088\u0089\u0005;\u0000\u0000\u00890\u0001\u0000\u0000\u0000\u008a"+
		"\u008c\u0007\u0002\u0000\u0000\u008b\u008a\u0001\u0000\u0000\u0000\u008c"+
		"\u008d\u0001\u0000\u0000\u0000\u008d\u008b\u0001\u0000\u0000\u0000\u008d"+
		"\u008e\u0001\u0000\u0000\u0000\u008e\u008f\u0001\u0000\u0000\u0000\u008f"+
		"\u0090\u0006\u0018\u0000\u0000\u00902\u0001\u0000\u0000\u0000\b\u0000"+
		"6mrx\u0080\u0086\u008d\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}