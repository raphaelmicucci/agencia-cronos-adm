// Criando a variável que armazena as informações dos cursos (1 array[] com vários objetos{})
let cursos = 
    [{
        id: 1,
        nome: "Desenvolvimento Web",
        imagem: "imagens/ilustra-web.png",
        descricao: "Consequatur debitis ipsa numquam illum placeat quod deleniti."
    },
    {
        id: 2,
        nome: "Marketing Digital",
        imagem: "imagens/ilustra-marketing.png",
        descricao:"Consequatur debitis ipsa numquam illum placeat quod deleniti."
    },
    {
        id: 3,
        nome:"Consultoria UX",
        imagem: "imagens/ilustra-ux.png",
        descricao:"Consequatur debitis ipsa numquam illum placeat quod deleniti."
    }];


// Estruturando a função que exibe os cursos
function exibirCursos() {
    // Criando a variável que recebe a estrutura HTML do painel
    let htmlCursos = "";

    // Para cada item dentro da variável cursos, é criado uma linha da tabela HTML
    for (let i = 0; i < cursos.length; i++) {
        htmlCursos += `
            <tr data-index="${cursos[i].id}">
                <td>${cursos[i].nome}</td>
                <td><img src=${cursos[i].imagem} class="img-fluid" /></td>
                <td>${cursos[i].descricao}</td>
                <td>
                    <button data-action="editar" class="btn btn-secondary m-1">editar</button>
                    <button data-action="excluir" class="btn btn-danger m-1">excluir</button>
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

// Selecionando o botão para abrir o modal de Adicionar
let botaoAdicionar = document.getElementById("btnAdicionar");

// Selecionando o modal de Adicionar
let modalAdicionar = document.getElementById("modalAdicionar");


function apareceModalAdicionar() {
    modalAdicionar.style.display = "block";
}

// Criando variáveis para receberem os valores dos campos do formulário
let inputNome = document.getElementById("nome-curso");
let inputImagem = document.getElementById("imagem-curso");
let inputDescricao = document.getElementById("descricao-curso");

// Criando variáveis para os botões Cancelar e Confirmar
let botaoCancelarAdicao = document.getElementById("botao-cancelar");
let botaoConfirmarAdicao = document.getElementById("botao-confirmar");


function cancelarAdicao(e) {
    e.preventDefault();

    modalAdicionar.style.display = "none";

    limpaInputAdicao();
}

function confirmarAdicao(e) {
    // // Previnindo comportamento padrão (de recarregar a página)
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

    // Fechando o modal de Adicionar
    modalAdicionar.style.display = "none";
    
    // Exibe novamente a lista de cursos
    exibirCursos();

    //Função para apagar os valores nos inputs
    limpaInputAdicao();
}

function limpaInputAdicao() {
    inputNome.value = "";
    inputImagem.value = "";
    inputDescricao.value = "";
}

function cancelarEdicao(e) {
    e.preventDefault();
    modalEditar.style.display = "none";
}

function confirmarEdicao(e) {
    // Previnindo comportamento padrão (de recarregar a página)
    e.preventDefault();

    let id = document.getElementById("id-curso-edicao").value;

    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == id){
            
            cursos[i].nome = inputNomeEdicao.value;
            cursos[i].imagem = inputImagemEdicao.value;
            cursos[i].descricao = inputDescricaoEdicao.value;
        }
    }

    // Fechando o modal de Editar
    modalEditar.style.display = "none";
    
    // Exibe novamente a lista de cursos
    exibirCursos();
}

// Selecionando o modal de Adicionar
let modalEditar = document.getElementById("modalEditar");


function apareceModalEditar(id) {
    modalEditar.style.display = "block";
    
    for (let i = 0; i < cursos.length; i++) {
        if (cursos[i].id == id){
            
            inputId.value = cursos[i].id;
            inputNomeEdicao.value = cursos[i].nome;
            inputImagemEdicao.value = cursos[i].imagem;
            inputDescricaoEdicao.value = cursos[i].descricao;
        }

    }
}

// Criando variáveis para receberem os valores dos campos do formulário
let inputId = document.getElementById("id-curso-edicao");
let inputNomeEdicao = document.getElementById("nome-curso-edicao");
let inputImagemEdicao = document.getElementById("imagem-curso-edicao");
let inputDescricaoEdicao = document.getElementById("descricao-curso-edicao");

// Criando variáveis para os botões Cancelar e Confirmar
let botaoCancelarEdicao = document.getElementById("botao-cancelar-edicao");
let botaoConfirmarEdicao = document.getElementById("botao-confirmar-edicao");

// Capturando os botões Editar e Excluir
let botoesEditarExcluir = document.querySelector("#painel-cursos");

function editarCurso(id) {
    apareceModalEditar(id);
}

function excluirCurso(id) {
    for (let i = 0; i < cursos.length; i++) {
        
        if (cursos[i].id == id){
            cursos.splice(i, 1);
            exibirCursos();
        }
    };
}

function editarExcluir(e) {
    if (e.target.type == "submit") {
        let id = e.target.parentNode.parentNode.dataset.index;
        
        if (e.target.dataset.action == "editar") {
            editarCurso(id);

        } else if (e.target.dataset.action == "excluir") {
            excluirCurso(id);
        }

    }   
}
////// EVENT LISTENERS

// Criando evento de click para o botão Adicionar (e aparecer o modal de Adicionar)
botaoAdicionar.addEventListener("click", apareceModalAdicionar);

// Criando evento de click para o botão Cancelar a adição 
botaoCancelarAdicao.addEventListener("click", cancelarAdicao);

// Criando evento de click para o botão Confirmar a adição
botaoConfirmarAdicao.addEventListener("click", confirmarAdicao);

// Criando evento de click para fechar o modal de Adicionar e o de Editar quando houver click fora do modal
window.addEventListener("click", function (e) {
    if (e.target == modalAdicionar) {
        modalAdicionar.style.display = "none";
        limpaInputAdicao();
    }
    if (e.target == modalEditar) {
        modalEditar.style.display = "none";
    }
})

// Criando evento de click para o botão Cancelar a adição 
botaoCancelarEdicao.addEventListener("click", cancelarEdicao);

// Criando evento de click para o botão Confirmar a adição
botaoConfirmarEdicao.addEventListener("click", confirmarEdicao);

// Criando evento de click para os botões Editar e Excluir
botoesEditarExcluir.addEventListener("click", editarExcluir)