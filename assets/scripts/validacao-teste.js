(()=>{

    const inputName = document.querySelector('[data-name]').value.trim();
    const inputMessage = document.querySelector('[data-name]').value.trim();
    
    const inputs = {
        inputNome,
        inputMessage,
    }

    passaInput(inputs)
    const passaInput = (inputs) => {
        inputs.forEach(input => {
            input.addEventListener('blur', (evento) => {
                validaFormulario(evento.target)
            })
        });
    }


    const validaFormulario = () => {
        validaNome()
        const validaNome = () =>{
            if(inputName === ""){
                const erroNome = 'O campo não foi preenchido corretamente ou há espaços em branco, digite até no máximo 40 caracteres!';
                inputName.setCustomValidity(erroNome)

                const erroSpan = document.querySelector('.') 
            }
        }

    }

})()