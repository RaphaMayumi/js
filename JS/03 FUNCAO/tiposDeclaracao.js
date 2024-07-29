console.log(soma(3,4))

//function declaration

function soma(x, y) { //pode ser chamada antes da declaração pois o JS le primeiro as functions
    return x + y
}

//function expression

const sub = function (x,y) { //é obrigado a chamar depois de declarado
    return x - y
}

console.log(sub(3,4))

//named function expression

const mult = function mult (x,y) { //a unica vantagem desta situação é que na hora de debuggar para achar um problema, ele não irá aparecer como função anônima
    return x * y
}
console.log(mult(3,4))//é obrigado a chamar depois de declarado
