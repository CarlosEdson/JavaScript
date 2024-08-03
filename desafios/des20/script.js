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
    }else{
        window.alert('ERRO, o valor já esta presente em lista')
    }
    numeros.value = ''
    numeros.focus()
}
