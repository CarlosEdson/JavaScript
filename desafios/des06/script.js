function consultar(){
    var ano_nascimento = document.querySelector('#nascimento')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('#res')

    if(ano_nascimento.value.length == 0 || Number(ano_nascimento.value) > ano){
        window.alert('Seus dados estão Incorretos')
    } else {
        var idade = ano - Number(ano_nascimento.value)
        var sexo = document.getElementsByClassName('radsex')
        var genero = ''
        if(sexo[0].checked){
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.innerHTML = `Você é um ${genero} de ${idade} anos`
    }
}