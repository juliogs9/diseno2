/* 
Condicionales

if (condision){
  else{
    
  }
} 

Funcion
Bloque de codigo reutilizable
function nombre (parametro){
  return
}
nombre (argumentos);
*/

function procesadorDeFrutas(manzanas, naranjas) {
  let jugo = "Jugo de  " + manzanas + " manzanas y  " + naranjas + " naranjas";
  return jugo;
}

let jugoDemanzana = procesadorDeFrutas(4, 5);
console.log(jugoDemanzana);

// function goles(cabeza, pie) {
//   let goleo = 'Goles de ' +cabeza + ' cabeza '
// }
