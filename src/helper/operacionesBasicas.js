import { variables } from "./memoria.js"
import { validarOperacionMatematica } from "./sintaxisMatematicas.js"
/**
 * Funcion para realizar operaciones basicas, suma, resta, division o multiplicacion
 * @param {*} n1 
 * @param {*} n2 
 * @param {*} opt 
 * @param {*} addSub true para suma y resta, false para division y multi
 * @param {*} contexto 
 * @returns resultado de la operacion o error si la sintaxis esta mal 
 */

export function operacionesBasicas(n1, n2, opt, addSub, contexto, err){
    let op1;
    let op2;
    if(addSub){
        op1 = `${n1} + ${n2}`;
        op2 = `${n1} - ${n2}`;
    } else {
        op1 = `${n1} * ${n2}`;
        op2 = `${n1} / ${n2}`;
    }
    console.log('n1 ', n1)
    console.log('n2 ', n2)

    if(isNaN(n1) && isNaN(n2)){
        console.log('aki')
        if(variables.get(n1) === undefined && !n1.match(/"('\\"|.)*?"/g)){
            throw new Error(`Error en la linea ${err}, ${n1} no esta definido`)
        }
        if(variables.get(n2) === undefined && !n2.match(/"('\\"|.)*?"/g)){
            throw new Error(`Error en la linea ${err}, ${n2} no esta definido`)
        }
        const d2 = variables.get(n2)
        const d1 = variables.get(n1)
        if(addSub){
            if(n1.match(/"('\\"|.)*?"/g) && n2.match(/"('\\"|.)*?"/g)){
                const a1 = n1.slice(1,-1)
                const a2 = n2.slice(1,-1)
                if(contexto == 9){
                    return  '"'+eval('a1 + a2')+'"'
                } else {
                    throw new Error('No se puede hacer este tipo de operacion con cadenas');
                }
            }
            return contexto == opt? Number(d1.valor) + Number(d2.valor) 
                                    : Number(d1.valor) - Number(d2.valor);
        } else {
            if(n1.match(/"('\\"|.)*?"/g) && n2.match(/"('\\"|.)*?"/g)){
                if(contexto !== 9){
                    throw new Error('No se puede hacer este tipo de operacion con cadenas');
                } 
            }
            return contexto == opt? Number(d1.valor) * Number(d2.valor) 
                                    : Number(d1.valor) / Number(d2.valor);
        }
    }

    if(isNaN(n1)){
        if(variables.get(n1) === undefined && !n1.match(/"('\\"|.)*?"/g)){
            console.log('no hay una cadena')
            throw new Error(`Error en la linea ${err}, ${n1} no esta definido`)
        }
        const datos = variables.get(n1)
        if(addSub){
            if(n1.match(/"('\\"|.)*?"/g)){
                const aux = n2.slice(1,-1)
                if(contexto == 9){
                    return  '"'+eval('n1 + aux')+'"'
                } else {
                    throw new Error('No se puede hacer este tipo de operacion con cadenas');
                }
            }
            return contexto == opt? Number(datos.valor) + Number(n2) 
                               : Number(datos.valor) - Number(n2);
        } else {
            if(n1.match(/"('\\"|.)*?"/g)){
                if(contexto !== 9){
                    throw new Error('No se puede hacer este tipo de operacion con cadenas');
                } 
            }
            return contexto == opt? Number(datos.valor) * Number(n2) 
                               : Number(datos.valor) / Number(n2);
        }    
    }

    if(isNaN(n2)){
        if(variables.get(n2) === undefined && !n2.match(/"('\\"|.)*?"/g)){
            throw new Error(`Error en la linea ${err}, ${n2} no esta definido`)
        } 
        const datos = variables.get(n2)
        if(addSub){
            if(n2.match(/"('\\"|.)*?"/g)){
                const aux = n2.slice(1,-1)
                if(contexto == 9){
                    return  '"'+eval('n1 + aux')+'"'
                } else {
                    throw new Error('No se puede hacer este tipo de operacion con cadenas');
                }
            }
            return contexto == opt? Number(n1) + Number(datos.valor) 
                               : Number(n1) - Number(datos.valor);
        } else {
            if(n2.match(/"('\\"|.)*?"/g)){
                if(contexto !== 9){
                    throw new Error('No se puede hacer este tipo de operacion con cadenas');
                } 
            }
            return contexto == opt? Number(n1) * Number(datos.valor) 
                               : Number(n1) / Number(datos.valor);
        }
    }

    if(contexto == opt){
        console.log('esta es la operacion 1: ',op1)
        if(addSub){
            if(n1 === null || n2 === null){
                throw new Error(`Error en la linea ${err}, la sintaxis de la operacion esta mal`);
            }
            const e1 = validarOperacionMatematica(op1);
            console.log('Estado 1: ',e1)
            if (!e1) { 
                throw new Error(`Error en la linea ${err}, esta operacion no se puede realizar`) 
            }
            return Number(n1) + Number(n2);
        }
        if(n1 === null || n2 === null){
            throw new Error(`Error en la linea ${err}, la sintaxis de la operacion esta mal`)
        }
        const e2 = validarOperacionMatematica(op1);
        console.log('Estado 2: ',e2)
        if (!e2) { 
            throw new Error(`Error en la linea ${err}, esta operacion no se puede realizar`) 
        }
        return Number(n1) * Number(n2);
        }

        if(addSub){
            if(n1 === null || n2 === null){
                throw new Error(`Error en la linea ${err}, la sintaxis de la operacion esta mal`)
            }
            const e1 = validarOperacionMatematica(op2);
            console.log('Estado 1: ',e1)
            if (!e1) { 
                throw new Error(`Error en la linea ${err}, esta operacion no se puede realizar`) 
            }

            return Number(n1) - Number(n2);
        }
        if(n1 === null || n2 === null){
            throw new Error(`Error en la linea ${err}, la sintaxis de la operacion esta mal`)
        }
        const e2 = validarOperacionMatematica(op2);
        console.log('Estado 2: ',e2)
        if (!e2) { 
            throw new Error(`Error en la linea ${err}, esta operacion no se puede realizar`) 
        }

        return Number(n1) / Number(n2);
}