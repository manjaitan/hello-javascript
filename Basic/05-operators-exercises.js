/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.youtube.com/live/euVbF1eatEY?si=nHS3QznAlA_C39NK&t=808
*/

// 1. Crea una variable para cada operación aritmética

let a = 5
let b = 7

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let suma = (a + b)
console.log (suma)

let resta = (a - b)
console.log (resta)

let multiplicar = (a * b)
console.log (multiplicar)

let dividir = (a / b)
console.log(dividir)


// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log (a < b)
console.log (a == 5)
console.log (b == 7)
console.log (a != b)
console.log (b > a)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log (a > b)
console.log (a == b)
console.log (b == 8)
console.log (a != 5)
console.log (b < a)

// 5. Utiliza el operador lógico and

console.log ("")
console.log (5>7 || 2>3) // retorna false

// 6. Utiliza el operador lógico or

console.log ("")
console.log ( 3 > 2 && 8 > 7) // retorna true

// 7. Combina ambos operadores lógicos

console.log ("")
console.log(5 > 10 && 15 > 20 || 30 < 40)

// 8. Añade alguna negación

console.log ()
console.log(!(5 > 10 && 15 > 20))

// 9. Utiliza el operador ternario

console.log ()
const isCool = false
isCool ? console.log ("No hace calor") : console.log ("Hace frío")

// 10. Combina operadores aritméticos, de comparáción y lógicas
