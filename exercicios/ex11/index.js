var idade = 76
if(idade <= 15){
    console.log('Você não pode Votar')
} else if(idade <= 16 || idade >= 75){
    console.log('Voto Opcional')
} else if(idade >= 18){
    console.log('Voto Obrigatorio')
}