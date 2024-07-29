//a função arrow é anônima, então se quiser chamar ela em outro ponto do código,a mesma deve estar armazenada em uma variável

let dobro = function (a) { //forma normal de declarar uma function
    return 2 * a
}

dobro = (a) => { //forma pouco reduzida
    return 2 * a
}

dobro = a => 2 * a //maneira extremamente reduzida utilizada quando tiver apenas um único parâmetro
// quando é retirado as chaves(corpo) da função, ele dá um retorno implícito
//funções que só fazem um único trabalho

console.log(dobro(Math.PI))



let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá'//possui um parâmetro mas é possível ignorar

console.log(ola())