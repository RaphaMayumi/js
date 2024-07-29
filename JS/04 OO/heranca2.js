// Cadeia de protótipos (prototype chain)

Object.prototype.attr0 = '0' //não fazer isso, pois impacta no código inteiro

const avo = { attr1: 'a'}
const pai = { __proto__: avo, attr2: 'B', attr3: '3'} //chaves que tem o mesmo nome, é apresentado o primeiro de acordo com a herança solicitada
const filho = {__proto__: pai, attr3: 'c'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3, pai.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais (delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'v40',
    status(){
        return `${this.modelo} : ${super.status()}` //super é utilizado para chamar os dados do protóripo, enquanto o this é do objeto atual
    }
}

Object.setPrototypeOf(ferrari, carro) //outra maneira de ligar os protótipos
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
