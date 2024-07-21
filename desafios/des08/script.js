function calcular(){
    var inicio = document.querySelector('#num1')
    var fim = document.querySelector('#num2')
    var passo = document.querySelector('#passo')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('ERRO. falta de dados')
    } else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        resultado.innerHTML = 'contando...'
        if(i < f){
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `${c}-`
            }
        } else {
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML +=`${c}-`
            }
        }
    }
}