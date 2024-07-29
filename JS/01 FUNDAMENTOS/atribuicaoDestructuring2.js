const [a] = [10] //exemplo em array
console.log(a)

        //foi pulado as posicões n2 e n4
const [n1, , n3, , n5, n6 = 0]  = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)      //n1 n2 n3 n4   n5 está fora do array então será "undefined", n6 foi declarado anteriormente "0"

    //primeiro valor ignorado do primeiro array, depois ignorado o valor do segundo array, e será impresso o segundo valor, neste caso "6"
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota) 