const form = document.getElementById('form');
const mes = document.getElementById('saldo');
const ano = document.getElementById('saque');
const acerto = document.getElementById('saquerealizado');
const erro = document.getElementById('erro');


function sacandoDinheiro(saldo, saque){
    return saldo > saque;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = sacandoDinheiro(saldo.valueAsNumber, saque.valueAsNumber)
    if(validarForm){  
        acerto.style.display = 'block';
        saldo.value='';
        saque.value='';
    }
})

saque.addEventListener('keyup', function(e){
    let validarForm = sacandoDinheiro(saldo.valueAsNumber, saque.valueAsNumber)
    if(!validarForm){
        erro.style.display = 'block';
        acerto.style.display = 'none';
    } else{
        erro.style. display = 'none';
        acerto.style.display = 'block';
    }
    
})