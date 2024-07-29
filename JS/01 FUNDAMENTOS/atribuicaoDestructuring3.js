function rand({min=0, max=1000}){ //passamos 2 atributos porém dentro de um operador destructuring, isso para não precisar criar um obj
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //arredonda o valor para baixo
}


//ou console.log(rand({max: 50, min: 40})) - aqui é utilizado um objeto
const obj = {max: 50, min: 40}
console.log(rand(obj))

console.log(rand({min: 955})) //valor max ele assume por padrão o 1000

console.log(rand({})) //passando um obj vazio, ele irá nos apresentar qualquer número entre 0 e 1000

// console.log(rand()) - não vai funcionar pois estamos tentando extrair valores de algo "undefined" ou nulo