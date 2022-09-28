// ESTRUCTURAS DE CONTROL
// Bifurcaciones if.... else

let saldo = 50;
let efectivo = 320;

if(efectivo < saldo){
    console.log("podes retirar")
}

if (efectivo < saldo){
    console.log("podes retirar")
} else{
    console.log("no podes retirar")
}



// if else + if else

let nota = 3;

if (nota === 5){
    console.log("genial, excelente")
} else if(nota === 4) { 
    console.log(":/")
} else if (nota === 3) {
    console.log(":(")
}else if (nota === 2) {
    console.log(":c")
}else if (nota === 1) {
    console.log(":cc")
}


// sentencia switch

let notas = 5;

switch (notas){
    case 5:
        console.log("buen trabajo, sobresaliente");
        break;
    case 4:
        console.log("caso aprobaste");
        break;
    case 3:
        console.log("mal");
        break;
    case 2:
        console.log("muy mal");
        break;
}

// for

// for (inicializacion; condicion; actualizacion;){
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let lista= [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < lista.length; i++){
    console.log(lista[i])
}


// for of

for (let valor of lista)  {
    console.log(valor)
}

// for each

lista.forEach(valor => {
    console.log(valor)
})

// for in
let persona = {
    nombre: "persona",
    apellido: "apellido",
    edad: 32,
    ispersona: true,
}

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}

