// Ejercicio 1
// Menor 13 1000
// Entre 13 y 17 1500
// Mayor 17 2000
// Menor a 5 o mayor a 80 Gratis

const edad = parseInt(prompt("Ingrese su edad: "))
//Gratis
if (edad <= 5 || edad >= 80) {
    alert("Su entrada es gratis")
}
// Menor 13
else if (edad <= 12) {
    alert("Su entrada cuesta $1000")
}
//Entre 13 y 17
else if (edad >= 13 && edad <= 17) {
    alert("Su entrada cuesta $1500")
}
//Mayor 17
else if (edad >= 18) {
    alert("Su entrada cuesta $2000")
}
//Desconocido
else {
    alert("Desconozco su edad")
}

console.log(edad);