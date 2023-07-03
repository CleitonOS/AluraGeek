import { clientService } from "../service/client-service.js";

// Lógica da renderização dos produtos em cada seção
const criaMoldeProduto = (imagem, nome, preco) => {
    const molde = `<div class="product__container">
        <img class="product__img" src="${imagem}" alt="">
        <p class="product__name">${nome}</p>
        <p class="product__price">${preco}</p>
        <a class="product__buy" href="#">Ver mais sobre</a>
    </div>`

    return molde;
}

const renderProducts = async () => {
    try {
        // Váriaveis de elementos de seção, para inserir elementos filhos
        const secaoConsoles = document.querySelector('[data-consoles]')
        const secaoGames = document.querySelector('[data-games]')
        const secaoAcessorios = document.querySelector('[data-acessories]')
        console.log(secaoAcessorios)
        console.log(secaoConsoles)
        console.log(secaoGames)

        const listaProdutos = await clientService.listaProdutos()
        listaProdutos.forEach(elemento => {
            const moldePronto = criaMoldeProduto(elemento.imagem, elemento.nome, elemento.preco)
            console.log(moldePronto)
            console.log(elemento.categoria)
            
            // Lógica necessária: caso eu esteja em determinada página, eu renderizo os elementos daquela página

            if(window.location.pathname == "/public/games.html"){
                if(elemento.categoria == 'Games'){
                    secaoGames.insertAdjacentHTML('beforeend', moldePronto);
                    console.log("Elemento gerado na categoria Games")
                }
            } 
            else if(window.location.pathname == "/public/consoles.html"){
                if(elemento.categoria == 'Consoles'){
                    secaoConsoles.insertAdjacentHTML('beforeend', moldePronto);
                    console.log("Elemento gerado na categoria Consoles")
                }
            }
            else if(window.location.pathname == "/public/acessories.html"){
                if(elemento.categoria == 'Acessórios'){
                    secaoAcessorios.insertAdjacentHTML('beforeend', moldePronto);
                    console.log("Elemento gerado na categoria Acessórios")
                }
            }
            
            // Problema está acontencedo porque as seções não estão "presentes/não tem valor" para serem retornadas
            // Exemplificação: estou na secao Games, na iteração dos objetos não é possível retornar um objeto para a secao Consoles, porque ela é nula
        })
    }
    catch {
        console.log("Algo de errado ocorreu ao renderizar os produtos")
        // window.location.href = 'erro.html'
    }
}
renderProducts();