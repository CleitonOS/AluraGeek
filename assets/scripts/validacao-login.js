(()=>{
    const inputEmail = document.querySelector('[data-email]');
    const inputSenha = document.querySelector('[data-password]');
    const form = document.querySelector('[data-form]');

    // VALIDA EMAIL
    const validaEmail = () =>{
        function erroCampoEmail(inputEmail) {
            const erroEmail = 'O campo não foi preenchido corretamente, talvez aja espaços em branco, siga o formato padrão: seu-email@mail.com';
            inputEmail.setCustomValidity(erroEmail);
            
            const erroSpan = document.querySelector('.input__login-email');
            erroSpan.classList.add('input-login--erro');
            erroSpan.innerHTML = 'Esse campo não pode estar vazio';
        }
    
        function removeEmailErro(inputEmail){
            const erroSpan = document.querySelector('.input__login-email');
            erroSpan.classList.remove('input-login--erro');
            erroSpan.innerHTML='';
            inputEmail.setCustomValidity("");
        }
    
        // Validação do Campo EMAIL
        const inputEmailValor = inputEmail.value.trim();        
        if(inputEmailValor === ""){
            erroCampoEmail(inputEmail);
        } 
        else{
            removeEmailErro(inputEmail);
        }
    }

    inputEmail.addEventListener("blur", (evento) => {
        validaEmail(evento.target);
    })


    // VALIDA SENHA
    const validaSenha = () => {
        function erroCampoSenha(inputSenha) {
            const erroSenha = 'O campo não foi preenchido corretamente, a senha deve ter 4 ou mais caracteres, ou talvez aja espaços em branco';
            inputSenha.setCustomValidity(erroSenha);
            
            const erroSpan = document.querySelector('.input__login-password');
            erroSpan.classList.add('input-login--erro');
            erroSpan.innerHTML = 'Esse campo não pode estar vazio';
        }
    
        function removeSenhaErro(inputSenha){
            const erroSpan = document.querySelector('.input__login-password');
            erroSpan.classList.remove('input-login--erro');
            erroSpan.innerHTML='';
            inputSenha.setCustomValidity("");
        }

        // Validação Campo de SENHA
        const inputSenhaValor = inputSenha.value.trim()

        if(inputSenhaValor === ''){
            erroCampoSenha(inputSenha);
        
        }
        else if (inputSenhaValor.length < 4){
            erroCampoSenha(inputSenha);
        } 
        else{
            removeSenhaErro(inputSenha);
        }
    }

    inputSenha.addEventListener("blur", (evento) => {
        validaSenha(evento.target);
    })

    // REDIRECIONAMENTO PÁGINA DE PRODUTOS
    form.addEventListener("submit", (evento) => {
        evento.preventDefault()
        window.location.href='admin.html';
        console.log(evento.target)
    })

    console.log(validaEmail, validaSenha);
})()
