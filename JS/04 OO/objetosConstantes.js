//pessoa -> endereço na memoria 123 -> {...}
const pessoa = { nome: 'João'}
pessoa.nome = 'Pedro' //é possível alterar, pois está sendo alterado o atributo DENTRO da constante PESSOA
console.log(pessoa)

//pessoa -> endereço na memoria 456 -> {...}
// pessoa = {nome: 'Ana'} - é como se estivesse sobreescrevendo a constante anterior, irá dar erro

Object.freeze(pessoa) //congela o objeto no estado atual, não é possivel adicionar, deletar, alterar

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
//não dará erro, apenas ignora

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome:'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)