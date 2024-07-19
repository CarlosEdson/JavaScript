function contar(){
    var cx1 = document.querySelector('#numinicio')
    var cx2 = document.querySelector('#numfim')
    var cx3 = document.querySelector('#passo')

    if(cx1.value.length == 0 || cx2.value.length == 0 || cx3.value.length== 0){
        window.alert('ERRO')
    } else{
        resultado.innerHTML = ''
        var inicio = Number(cx1.value)
        var fim = Number(cx2.value)
        var passo = Number(cx3.value)

        if(inicio < fim){
            for(let c = inicio; c <= fim; c += passo){
                resultado.innerHTML += `${c}`
            }
        } else {
            for(let c = inicio; c >= fim; c -= passo){
                resultado.innerHTML += `${c}`
            }
        }
    }
}