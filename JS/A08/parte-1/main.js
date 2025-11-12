// Definindo uma variável que determina o estado do tema do site por meio de valor booleano
let mudou = false;

// Acessando o botão pelo DOM
const btn = document.querySelector('button');

// Definindo uma função que altera o tema do site
function mudaTema() {
    // Caso o valor da variável 'mudou' seja false (o padrão dela), definimos a cor alternativa para o fundo da página, para o fundo do botão e para o texto do botão, e em seguida invertemos o valor da variável para true
    if (mudou == false) {
        document.body.style.backgroundColor = '#222';
        btn.style.color = '#222';
        btn.style.backgroundColor = '#fff';
        mudou = true;
    } else { // Caso o valor da variável 'mudou' seja true, redefinimos as cores da página para o padrão e invertemos o valor da variável para false
        document.body.style.backgroundColor = '#fff';
        btn.style.color = '#fff';
        btn.style.backgroundColor = '#222';
        mudou = false;
    }
}