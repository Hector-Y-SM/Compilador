export const variables = new Map();

//window.variables = variables;

function erroresVarios(parametro){
    if(parametro === undefined){
        return 'Error, ingresaste un simbolo desconocido'
    }
    if(/[a-zA-Z0-9+\-*/()\[\]]+/.test(parametro)){
        console.log('aqui hay operaciones')
        if(!validarOperacionMatematica(parametro)){
            return 'Error, el valor asignado no se puede calcular'
        }
    }
    if(valor == null){
        return 'Error, se le debe asignar un valor a la variable'
    }
    if (!/^[a-zA-Z][a-zA-Z0-9_]*$/.test(parametro)) {
        return `Error, El nombre de la variable: ${parametro} no es válido`;
    }
}