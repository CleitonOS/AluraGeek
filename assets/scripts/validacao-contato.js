(()=>{
    const inputNome = document.querySelector('[data-name]');
    const inputMensagem = document.querySelector('[data-message]');
    const formulario = document.querySelector('[data-form]');

    const validaNome = () => {
        function erroCampoNome(inputNome) {
            const erroNome = 'O campo não foi preenchido corretamente ou há espaços em branco, digite até no máximo 40 caracteres!';
            inputNome.setCustomValidity(erroNome);
            
            const erroSpan = document.querySelector('.input__name');
            erroSpan.classList.add('input-message--erro');
            erroSpan.innerHTML = 'O campo de nome é ínvalido';
        }

        function removeNomeErro(inputNome){
            const erroSpan = document.querySelector('.input__name');
            erroSpan.classList.remove('input-name--erro');
            erroSpan.innerHTML='';
            inputNome.setCustomValidity("");
        }

        // Validação do campo NOME
        const inputNomeValor = inputNome.value.trim();

        if(inputNomeValor === ""){
            erroCampoNome(inputNome);
        } 
        else if(inputNomeValor.length >= 40){
            erroCampoNome(inputNome);
        }
        else{
            removeNomeErro(inputNome);
        }
    }
    
    inputNome.addEventListener("blur", (evento) => {
        validaNome(evento.target);
    })

    const validaMensagem = () =>{
        function erroCampoMensagem(inputMensagem) {
            const erroCampoMensagem = 'O campo não foi preenchido corretamente ou há espaços em branco, digite até no máximo 120 caracteres!';
            inputMensagem.setCustomValidity(erroCampoMensagem);
            
            const erroSpan = document.querySelector('.input__message');
            erroSpan.classList.add('input-message--erro');
            erroSpan.innerHTML = 'O campo de mensagem é ínvalido';
        }

        function removeMensagemErro(inputMensagem){
            const erroSpan = document.querySelector('.input__message');
            erroSpan.classList.remove('input-name--erro');
            erroSpan.innerHTML='';
            inputMensagem.setCustomValidity("");
        }


        // Validação do campo MENSAGEM
        const inputMensagemValor = inputMensagem.value.trim()
        if(inputMensagemValor === ""){
            erroCampoMensagem(inputMensagem);
        } 
        else if(inputMensagemValor.length >= 40){
            erroCampoMensagem(inputMensagem);
        }
        else{
            removeMensagemErro(inputMensagem);
        }
    }
        
    inputMensagem.addEventListener("blur", (evento) => {
        validaMensagem(evento.target);
    })

    console.log(validaNome, validaMensagem)
})()

