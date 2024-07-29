                //nome da variavel number
Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
            //o THIS é utilizado por conta do NUMBER, visando comparar o dado informado pelo usuario, com o dado utilizado na função (INICIO, FIM)

}

const imprimirResultado = function(nota){
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra')
    }else if (nota.entre(7, 8.99)){ //quantos else IF quiser
        console.log('Aprovado')
    }else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else{ //opcional
        console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)