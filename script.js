let listaDeSuper = [];

listaDeSuper.push("Agua");
listaDeSuper.push("Fruta");
listaDeSuper.push("Queso");
listaDeSuper.push("Arroz");
listaDeSuper.push("Huevo");
listaDeSuper.push("Galletitas");
listaDeSuper.unshift("Jugo");
listaDeSuper.unshift("Fideos");

console.log(listaDeSuper[0]);

let ultimoElemento = listaDeSuper.length - 1;

console.log(listaDeSuper[ultimoElemento]);

console.log(listaDeSuper.length);

let noHabia = listaDeSuper.pop();

let comprado = listaDeSuper.shift();

console.log(listaDeSuper.length);

function logItems(lista) {
    lista.forEach(function(producto, indice) {
        console.log(indice + ": " + producto);
    });
}

let opcion = "";

while (opcion !== "salir") {
    opcion = prompt("SÚPER APP\n\nEscribí una opción:\n\nnuevo\nlistar\nborrar\nsalir");

    if (opcion === null) {
        break;
    }

    opcion = opcion.toLowerCase().trim();

    if (opcion === "nuevo") {
        let producto = prompt("Ingresá el nombre del producto:");

        if (producto !== null && producto.trim() !== "") {
            listaDeSuper.push(producto.trim());
            console.log("Producto agregado: " + producto.trim());
        } else {
            console.log("No se agregó ningún producto.");
        }

    } else if (opcion === "listar") {
        console.log("Lista de supermercado:");
        logItems(listaDeSuper);

    } else if (opcion === "borrar") {
        console.log("Lista de supermercado:");
        logItems(listaDeSuper);

        let indice = prompt("Ingresá el índice del producto que querés eliminar:");

        if (indice !== null && indice.trim() !== "" && Number.isInteger(Number(indice)) && Number(indice) >= 0 && Number(indice) < listaDeSuper.length) {
            let productoEliminado = listaDeSuper.splice(Number(indice), 1);
            console.log("Producto eliminado: " + productoEliminado[0]);
            console.log("La lista fue actualizada.");
        } else {
            console.log("Índice inválido. No se eliminó ningún producto.");
        }

    } else if (opcion === "salir") {
        console.log("Programa finalizado.");

    } else {
        console.log("Opción no válida. Elegí nuevo, listar, borrar o salir.");
    }
}
