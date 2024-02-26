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

export function operacionesBasicas(n1, n2, opt, addSub, contexto){
    console.log('n1 ', n1)
    console.log('n2 ', n2)
    if(isNaN(n1)){
        const datos = variables.get(n1)
        if(datos == undefined){
            return `Error, ${n1} no esta definido`
        }
      if(addSub){
        return contexto == opt? Number(datos.valor) + Number(n2) 
                               : Number(datos.valor) - Number(n2);
      }else{
        return contexto == opt? Number(datos.valor) * Number(n2) 
                               : Number(datos.valor) / Number(n2);
      }    
      
    }
    if(isNaN(n2)){
        const datos = variables.get(n2)
        if(datos === undefined){
            return `Error, ${n2} no esta definido`
        } 
        
        if(addSub){
            return contexto == opt? Number(n1) + Number(datos.valor) 
                               : Number(n1) - Number(datos.valor);
        }else {
            return contexto == opt? Number(n1) * Number(datos.valor) 
                               : Number(n1) / Number(datos.valor);
        }
        
    }
    
    if(isNaN(n1) && isNaN(n2)){
        const d1 = variables.get(n1)
        if(datos === undefined){
            return `Error, ${n1} no esta definido`
        }
        const d2 = variables.get(n2)
        if(datos === undefined){
            return `Error, ${n2} no esta definido`
        }
        if(addSub){
            return contexto == opt? Number(d1.valor) + Number(d2.valor) 
                                    : Number(d1.valor) - Number(d2.valor);
        }else{
            return contexto == opt? Number(d1.valor) * Number(d2.valor) 
                                    : Number(d1.valor) / Number(d2.valor);

        }
    }

    let op1;
    let op2;
    if(addSub){
        op1 = `${n1} + ${n2}`;
        op2 = `${n1} - ${n2}`;
    } else {
        op1 = `${n1} * ${n2}`;
        op2 = `${n1} / ${n2}`;
    }

    if(contexto == opt){
        console.log('esta es la operacion 1: ',op1)

        if(addSub){
            if(n1 === null || n2 === null){
                console.log('Error, la sintaxis de la operacion esta mal')
                return 'Error, la sintaxis de la operacion esta mal'
            }
            const e1 = validarOperacionMatematica(op1);
            console.log('Estado 1: ',e1)
            if (!e1) { 
                console.log('todo mal')
              return 'Error, esta operacion no se puede realizar' 
            }

            return Number(n1) + Number(n2);
        }
        if(n1 === null || n2 === null){
            console.log('Error, la sintaxis de la operacion esta mal')
            return 'Error, la sintaxis de la operacion esta mal'
        }
        const e2 = validarOperacionMatematica(op1);
        console.log('Estado 2: ',e2)
        if (!e2) { 
            return 'Error, esta operacion no se puede realizar' 
        }

        return Number(n1) * Number(n2);
        }

        if(addSub){
            if(n1 === null || n2 === null){
                console.log('Error, la sintaxis de la operacion esta mal')
                return 'Error, la sintaxis de la operacion esta mal'
            }
            const e1 = validarOperacionMatematica(op2);
            console.log('Estado 1: ',e1)
            if (!e1) { 
                console.log('todo mal')
              return 'Error, esta operacion no se puede realizar' 
            }

            return Number(n1) - Number(n2);
        }
        if(n1 === null || n2 === null){
            console.log('Error, la sintaxis de la operacion esta mal')
            return 'Error, la sintaxis de la operacion esta mal'
        }
        const e2 = validarOperacionMatematica(op2);
        console.log('Estado 2: ',e2)
        if (!e2) { 
            return 'Error, esta operacion no se puede realizar' 
        }

        return Number(n1) / Number(n2);
}