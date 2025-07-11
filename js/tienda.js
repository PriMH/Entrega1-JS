
const juegos = ["FIFA 25", "Minecraft", "Elden Ring", "GTA VI"];
const precios = [70, 30, 60, 100];
let carrito = [];


function mostrarMenu() {
    let menu = "¿Qué juego deseas comprar?\n";
    for (let i = 0; i < juegos.length; i++) {
        menu += (i + 1) + ". " + juegos[i] + " - $" + precios[i] + "\n";
    }
    menu += "0. Finalizar compra";
    return prompt(menu);
}


function agregarAlCarrito(opcion) {
    const indice = opcion - 1;

    if (indice >= 0 && indice < juegos.length) {
        carrito.push({
            nombre: juegos[indice],
            precio: precios[indice]
        });
        alert("Agregaste " + juegos[indice] + " al carrito por $" + precios[indice]);
    } else {
        alert("Opción inválida.");
    }
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("No compraste ningún juego.");
        return;
    }

    let total = 0;
    let resumen = "Resumen de tu compra:\n\n";

    for (let i = 0; i < carrito.length; i++) {
        resumen += "- " + carrito[i].nombre + ": $" + carrito[i].precio + "\n";
        total += carrito[i].precio;
    }

    resumen += "\nTotal a pagar: $" + total;

    alert(resumen);
    console.log("Compra finalizada. Total: $" + total);
    console.log("Detalles del carrito:", carrito);
}


function simuladorTienda() {
    let opcion;

    do {
        opcion = parseInt(mostrarMenu());
        if (opcion > 0 && opcion <= juegos.length) {
            agregarAlCarrito(opcion);
        } else if (opcion !== 0) {
            alert("Selecciona una opción válida.");
        }
    } while (opcion !== 0);

    finalizarCompra();
}

simuladorTienda();
