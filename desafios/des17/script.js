var num = document.querySelector('#num')

function consultar(){
    let valor = Number(num.value)
    if(valor % 2 == 0){
        resultado.innerHTML = 'O seu valor é par'
    } else{
        resultado.innerHTML = 'O seu valor é impar'
    }
}