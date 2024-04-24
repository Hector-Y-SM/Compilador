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

export function comparaciones(arg1, arg2, mapaExtra, err, simbolo){
    if(typeof arg1 != 'number'){
        if(!arg1.match(/"('\\"|.)*?"/g)){
            if(!variables.has(arg1) && !mapaExtra.has(arg1)){
                throw new Error(`Error en la linea ${err}, el argumento ${argumento1} no esta definido`);
            }
            const aux = variables.get(arg1) ? variables : mapaExtra;
            const ext = aux.get(arg1).valor
            const cadena = `${ext} ${simbolo} ${arg2}`
            return Boolean(eval(cadena));
        }
    }

    if(typeof arg2 != 'number'){
        if(!arg2.match(/"('\\"|.)*?"/g)){
            if(!variables.has(arg2) && !mapaExtra.has(arg2)){
                throw new Error(`Error en la linea ${err}, el argumento ${argumento1} no esta definido`);
            }
            const aux = variables.get(arg2) ? variables : mapaExtra;
            const ext = aux.get(arg2).valor
            const cadena = `${arg1} ${simbolo} ${ext}`
            return Boolean(eval(cadena));
        }
    }

    const simple = `${arg1} ${simbolo} ${arg2}`
    return Boolean(eval(simple))
}