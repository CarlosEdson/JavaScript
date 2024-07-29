var num1 = document.querySelector('#num1')
var num2 = document.querySelector('#num2')

function calcular(){
    let nota1 = Number(num1.value)
    let nota2 = Number(num2.value)

    const media = (nota1 + nota2) / 2

    if(media >= 6){
        resultado.innerHTML = 'Parabéns você atingil a media'
    } else {
        resultado.innerHTML = 'Infelizmente você não atingil a media'
    }
}