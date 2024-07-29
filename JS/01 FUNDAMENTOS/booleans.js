let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ') //apenas com espaço funciona, mas pode ser um texto
console.log(!![]) //array
console.log(!!{}) //objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // valor que foi atribuído para a variàvel isAtivo e não se a atribuição deu certo

console.log('os falsos')
console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null)
console.log(!!NaN) //not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('para finalizar...') //OU
console.log(!!('' || null || 0 || 'eta')) //todos os primeiros valores são falsos, porém o ultimo é verdadeiro, e por isso ele irá retornar TRUE
console.log(('' || null || 0 || 'eta')) //retorna o primeiro valor verdadeiro dessa seção


let nome = ''
console.log(nome || 'Desconhecido') //se o nome estiver preenchido, irá retornar o nome, caso contrário, irá retornar DESCONHECIDO