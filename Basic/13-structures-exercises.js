/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales

let ArrayAnimales = ["Perro","Gato","Loro","Gacela","Rinceronte"];
console.log (ArrayAnimales);
console.log (typeof(ArrayAnimales))

// 2. Añade dos más. Uno al principio y otro al final

ArrayAnimales.unshift("Saltamontes")
ArrayAnimales.push("periquito")
console.log (ArrayAnimales);

// 3. Elimina el que se encuentra en tercera posición

delete ArrayAnimales[3]
console.log (ArrayAnimales);

// 4. Crea un set que almacene cinco libros

NewSet = new Set(["Github","Microsoft","AZ-104", "GDL", "ACE"])
console.log(NewSet)

// 5. Añade dos más. Uno de ellos repetido

NewSet.add ("https://www.github.com")
NewSet.add ("https://www.github.com")
NewSet.add ("https://www.google.com")
console.log(NewSet)

// 6. Elimina uno concreto a tu elección

NewSet.delete("https://www.google.com")
console.log(NewSet)

// 7. Crea un mapa que asocie el número del mes a su nombre

NewSetNombre = new Set("AngelManuel")

if (NewSetNombre.size == 1) {
        console.log("Mes de Enero")}
    else if (NewSetNombre.size == 5) {
        console.log("Mes de Mayo")}
    else {console.log("No hay mes de coincidencia")}

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

TestExistMap = new Set(["1","3","5","AngelManuel"])
console.log ("Es => " + TestExistMap.has("5"))

// 9. Añade al mapa una clave con un array que almacene los meses de verano

let NewMap = new Map()

NewMap = new Map ([
    ["name" , "Angel"],
    ["edad" , 45],
    ["modo" , "dev"]
])



console.log (NewMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

ArrayTrans = ["Hola","Adios"]
SetFromArrayTrans = new Set(ArrayTrans)
console.log (typeof(SetFromArrayTrans))

