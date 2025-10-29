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