// Criando a variável que armazena as informações dos cursos (1 array[] com vários objetos{})
let cursos = 
    [{
        nome: "Desenvolvimento Web",
        imagem: "imagens/ilustra-web.png",
        descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."
    },
    {
        nome: "Marketing Digital",
        imagem: "imagens/ilustra-marketing.png",
        descricao:"Consequatur debitis ipsa numquam illum placeat quod deleniti."
    },
    {
        nome:"Consultoria UX",
        imagem: "imagens/ilustra-ux.png",
        descricao:"Consequatur debitis ipsa numquam illum placeat quod deleniti."
    },
    {
        nome: "Teste 1",
        imagem: "imagens/ilustra-marketing.png",
        descricao:"Teste Teste Teste."
    }];


// Estruturando a função que exibe os cursos
function exibirCursos() {
    // Criando a variável que recebe a estrutura HTML do painel
    let htmlCursos = "";

    // Para cada item dentro da variável cursos, é criado uma linha da tabela HTML
    for (let i = 0; i < cursos.length; i++) {
        htmlCursos += `
            <tr>
                <td>${cursos[i].nome}</td>
                <td><img src=${cursos[i].imagem} class="img-fluid" /></td>
                <td>${cursos[i].descricao}</td>
                <td>
                    <button data-index="${cursos[i].id}" class="btn btn-secondary m-1">editar</button>
                    <button data-index="${cursos[i].id}"class="btn btn-danger m-1">excluir</button>
                </td>
            </tr>
        `    
    }
    // Criando variável com o texto HTML a ser adicionado no painel
    let painelCursos = document.querySelector("#painel-cursos")

    // Inserindo o texto que foi gerado na função exibirCursos() dentro do elemento de id #painel-cursos
    painelCursos.innerHTML = htmlCursos;
}

// Chamando a função para exibir os cursos
exibirCursos();

// Selecionando o botão para abrir o modal
let botaoAdicionar = document.getElementById("btnAdicionar");

// Selecionando o modal
let modal = document.getElementById("myModal");


function apareceModal() {
    modal.style.display = "block";
}

// Criando variáveis para receberem os valores dos campos do formulário
let inputNome = document.getElementById("nome-curso");
let inputImagem = document.getElementById("imagem-curso");
let inputDescricao = document.getElementById("descricao-curso");

// Criando variáveis para os botões Cancelar e Confirmar
let botaoCancelar = document.getElementById("botao-cancelar");
let botaoConfirmar = document.getElementById("botao-confirmar");


function cancelarAdicao(e) {
    e.preventDefault();
    modal.style.display = "none";
}


function confirmarAdicao(e) {

    // Previnindo comportamento padrão (de recarregar a página)
    e.preventDefault();

    // Criando variáveis que recebem os valores dos inputs
    let idDoCurso = cursos.length + 1;
    let valorDoInputNome = inputNome.value;
    let valorDoInputImagem = inputImagem.value;
    let valorDoInputDescricao = inputDescricao.value;

    // Inserindo os valores na variável cursos
    cursos.push({
        id: idDoCurso,
        nome: valorDoInputNome,
        imagem: valorDoInputImagem,
        descricao: valorDoInputDescricao
    })

    // Fechando o modal
    modal.style.display = "none";

    // Exibe novamente a lista de cursos
    exibirCursos();
}


// EVENT LISTENERS

// Criando evento de click para o botão Adicionar (e aparecer o modal)
botaoAdicionar.addEventListener("click", apareceModal);

// Criando evento de click para o botão Adicionar (e aparecer o modal)
botaoCancelar.addEventListener("click", cancelarAdicao);

// Criando evento de click para o botão Adicionar (e aparecer o modal)
botaoConfirmar.addEventListener("click", confirmarAdicao);

window.addEventListener("click", function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})

  