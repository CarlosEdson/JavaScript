function calcular(){
    let multiplicador = document.querySelector('#num')

    let mul = Number(multiplicador.value)

    if(mul == ''){
        window.alert('ERRO, Precisamos dos parametros')
    } else {
        for(let contador = 1; contador <= 10; contador++){
            let res = contador * mul

            resultado.innerHTML += `<br>${contador} x ${mul} = ${res}`
        }
    }
}