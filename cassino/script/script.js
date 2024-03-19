// alert('Bem vindo ao cassino');
// alert('É bom te ver aqui de novo');
let dinheiro = parseFloat(2500)
let aposta = 0
let num1 = 0
//let num_sorte = math.floor(math.random() * 5)

alert('Vou sortear um numero de 1 a 5 se você acertar, você dobra seu dinheiro, se perder, perde tudo!!!');
while (final == true){
    aposta = parseFloat(prompt('Quanto quer apostar dessa vez? você tem: R$',dinheiro,' Reais'))
    num1 = parseFloat(prompt('Qual numero quer apostar? vou sorter um entre 1 e 5, boa sorte: '))
    if (num1 == num_sorte){
        dinheiro = dinheiro+aposta
        alert('Wow, parabens, você ganhou, agora você tem R$',dinheiro + aposta)
    } else {
        dinheiro = dinheiro-aposta
        alert('Eu sabia, você perdeu, agora tem R$',dinheiro - aposta)
    };
    let final = parseInt(prompt('Quer parar? 1 = não, 2 = sim : '))
    if (final == 1){
        alert('Vamos lá')
    } else {
        alert('que pena')
        break
    }
    break
};








