/*function saudacao(nome) {
    document.write(`<p>Olá, ${nome}!</p>`);
}
let meuNome = prompt('Digite seu nome:');
saudacao(meuNome);
*/
/*function soma(a, b) {
    return a + b;
}
let num1 = parseInt(prompt('Digite o primeiro número:'));
let num2 = parseInt(prompt('Digite o segundo número:'));
document.write(`<p>A soma de ${num1} e ${num2} é ${soma(num1, num2)}.</p>`);
*/
const raizQuadrada = function(a){
    return a ** 0.5;
}
let num = parseInt(prompt('Digite um número:'));
document.write(`<p>A raiz quadrada de ${num} é ${raizQuadrada(num)}.</p>`);

const raiz2 = b => b ** 0.5; //arrow function
document.write(`<p>A raiz quadrada de ${num} é ${raiz2(num)}.</p>`);