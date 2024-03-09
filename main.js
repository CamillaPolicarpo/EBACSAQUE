const form = document.getElementById('form')
const mes = document.getElementById('saldo')
const ano = document.getElementById('saque')

function sacandoDinheiro(saldo, saque){
    return saldo > saque;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = sacandoDinheiro(mes.valueAsNumber, ano.valueAsNumber)
    if(validarForm){
        alert('Saque realizado!')
    } else{
        alert('O valor de saque está acima do saldo da conta!')
    }
})