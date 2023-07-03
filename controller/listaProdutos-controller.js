import { clientService } from "../service/client-service.js";

// gerando template literals
const criaNovaLinha = (nome, categoria, preco, id) => {
    const linhaNovoProduto = document.createElement('tr');
    const conteudo = `
    <td class="td-nome" data-td>${nome}</td>
        <td class="td-categoria">${categoria}</td>
        <td class="td-preco">${preco}</td>
        <td class="td-botoes">
            <ul class="table-control">
                <li><a href="admin.html?id=${id}" class="button button__light button__light--size">Editar</a></li>
                <li><button class="button button__light button__light--size remove" type="button">Excluir</button></li>
            </ul>
        </td>`


    linhaNovoProduto.innerHTML = conteudo;
    linhaNovoProduto.dataset.id = id;

    return linhaNovoProduto
}

const tabela = document.querySelector('[data-table]');

// Lógica de remoção
tabela.addEventListener('click', async (evento) => {
    let ehBotaoDeletar = evento.target.className == 'button button__light button__light--size remove';
    console.log("ocorreu um click")

    if (ehBotaoDeletar) {
        try {
            const linhaProduto = evento.target.closest('[data-id]');
            let id = linhaProduto.dataset.id;
            await clientService.removeProduto(id);

            linhaProduto.remove();
            console.log('clicou no botao de apagar')
        }
        catch (erro) {
            console.log(erro)
            window.location.href = 'erro.html'
        }
    };
});

const render = async () => {
    try {
        // iterando, percorrendo os elementos/clientes e inserindo os dados
        const listaProdutos = await clientService.listaProdutos()
        listaProdutos.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.categoria, elemento.preco, elemento.id));
        })
        console.log(tabela)
    }
    catch (erro) {
        console.log("Algo de errado ocorreu ao listar os produtos")
        window.location.href = 'erro.html'
    }
}
render();

