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
                <dialog id="favDialog1">
                <form method="dialog">
                  <p><label>Editar Curso:
                    <p>Nome do Curso:      <input type="text" name="NomeCurso" size="40" /></p>
                    <p>Imagem do Curso:    <input type="text" name="ImagemCurso" size="40" /></p>
                    <p>Descrição do Curso: <input type="text" name="DescricaoCurso" size="40" /></p>
                  </label></p>
                  
                  <menu>
                    <button value="cancel">Cancel</button>
                    <button id="confirmBtn" value="default">Confirm</button>
                  </menu>
                </form>
              </dialog>
              
              <menu>
                <button class="btn btn-secondary m-1" id="btn btn-secondary m-1">editar</button>
              </menu>
                    
                    <button class="btn btn-danger m-1">excluir</button>
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

// Criando variáveis para receberem os valores dos campos do formulário
let inputNome = document.getElementById("nome-curso");
let inputImagem = document.getElementById("imagem-curso");
let inputDescricao = document.getElementById("descricao-curso");

// Criando variável para 
let botaoAdicionar = document.getElementById("btnAdicionar");

function adicionarCurso() {
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

    // Exibe novamente a lista de cursos
    exibirCursos();
}
// Criando evento de click para o botão Adicionar
botaoAdicionar.addEventListener("click", adicionarCurso);