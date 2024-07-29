const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
//        função arrow   expressão V ou F  - condição 1 e 2       = operador ternário (3 partes)
/*pode também ser apresentado da seguinte maneira 

const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
*/

console.log(resultado(7.1))
console.log(resultado(6.7))