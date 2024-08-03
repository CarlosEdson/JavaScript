let numeros = document.querySelector('#num')
let valores = []
let compararnumeoros = document.querySelector('#conferenumeros')

function isnumero(n){
    if(Number(n) >= -1 && Number(n) <= 50){
        return true
    } else{
        return false
    }
}
function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isnumero(numeros.value) && !inlista(numeros.value, valores)){
        valores.push(Number(numeros.value))
        let item = document.createElement('option')
        item.text = `Valor ${numeros.value} adicionado`
        compararnumeoros.appendChild(item)
        resultado.innerHTML = ''
    }else{
        window.alert('ERRO, o valor já esta presente em lista')
    }
    numeros.value = ''
    numeros.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior ){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        resultado.innerHTML = ''
        resultado.innerHTML += `Você tem ${total} elementos <br>`
        resultado.innerHTML += `O seu maior número é ${maior} e o meinor é ${menor} <br>`
    }
}
