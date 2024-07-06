function consultar(){
    var ano_nascimento = document.querySelector('#nascimento')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.querySelector('#res')

    if(ano_nascimento.value.length == 0 || Number(ano_nascimento.value) > ano){
        window.alert('Seus dados estão Incorretos')
    } else {
        var idade = ano - Number(ano_nascimento.value)
        var sexo = document.getElementsByName('radsex')
        var genero = ''
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade <= 12){
                res.innerHTML = `Você é uma criança de ${idade} anos`
            } else if(idade <= 25){
                res.innerHTML = `Você é um adolecente de ${idade} anos`
            } else if(idade >= 26 && idade <= 55){
                res.innerHTML = `Você é um Adulto de ${idade} anos`
            } else if(idade > 56){
                res.innerHTML = `Você é um Idoso de ${idade} anos`
            }
        } else {
            genero = 'Mulher'
            if(idade <= 12){
                res.innerHTML = `Você é uma criança de ${idade} anos`
            } else if(idade <= 25){
                res.innerHTML = `Você é uma adolecente de ${idade} anos`
            } else if(idade >= 26 && idade <= 55){
                res.innerHTML = `Você é uma Mulher Adulta de ${idade} anos`
            } else if(idade > 56){
                res.innerHTML = `Você é uma Idosa de ${idade} anos`
            }
        }
    }
}