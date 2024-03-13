import { variables } from "./memoria.js"

export function argumentosValidos(argumento1, argumento2, err){
    if(typeof argumento1 =='string' && argumento1.includes('true','false') || typeof argumento2 =='string' && argumento2.includes('true','false') || 
			typeof argumento1 =='string' && argumento1.match(/"('\\"|.)*?"/g) 
			|| typeof argumento2 =='string' && argumento2.match(/"('\\"|.)*?"/g)
			){
			throw new Error(`Error en la linea ${err}, argumentos no validos`)
		}
}

export function comparaciones(arg1, arg2, simbolo){
    if(typeof arg1 !== 'number' && typeof arg2 !== 'number'){
        console.log('entre aqui')
        if(!variables.has(arg1) || !variables.has(arg2)){
            throw new Error(`Error en la linea ${ctx.start.line}, argumento no validos`)
        }
        const aux = variables.get(arg1)
        const aux2 = variables.get(arg2)
        const variante1 = `${aux.valor} ${simbolo} ${aux2.valor}`
        return Boolean(eval(variante1))
    }

    if(typeof arg1 !== 'number'){
        if(!variables.has(arg1)){
            throw new Error(`Error en la linea ${ctx.start.line}, argumento ${arg1} no validos`)
        }
        const aux = variables.get(arg1)
        const variante1 = `${aux.valor} ${simbolo} ${arg2}`
        return Boolean(eval(variante1))
        //console.log('VARIANTE 1', Boolean(variante1))
    }
    
    if(typeof arg2 !== 'number'){
        if(!variables.has(arg2)){
            throw new Error(`Error en la linea ${ctx.start.line}, argumento ${arg2} no validos`)
        }
        const aux = variables.get(arg2)
        const variante1 = `${arg1} ${simbolo} ${aux.valor}`
        return Boolean(eval(variante1));
    }

    console.log('voy a evaluar normal')
    //console.log(Boolean(eval('3>8')))
    const condicion = `${arg1} ${simbolo} ${arg2}`
    return Boolean(eval(condicion))
}