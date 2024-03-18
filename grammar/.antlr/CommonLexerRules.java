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
		IMPRESION=1, IF_BASICO=2, ELSE=3, INT=4, FLOAT=5, CHAR=6, MUL=7, DIV=8, 
		ADD=9, SUB=10, ASIGNACION=11, MAYORQ=12, MENORQ=13, MAYOR_IGUAL=14, MENOR_IGUAL=15, 
		IGUALDAD_DEBIL=16, IGUALDAD_FUERTE=17, DIF_DEBIL=18, DIF_FUERTE=19, OR=20, 
		AND=21, TPG=22, ALLAVE=23, CLLAVE=24, APARENTESIS=25, CPARENTESIS=26, 
		AADMIRACION=27, ID=28, NUM=29, CADENA=30, DEC=31, SEMI=32, WS=33;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"IMPRESION", "IF_BASICO", "ELSE", "INT", "FLOAT", "CHAR", "MUL", "DIV", 
			"ADD", "SUB", "ASIGNACION", "MAYORQ", "MENORQ", "MAYOR_IGUAL", "MENOR_IGUAL", 
			"IGUALDAD_DEBIL", "IGUALDAD_FUERTE", "DIF_DEBIL", "DIF_FUERTE", "OR", 
			"AND", "TPG", "ALLAVE", "CLLAVE", "APARENTESIS", "CPARENTESIS", "AADMIRACION", 
			"ID", "NUM", "CADENA", "DEC", "SEMI", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'leak'", "'if'", "'else'", "'nc'", "'im'", "'jgl'", "'*'", "'/'", 
			"'+'", "'-'", "'='", "'>'", "'<'", "'>='", "'<='", "'=='", "'==='", "'!='", 
			"'!=='", "'||'", "'&&'", "'W7HLM'", "'{'", "'}'", "'('", "')'", "'!'", 
			null, null, null, null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "IMPRESION", "IF_BASICO", "ELSE", "INT", "FLOAT", "CHAR", "MUL", 
			"DIV", "ADD", "SUB", "ASIGNACION", "MAYORQ", "MENORQ", "MAYOR_IGUAL", 
			"MENOR_IGUAL", "IGUALDAD_DEBIL", "IGUALDAD_FUERTE", "DIF_DEBIL", "DIF_FUERTE", 
			"OR", "AND", "TPG", "ALLAVE", "CLLAVE", "APARENTESIS", "CPARENTESIS", 
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
		"\u0004\u0000!\u00b9\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
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
		"\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001"+
		"\u0007\u0001\u0007\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001"+
		"\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\u000e"+
		"\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u0010"+
		"\u0001\u0010\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0011"+
		"\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0001\u0013"+
		"\u0001\u0013\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015"+
		"\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0015\u0001\u0016\u0001\u0016"+
		"\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0019\u0001\u0019"+
		"\u0001\u001a\u0001\u001a\u0001\u001b\u0004\u001b\u0094\b\u001b\u000b\u001b"+
		"\f\u001b\u0095\u0001\u001c\u0004\u001c\u0099\b\u001c\u000b\u001c\f\u001c"+
		"\u009a\u0001\u001d\u0001\u001d\u0005\u001d\u009f\b\u001d\n\u001d\f\u001d"+
		"\u00a2\t\u001d\u0001\u001d\u0001\u001d\u0001\u001e\u0004\u001e\u00a7\b"+
		"\u001e\u000b\u001e\f\u001e\u00a8\u0001\u001e\u0001\u001e\u0004\u001e\u00ad"+
		"\b\u001e\u000b\u001e\f\u001e\u00ae\u0001\u001f\u0001\u001f\u0001 \u0004"+
		" \u00b4\b \u000b \f \u00b5\u0001 \u0001 \u0001\u00a0\u0000!\u0001\u0001"+
		"\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f"+
		"\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f"+
		"\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015+\u0016-\u0017/\u0018"+
		"1\u00193\u001a5\u001b7\u001c9\u001d;\u001e=\u001f? A!\u0001\u0000\u0003"+
		"\u0004\u000009AZ__az\u0001\u000009\u0003\u0000\t\n\r\r  \u00be\u0000\u0001"+
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
		"C\u0001\u0000\u0000\u0000\u0003H\u0001\u0000\u0000\u0000\u0005K\u0001"+
		"\u0000\u0000\u0000\u0007P\u0001\u0000\u0000\u0000\tS\u0001\u0000\u0000"+
		"\u0000\u000bV\u0001\u0000\u0000\u0000\rZ\u0001\u0000\u0000\u0000\u000f"+
		"\\\u0001\u0000\u0000\u0000\u0011^\u0001\u0000\u0000\u0000\u0013`\u0001"+
		"\u0000\u0000\u0000\u0015b\u0001\u0000\u0000\u0000\u0017d\u0001\u0000\u0000"+
		"\u0000\u0019f\u0001\u0000\u0000\u0000\u001bh\u0001\u0000\u0000\u0000\u001d"+
		"k\u0001\u0000\u0000\u0000\u001fn\u0001\u0000\u0000\u0000!q\u0001\u0000"+
		"\u0000\u0000#u\u0001\u0000\u0000\u0000%x\u0001\u0000\u0000\u0000\'|\u0001"+
		"\u0000\u0000\u0000)\u007f\u0001\u0000\u0000\u0000+\u0082\u0001\u0000\u0000"+
		"\u0000-\u0088\u0001\u0000\u0000\u0000/\u008a\u0001\u0000\u0000\u00001"+
		"\u008c\u0001\u0000\u0000\u00003\u008e\u0001\u0000\u0000\u00005\u0090\u0001"+
		"\u0000\u0000\u00007\u0093\u0001\u0000\u0000\u00009\u0098\u0001\u0000\u0000"+
		"\u0000;\u009c\u0001\u0000\u0000\u0000=\u00a6\u0001\u0000\u0000\u0000?"+
		"\u00b0\u0001\u0000\u0000\u0000A\u00b3\u0001\u0000\u0000\u0000CD\u0005"+
		"l\u0000\u0000DE\u0005e\u0000\u0000EF\u0005a\u0000\u0000FG\u0005k\u0000"+
		"\u0000G\u0002\u0001\u0000\u0000\u0000HI\u0005i\u0000\u0000IJ\u0005f\u0000"+
		"\u0000J\u0004\u0001\u0000\u0000\u0000KL\u0005e\u0000\u0000LM\u0005l\u0000"+
		"\u0000MN\u0005s\u0000\u0000NO\u0005e\u0000\u0000O\u0006\u0001\u0000\u0000"+
		"\u0000PQ\u0005n\u0000\u0000QR\u0005c\u0000\u0000R\b\u0001\u0000\u0000"+
		"\u0000ST\u0005i\u0000\u0000TU\u0005m\u0000\u0000U\n\u0001\u0000\u0000"+
		"\u0000VW\u0005j\u0000\u0000WX\u0005g\u0000\u0000XY\u0005l\u0000\u0000"+
		"Y\f\u0001\u0000\u0000\u0000Z[\u0005*\u0000\u0000[\u000e\u0001\u0000\u0000"+
		"\u0000\\]\u0005/\u0000\u0000]\u0010\u0001\u0000\u0000\u0000^_\u0005+\u0000"+
		"\u0000_\u0012\u0001\u0000\u0000\u0000`a\u0005-\u0000\u0000a\u0014\u0001"+
		"\u0000\u0000\u0000bc\u0005=\u0000\u0000c\u0016\u0001\u0000\u0000\u0000"+
		"de\u0005>\u0000\u0000e\u0018\u0001\u0000\u0000\u0000fg\u0005<\u0000\u0000"+
		"g\u001a\u0001\u0000\u0000\u0000hi\u0005>\u0000\u0000ij\u0005=\u0000\u0000"+
		"j\u001c\u0001\u0000\u0000\u0000kl\u0005<\u0000\u0000lm\u0005=\u0000\u0000"+
		"m\u001e\u0001\u0000\u0000\u0000no\u0005=\u0000\u0000op\u0005=\u0000\u0000"+
		"p \u0001\u0000\u0000\u0000qr\u0005=\u0000\u0000rs\u0005=\u0000\u0000s"+
		"t\u0005=\u0000\u0000t\"\u0001\u0000\u0000\u0000uv\u0005!\u0000\u0000v"+
		"w\u0005=\u0000\u0000w$\u0001\u0000\u0000\u0000xy\u0005!\u0000\u0000yz"+
		"\u0005=\u0000\u0000z{\u0005=\u0000\u0000{&\u0001\u0000\u0000\u0000|}\u0005"+
		"|\u0000\u0000}~\u0005|\u0000\u0000~(\u0001\u0000\u0000\u0000\u007f\u0080"+
		"\u0005&\u0000\u0000\u0080\u0081\u0005&\u0000\u0000\u0081*\u0001\u0000"+
		"\u0000\u0000\u0082\u0083\u0005W\u0000\u0000\u0083\u0084\u00057\u0000\u0000"+
		"\u0084\u0085\u0005H\u0000\u0000\u0085\u0086\u0005L\u0000\u0000\u0086\u0087"+
		"\u0005M\u0000\u0000\u0087,\u0001\u0000\u0000\u0000\u0088\u0089\u0005{"+
		"\u0000\u0000\u0089.\u0001\u0000\u0000\u0000\u008a\u008b\u0005}\u0000\u0000"+
		"\u008b0\u0001\u0000\u0000\u0000\u008c\u008d\u0005(\u0000\u0000\u008d2"+
		"\u0001\u0000\u0000\u0000\u008e\u008f\u0005)\u0000\u0000\u008f4\u0001\u0000"+
		"\u0000\u0000\u0090\u0091\u0005!\u0000\u0000\u00916\u0001\u0000\u0000\u0000"+
		"\u0092\u0094\u0007\u0000\u0000\u0000\u0093\u0092\u0001\u0000\u0000\u0000"+
		"\u0094\u0095\u0001\u0000\u0000\u0000\u0095\u0093\u0001\u0000\u0000\u0000"+
		"\u0095\u0096\u0001\u0000\u0000\u0000\u00968\u0001\u0000\u0000\u0000\u0097"+
		"\u0099\u0007\u0001\u0000\u0000\u0098\u0097\u0001\u0000\u0000\u0000\u0099"+
		"\u009a\u0001\u0000\u0000\u0000\u009a\u0098\u0001\u0000\u0000\u0000\u009a"+
		"\u009b\u0001\u0000\u0000\u0000\u009b:\u0001\u0000\u0000\u0000\u009c\u00a0"+
		"\u0005\"\u0000\u0000\u009d\u009f\t\u0000\u0000\u0000\u009e\u009d\u0001"+
		"\u0000\u0000\u0000\u009f\u00a2\u0001\u0000\u0000\u0000\u00a0\u00a1\u0001"+
		"\u0000\u0000\u0000\u00a0\u009e\u0001\u0000\u0000\u0000\u00a1\u00a3\u0001"+
		"\u0000\u0000\u0000\u00a2\u00a0\u0001\u0000\u0000\u0000\u00a3\u00a4\u0005"+
		"\"\u0000\u0000\u00a4<\u0001\u0000\u0000\u0000\u00a5\u00a7\u0007\u0001"+
		"\u0000\u0000\u00a6\u00a5\u0001\u0000\u0000\u0000\u00a7\u00a8\u0001\u0000"+
		"\u0000\u0000\u00a8\u00a6\u0001\u0000\u0000\u0000\u00a8\u00a9\u0001\u0000"+
		"\u0000\u0000\u00a9\u00aa\u0001\u0000\u0000\u0000\u00aa\u00ac\u0005.\u0000"+
		"\u0000\u00ab\u00ad\u0007\u0001\u0000\u0000\u00ac\u00ab\u0001\u0000\u0000"+
		"\u0000\u00ad\u00ae\u0001\u0000\u0000\u0000\u00ae\u00ac\u0001\u0000\u0000"+
		"\u0000\u00ae\u00af\u0001\u0000\u0000\u0000\u00af>\u0001\u0000\u0000\u0000"+
		"\u00b0\u00b1\u0005;\u0000\u0000\u00b1@\u0001\u0000\u0000\u0000\u00b2\u00b4"+
		"\u0007\u0002\u0000\u0000\u00b3\u00b2\u0001\u0000\u0000\u0000\u00b4\u00b5"+
		"\u0001\u0000\u0000\u0000\u00b5\u00b3\u0001\u0000\u0000\u0000\u00b5\u00b6"+
		"\u0001\u0000\u0000\u0000\u00b6\u00b7\u0001\u0000\u0000\u0000\u00b7\u00b8"+
		"\u0006 \u0000\u0000\u00b8B\u0001\u0000\u0000\u0000\u0007\u0000\u0095\u009a"+
		"\u00a0\u00a8\u00ae\u00b5\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}