// //COMPRA DE MATERIALES PARA OBRA - SEGUNDA PRE-ENTREGA
let esCorrecto = false
let nombre = "";

while (nombre === "" || nombre === null) {
    nombre = prompt("Binvenido/a, por favor, ingresa tu nombre:");

    if (nombre === "" || nombre === null) {
        alert("El nombre no puede estar vacío. Por favor, inténtalo de nuevo.");
    }
}

alert("¡ Hola, " + nombre + " Bienvenido/a !.");


const carrito = []

const materiales = [
    { id: 1, nombre: "cemento", precio: 1000, categoria: "construccion" },
    { id: 2, nombre: "hormigon", precio: 1500, categoria: "construccion" },
    { id: 3, nombre: "ceramica", precio: 200, categoria: "interior" },
    { id: 4, nombre: "chapa", precio: 300, categoria: "exterior" },
    { id: 5, nombre: "madera", precio: 150, categoria: "construccion" },
    { id: 6, nombre: "porcelanato", precio: 500, categoria: "interior" },
    { id: 7, nombre: "dvh", precio: 400, categoria: "interior" },
    { id: 8, nombre: "aluminio", precio: 1400, categoria: "construccion" },
    { id: 9, nombre: "metal", precio: 400, categoria: "construccion" },
    { id: 10, nombre: "arena", precio: 150, categoria: "construccion" },
    { id: 11, nombre: "cal", precio: 100, categoria: "construccion" },
    { id: 12, nombre: "ladrillo", precio: 300, categoria: "construccion" },
    { id: 13, nombre: "acero", precio: 300, categoria: "construccion" },
    { id: 14, nombre: "vigas", precio: 2000, categoria: "construccion" },
    { id: 15, nombre: "losa", precio: 1600, categoria: "exterior" },
]

function comprar() {
    let seleccion = prompt("Seleccione los materiales que desea comprar: \n -Cemento \n -Hormigon \n -Ceramica \n -Chapa \n -Madera \n -Porcelanato \n -Dvh \n -Aluminio \n -Metal \n -Arena \n -Cal \n -Ladrillo \n -Acero \n -Vigas \n -Losa").toLowerCase();
    const productoSeleccionado = materiales.find((item) => item.nombre === seleccion.toLowerCase());
    if (productoSeleccionado) {
        alert("Usted añadio " + seleccion + " al carrito")
        carrito.push(productoSeleccionado)
    } else {
        alert("Ingrese materiales que esten en stock")
        comprar();
    }
}
comprar();


function otraVez() {
    let seguir = prompt("¿Desea seguir añadiendo materiales a su carrito de compra? SI/NO")
    switch (seguir) {
        case "si":
            comprar();
            otraVez();
            break;
        case "no":
            alert("Procedemos a realizar el pago")
            break;
        default:
            if (seguir != "si" || seguir != "no") {
                alert("La celda no puede estar vacía o ingresó un valor incorrecto. Por favor, inténtalo de nuevo.");
                otraVez();
            }
    }
}

otraVez();
console.log(carrito);





function pagar() {
    let pago = prompt("Indique su metodo de pago: \n -Efectivo \n -Debito \n -Credito").toLowerCase();
    const sumaTotal = carrito.map((item) => item.precio)
    const precioFinal = sumaTotal.reduce((acumulador, item) => acumulador + item, 0)

    switch (pago) {
        case "efectivo":
            alert("El total es $" + precioFinal + " . Recibira una boleta electronica en su casilla de correo para realizar el pago en en el Rapi Pago mas cercano.")
            break;
        case "debito":
            let debito = (prompt("Ingrese los numeros de su Tarjeta:"));
            if(debito.trim()==="" || isNaN(debito)){
                alert("La celda no puede quedar vacía ni admitir strings. Por favor, inténtelo de nuevo.");
                debito = (prompt("Ingrese los numeros de su Tarjeta:"));
            }else{
                alert("El total es $ " + precioFinal + " . Recibirá su ticket digital en su casilla de correo")
            }
            break;
            case "credito":
                
                
                alert("Su compra tendra un recargo de IVA, su total es " + precioFinal * 1.21)
                alert("Recibirá su ticket digital en su casilla de correo")
                break;
                default:
                    alert("La opción ingresada no es válida. Por favor, inténtelo de nuevo.");
                    pagar();
                    break;
                }
            }
            
            pagar();
            
            alert("Su compra finalizó, muchas gracias por visitar nuestro sitio web")