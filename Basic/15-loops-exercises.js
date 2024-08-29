/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.twitch.tv/videos/2212289583?t=00h17m45s
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let index = 1; index < 21; index++) {
    console.log (index);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let resultado = 0
for (let index = 1; index < 101; index++) {
    resultado += index
    console.log (resultado)
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50


for (let index = 1; index <= 51; index ++) {

    if (index % 2 == 0){
        console.log (index)
        // console.log (index)
    }   

}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let ArrayNombre = ['German','Pedro','Antonio','Javier']

for (let index = 0; index < ArrayNombre.length; index++) {
    console.log (ArrayNombre[index])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let CadenaTexto = 'DevelopmentA'
let contador = 0

for (const element of CadenaTexto) {
    
    if (element == "a" || element == "e" || element == "i" || element == "o" || element == "u"  || 
        element == "A" || element == "E" || element == "I" || element == "O" || element == "U") {
        contador = contador + 1
    }
}

console.log (contador)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let myArray = [1,2,3,4,5,6]
let resultado = 0

for (let index = 0; index < myArray.length; index++) {
    let anterior = myArray[index]
    resultado = anterior * myArray[index]
    console.log(resultado)
}

console.log (resultado)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let multiplicando = 5
let multiplicador = 1
let resultado = 0

for (let multiplicador = 1; multiplicador < 11 ; multiplicador++){
    resultado = multiplicador * multiplicando
    console.log (`${multiplicando} X ${multiplicador} = ${resultado}`)
}

// 8. Usa un bucle para invertir una cadena de texto

let CadenaTexto2 = "aticurepaC"

for (CadenaTexto2 ; CadenaTexto2 < CadenaTexto2.length ; CadenaTexto2) {
    
    console.log (CadenaTexto2)
}

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let FiboRes = [0,1]
let suma = 0
let aNuevo = []
console.log (FiboRes)

//for (let index = 0; index < 11; index++) {

for (let index = 0; index <=4; index++) {
    
    aNuevo = FiboRes.slice(FiboRes.length-1)
    console.log(aNuevo)

    for (let index = 0; index < aNuevo.length; index++) {
        suma += aNuevo[index] 
    }

    FiboRes.push(suma)

    console.log (suma)
    console.log (FiboRes)

}
//}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let ArrayNumero = [12,1,4,5,6,710,20,30,40,50,60,70,80]
let NuevoArray = []

for (let index = 0; index < ArrayNumero.length; index++) {       
        if (ArrayNumero[index] > 10){
            NuevoArray.push(ArrayNumero[index]) 
        }
}

console.log (NuevoArray)