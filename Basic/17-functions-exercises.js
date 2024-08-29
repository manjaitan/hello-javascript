/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a,b) {
    console.log (a+b)
}

suma (2,5)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

let numeros = [1,2,3,40,5,6,7,8,9,10]
let max = 0;

function mayorArray (array){

    for (const numero of numeros) {
        if (max < numero) {
            max = numero;
        }
    }
    console.log(`El numero máximo del array es: ${max}`);
}

mayorArray(numeros);

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let conteo = 0;

function RecString (dato){

    for (let index = 0; index < dato.length; index++) {
        
        conteo = dato.length;
        
    }
    
    console.log (conteo);

}

RecString ("AngelManuelCaballeroGonzalez")


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas








// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario



// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado

function factorial (numero){
    let resultado = numero; // declaramos variables.
    if (numero === 0 || numero === 1) {
        return 1; 
    }
    while (numero > 1) {
        numero-- ; // Decrementamos.
      
        resultado = resultado * numero;

    }
   
    return resultado;    

}

factorial(4);

