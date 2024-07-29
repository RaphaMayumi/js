const valores = [7.7,90,2.5,3.7] 
            //    0 , 1, 2, 3

console.log(valores[0], valores[3])
console.log(valores[4]) //não dará erro, irá retornar UNDEFINED

valores[4] = 10 //irá acrescentar um valor para o indice 5
console.log(valores)
console.log(valores.length) //irá apresentar quantos indices tem este array

valores[10] = 50 //pode pular casas, ele irá retornar que existem casas vazias
console.log(valores)

valores.push({id:3}, false, null, 'teste') //função que permite adicionar novos elementos
console.log(valores)

console.log(valores.pop()) //retira o ultimo valor do array, e irá retornar o valor que foi retirado no console
console.log(valores)
delete valores[0] //retira o valor que se encontra no indice 0
console.log(valores)

console.log(typeof valores)
