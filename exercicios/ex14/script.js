function calcular(){
    let multiplicador = document.querySelector('#num')
    var resultado = document.querySelector('#resultado')

    let mult = multiplicador.value

    if(mult == ''){
        window.alert('ERRO, preencha os campos')
    } else {
        for(let contador = mult; mult <= 10; contador++){
            res = contador * mult
        }
        resultado.innerHTML += `${contador} x ${mult} = ${res}`
    }
}