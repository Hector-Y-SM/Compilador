import { validarOperacionMatematica } from "./sintaxisMatematicas.js";

/**
 * funcion para prevenir errores repetitivos
 * @param {*} valor 
 * @param {*} variable 
 * @returns errores
 */
export function prevenirErroresVarios(valor, variable){
    if(valor === undefined){
        return 'Error, ingresaste un simbolo desconocido'
    }
    if(valor == null){
        return 'Error, se le debe asignar un valor a la variable'
    }
    if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
        return `Error, El nombre de la variable: ${variable} no es válido`;
    }
}