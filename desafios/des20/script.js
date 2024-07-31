let cx1 = document.querySelector('#num')
let valores = []
function adicionar(){
    let valor = Number(cx1.value)
    
    if(valor == ''){
        window.alert('ERRO, o campo a baixo precisa ser preenchido')
    } else{
        resultado.innerHTML = `Você adicionou o valor ${valor}`
    }
}
