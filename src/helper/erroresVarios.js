import { validarOperacionMatematica } from "./sintaxisMatematicas.js";

export function prevenirErroresVarios(valor, variable){
    if(valor === undefined){
        return 'Error, ingresaste un simbolo desconocido'
    }
    if(/[a-zA-Z0-9+\-*/()\[\]]+/.test(valor)){
        if(!validarOperacionMatematica(valor)){
            return 'Error, el valor asignado no se puede calcular'
        }
    }
    if(valor == null){
        return 'Error, se le debe asignar un valor a la variable'
    }
    if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(variable)) {
        return `Error, El nombre de la variable: ${variable} no es válido`;
    }
}