function consultar(){
    var ano_nascimento = document.querySelector('#nascimento')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('#res')

    if(ano_nascimento.value.length == 0 || ano_nascimento.value > ano){
        window.alert('Seus dados estão Incorretos')
    } else{
        var idade = ano - Number(ano_nascimento.value)
        var sexo = document.getElementsByClassName('radsex')
        res.innerHTML = `Sua idade é ${idade}`
    }
}