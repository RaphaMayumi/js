let contador = 1

while(contador <= 10) { //exemplo para mostrar que a base do FOR da para ser também utilizado no WHILE
    console.log(`contador = ${contador}`)
    contador++
}

//  declaração; expressao; incremento ou decremento
for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
                    // length percorre o tamanho do array
for(let i = 0; i< notas.length; i++){
    console.log(`nota = ${notas[i]}`) //forma de percorrer um array
}