const pai = {nome: 'Pedro', corCabelo:'preto'}

const filha1 = Object.create(pai) //outra maneira de ligar os protótipos
filha1.nome = 'Ana' //forma 1 de sobrescrever o valor
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, { //forma 1 de sobrescrever o valor
    nome: {value: 'Bia', writable: false, enumerable: true},
    idade: {value: 20, writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' //não será alterado por conta de  writable: false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ? //se for verdadeiro, vai apresentar as chaves que foram declaradas nesta variável e também as por herança, caos contrário, apenas as heranças
        console.log(key) : console.log(`Por herança: ${key}`)
}
