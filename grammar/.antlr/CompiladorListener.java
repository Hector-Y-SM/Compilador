// Generated from /home/hector/6to/automatas_2/Compilador/grammar/Compilador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CompiladorParser}.
 */
public interface CompiladorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CompiladorParser#init}.
	 * @param ctx the parse tree
	 */
	void enterInit(CompiladorParser.InitContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompiladorParser#init}.
	 * @param ctx the parse tree
	 */
	void exitInit(CompiladorParser.InitContext ctx);
	/**
	 * Enter a parse tree produced by {@link CompiladorParser#contenido}.
	 * @param ctx the parse tree
	 */
	void enterContenido(CompiladorParser.ContenidoContext ctx);
	/**
	 * Exit a parse tree produced by {@link CompiladorParser#contenido}.
	 * @param ctx the parse tree
	 */
	void exitContenido(CompiladorParser.ContenidoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code indefinido}
	 * labeled alternative in {@link CompiladorParser#inicializacion}.
	 * @param ctx the parse tree
	 */
	void enterIndefinido(CompiladorParser.IndefinidoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code indefinido}
	 * labeled alternative in {@link CompiladorParser#inicializacion}.
	 * @param ctx the parse tree
	 */
	void exitIndefinido(CompiladorParser.IndefinidoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code definido}
	 * labeled alternative in {@link CompiladorParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void enterDefinido(CompiladorParser.DefinidoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code definido}
	 * labeled alternative in {@link CompiladorParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void exitDefinido(CompiladorParser.DefinidoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code asignado}
	 * labeled alternative in {@link CompiladorParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void enterAsignado(CompiladorParser.AsignadoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code asignado}
	 * labeled alternative in {@link CompiladorParser#asignacion}.
	 * @param ctx the parse tree
	 */
	void exitAsignado(CompiladorParser.AsignadoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parens}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterParens(CompiladorParser.ParensContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parens}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitParens(CompiladorParser.ParensContext ctx);
	/**
	 * Enter a parse tree produced by the {@code numero}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterNumero(CompiladorParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by the {@code numero}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitNumero(CompiladorParser.NumeroContext ctx);
	/**
	 * Enter a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterMulDiv(CompiladorParser.MulDivContext ctx);
	/**
	 * Exit a parse tree produced by the {@code MulDiv}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitMulDiv(CompiladorParser.MulDivContext ctx);
	/**
	 * Enter a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterAddSub(CompiladorParser.AddSubContext ctx);
	/**
	 * Exit a parse tree produced by the {@code AddSub}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitAddSub(CompiladorParser.AddSubContext ctx);
	/**
	 * Enter a parse tree produced by the {@code implicito}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterImplicito(CompiladorParser.ImplicitoContext ctx);
	/**
	 * Exit a parse tree produced by the {@code implicito}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitImplicito(CompiladorParser.ImplicitoContext ctx);
	/**
	 * Enter a parse tree produced by the {@code id}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterId(CompiladorParser.IdContext ctx);
	/**
	 * Exit a parse tree produced by the {@code id}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitId(CompiladorParser.IdContext ctx);
	/**
	 * Enter a parse tree produced by the {@code decimal}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterDecimal(CompiladorParser.DecimalContext ctx);
	/**
	 * Exit a parse tree produced by the {@code decimal}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitDecimal(CompiladorParser.DecimalContext ctx);
	/**
	 * Enter a parse tree produced by the {@code cadenas}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterCadenas(CompiladorParser.CadenasContext ctx);
	/**
	 * Exit a parse tree produced by the {@code cadenas}
	 * labeled alternative in {@link CompiladorParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitCadenas(CompiladorParser.CadenasContext ctx);
}