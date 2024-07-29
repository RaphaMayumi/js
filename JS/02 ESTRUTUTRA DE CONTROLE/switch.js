//é uma seleção multipla, não retorna uma valor V ou F

const imprimirResultado= function (nota){
    switch (Math.floor(nota)){ //aqui no caso ele recebe apenas um valor, e não uma expressão como no IF
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break //caso não seja colocado o BREAK, a partir do momento em que ele acha o caso que se encaixa, ele executa todos os de baixo "fall throught"
        case 8: case 7: //pode ser colocado também na mesma linha
            console.log('Aprovado')
            break
        case 6: case 5: case 4://não pode ser separado por virgulas, não é reconhecido, ex: case 6,5,4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default: //executar quando não se encaxa em nenhuma das anteriores, e pode ficar em outra posição, porem deve colocar o break
            console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)