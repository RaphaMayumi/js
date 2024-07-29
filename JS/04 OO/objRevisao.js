//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica' //é colocado entre chaves quando o nome sai fora do padrão, contem espaços
produto.preco = 220.00

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:'Raul',
        idade: 56,
        endereço: {
            logradouro: 'Rua ABC',
            numero: 293
        }
    },
    condutores:[{ //array
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 40
    }],
    calculaValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.proprietario.endereço
delete carro.calculaValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length) // se tentar acessar algo que está indefinido dará erro (delete carro.condutores - ativo)