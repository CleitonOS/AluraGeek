// Tratamos os dados e fazemos o envio das informações
import { clientService } from "../service/client-service.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async(evento)=>{
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome_produto]');
    const categoria = evento.target.querySelector('[data-categoria]');
    const url = evento.target.querySelector('[data-url]');
    const preco = evento.target.querySelector('[data-preco]');

    const nomeValor = nome.value;
    const categoriaValor = categoria.value;
    const imagemValor = url.value;
    const precoValor = preco.value;

    try{
        await clientService.criaProduto(nomeValor, categoriaValor, precoValor, imagemValor)
        window.location.href = 'lista-produtos.html'
    }
    catch{
        console.log("Algo ocorreu de errado na criação do produto")
        window.location.href = 'erro.html'
    }
})

