import { variables } from "./memoria.js"

export function noCadenasNiBoolean(arg1, arg2, mapaExtra, err){
    console.log('arg1 ',arg1)
    console.log('arg2 ',arg2)

    if(typeof arg1 != 'number'){
        if(arg1.match(/"('\\"|.)*?"/g) || arg1 == 'true' || arg1 == 'false'){ throw new Error(`Error en la linea ${err}, argumentos no validos`); }
    }
    
    if(typeof arg2 != 'number'){
        if(arg2.match(/"('\\"|.)*?"/g) || arg2 == 'true' || arg2 == 'false'){ throw new Error(`Error en la linea ${err}, argumentos no validos`); }
    }

    if(typeof arg1 != 'number'){
    if(variables.has(arg1) || mapaExtra.has(arg1)){
        const aux = variables.get(arg1) ? variables : mapaExtra;
        const ext = aux.get(arg1).valor;
        if(typeof ext != 'number'){
            if(ext.match(/"('\\"|.)*?"/g) || ext == 'true' || ext == 'false'){ // TODO: CUIDADO
                throw new Error(`Error en la linea ${err}, argumentos no validos`);
            }
        }
      }
    }

    if(typeof arg2 != 'number'){
    if(variables.has(arg2) || mapaExtra.has(arg2)){
        const aux = variables.get(arg2) ? variables : mapaExtra;
        const ext = aux.get(arg2).valor
        if(typeof ext != 'number'){
            if(ext.match(/"('\\"|.)*?"/g) || ext == 'true' || ext == 'false'){ // TODO: CUIDADO
                throw new Error(`Error en la linea ${err}, argumentos no validos`);
            }
        }
    }
}
}

export function argumentosValidos(arg1, arg2, mapaExtra, err){
    if(typeof arg1 != 'number'){
        if(!arg1.match(/"('\\"|.)*?"/g)){
            if(!variables.has(arg1) && !mapaExtra.has(arg1)){
                throw new Error(`Error en la linea ${err}, el argumento ${argumento1} no esta definido`);
            }
        }
    }

    if(typeof arg2 != 'number'){
        if(!arg2.match(/"('\\"|.)*?"/g)){
            if(!variables.has(arg2) && !mapaExtra.has(arg2)){
                throw new Error(`Error en la linea ${err}, el argumento ${argumento1} no esta definido`);
            }
        }
    }
}

export function comparaciones(arg1, arg2, mapaExtra, err, simbolo) {
    function obtenerValor(arg) {
        if (typeof arg !== 'number') {
            if (!arg.match(/"('\\"|.)*?"/g)) {
                if (!variables.has(arg) && !mapaExtra.has(arg)) {
                    throw new Error(`Error en la línea ${err}, el argumento ${arg} no está definido`);
                }
                const aux = variables.get(arg) ? variables : mapaExtra;
                console.log('inspeccion de ', arg, 'valor es: ', aux.get(arg).valor)
                return aux.get(arg).valor;
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