var num1 = document.querySelector('#num1')
var num2 = document.querySelector('#num2')

function consultar(){
    let valor1 = Number(num1.value)
    let valor2 = Number(num2.value)

    if(valor1 > valor2){
        resultado.innerHTML = 'O seu primeiro valor é maior que o segundo valor'
    } else {
        resultado.innerHTML = 'O seu segundo valor é maior que o primeiro valor'
    }
}