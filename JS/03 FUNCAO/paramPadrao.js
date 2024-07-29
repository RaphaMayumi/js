// estrategia 1 para gerar valor padrao

function soma1(a,b,c){
    a = a || 1 //se não houver a entrada de um valor, será considerado o 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
                                                // neste caso o 0 é considerado falso, então ele irá considerar o numero 1

//estrategia 2, 3 e 4 para gerar valor padrao

function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 //se existe o valor no indice 2 (valor de b no parametro), apresente o valor, caso contrário apresente 1
    c = isNaN(c) ? 1 : c //mais confiável, pois ele traz uma função onde ele compara, se C naõ for um numero, irá retornar 1, caso contrário, irá retornar C
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//valor padrão do es2015

function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))