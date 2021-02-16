//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000
//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%
var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%
var hijos_recargo = 0.2 // 20%
//Recargo
var recargo_1 = 0
var recargo_2 = 0
var recargo_3 = 0
var recargo_total = 0
//Precio final 
var precio_final = 0
//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
// Comprovacion de edad
if (edad < 18){
alert("Usted no es mayor de edad")
}
else{
  var casado = prompt("¿Está casado actualmente?", "si/no")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
}
var edad_conyuge
if("SI" == casado.toUpperCase()) {
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
//convirtiendo la edad del cónyuge si se esta casado/a
var edad_conyuge_numero = 0
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}
var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen
if("SI" == hijos.toUpperCase()){
var cantidad_hijos = prompt("¿Cuantos hijos tiene?")
}
// 1. convierta la cantidad de hijos a numero
if("SI" == hijos.toUpperCase()){
var numerodehijos = parseInt(cantidad_hijos)
}
//Aquí debe calcular el recargo total basado en las respuestas ingresadas
//Aquí es donde debe de calcular los recargos y el valor final
precio_final = precio_base + recargo_total
//Ejemplo (Debe completar los condicionales): 
//Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo_1 = precio_base * edad_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_1
}
//aqui puede colocar un else if() con el siguiente rango
else if(edad_numero>=25 && edad_numero<50){
  //Calculamos el recargo en base a la edad 
  recargo_1 = precio_base * edad_25
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_1
}
else if(edad_numero>=50 && edad_numero<100){
  //Calculamos el recargo en base a la edad 
  recargo_1 = precio_base * edad_50
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_1
}
/** 
 * 2. Recargo por la edad del conyuge
 */
if(edad_conyuge>=18 && edad_conyuge<25){
  //Calculamos el recargo en base a la edad 
  recargo_2 = precio_base * casado_18
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_2
}
else if(edad_conyuge>=25 && edad_conyuge<50){
  //Calculamos el recargo en base a la edad 
  recargo_2 = precio_base * casado_25
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_2
}
else if(edad_conyuge>=50 && edad_conyuge<100){
  //Calculamos el recargo en base a la edad 
  recargo_2 = precio_base * casado_50
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_2
}
/**
 * 3. Recargo por la cantidad de hijos 
 */ 
if("SI" == hijos.toUpperCase()){
  
  recargo_3 = precio_base * numerodehijos * hijos_recargo
  
  recargo_total = recargo_total + recargo_3
}
//Resultado
precio_final = precio_base + recargo_total
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)
