let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--) //tipo e valor se tornam TRUE  pois a subtração do num2 é feita após a comparação
console.log(num1 === num2) //tipo iguais porem valores diferentes