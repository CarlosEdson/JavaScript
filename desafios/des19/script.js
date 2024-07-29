var cx1 = document.querySelector('#anonascimento')
var diaatual = new Date
var ano = diaatual.getFullYear() 

function verificar(){
    let anonascimento = Number(cx1.value)
    let idade = ano - anonascimento

    resultado.innerHTML = `Você tem ${idade} anos`
}