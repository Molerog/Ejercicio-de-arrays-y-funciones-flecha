/*
Cuando hablamos de ECMAScript, nos referimos al estándar que ya va por la
versión ES6 y determina cómo emplear el lenguaje Javascript.

Tiene algunos cambios significativos en su sintaxis que permite escribir código de
forma más rápida y limpia.
*/


//FUNCIÓN DECLARADA
console.log(sum(1,2));

function sum(a,b){
    return a+b;
}


//FUNCIÓN FLECHA
// console.log(sum1(1,2)); Esto no está permitido en las funciones flechas
// ya que no hace hoisting por lo que la inicialización debe estar siempre después de la declaración

const sum1 = (a,b) => {         //Ahora se usará la palabra reservada const
    return a+b;
};

console.log(sum1(1,2));


//FUNCIONES FLECHA EN LÍNEA

//Con la función flecha se puede omitir la estructura de bloque y escribir todo en la misma línea.

const sum3 = (a,b) => a+b;

//FUNCIONES FLECHA CON UN SOLO PARÁMETRO

//Con una función flecha que solo tenga un parámetro podemos escribirla de la siguiente forma:

const test = a => a;

console.log(test(2));

//¿QUÉ ES UN CALLBACK?

/*Un callback (llamada hacia atrás) es pasar una
función B (test2) por parámetro a una función
A(test1), de modo que la función A puede
ejecutar esa función B de forma genérica
desde su código, y nosotros podemos definirlas
desde fuera de dicha función:
*/

function test2() {
    console.log("Funcion test2 ejecutada");
}

function test1(callback){   //El nombre del parámetro "callback es simplemente informativo, se le puede cualquier nombre pero su nombre técnico es  callback"
    callback();
}

test1(test2);


/*ForEach: El bucle forEach en js es un bucle que simplemente recorre los objetos de un array. Lo que hacemos con un foreach
también lo podemos hacer con un
bucle for normal.
*/

let fruits = ["manzana","pera","naranja"]

for (let i = 0; i < fruits.length; i++) {   //BUCLE NORMAL

    console.log(fruits[i]);
    
    }
    
    fruits.forEach(fruit => {           //BUCLE forEach
    
    console.log(fruit)
    
    });


/*
Al igual que otros iteradores de arrays tales como map y filter, la función callback puede recibir tres parámetros.

El elemento actual: Este es el elemento del arreglo por el cual se está haciendo la iteración.

Su índice: Este es el índice de la posición que tiene el elemento dentro del arreglo.

El array objetivo: Este es el array que estamos iterando
*/

const canciones = ["Hang onto yourself", "Go your own way", "Modern Love"];

canciones.forEach((cancion, indice, array) => {

console.log('Elemento actual',cancion,'índice', indice,'array',array);

});

/*
MAP: A veces tenemos una array de objetos que deseamos modificar/agregar
propiedades de cada objeto, otras veces podemos tener una array de strings que
debemos convertir todas en minúsculas.

En realidad, puede haber innumerables situaciones en las que el map sea su salvador y es muy
fácil de usar.

Esta es la forma más básica de llamar un map:
*/

const myArray = [1,2,3,4]

const myArrayTimesTwo = myArray.map((num)=>{

return num * 2

})

/* Dado este array de objetos, creamos
un array de strings utilizando un for
of:
*/

const songs1 = [

    { name: "Curl of the Burl", artist: "Mastodon" },
    
    { name: "Oblivion", artist: "Mastodon" },
    
    { name: "Flying Whales", artist: "Gojira" },
    
    { name: "Euralio y sus cabras", artist: "Euralio"},
    
    ];
    
    const allSongNames1 = []
    
    for (const song of songs1) {
    
    allSongNames1.push(song.name)
    
    }

//Versión con map

const songs = [

    {name:"Curl of the Burl", artist:"Mastodon"},
    
    {name:"Oblivion", artist:"Mastodon"},
    
    {name:"Flying Whales", artist:"Gojira"},
    
    {name:"Euralio y sus cabras", artist:"Euralio"}
    
    ]
    
    const allSongNames = songs.map(song =>{
    
    return song.name
    
    })

/*FILTER:

La función filter permite filtrar los elementos de un array y generar uno nuevo
con todos los elementos que cumplen una determinada condición.

Filter acepta como parámetro una función (callback) la cual se ejecutará por cada elemento del array y deberá de
retornar true para indicar que el elemento actual debe de ser incluido en el nuevo array o false en caso contrario.
Veamos un ejemplo:
*/

//CON EL MÉTODO FILTER

let numeros = [1,2,3,4,5,6,7,8,9,10]

let numerosFiltrados = numeros.filter(numero => numero > 5);

//CON LA ITERACIÓN FOR OF

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

let result =[]

for (const word of words) {

if(word.length > 6){

result.push(word)

}

}

//Lo mismo que hemos hecho con un for of y un if lo podemos hacer en una sola línea con filter:

const words1 = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result1 = words.filter(word => word.length > 6);

/*
REDUCE: Por defecto esta función se encarga de “reducir” un conjunto de elementos a un único
resultado:

resultado es una variable que recogerá el valor después de haber aplicado la función reduce().

reduce recibe dos parámetros: una función callback y el valor inicial.

callback() recibe dos parámetros: el valor anterior y el valor actual. Lo que va a hacer reduce es recorrer todos los elementos de la
lista y aplicar la función callback. El valor anterior será el resultado devuelto por la ejecución anterior de callback(). Si es la
primera vez, será el valorInicial. Para el valor actual, asignará el elemento que esté evaluando en ese momento.

valorInicial es el valor que reduce le pasará a callback como valorAnterior la primera vez que lo ejecute. Este valor es opcional y si no le
pasas nada, se utilizará el primer elemento de la lista y se saltará al segundo.
*/

// let lista = [2,3,5]

// const resultado = lista.reduce(function callback(valorAnterior, valorActual){

//     return; /* resultado de la función callback */
    
//     }, valorInicial);


/*Veamos un ejemplo simple, donde
sumamos todos los valores de un
array de numeros utilizando un for:
*/

const numbers2 = [10, 5, 7];

let suma = 0;

for (let i = 0; i < numbers2.length; i++) {

sum += numbers2[i];

}

//Veamos el mismo ejemplo anterior utilizando reduce:

const numbers3 = [10,5,7]

const suma3 = numbers3.reduce((a,b)=> a + b)

/*
.reduce() va a tomar el primer elemento de la lista de partesDelCoche y va a ejecutar la función que le he pasado como
primer parámetro. Como es la primera iteración, estamos mirando el primer elemento de la lista y no existe un
valorAnterior. Así que el valor anterior será el valor inicial. El texto "Mi coche tiene: ". El valor actual será
"asientos", que es el primer elemento de la lista.
*/

const coche = partesDelCoche.reduce(function (valorAnterior, valorActual) {

    return `${valorAnterior} ${valorActual},`;
    
    }, "Mi coche tiene: ");

    
