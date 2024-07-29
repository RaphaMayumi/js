let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

//o let já dá prioridade ao escopo em que cada um se encontra, neste caso dentro será impresso 2 e fora 1


let numero2 = 1
{
    let numero3 = 2
    console.log('dentro = ', numero2)
}

console.log('fora = ', numero2)


//porém se ele não encontrar a variável que ele quer imprimir no escopo em que ele se encontra, ele irá procurar nos demais

//o let tem variável de escopo global, função e de bloco