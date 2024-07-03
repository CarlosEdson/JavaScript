var cx1 = document.querySelector('#num')
var res = document.querySelector('#res')
var data = new Date() //data atual
var ano = data.getFullYear() //pegar ano com 4 digitos

function consultar(){
    if(cx1.value.length == 0 || cx1.value > ano){
        window.alert('[ERRO] Verifique seus Dados')
    } else{
        var fsex = document.getElementsByTagName('sex')
        var idade = ano - Number(cx1.value)
        res.innerHTML = `Você tem ${idade}`
    }
}