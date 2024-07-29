//quando não sabe a quantidade de vezes que será repitida
//retorna V ou F

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0 //se iniciar com -1 ele nem chega a executar, vai direto ao ultimo 'console.log('Até a proxima')'

while (opcao != -1){ //irá executar ate gerar o -1 aleatoriamente
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a proxima')