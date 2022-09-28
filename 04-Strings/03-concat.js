// Formas de concatenar texto

let str1 = "   Hola soy la primer cadena.  "
let str2 = "y yo soy la segunda"

console.log(str1.concat(" ", str2))

console.log(str1 + " " + str2)

// eliminar espacios al final y principios de una cadena de str
console.log(str1.trim())

//obtener la posicion de una palabra dentro de una cadena de str

let str4 = "mi nombre es francisco, estudio IC y me gusta la programacion"
console.log(str4.indexOf("francisco"))
console.log(str4.charAt("3"))