/**
 * Funcion para validar la sintaxis de un expresion matematica
 * @param {*} expresion 
 * @returns true si la expresion es valida
 */

export function validarOperacionMatematica(expresion) {
    console.log('Esto entro: ',expresion)
    const caracteresPermitidos = /[+\-*/()\[\]\d\w]/; // Caracteres permitidos: letras, números y símbolos de operaciones matemáticas
    const stack = [];

    // Eliminar espacios en blanco
    expresion = expresion.replace(/\s+/g, '');

    // Verificar caracteres no permitidos
    for (let i = 0; i < expresion.length; i++) {
        const char = expresion[i];
        if (!caracteresPermitidos.test(char)) {
            return false; // Carácter no permitido
        }

        if (char === '(') {
            stack.push('(');
        } else if (char === '[') {
            stack.push('[');
        } else if (char === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                return false; // Paréntesis sin apertura correspondiente
            }
        } else if (char === ']') {
            if (stack.length === 0 || stack.pop() !== '[') {
                return false; // Corchete sin apertura correspondiente
            }
        }
    }
    if (stack.length !== 0) {
        return false; // Paréntesis o corchetes sin cierre correspondiente
    }

    // Verificar sintaxis de operaciones
    const regex = /\d+[+\-*/]\d+/g;
    const matches = expresion.match(regex);

    if (matches) {
        for (const match of matches) {
            const tokens = match.split(/[+\-*/]/);
            if (tokens.length !== 2) {
                return false; // Sintaxis de operación incorrecta
            }
        }
        // Verificar si la expresión termina con un operador sin un operando válido
        const ultimaPosicion = expresion.length - 1;
        const ultimoCaracter = expresion[ultimaPosicion];
        if ('+-*/'.includes(ultimoCaracter)) {
            return false;
        }
    }

    return true; // La expresión es válida
}