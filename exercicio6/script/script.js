// Strings são indexadas, ou seja, cada caractere possui um índice
//               0123456789
//let umaString = "O rato roeu a roupa do rei de roma.";
let umaString = prompt('Digite uma frase: ');
document.write(`<p>${umaString}</p>`); // exibe o texto original
document.write(`<p>${umaString[4]}</p>`); // exibe o caractere na posição 4
document.write(`<p>${umaString.charAt(4)}</p>`); // exibe o caractere na posição 4
document.write(`<p>${umaString.concat(' em um lindo dia.')}</p>`); // concatena o texto
document.write(`<p>${umaString + ' em um lindo dia.'}</p>`); // concatena o texto
document.write(`<p>${umaString} em um lindo dia.</p>`); // concatena o texto
document.write(`<p>${umaString.indexOf('roupa')}</p>`); // exibe a posição da palavra roupa
document.write(`<p>${umaString.indexOf('o', 3)}</p>`); // exibe a posição da letra o a partir da posição 3
document.write(`<p>${umaString.lastIndexOf('r', 3)}</p>`); // exibe a posição da letra r a partir da posição 3, de trás para frente
document.write(`<p>${umaString.match(/[a-z]/g)}</p>`); // exibe todas as letras minúsculas
document.write(`<p>${umaString.search(/e/)}</p>`); // exibe a posição da letra e

//document.write(`<p>${umaString.replace('rato', 'gato')}</p>`); // substitui a palavra rato por gato

let posicao1 = umaString.indexOf(' ');
let posicao2 = umaString.indexOf(' ', posicao1 + 1);
document.write(`<p>${umaString.slice(posicao1, posicao2)}</p>`); // exibe o texto entre a primeira e a segunda palavra

document.write(`<p>${umaString.replace(/r/g, '#')}</p>`); // substitui todas as letras r por #
document.write(`<p>${umaString.length}</p>`); // exibe o tamanho da string
document.write(`<p>${umaString[umaString.length - 1]}</p>`); // exibe o último caracterer da string
document.write(`<p>${umaString.slice(2, 6)}</p>`); // exibe o texto entre as posições 2 e 6
document.write(`<p>${umaString.slice(-5)}</p>`); // exibe os 5 últimos caracteres
document.write(`<p>${umaString.slice(-5, -1)}</p>`); // exibe os caracteres entre a posição -5 e -1
document.write(`<p>${umaString.split(' ', 3)}</p>`); // exibe o texto dividido por espaço, limitado a 3
document.write(`<p>${umaString.toUpperCase()}</p>`); // exibe o texto em maiúsculas
document.write(`<p>${umaString.toLowerCase()}</p>`); // exibe o texto em minúsculas