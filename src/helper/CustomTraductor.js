import TraductorVisitor from "../grammar/TraductorVisitor";

export default class CustomTraductor extends TraductorVisitor {

    visitContenido(ctx) {
        console.log('La función del traductor funciona');
        let txt =  ctx; 
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
    
    formatearCodigo(codigo) {
        let codigoFormateado = '';
        let nivelIndentacion = 0;
        let lineaActual = '';
    
        for (let i = 0; i < codigo.length; i++) {
            const caracter = codigo[i];
    
            if (caracter === '{') {
                codigoFormateado += '\t'.repeat(nivelIndentacion) + lineaActual.trim() + ' {\n';
                nivelIndentacion++;
                lineaActual = '';
            } else if (caracter === '}') {
                nivelIndentacion = Math.max(0, nivelIndentacion - 1);
                codigoFormateado += '\t'.repeat(nivelIndentacion) + lineaActual.trim();
                codigoFormateado += '\t'.repeat(nivelIndentacion) + '}\n';
                lineaActual = '';
            } else if (caracter === ';') {
                codigoFormateado += '\t'.repeat(nivelIndentacion) + lineaActual.trim() + ';\n';
                lineaActual = '';
            } else {
                lineaActual += caracter;
            }
        }
    
        return codigoFormateado.trim();
    }

}