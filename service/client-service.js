// nesse arquivo, pedimos e recebemos resposta

const listaProdutos = () => {
    return fetch(`http://localhost:3000/products`)
        .then(resposta => {
            if(resposta.ok){
                return resposta.json()
            }
            throw new Error('Não foi possível listar os produtos!')
        })
}

// envio de dados
const criaProduto = (nome, categoria, preco, imagem) => {
    return fetch(`http://localhost:3000/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            categoria: categoria,
            preco: preco,
            imagem: imagem,
        })
    })

    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
        throw new Error('Não foi possível criar um novo produto!')
    })
}
//headers: qual tipo de informação vai ser enviada

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    })
    .then(resposta => {
        if(!resposta.ok){
            throw new Error('Não foi possível remover o usuário!')
        }
    })
}

const detalhaProduto = (id) =>{
    return fetch(`http://localhost:3000/products/${id}`)
    .then(resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível detalhar o usuário!')
    })
}

const atualizaProduto = (id, nome, email) =>{
    return fetch(`http://localhost:3000/products/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
        })
    })
    .then(resposta =>{
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar os dados do usuário!')
    })
}

export const clientService = {
    listaProdutos,
    criaProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto,
}