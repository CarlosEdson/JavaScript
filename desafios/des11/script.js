function calcular(){
    var num = Number(window.prompt('digite um valor'))

    let dob = num * 2
    let div = num / 2

    resultado.innerHTML = `O dobro do seu número é ${dob} e a metade é ${div}`
}