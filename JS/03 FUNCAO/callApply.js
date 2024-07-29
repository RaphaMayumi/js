function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco //apenas dessa maneira já é o suficiente para ele chamar a funçao
}

global.preco = 20
global.desc = 0.1

console.log(getPreco()) // a função pega os valores do escopo global
console.log(produto.getPreco()) //desta maneira ele obtem os valores dentro do escopo objeto produto

const carro = { preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) // declarado o imposto e a moeda vindos da função getPreco
console.log(getPreco.apply(carro,[0.17, '$'])) //deve estar dentro de um array

