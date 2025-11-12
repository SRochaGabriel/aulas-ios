// Função que mudará o texto de um elemento HTML via DOM
function mudaTexto() {
    if (document.getElementById('texto').innerText === 'Gabriel') {
        // Utilizando o 'document' somado ao método 'getElementById' para acessar um elemento do HTML pelo seu ID
        // Depois utilizamos a propriedade 'innerText' para alterar o texto do elemento acessado
        document.getElementById('texto').innerText = 'Sousa';
    } else {
        document.getElementById('texto').innerText = 'Gabriel';
    }
}