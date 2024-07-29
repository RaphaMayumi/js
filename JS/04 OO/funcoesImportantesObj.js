const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //apresenta apenas as chaves
console.log(Object.values(pessoa)) //apresenta apenas os valores
console.log(Object.entries(pessoa)) //apresenta as chaves e valores dentro de arrays

Object.entries(pessoa).forEach(e => { //apresenta as chaves e valores ------- e = elementos
    console.log(`${e[0]} : ${e[1]}`)
})

/* ou pode ser apresentado dessa maneira
Object.entries(pessoa).forEach(([chave, valor]) => { 
    console.log(`${chave} : ${valor}`)
})
*/

Object.defineProperty(pessoa, 'dataNascimento',{ //dataNascimento é a nova chave e deve ser escrita entre ''
    enumerable: true, // será apresentado na listagem de chaves na hr da consulta?
    writable: false, // poderá ser sobreescrito?
    value:'01/01/2019' // valor inicial
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest,o1,o2) //irá juntar todas as chaves e valores no primeiro objeto, as chaves com o mesmo nome, irá sobrepor os valores, mantendo o ultimo valor apresentando

Object.freeze(obj)
obj.c = 1234 //não será alterado pois foi utilizado o FREEZE
console.log(obj)