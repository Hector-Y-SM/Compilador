# Compilador online
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).  

*crear un compilador online que funcionara con las palabaras reservadas que el programador decida, el compilador se basa en el lenguaje C*  
## Metodo principal (cascaron)
*para poder escibir codigo se debe crear el metodo principal con la siguiente sintaxis*     
```bash
  W7HLM {
    # tu codigo
  }
 # donde "{" indica el inicio del bloque de codigo y "}" el cierre del bloque
```
*ya creando el cascaron se puede empezar a introducir codigo dentro de el, siguiendo la sintaxis de palabaras reservadas que el programador especifica.*

## Lista de tipos de datos (personalizado // origen)
```bash
nc         # int   
im         # float   
jgl        # char
loob       # booleano
```
## Lista de palabras reservadas (personalizado // origen)  
```bash
leak       # print   
if         # if   
else if    # else if
else       # else
true       #true
false      #false
```
## Funcionalidades
- declaracion de variables
```bash
W7HLM{
  nc a;
  im ejemplo;
}
```
- Asignacion de variables
```bash
W7HLM{
  a = 32;
  ejemplo = 6.5;
}
```
- declarar y asignar variables
```bash
W7HLM{
  nc otraVariable = 98;
  jgl cadena = "Hola, soy un ejemplo";
}
```
- Reasignar el valor de una variable
```bash
W7HLM{
  a = 9
  cadena = "cambio de valor";
}
```
- Impresion de variables, numeros, cadenas
```bash
W7HLM{
# imprimira su ultimo valor registrado
  leak(cadena) # "cambio de valor"
  leak(a)      # 9
}
```
- funcionamiento correcto de condicional if, en sus cuatro formas
```bash
W7HLM{
  if(true) {
      leak("Funciona bien") # esto mostrara
  }
  ---------------------------------------------------
  if(false) {
      leak("Funciona bien")
  } else {
    leak("prueba") # esto mostrara
  }
  ---------------------------------------------------
  if(false) {
      leak("Funciona bien")
  } else if(true) {
      leak("me imprime") # esto mostrara
  }
  ---------------------------------------------------
  if(false) {
      leak("Funciona bien")
  } else if(false) {
      leak("me imprime")
  } else {
      leak("ninguna es true") # esto mostrara
  }
}
```
- las variables cuentan con su scoope definido  
si dentro de un bloque de codigo, por ejemplo el if se declara una variable fuera de este bloque no se podra usar esta variable
```bash
W7HLM{
  if(true){
      jgl ejemplo = "tengo scoope"
      leak(ejemplo) # muestra el mensaje
  }

  leak(ejemplo) # muestra un mensaje de error y detiene la ejecucion, por que la variable se declara en un punto no alcanzable
  
}
```

## Getting Started
Primero instala las dependecncias de node y antlr4  
```bash
npm install  
npm install antlr4
```
Ya con eso instalado podemos correrlo en el servidor local  
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Bibliotecas utilizada para diseño
[CodeMirror](https://uiwjs.github.io/react-codemirror/)


## Requerimientos para que el proyecto funcione
[ANTLR4](https://www.antlr.org/)  
[NEXT.js](https://nextjs.org/)
