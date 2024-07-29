const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.prototype) //não existe
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) // __proto__ tem a mesma função que Object.prototype, é possivel consultar a herança
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto() {}

console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
