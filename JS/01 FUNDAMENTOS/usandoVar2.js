var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

/*irá imprimir o 2 pois apesar de ele estar dentro de um bloco, não foi dada uma função à ele, então é como se 
estivesse todos dentro do escopo global, no caso a segunda vez que foi declarada a varivel NUMERO ele sobreecreveu
a primeira declaração
*/