//"presidente" é a função e o objeto é o "vice-presidente"
console.log(typeof Object)
console.log(typeof new Object) //objeto criado a partir de uma função

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //surgiu em ES 2015 (ES6) - sendo uma nova maneira de declarar uma função
console.log(typeof Produto)
console.log(typeof new Produto()) //pode executar com os parênteses ou sem