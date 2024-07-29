const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d //sempre são feitos com 2 operandos, neste ex (((a+b)+c)+d)
const subtracao = c - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2 //saber se é par ou impar

console.log(soma, subtracao, multiplicacao, divisao, modulo)

console.log(-divisao) //operador unário, transforma o resultado em negativo

console.log(-subtracao) //quando o resultado já for negativo, ele utiliza a regra de sinais e fica positivo


