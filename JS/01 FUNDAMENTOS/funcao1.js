//função é um conjunto de codigos onde voce nomeia ele e pode chamá-lo em qualquer ponto do seu código

//função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3) //atribuindo valores
imprimirSoma(2)//irá utilizar o 2 + undefined que resultará em NaN
imprimirSoma(2,3,5,8,3,1) //irá utilizar os dois primeiros valores para fazer a soma e o resto irá desconsiderar
imprimirSoma()

//função com retorno
function soma(a, b = 0){
    return a + b
}
console.log(soma(2,3))
console.log(soma(2)) //irá retornar o 2 pois o B já foi tratado e não ficará como undefined como na anterior
console.log(soma())