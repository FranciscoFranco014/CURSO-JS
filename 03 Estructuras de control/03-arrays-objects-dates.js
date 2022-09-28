// ARRAYS
const list1 = [1, "hi", false, null];
const list2 = new Array(2, "hola", true, null);
const list3 = new Array(4)


console.log(list1, list2)
console.log(list3)

// OBJECTS

const movil = {
    altura: 10,
    anchura: 154,
    marca: "smsung",
    contactos: [1, 2, 3, 4, 5],
    tarjeta: {
        marca: "asd",
        almacenamiento: "256gb",
    }
}

console.log(movil)
console.log(movil.tarjeta.almacenamiento)

// fechas moments.js

const ahora = new Date();
console.log(ahora)


const fecha_miliseg = new Date(10);
console.log(fecha_miliseg)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores)

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1;
const anio = ahora.getFullYear();

console.log(dia, mes, anio)

