// Comentário em javaascript
let nome = prompt("Digite o seu nome");
let sobrenome = prompt("Digite o seu sobrenome");
let idade = prompt("Digite a sua idade");
let peso = parseInt(prompt("Digite o seu peso"));
let altura = parseFloat(prompt("Digite a sua altura"));
let imc = peso / (altura * altura);

document.write(`<p>Olá, ${nome} ${sobrenome}! Você tem ${idade} anos, pesa ${peso}kg e tem ${altura}m de altura.</p>`);
document.write(`<p>O seu IMC é: ${imc}.</p>`);



