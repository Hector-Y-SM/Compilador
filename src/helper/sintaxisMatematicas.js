/**
 * Funcion para validar la sintaxis de un expresion matematica
 * @param {*} expresion 
 * @returns true si la expresion es valida
 */
export function validarOperacionMatematica(expresion) {
    const caracteresPermitidos = /[+\-*/()\[\]\d\w]/; //! Caracteres permitidos: letras, números y símbolos de operaciones matemáticas
    const stack = [];

    // Verificar caracteres no permitidos
    for (let i = 0; i < expresion.length; i++) {
        const char = expresion[i];
        if (!caracteresPermitidos.test(char)) {
            return false; //? Carácter no permitido
        }

        if (char === '(') {
            stack.push('(');
        } else if (char === '[') {
            stack.push('[');
        } else if (char === ')') {
            if (stack.length === 0 || stack.pop() !== '(') {
                return false; //* Paréntesis sin apertura correspondiente
            }
        } else if (char === ']') {
            if (stack.length === 0 || stack.pop() !== '[') {
                return false; //* Corchete sin apertura correspondiente
            }
        }
    }
    if (stack.length !== 0) {
        return false; //! Paréntesis o corchetes sin cierre correspondiente
    }

    //! Verificar sintaxis de operaciones
    const regex = /\d+[+\-*/]\d+/g;
    const matches = expresion.match(regex);

    if (matches) {
        for (const match of matches) {
            const tokens = match.split(/[+\-*/]/);
            if (tokens.length !== 2) {
                return false; //? Sintaxis de operación incorrecta
            }
        }
    }

    return true; // La expresión es válida
}