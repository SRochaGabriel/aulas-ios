// Capturando o elemento div de id 'caixa' do HTML e associando à variável caixa
const caixa = document.getElementById('caixa');

// Função para quando o mouse está em cima do elemento
function entrar() {
    caixa.style.backgroundColor = '#E61E1E';
    caixa.style.color = '#fff';
    caixa.innerText = 'Alerta de intruso!';
}

// Função para quando o mouse sai do elemento
function sair() {
    caixa.style.backgroundColor = '#B3ABAB';
    caixa.style.color = '#000';
    caixa.innerText = 'Passe o mouse e veja a cor de fundo mudar';
}