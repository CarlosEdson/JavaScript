function multiplicar(){
    let cx1 = document.querySelector('#num')

    let multiplicador = Number(cx1.value)

    for(let contador = 1; contador <= 10; contador ++){
        let res = contador * multiplicador

        resultado.innerHTML += `<br>${contador} x ${multiplicador} = ${res}`
    }
}