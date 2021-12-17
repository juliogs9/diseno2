let precio = parseInt(prompt("ingresa el pago"));

function calcularDescuento() {
  if (precio < 100) {
    precio *= 0.9;
  } else if (precio >= 100 && precio < 200) {
    precio *= 0.8;
  } else {
    precio *= 0.7;
  }
  return precio;
}

let preciofinal = calcularDescuento(precio);

document.write("Su pago final es de " + preciofinal);
