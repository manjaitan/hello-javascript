/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.youtube.com/live/XCNjoIoO3Ws?si=3XCjdZ9r41JID-by&t=978
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

console.log ("Ejercicio 1 de condicionales");

let myName = "Angel";

if (myName == "Angel") {
        console.log (myName);

}


// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

console.log ("Ejercicio 2 de condicionales");

let user = "Angel"
let password = "123456"

if (user == "Angel" && password == "123456") {
    console.log ("Usuario y contraseña es correcto, puede utilizar la aplicación")
}


// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

console.log ("Ejercicio 3 de condicionales");

let myNum = 0

if (Math.sign(myNum) == 1 ) {
        console.log ("El número indicado es Positivo")

    }
    else if (Math.sign(myNum) == -1) {
        console.log ("El número indicado es Negativo")
    }
    else if (Math.sign(myNum) == 0) {
        console.log ("El número indicado es Zero")
    }


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

console.log ("Ejercicio 4 de condicionales");

let myOld = 1

if (myOld >=18 ) {
        console.log (`La persona tiene una edad de ${myOld} años la cual SI le otorga derecho al voto`)
    }
    else if (myOld <18 ) {

        console.log (`La persona tiene una edad de ${myOld} años la cual NO le otorga derecho al voto`)
        let myOldResul = 18 - myOld
        console.log (`La persona podrá votas en el futuro dentro de ${myOldResul} años`)

    }


// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

let myOldTernario = 17
const message = myOldTernario >= 18 ? "La edad es de una persona adulto" : "No eres adulto, no puedes pasar al evento"
console.log(message)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 3

if (mes == 12 || mes==1 || mes==2) {
    console.log ("Está usted en Invierno")
} else if (mes == 3 || mes==4 || mes==5) {
    console.log ("Está usted en Primavera")
} else if (mes == 6 || mes==7 || mes==8) {
    console.log ("Está usted en Verano")
}  else if (mes == 9 || mes==10 || mes==11) {
    console.log ("Está usted en Otoño")
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let mesDia = 1

if (mesDia == 1 || mesDia==3 || mesDia==5 || mesDia==7 || mesDia==8 || mesDia==10 || mesDia==12) {
    console.log ("Mes de 31 días")
} else if (mesDia == 2) {
    console.log ("Mes de 28 días")
} else {
    console.log ("Mes de 30 días")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Español"

switch (idioma) {
    case "Español":
        console.log (`Idioma ${idioma}`)
        break;
    case "":
            console.log (`No ha indicado idioma`)
            break;    
    default:
        break;
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let mesStation = 13

switch (mesStation) {
    case 12:
    case 1:
    case 2:
        console.log ("Mes de estación de Invierno");
        break;

    case 3:
    case 4:
    case 5:
        console.log ("Mes de estación de Primavera");
        break;

    case 6:
    case 7:
    case 8:
        console.log ("Mes de estación de Verano");
        break;

    case 9:
    case 10:
    case 11:
        console.log ("Mes de estación de Otoño");
        break;
    case (mesStation >= 13):
        console.log ("Mes incorrecto, meses del año del 1 al 12 sólo");
        break; 

    default:
        break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

let mesDay = 1;

switch (mesDay) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 11:
        console.log ("Mes de 31 días")
        break;
    case 2:
        console.log ("Mes de 28 días")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
            console.log ("Mes de 30 días")
            break;
    default:
        break;
}