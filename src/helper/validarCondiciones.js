import { variables } from "./memoria.js"

export function noCadenasNiBoolean(arg1, arg2, err) {
    console.log('arg1 ',arg1)
    console.log('arg2 ',arg2)

    function evitarProblemas(arg) {
        if(typeof arg != 'number'){
            if(arg.match(/"('\\"|.)*?"/g) || arg == 'true' || arg == 'false') { 
                throw new Error(`Error en la linea ${err}, argumentos no validos`); 
            }

            if(variables.has(arg)){
                const aux = variables.get(arg);
                const ext = aux.valor;
                if(typeof ext != 'number'){
                    if(ext.match(/"('\\"|.)*?"/g) || ext == 'true' || ext == 'false') { 
                        throw new Error(`Error en la linea ${err}, argumentos no validos`);
                    }
                }
                return variables.get(arg).valor;
              }
        }
    }

    evitarProblemas(arg1);
    evitarProblemas(arg2);
}

export function argumentosValidos(arg1, arg2, err){
    function verificarArgumento(arg){
        if(typeof arg != 'number'){
            if(!arg.match(/"('\\"|.)*?"/g)){
                if(!variables.has(arg)){
                    throw new Error(`Error en la linea ${err}, el argumento ${arg} no esta definido`);
                }
            }
        }
    }

    verificarArgumento(arg1);
    verificarArgumento(arg2);
}

export function comparaciones(arg1, arg2, err, simbolo) {
    console.log('en esta funcion es ', arg1)
    function obtenerValor(arg) {
        console.log(variables)
        if (typeof arg !== 'number') {
            if (!arg.match(/"('\\"|.)*?"/g)) {
                if (!variables.has(arg)) {
                    throw new Error(`Error en la línea ${err}, el argumento ${arg} no está definido`);
                }
                return variables.get(arg).valor;
            }
        }
        return arg;
    }

    const valor1 = obtenerValor(arg1);
    const valor2 = obtenerValor(arg2);

    const cadena = `${valor1} ${simbolo} ${valor2}`;
    console.log('condicion a evaluar ', cadena, 'resultado: ', Boolean(eval(cadena)))
    return Boolean(eval(cadena));
}