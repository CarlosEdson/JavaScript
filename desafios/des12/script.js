function calcular(){
    let cx1 = document.querySelector('#num1')
    let cx2 = document.querySelector('#num2')

    let primvalor = Number(cx1.value)
    let segvalor = Number(cx2.value)

    let total = primvalor + segvalor

    resultado.innerHTML = `A soma entre ${primvalor} + ${segvalor} = ${total}`
}