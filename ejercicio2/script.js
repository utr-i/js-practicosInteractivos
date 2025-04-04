// Práctico 2

const total = parseInt(prompt("Ingrese el total de la cuenta: "));
const calidadServicio = prompt("¿Qué tal estuvo el servicio? (malo, bueno o excelente)");
calidadServicio.toLowerCase();
let propina = 0;

if (calidadServicio === "malo") {
    propina = 0.10;
    alert("La propina es del 10%")
}
else if (calidadServicio === "bueno") {
    propina = 0.15;
    alert("La propina es del 15%")
}
else if (calidadServicio === "excelente") {
    propina = 0.20;
    alert("La propina es del 20%")
}
else {
    alert("Respuesta incorrecta para la calidad del servicio");
}

alert("La propina fue considerada como: " + calidadServicio + " y deberá pagar $" + (total * propina + total));