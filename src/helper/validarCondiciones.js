import { variables } from "./memoria.js"
//ARCHIVO CONTENEDOR DE FUNCIONES PARA VALIDAR LAS CONDICIONES

/**
 * Funcion para validar los argumentos que se le ingresan a la condicional, son varios case pq las comparaciones funcionan diferente o pueden comparar diferentes cosas
 * @param {*} argumento1 primer argumento de la condicional
 * @param {*} argumento2 segundo(si es necesario)
 * @param {*} tipo diferente tipo de validacion
 * @param {*} err linea en que sucede error
 */
export function argumentosValidos(argumento1, argumento2, tipo, err){
    switch(tipo){
        case 0:
            if(typeof argumento1 == 'string' && argumento1.match(/"('\\"|.)*?"/g) 
			    || typeof argumento2 =='string' && argumento2.match(/"('\\"|.)*?"/g)
			    ){
			        throw new Error(`Error en la linea ${err}, argumentos no validos`)
		    }
          break;
        case 1:
            if(typeof argumento1 == 'string' && !argumento1.match(/"('\\"|.)*?"/g) && argumento1 != 'true' && argumento1 != 'false' || typeof argumento1 == 'number'){
                throw new Error(`Error en la linea ${err}, el argumento ${argumento1} no es valido`)
            }
          break;
        case 2:
            if(typeof argumento1 == 'string' && !argumento1.match(/"('\\"|.)*?"/g)){
                if(!variables.has(argumento1)){
                    throw new Error(`Error en la linea ${err}, el argumento ${argumento1} no esta definido`);
                }
            }
            if(typeof argumento2 == 'string' && !argumento2.match(/"('\\"|.)*?"/g)){
                if(!variables.has(argumento2)){
                    throw new Error(`Error en la linea ${err}, el argumento ${argumento2} no esta definido`);
                }
            }
          break;
        default:
            throw new Error('ERROR EXPLOSIVO PA')
    }
    
}

/**
 * Funcion para validar si un argumento es mayor o menor que otro
 * @param {*} arg1 primer valor de la condicion
 * @param {*} arg2 segundo valor de la condicion
 * @param {*} simbolo <,>,>=,<=
 * @param {*} err linea del error
 * @returns Error o evaluan si la expresion es true o false
 */
export function comparaciones(arg1, arg2, simbolo, err){
    if(typeof arg1 == 'string' && arg1 == 'true' || typeof arg2 == 'string' && arg2 == 'true' || typeof arg2 == 'string' && arg2 == 'false' || typeof arg1 == 'string' && arg1 == 'false'){
        throw new Error(`Error en la linea ${err}, Estos argumentos no se pueden comparar`)
    }

    if(typeof arg1 !== 'number' && typeof arg2 !== 'number'){
        if(!variables.has(arg1) || !variables.has(arg2)){
            throw new Error(`Error en la linea ${err}, argumento no valido`)
        }
        const aux = variables.get(arg1)
        const aux2 = variables.get(arg2)
        const variante1 = `${aux.valor} ${simbolo} ${aux2.valor}`
        return Boolean(eval(variante1))
    }

    if(typeof arg1 !== 'number'){
        if(!variables.has(arg1)){
            throw new Error(`Error en la linea ${err}, argumento ${arg1} no valido`)
        }
        const aux = variables.get(arg1)
        const variante1 = `${aux.valor} ${simbolo} ${arg2}`
        return Boolean(eval(variante1))
    }
    
    if(typeof arg2 !== 'number'){
        if(!variables.has(arg2)){
            throw new Error(`Error en la linea ${err}, argumento ${arg2} no valido`)
        }

        const aux = variables.get(arg2)
        const variante1 = `${arg1} ${simbolo} ${aux.valor}`
      return Boolean(eval(variante1));
    }

    const condicion = `${arg1} ${simbolo} ${arg2}`
    return Boolean(eval(condicion))
}

export function igualDiferente(){

}