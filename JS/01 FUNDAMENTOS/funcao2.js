// armazenando uma função em uma variável
const imprimirSoma = function (a,b){
    console.log(a + b)
}

imprimirSoma(2,3)

//armazenando uma funçao arrow em uma variável
const soma = (a,b) =>{
    return a + b
}

console.log(soma(2,3))

//retorno implícito
const subtracao = (a,b) => a - b //utilizado quando existe uma única sentença de código
console.log(subtracao(2,3))

//ainda mais reduzido
const imprimir2 = a => console.log(a)
imprimir2('eta')