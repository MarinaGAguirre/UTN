// TAREA | MÓDULO 1 | UNIDAD 4

/* EJERCICIO 1: Utilizando lo aprendido, escribir el código necesario para que dada una distancia,
   determine el medio de transporte apropiado de acuerdo a las siguientes reglas:
   -  0 a 1000 metros = pie
   -  1000 a 10000 metros = bicicleta
   -  10000 a 30000 metros = colectivo
   -  30000 a 100000 metros = auto
   -  +100000 = avión
*/

  numero = parseInt(prompt('Ingrese la cantidad de metros a recorrer en número:', ''));
      
  if (numero >= 0 && numero <= 1000) {              //Si ingresa de 0 a 1.000 metros.
    document.write('Transportese a pie.');
  } else if (numero > 1000 && numero <= 10000) {    //Si ingresa de 1000 a 10.000 metros.
    document.write('Transportese en bicicleta.');
  } else if (numero > 10000 && numero <= 30000) {   //Si ingresa de 10.000 a 30.000 metros.
    document.write('Transportese en colectivo');
  } else if (numero > 30000 && numero <= 100000) {  //Si ingresa de 30.000 a 100.000 metros.
    document.write('Transportese en auto.');
  } else { 
    document.write('Transportese en avión.');       //Si ingresa más de 100.000 metros
  }
  
