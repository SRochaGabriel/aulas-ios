// Definindo a função que altera a cor de fundo com base no valor do select
function mudaCor() {
    let corEscolhida = document.getElementById('cor').value;
    
    // Caso o valor seja red
    if (corEscolhida === 'red') {
        // Acessa a propriedade background-color do estilo do elemento 'body'
        document.body.style.backgroundColor = '#FF3333';
    } else if (corEscolhida === 'green') { // Caso o valor seja green
        document.body.style.backgroundColor = '#33FF58';
    } else if (corEscolhida === 'blue') { // Caso o valor seja blue
        document.body.style.backgroundColor = '#3392FF'
    } else { // Caso não seja nenhum dos valores acima, o background fica branco
        document.body.style.backgroundColor = '#FFF'
    }
}