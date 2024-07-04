var ano_nascimento = document.querySelector('#nascimento')
var data = new Date()
var ano = data.getFullYear()
var res = document.querySelector('#res')

function consultar(){
    if(ano_nascimento.value.length == 0 || ano_nascimento > ano){
        window.alert('Seus dados estão Incorretos')
        var idade = ano - Number(nascimento.value)
    }

    res.innerHTML = `Você tem ${idade}`
}