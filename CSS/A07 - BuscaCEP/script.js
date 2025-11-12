// IMPORTANTE LER A SEÇÃO DE JSON e APIs DA APOSTILA PARA ENTENDER MELHOR CADA PARTE + VER A VERSÃO DO PROJETO DE BUSCA CEP na página 262

// Função que busca o CEP digitado ao clicar do botão
function buscarCep(event) {
    // 'event.preventDefault()' IMPEDE a execução do evento padrão de envio de um formulário, que é recarregar a página. Ou seja, ao clicar no botão buscar, a página não será recarregada.
    event.preventDefault();

    // Acessando o valor da variável input em que o CEP é digitado por meio do DOM
    let cep = document.getElementById('input-cep').value;

    // Acessando pelo DOM a div que exibirá o resultado
    const resultado = document.getElementById('resultado');

    // Aqui, definimos que a DIV de id 'resultado' vai receber 
    resultado.innerHTML = '<p>Buscando...</p>';

    // O 'fetch' realiza o processo de BUSCA de um recurso (ver mais na apostila), nesse exemplo, vamos realizar o fetch para o endereço da API disponibilizada no site ViaCEP (https://viacep.com.br/), com o valor do CEP digitado pelo usuário
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    // O fetch retorna uma Promise (promessa) que pode vir completa, com os valores que pedimos ou rejeitada. Abaixo, utilizaremos o 'then' para definir o que será feito quando a promessa for retornada. Nesse caso, pegamos a resposta da promessa e retornamos ela em formato JSON, o que gerará OUTRA promessa
    .then(resposta => {
        return resposta.json();
    })
    // Aqui, recebemos a resposta da promessa anterior (o retorno da resposta em formato JSON). Chamaremos essa resposta de 'dados' e utilizaremos o objeto 'dados' (que contém todas as informações do endereço do CEP buscado) para exibir a resposta no HTML.
    .then(dados => {
        console.log(dados)
        // Em caso de enviar um CEP inexistente, a API retornará a resposta em JSON com o campo 'Erro' e nós retornamos uma mensagem de erro no HTML para o usuário
        if (dados.erro) {
            resultado.innerHTML = '<p>CEP não encontrado.</p>'
        } else {
            // Caso não ocorra erro, vamos retornar os dados recebidos para o usuário, acessando campos do objeto 'dados'
            resultado.innerHTML = `
                <p><span class="destaque">Rua</span>: ${dados.logradouro}</p>
                <p><span class="destaque">Bairro</span>: ${dados.bairro}</p>
                <p><span class="destaque">Cidade</span>: ${dados.localidade}</p>
                <p><span class="destaque">Estado</span>: ${dados.uf}</p>
            `
        }

    })
    // Caso qualquer erro ocorra durante o fetch ou os then, o código dentro do catch será executado
    .catch(erro => {
        resultado.innerHTML = '<p>Houve um erro durante a tentativa de buscar o CEP.</p>'
    })
}