//operador de desestruturação, extrai informação de alguma estrutura (objeto, array) - ES2015

const pessoa = { //exemplo utilizando objeto
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 524
    }
}

const {nome, idade} = pessoa // extrai os valores destas propriedades do objeto "pessoa"
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // altera o nome das propriedades mantendo os valores atribuidos
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //ambas propriedades não existem no objeto, sendo assim, será apresentado "undefined",
//porém é possivel atribuir um valor padrao neste caso o "true", caso não tenha nada a ser apresentado
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa //em grupos aninhados é importante que o caminho esteja certo, e ele só irá considerar as propriedades que estão dentro da principal
console.log(logradouro, numero, cep)

const {conta: {ag, num}} = pessoa // neste caso não existe a propriedade "conta" logo, ele apresenta um erro, e não um "undefined", pois a propriedade que ele procura é a que está dentro de "conta"



