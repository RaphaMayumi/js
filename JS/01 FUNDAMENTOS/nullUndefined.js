let valor //nao inicializada = undefined
console.log(valor)

valor = null //ausencia de valor, utilizar para zerar alguma variàvel que esteja apontando para um outro endereço no conceito de objeto
console.log(valor)
// console.log(valor.toString()) irá dar erro pois não é possível ler string em nulo, um dos motivos de não ser recomendado utilicar o nulo

const produto = {}
console.log(produto.preco) //undefined, pois não foi criado este atributo e nem colocado um valor nele
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atirbuir undefined, deixe que o próprio sistema defina isso
console.log(!!produto.preco) //ele dará falso pois o valor é inválido, ou não tem valor
console.log(produto)
//utilizar o delete produto.preco nesse caso

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)