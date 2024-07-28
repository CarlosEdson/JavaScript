let cx1 = document.querySelector('#nota1')
let cx2 = document.querySelector('#nota2')

function calcular(){
    let nota1 = Number(cx1.value)
    let nota2 = Number(cx2.value)

    let media = (nota1 + nota2) / 2

    resultado.innerHTML += `Sua média é ${media}`
}