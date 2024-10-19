
const form = document.getElementById('form-contatos'); // pega a área do formulário 
const contatos = []; //cria uma constante array vazia para armazenar futuramente os nomes das atividades 
const numeros = []; // cria uma array vazia para usar futuramente nas médias das atividades

let linhas = '' //cria variável para adicionar linas novas da tabela 

    form.addEventListener('submit', function(e) { //quando apertar no botão do formulário, vai fazer a função
    e.preventDefault(); // usado para a página não atualizar quando apertar em submeter

    //vai nexecutar as funções abaixo
    adicionarLinha() 
    atualizaTabela()
}); // aqui acaba a função do botão subimit

function adicionarLinha() { 
    const inputNomeContato = document.getElementById('nome-contato'); //variável para pegar o valor digitado no campo atividade
    const inputNumeroContato = document.getElementById('numero-contato'); //variável para pegar o valor digitado no campo nota

    contatos.push(inputNomeContato.value);
    numeros.push(Number(inputNumeroContato.value));

    let linha = `<tr>`; // cria uma variável que armazena o html de uma tabela 
    linha += `<td>${inputNomeContato.value}</td>`; //adiciona na variável aterior o valor antigo + uma tag html para uma célula da tabela
    linha += `<td>${inputNumeroContato.value}</td>`; // célula do meio da tabela
    linha += `</tr>`; // fecha a tag de planilha html

    linhas += linha; // coloca a concatenação da variável lina de uma vez na variável linhas, e também adicina o que já havia antes na variável linhas

    inputNomeContato.value = ''; // limpa o campo nome para digitar mais
    inputNumeroContato.value = ''; // limpa o campo nota
}

function atualizaTabela() { //essa funcão adciona outra babela
    const corpoTabela = document.querySelector('tbody'); // cria uma variável que acessa o tbody (onde ficam as tabelas)
    corpoTabela.innerHTML = linhas; //pega a constante que armazenou o tbody e muda o html dela para o que está na variável linhas
    ;
}
