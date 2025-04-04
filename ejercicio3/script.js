// Ejercicio 3
/* Mostrar resultado con alert
IMC < 18.5 → "Bajo peso"

18.5 a 24.9 → "Peso normal"

25 a 29.9 → "Sobrepeso"

30 o más → "Obesidad"
 */
const peso = parseFloat(prompt("Ingrese su peso: (87.6 kg ejemplos) "))
const altura = parseFloat(prompt("Ingrese su altura: (1.74 mts ejemplos) "))
const imc = peso / (altura * altura)
console.log(imc)

if (imc < 18.5) {
    alert("Bajo peso")
}
else if (imc >= 18.5 && imc <= 24.9) {
    alert("Peso normal")
} else if (imc >= 25 && imc <= 29.9) {
    alert("Sobrepeso")
} else {
    alert("Obesidad")
}