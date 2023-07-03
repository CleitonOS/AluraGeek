import { clientService } from "../service/client-service.js"

( async ()=>{
    //nos diz qual o endereço da página em que estamos
    const pegaURL = new URL(window.location);

    //Através da propriedade searchParams conseguimos acessar o método get e selecionar o id que vemos na url.
    const id = pegaURL.searchParams.get('id');

    const inputNome = document.querySelector('[data-nome]');
    const inputCategoria = document.querySelector('[data-categoria]');

    try{
        //detalha cliente pega os dados email e nome, com a resposta passamos os valores e inserimos em cada campo na aba de edição.
        const dados = await clientService.detalhaCliente(id)
        inputNome.value = dados.nome;
        inputCategoria.value = dados.categoria;
    }
    catch(erro){
        console.log(erro)
        window.location.href = 'erro.html'
    }


    const formulario = document.querySelector('[data-form]')

    formulario.addEventListener('submit', async (evento)=> {
        evento.preventDefault()
        
        try{
            await clientService.atualizaCliente(id, inputNome.value, inputCategoria.value)
            window.location.href = "lista-produtos.html"
        }
        catch(erro){
            console.log(erro)
            window.location.href = 'erro.html'
        }
    })
})()

