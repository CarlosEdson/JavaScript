let cx1 = document.querySelector('#soma1')

let atribuidor = Number(cx1.value)

function somador(){
    atribuidor ++

    resultado.innerHTML = `${atribuidor}`
}

function zerar(){
    atribuidor = 0
    resultado.innerHTML = atribuidor
}