const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!' 
const template = `
    Olá 
    ${nome}!` //ele considera as quebras de linha, interpreta a variável por conta da ${}
console.log(concatenacao, template)

//expressoes

console.log(`1 + 1 = ${1+1}`)

//função arrow

const up = textoalto => textoalto.toUpperCase() //dentro do template string é possível chamar uma função
console.log(`Ei... ${up('cuidado')}!!!!!!`)