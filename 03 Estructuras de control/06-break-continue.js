// casos especificos, break y continue

let lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (var i = 0; i < lista.length; i++) {

    if(lista[i] === 3){
        continue;
    }
    let j = 50;
    let k = 100;

    console.log(lista[i]);

    if(lista[i] > 6){
        break;
    }
}


// ambito de un bucle
console.log(i);

console.log(k);
console.log(j);



