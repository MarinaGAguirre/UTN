// TAREA | MÓDULO 1 | UNIDAD 4

/* EJERCICIO 2: Haciendo uso de los bucles, recorrer un
   array de números y determinar cual es el número mayor. */

let arrayNumeros = [10, 40, 57, 88, 65];

let numeroMayor = 0;

function numeroMayor(arrayNumeros) {
  for (let i=0; i < arrayNumeros.length; i ++) {
    if (arrayNumeros[i] > numeroMayor){
    numeroMayor = arrayNumeros[i];
    }
  }
  return numeroMayor;
}
  
console.log(`El numero mayor es ${numeroMayor}`);

// Otra opción sería empleando el método Math.max pero ni idea si así estará bien.

console.log(Math.max(arrayNumeros))