import { variables } from "./memoria.js"

export function operacionesBasicas(arg, err){
    if(typeof arg != 'number') {
        if(!variables.has(arg) && !arg.match(/"('\\"|.)*?"/g)){
            throw new Error(`Error en la linea ${err}, ${arg} no esta definido`);
        }

        if(arg.match(/"('\\"|.)*?"/g)){
            return arg.toString();
        }
        if(variables.has(arg)){
            const aux = variables.get(arg);
            if(typeof aux.valor == 'string'){
                if(aux.valor.match(/"('\\"|.)*?"/g)){
                    return aux.valor.toString();
                }
            }
            return aux.valor;
        }
    }

    return arg;
}