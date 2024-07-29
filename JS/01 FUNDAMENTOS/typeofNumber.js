const peso1 = 1.0
const peso2 = Number('2.0') // 2º jeito de declarar um número
const peso3 = 1.3

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log(Number.isInteger(peso3))//para demonstrar que ele irá apresentar que o numero armazenado nessa variável não é inteiro


const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //fixa uma determinada quantidade de casas dps da virgula
console.log(media.toString(2)) //transforma em binário
console.log(typeof media)//number
console.log(typeof Number)//function