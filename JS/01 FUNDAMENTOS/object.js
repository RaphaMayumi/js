const prod1 = {} //objeto vazio
prod1.nome = 'Celular' //chave = valor
prod1.preco = 4988.90
prod1['Desconto Legal'] = 0.40 //maneira de colocar atributo com espaço, porém evitar sempre

console.log(prod1)

const prod2 = {
    nome:'Camisa Polo',
    preco: 79.90,
    obj2:{
        nome: 'casa',
        preço:{
            obj2: 'pode colocar o mesmo nome'
        }
    }
}

console.log(prod2)