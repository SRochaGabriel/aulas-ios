// Trabalhando com estruturas condicionais
/*
    OPERADORES RELACIONAIS (utilizados para realizar comparações):
        == (retorna True se os valores forem iguais)
        === (retorna True se os valores e tipo de dado forem iguais)
        != (retorna True se os valores forem diferentes)
        < (retorna True se o primeiro valor for menor do que o segundo)
        > (retorna True se o primeiro valor for maior do que o segundo)
        <= (retorna True se o primeiro valor for menor do que OU igual ao o segundo)
        >= (retorna True se o primeiro valor for maior do que OU igual ao o segundo)

    OPERADORES CONDICIONAIS (utilizados para determinar condições):
        if ("se", determina uma condição)
        else ("senão", determina o caso em que a condição if não é verdadeira)

    ESTRUTURA CONDICIONAL:
        if (condição) {
            [bloco a ser executado caso a condição retorne True]
        } else {
            [bloco a ser executado caso a condição retorne False] 
        }
        
    ESTRUTURA CONDICIONAL MÚLTIPLA:
        if (condição) {
            [bloco a ser executado caso a condição retorne True]
        } else if (condicao) {
            [bloco a ser executado caso a condição retorne True] 
        } else {
            [bloco a ser executado caso nenhuma das outras condições retorne True]
        }

    OPERADORES LÓGICOS:
        && (operador AND, requer que TODAS as condições sejam verdadeiras para retornar True)
        || (operador OR, requer que pelo menos uma das condições sejam verdadeiras para retornar True)
        ! (operador NOT, inverte os resultados booleanos, ou seja, retorna False quando a condição é True e retorna True quando a condição é False)
*/

// ---------------------------------------------------------------------------------------------------------------------
// variável interruptor, nesse exemplo daremos a ela valores 'on' ou 'off' (ligado ou desligado)
const interruptor = 'on';

// caso o valor de interruptor seja 'on', imprime a mensagem 'luz acessa!' no console
if (interruptor == 'on') {
    console.log('Luz acessa!');
} else { // caso o valor de interruptor NÃO SEJA 'on', imprime a mensagem 'luz apagada.' no console
    console.log('Luz apagada.');
}

console.clear() // Limpando o console, caso queira ver o código desse bloco funcionando, basta apagar ou comentar essa linha

// ---------------------------------------------------------------------------------------------------------------------
// Aqui, definimos uma variável 'a' e uma variável 'b' do tipo STRING com valor 10
const a = '10';
const b = '10';

// Aqui, comparamos se o valor da variável 'a' é igual a 10 do tipo NUMBER
// Como estamos utilizando o operador relacional ==, que compara apenas os valores, esse if retorna verdadeiro.
if (a == 10) {
    console.log('O valor da variável "a" é 10.');
}

// Aqui, comparamos se o valor da variável 'b' é igual a 10 do tipo NUMBER
/*
Como estamos utilizando o operador relacional ===, que compara os valores e tipo de dado, esse if retorna falso.
Isso porque o valor da variável 'b' é 10, mas do tipo STRING, enquanto o if compara 'b' ao valor 10, mas do tipo NUMBER.
*/
if (b === 10) {
    console.log('O valor da variável "b" é 10.');
}

console.clear() // Limpando o console, caso queira ver o código desse bloco funcionando, basta apagar ou comentar essa linha

// ---------------------------------------------------------------------------------------------------------------------
// Aqui, definimos uma variável 'nome'
const nome = 'Pedro';

// Agora determinamos uma condição que avalia se o valor da variável 'nome' é DIFERENTE de 'João'
if (nome != 'João') {
    console.log('Nome inválido.');
}

console.clear() // Limpando o console, caso queira ver o código desse bloco funcionando, basta apagar ou comentar essa linha

// ---------------------------------------------------------------------------------------------------------------------
// Aqui, criamos uma variável 'idade' com valor 16 do tipo NUMBER
const idade = 16;

// Verificamos se o valor da variável 'idade' é MENOR do que 18
if (idade < 18) {
    console.log('Apenas maiores de idade podem acessar o evento, seu acesso foi negado.');
}

// Verificamos se o valor da variável 'idade' é MAIOR do que 16
if (idade > 15) {
    console.log('Curiosidade: caso estivéssemos nos EUA, tendo 16 anos, você já poderia dirigir! Mas você está no Brasil, correto? Então pode ir pegar o metrô.');
}

console.clear() // Limpando o console, caso queira ver o código desse bloco funcionando, basta apagar ou comentar essa linha

// ---------------------------------------------------------------------------------------------------------------------
/*
// Armazenando o pedido que o usuário faz para uma hamburgueria
let pedido = prompt('Boa tarde, qual o seu pedido? Temos no nosso cardápio: X-Bacon, X-Salada ou X-Burguer.').toLowerCase();

// Verificando a resposta do usuário para o prompt acima
if (pedido=== 'x-bacon') {
    alert(`Entendido! Seu X-Bacon está sendo preparado e ficará pronto em aproximadamente 20 minutos.`);
} else if (pedido === 'x-salada') { // Com 'else if', dizemos para o código que, caso a condição acima seja falsa, ele deve testar esse novo IF
    alert(`Entendido! Seu X-Salada está sendo preparado e ficará pronto em aproximadamente 15 minutos.`);
} else if (pedido === 'x-burguer') {
    alert(`Entendido! Seu X-Burguer está sendo preparado e ficará pronto em aproximadamente 10 minutos.`);
} else {
    alert('Parece que você inseriu alguma resposta inválida ou solicitou um lanche que não temos em nosso cardápio! Por favor, insira um dos valores entre: X-Bacon, X-Salada ou X-Burguer.');
    window.location.reload();
}
*/

// ---------------------------------------------------------------------------------------------------------------------
// Verifica se o usuário tem condições de sair para um programa de lazer com base em duas condições
let clima = prompt('Como está o clima hoje? É um dia de sol ou chuva?').toLowerCase();
let temDinheiro = prompt('E tem dinheiro sobrando pra gastar esse mês? Sim ou não?');

if (clima === 'sol' && temDinheiro === 'sim') {
    alert('Ótimo! Partiu rolê!');
} else {
    alert('Melhor ficar em casa vendo televisão... Nem queria sair mesmo!');
}