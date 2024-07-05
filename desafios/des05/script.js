function consultar(){
    var cx1 = document.querySelector('#num')
    var res = document.querySelector('#res')
    var data = new Date() //data atual
    var ano = data.getFullYear() //pega o ano com 4 digitos
    
    if(cx1.value.length == 0 || cx1.value > ano){
        window.alert('[ERRO] Verifique seus Dados')
    } else{
        var fsex = document.getElementsByTagName('sex')
        var idade = ano - Number(cx1.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        } else if(fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
    }
}