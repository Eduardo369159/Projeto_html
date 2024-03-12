// let num1 = parseFloat(prompt('Digite um número: '));
// let num2 = parseFloat(prompt('Digite outro número: '));

// if (num1 < num2){
//     document.write(num1,' é menor que ', num2);
// } else if((num1 === num2)){
//     document.write(num1,' é igual de ', num2);
// } else if((num1 > num2)){
//     document.write(num1,' é maior de ', num2);
// };

const pontuacaoUsuario = parseFloat(prompt('Digite a pontuação do usuario: '))
if (pontuacaoUsuario > 1000){
    document.write('Este usuário é VIP')
} else {
    document.write('Este usuário não é VIP')
}