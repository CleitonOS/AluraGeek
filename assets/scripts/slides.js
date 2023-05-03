const circles = document.querySelector('.manual-navigation');
const quant = document.querySelectorAll('.banner__slides .slide');
const imagem = document.getElementById('current');
const next = document.getElementById('next');
const back = document.getElementById('back');

var rolar = true;
var atual = 0;

for(let i = 0; i < quant.length; i++){
    var div = document.createElement('div')
    div.id = i;
    circles.appendChild(div)
};

document.getElementById('0').classList.add('imgCurrent');

var pos = document.querySelectorAll('.manual-navigation div')

for(let i=0; i < pos.length; i++){

    pos[i].addEventListener('click', function(){
        atual = pos[i].id
        slide();
        rolar = false;
    })
}

back.addEventListener('click', ()=>{
    atual--
    slide();
    rolar = false;
})

next.addEventListener('click', ()=>{
    atual++
    slide();
    rolar = false;
})

// Função principal do programa
function slide(){
    if(atual >= quant.length){
        atual = 0;
    }
    else if(atual < 0){
        atual = quant.length -1
    }
    document.querySelector('.imgCurrent').classList.remove('imgCurrent');
    imagem.style.marginLeft = -100*atual+'vw';
    document.getElementById(atual).classList.add('imgCurrent');
}

setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }
    else{
        rolar=true;
    }
},5000)

console.log(slide)