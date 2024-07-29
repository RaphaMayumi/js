function criarProduto (nome, valor) {
    return{
        nome,
        valor,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 3165.86))
console.log(criarProduto('iPad', 36565.86))