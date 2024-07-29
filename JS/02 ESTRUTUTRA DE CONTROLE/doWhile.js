//quando não sabe a quantidade de vezes que será repitida
//retorna V ou F

function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1 //pode iniciar como -1 pois ele primeiro vai executar o DO para depois o WHILE que mostra a condição "opcao != -1"

//let opcao //somente iniciada a variável, sem valor inicial! Fazendo isso, garante que a estrutura vá rodar pelo menos uma vez.

do { //irá executar ate gerar o -1 aleatoriamente
    opcao = getInteiroAleatorioEntre(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a proxima')