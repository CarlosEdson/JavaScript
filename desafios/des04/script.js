var msg = document.querySelector('#msg')
var img = document.querySelector('#imagem')
var data = new Date()

function carregar(){
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        img.src = 'imagens/nascente.jpg'
    } else if (hora >= 13 && hora <= 18){
        img.src = 'imagens/tarde.jpg'
    } else{
        img.src = 'imagens/noite.jpg'
    }
}