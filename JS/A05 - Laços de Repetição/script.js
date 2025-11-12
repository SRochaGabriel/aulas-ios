/* 
    LAÇOS DE REPETIÇÃO são estruturas utilizadas para executar instruções mais de uma vez, ou seja, criar loops de repetição de uma ou mais instruções com um número limitado de vezes.

    Existem 3 tipos de laços de repetição:
        - WHILE (testa uma condição e, caso ela seja verdadeira, executa as instruções definidas. o loop se mantém até que a condição retorne False)
            while (CONDIÇÃO) {
                INSTRUÇÕES
            }

        - DO WHILE (primeiro executa as instruções, depois confere se a condição para continuar o loop é verdadeira)
            do {
                INSTRUÇÕES
            } while (CONDIÇÃO);

        - FOR (é usado quando sabemos quantas vezes queremos que as instruções sejam executadas, geralmente na inicialização é iniciada uma variável que serve como contador, na condição definimos uma regra que garante quantas vezes o loop irá se repetir e no incremento acrescentamos valor ao contador)
        for (INICIALIZAÇÃO; CONDIÇÃO; INCREMENTO) {
            INSTRUÇÕES
        }
*/

//--------------------------------------------------------------
/* 
Aqui, na estrutura do FOR definimos a nossa inicialização como a variável i com valor i.
A condição a ser testada para executar as instruções é se o valor i é menor ou igual a 5.
Depois de testar a condição, o bloco executa as instruções (nesse caso, de imprimir no console o valor de i) e retorna ao incremento (ou seja, caso i seja 1, ele incrementa + 1, i se torna 2 e o loop volta para o teste da condição)

    Esse processo se mantém até que a condição retorne como falsa.
*/
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.clear();

//--------------------------------------------------------------
for (let fatia = 1; fatia <= 8; fatia++) {
    console.log(`Comendo ${fatia} fatias de pizza...`);
}
console.log('Já comi uma pizza inteira! Melhor parar antes que me expulsem do rodízio.');

console.clear();

//--------------------------------------------------------------
for (let tempo = 60; tempo >= 0; tempo--) {
    if (tempo > 0) {
        console.log(`Essa bomba vai explodir em ${tempo} segundos...`);
    } else {
        console.log('BOOOOOOOOOOOOOOM!!!!!');
    }
}

/*
let tempo = 10;

function contRegressiva(tempo) {
    setTimeout(() => {
        console.log(`Essa bomba vai explodir em ${tempo} segundos...`);
        tempo--;

        if (tempo > 0) {
            contRegressiva(tempo);
        } else {
            console.log('BOOOOOOOOOOOOOOM!!!!!!!!!');
        }
    }, 1000);
}

contRegressiva(tempo);
*/

console.clear();

//--------------------------------------------------------------
let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador++;
}

console.clear();

//--------------------------------------------------------------
/*
    let numSecreto = 4;
    let tentativa = 0;
    let chute;

    while (chute != numSecreto && tentativa < 3) {
        chute = Number(prompt('Tente adivinhar o número secreto (entre 1 e 100):'));

        if (chute === numSecreto) {
            alert('Parabéns, você ganhou o jogo!');
        } else if (tentativa < 3) {
            alert('Errou, tente novamente');
            tentativa++;
        }
    }

    if (chute != numSecreto) {
        alert('Perdeu o jogo, suas tentativas acabaram.');
    }
*/