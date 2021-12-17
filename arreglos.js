/* 
Arreglos colleccion de elementos 
tienen metodos o funciones que nos permiten ordenar o manipular los datos almacenados

se recomienda usar const al utilizar array (arreglo) para evitar perder algun dato

un arreglo es como una caja , para agrupar , separar 
se pueden agrupar cosas
*/

const arreglo1 = [9, "hola", true, [1, 2, 3]];
console.log(arreglo1);

const arreglo2 = Array.of(1, "Hola", true);
console.log(arreglo2);

const arreglo3 = new Array(3, true, "adios");
console.log(arreglo3);

const frutas = [
  "manzana",
  "naranja",
  "uvas ",
  "sandia",
  [1, 2, 3, 4],
  ["A", "B", "C", "D"],
];
console.log(frutas[3]); // se llama al elemento EN ESPECIFICO dentre de los corchetes [] IMPORTANTE NO OMITIR LAS COMAS YA QUE LE DA RELEVANCIA AL SIGUIENTE ELEMENTO

console.log(frutas[2]);
console.log(frutas[4][3]);
console.log(frutas[5][3]);

const letras = ["a", "b", "c"];
console.log(letras.length);

// METODOS PARA INGRESAR O BORRAR DATOS EN LOS ARRAYS

/* push = añade un elemento mas a la lista del arreglo solo lo agrega al final de la lista*/
letras.push("e"); /* la (e) es el elemento añadido*/
console.log(letras);

// pop = ELIMINA EL ULTIMO ELEMENTO DE LA LISTA
letras.pop();
console.log(letras);

//
