alert('Vamos jogar um jogo. Você terá 3 tentativas para tentar acertar o número secreto (um número de 0 a 10). Boa sorte!');

let tentativas = 3;
const numSecreto = 6;

while (tentativas > 0) {
    let num = Number(prompt('Insira o número'));

    if (num === numSecreto) {
        alert('Parabéns! Você adivinhou o número secreto e ganhou o jogo! Seu prêmio é poder se gabar de ter vencido um jogo tão difícil');
        break;
    } else {
        tentativas--;
        alert(`Errou miseravelmente! Agora te restam apenas ${tentativas} tentativas...`);
    }
}

if (tentativas === 0) {
    alert('Você perdeu o jogo! Como punição por esse fracasso, terá que fazer uma prova de Javascript no meu lugar!');
}