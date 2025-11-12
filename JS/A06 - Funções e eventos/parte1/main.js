/*
    SINTAXE DE FUNÇÕES

    Função simples:
    function nomeDaFunção() {
        INSTRUÇÕES
    }

    Função com parâmetros:
    function nomeDaFunção(parâmetro1, parâmetro2, ..., parâmetroN) {
        INSTRUÇÕES
    }
*/

// Definindo uma função que realiza uma saudação
function saudacao() {
    alert('Olá!');
}

// Chamando a função para ser executada
// saudacao()

// Definindo uma função que recebe dois valores e soma eles
function soma() {
    let valor1 = Number(prompt('Digite o primeiro valor:'));
    let valor2 = Number(prompt('Digite o primeiro valor:'));
    let resultado = valor1 + valor2; // Realiza a soma e armazena a resposta na variável 'resultado'

    alert(resultado); // Define que a função irá retornar o valor da variável 'resultado'
}

// Aqui, chamamos a função soma dentro de um console.log
// Entre aspas, na função soma, passamos o valor 5 (que irá ocupar a posição do parâmetro 'valor1') e o valor 10 (que irá ocupar a posição do parâmetro 'valor2'). Assim, essa função irá somar 5 + 10 e retornar 15.
/*
    console.log(soma(5, 10));
    console.log(soma(6, 6)); // Aqui, passamos para serem somados os valores 6 + 6
    console.log(soma(9, 30)); // Aqui, passamos para serem somados os valores 9 + 30
*/

// Definindo uma função que pede um número para o usuário e retorna o dobro deste número
function dobro() {
    let valor = Number(prompt('Digite um número:'));
    alert(valor * 2);
}

// Definindo uma função que pede para o usuário digitar o nome e retorna uma mensagem personalizada pra ele
function saudacaoPersonalizada() {
    let nome = prompt('Por favor, informe seu nome:');

    alert(`Olá, ${nome}, seja bem vindo!`);
}

// Definindo uma função que calcula o valor de um produto com desconto e retorna uma mensagem de alerta informando o valor final
function calculaDesconto() {
    let valor = Number(prompt('Informe o valor total do produto:'));
    let porcentagem = Number(prompt('Informe a porcentagem de desconto a ser aplicado:'));

    const valorFinal = valor - (valor * (porcentagem / 100));

    alert(`O valor final a ser pago é de R$ ${valorFinal}`);
}