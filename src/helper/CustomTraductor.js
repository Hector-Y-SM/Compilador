import TraductorVisitor from "../grammar/TraductorVisitor";

export default class CustomTraductor extends TraductorVisitor {

    visitContenido(ctx) {
        console.log('La función del traductor funciona');
        let txt = ctx; 
        console.log('Esto tiene\n', txt);
        
        const palabrasReemplazo = {
            'void main()': 'W7HLM',
            'main': 'manuelito',
            'break': 'noMas',
            'case': 'casardo',
            'char': 'jgl',
            'do': 'toDO',
            'double': 'elbuod',
            'else if': 'elfito',
            'else': 'else',
            'float': 'im',
            'for': 'fofo',
            'if': 'si',
            'int': 'nc',
            'return': 'retorno',
            'switch': 'swift',
            'void': 'vacio',
            'while': 'lewhi',
            'printf': 'leak'
        };
    
        const regex = /\b(void\s+main\(\))|\b(main|break|case|char|do|double|else\s+if|else|float|for|if|int|return|switch|void|while|printf)\b/g;
    
        txt = txt.replace(regex, function(match) {
            return palabrasReemplazo[match] || match;
        });
    
        return txt;
    }
}