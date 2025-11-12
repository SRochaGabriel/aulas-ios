// Acessando o parágrafo do HTML que receberá a resposta da comparação de senhas
const mensagem = document.getElementById('mensagem');

// Definindo a função que compara as senhas e é acionada ao clicar do botão
function comparaSenha() {
    // Acessando os inputs via DOM e armazenando em variáveis os valores digitados pelo usuário
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirm-senha').value;
    console.log(senha)
    console.log(confirmSenha)

    // Aqui, verificamos se o valor da senha OU o da confirmação da senha está vazio. Caso esteja, o parágrafo 'mensagem' recebe uma cor de texto vermelha e texto que informa que o usuário precisa preencher os dois campos de senha
   if (senha === '' || confirmSenha === '') {
    mensagem.style.color = '#966705';
    mensagem.innerText = 'Por favor, preencha as duas senhas.';
   }
   // Aqui, verificamos se o valor da senha e o valor da confirmação da senha são iguais. Caso sejam, o parágrafo 'mensagem' recebe uma cor de texto esverdeada e o texto informa que o usuário inseriu uma senha válida.
   else if (senha === confirmSenha) {
    mensagem.style.color = '#238736';
    mensagem.innerText = 'Senha válida.';
   }
   // Caso os campos de senha e confirmação de senha não estejam vazios e nem tenham um valor igual, informamos que o usuário inseriu duas senhas diferentes
   else {
    mensagem.style.color = '#D91414';
    mensagem.innerText = 'Suas senhas não conferem.';
   }
}