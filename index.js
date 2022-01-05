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

    console.log(cursos[cursos.length-1]);


    // Fechando o modal
    modal.style.display = "none";
    
    // Exibe novamente a lista de cursos
    exibirCursos();
}

let botoesEditarExcluir = document.querySelector("#painel-cursos");

function editarCurso(id) {
    console.log("editou o id", id);
}

function excluirCurso(id) {
    for (let i = 0; i < cursos.length; i++){
        
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
// EVENT LISTENERS

// Criando evento de click para o botão Adicionar (e aparecer o modal)
botaoAdicionar.addEventListener("click", apareceModal);

// Criando evento de click para o botão Cancelar a edição 
botaoCancelar.addEventListener("click", cancelarAdicao);

// Criando evento de click para o botão Confirmar a edição
botaoConfirmar.addEventListener("click", confirmarAdicao);

// Criando evento de click para fechar o modal
window.addEventListener("click", function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})

// Criando evento de click para os botões Editar e Excluir
botoesEditarExcluir.addEventListener("click", editarExcluir)