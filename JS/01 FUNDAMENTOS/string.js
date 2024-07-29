const escola = "Cod3r"
            //  01234

console.log(escola.charAt(4)) //mostra o que se encontra no indice 4
console.log(escola.charAt(5)) // neste caso ele não irá dar erro, ele apenas aparece um vazio
console.log(escola.charCodeAt(3)) //busca o código HTML do literal que se encontra no indice 3
console.log(escola.indexOf('3')) // busca o código HTML do literal que se enconta na variável escola neste caso o 3

console.log(escola.substring(1)) //ele irá imprimir a partir do indice 1
console.log(escola.substring(0,3)) // ele irá imprimir do indice 0 até o 3, porém sem incluir o indice 3

console.log('Escola '.concat(escola).concat("!")) // é demonstrado que é possivel colocar aspas simples e duplas em uma unica sentença
// neste caso é utilizado a concatenação de dados
console.log('Escola '+ escola + "!") //também é uma concatenação
console.log(escola.replace(3, 'e')) // será alterado o indice 3 pela letra 'e'


console.log('Ana,Maria,Pedro'.split(','))//irá separar a string em arrays a partir das virgulas
