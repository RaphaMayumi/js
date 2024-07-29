function rand([min=0, max=1000]){
    if(min > max) [min, max] = [max, min] //destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arredonda o valor para baixo
}

console.log(rand([50, 40])) //caso IF utilizado
console.log(rand([995]))//valor minimo, max fica como padrao 1000
console.log(rand([, 20])) //min se torna 0 e o max 20
console.log(rand([]))//passando um obj vazio, ele irá nos apresentar qualquer número entre 0 e 1000
//console.log(rand()) - não vai funcionar pois estamos tentando extrair valores de algo "undefined" ou nulo