var cx1 = document.querySelector('#num')
var res = document.querySelector('#res')

function consultar(){
    var ano_nascimento = Number(cx1.valeu)
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual

    var idade = ano_nascimento - ano
    res.innerHTML = idade

    if(ano_nascimento.valeu.length == 0 || ano_nascimento.value > ano){
        window.alert('Erro verifique os dados')
    }
}