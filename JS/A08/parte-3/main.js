// Acessando o parágrafo de id 'resposta' pelo DOM
let resposta = document.getElementById('resposta');

// Função de operação que recebe como parâmetro uma string que identifica qual operação deve ser realizada
function operacao(tipoOperacao) {
    // Recebendo os valores a passarem pela operação
    const valor1 = Number(document.getElementById('valor1').value);
    const valor2 = Number(document.getElementById('valor2').value);

    // Variável de resultado
    let resultado;

    // Verificando qual o valor de 'tipoOperacao' e exibindo a resposta de acordo
    if (tipoOperacao === 'soma') {
        resultado = valor1 + valor2;
    } else if (tipoOperacao === 'subtracao') {
        resultado = valor1 - valor2;
    } else if (tipoOperacao === 'multiplicacao') {
        resultado = valor1 * valor2;
    } else if (tipoOperacao === 'divisao') {
        resultado = valor1 / valor2;
    }

    // Exibe a resposta
    resposta.innerText = `O resultado é ${resultado}`;
}
