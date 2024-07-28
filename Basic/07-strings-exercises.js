/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

let nombre = "Angel";
let apellidos = "Manuel";

// 1. Concatena dos cadenas de texto
console.log ("------1");
console.log (nombre + " " + apellidos);

// 2. Muestra la longitud de una cadena de texto

console.log ("------2");
console.log (nombre.length);

// 3. Muestra el primer y último carácter de un string

console.log ("------3");
console.log (nombre[0]);
console.log (nombre[4]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log ("------4");
console.log (nombre.toUpperCase());
console.log (apellidos.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

let multiline = `Hola
soy una
variable de
varias lineas`;

console.log ("------5");
console.log (multiline);

// 6. Interpola el valor de una variable en un string

let textOne = "Texto para interpolar";
let interpolar = " ---- Valor interpolado ---- ";

console.log ("------6");
console.log (`textOne, ${interpolar} + "texto final"`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let nameGuion = "Angel Manuel Caballero Gonzalez"

console.log ("------7");
console.log (nameGuion.replace(' ',' ',' ',' ','-'))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log ("------8");
let compString = "Hoy es Viernes";
console.log (compString.includes("Viernes"));

// 9. Comprueba si dos strings son iguales

console.log ("------9");
let stringOne = "Hoy es Viernes";
let stringTwo = "Hoy es Viernes";

let comprueba = console.log ( stringOne == stringTwo );

// 10. Comprueba si dos strings tienen la misma longitud

console.log ("------10");
let stringLenghtOne = "Hoy es Viernes";
let stringLenghtTwo = "Hoy es Viernes";
console.log (stringLenghtOne.length == stringLenghtTwo.length);

