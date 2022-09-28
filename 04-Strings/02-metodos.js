//metodos mas utilizados con cadenas de str

// como obtener la long de un str

var str = "hola soy un str";
console.log(str.length)

// obtener partes de cadenas de str
// slice() substring() 

var slice_str = str.slice(1,14)
console.log(slice_str) 

let substring_str = str.substring(1,14)
console.log(substring_str)

// reemplazar partes de cadena de str
// replace()

let name = "Mi nombre es Francisco"
console.log(name)

console.log(name.replace("Francisco", "pepe"))


let texto = "tito no es un mono cualquiera. A tito le gusta trepar por los arboles y odia comer platanos. El prefiere pasear por el obsque, oler las flores y recoger las nueces que caen de los arboles"


// al utilizar strings solo reemplaza la primer instancia que reconoce
console.log(texto.replace("los", "cinco"))

// al utilizar la expression regular  /g, reemplaza todas las instancias
console.log(texto.replace(/los/g, "cinco"))

