function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}
function resto(a, b) {
    return a % b;
}

let num1 = parseFloat(prompt('Digite um número: '));
let num2 = parseFloat(prompt('Digite outro número: '));
document.write(`<p>${num1} + ${num2} = ${soma(num1, num2)}</p>`);
document.write(`<p>${num1} - ${num2} = ${subtracao(num1, num2)}</p>`);
document.write(`<p>${num1} * ${num2} = ${multiplicacao(num1, num2)}</p>`);
document.write(`<p>${num1} / ${num2} = ${divisao(num1, num2)}</p>`);
document.write(`<p>${num1} % ${num2} = ${resto(num1, num2)}</p>`);
