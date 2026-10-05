let listaDeSuper = [];

listaDeSuper.push("Agua");

listaDeSuper.push("Fruta");

listaDeSuper.push("Queso");

listaDeSuper.push("Arroz");

console.log(listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;

console.log(listaDeSuper[ultimoElemento]);

listaDeSuper.push("Huevo");
listaDeSuper.push("Galletitas");

listaDeSuper.unshift("Jugo");
listaDeSuper.unshift("Fideos");

console.log(listaDeSuper.length);

let noHabia = listaDeSuper.pop();

let comprado = listaDeSuper.shift();

console.log(listaDeSuper.length);