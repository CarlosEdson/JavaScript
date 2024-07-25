var cx1 = document.querySelector('#num')

function consultar(){
    let valor = cx1.value

    let anterior = valor - 1

    resultado.innerHTML = `O antecessor do seu número digitado é: ${anterior}`
}