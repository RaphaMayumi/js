/*situação-problema: fazendo freelancer, voce tem 2 trabalhos para serem feitos essa semana, se os 2 forem feitos, voce irá
comprar uma tv de 50pol e um sorvete, se apenas 1 for finalizado, será comprado uma tv de 32 e um sorvete

- e = ambos devem ser verdadeiros
v e v = v
v e f = f
f e ? = f

- ou = todos verdadeiros ou apenas um verdadeiro, é verdadeiro
v ou ? = v
f ou v = v
f ou f = f

- ou exclusivo = valores diferentes são verdadeiros
v xor v = f
v xor f = v
f xor v = v
f xor f = f
*/
function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //ou = operador binário
    const comprarTV50 = trabalho1 && trabalho2 //e = operador binário
    // const comprarTV32 = !!(trabalho1 ^ trabalho2) - bitwise xor
    const comprarTV32 = trabalho1 != trabalho2 // xor = ou exclusivo - operador binário
    const manterSaudavel = !comprarSorvete //negação = operador unário - se for comprar o sorvete, dará negativo, caso contrário, positivo

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel} //objeto (conjunto de chave e valor)
    // nova maneira de criação de objeto sem precisar colocar chave e valor caso os mesmos tenham o mesmo nome
    /* maneira antiga:
    return { comprarSorvete: comprarSorvete, 
        comprarTV50: comprarTV50,
        comprarTV32: comprarTV32, 
        manterSaudavel: manterSaudavel}
    */
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))