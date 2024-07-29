// hoisting = içamento, coloca as declarações definidas com VAR para o inicio do código ex.:
console.log('a =', a)
var a = 2
console.log('a =', a)

// com o LET isso não acontece, dará erro
console.log('b =', b)
let b = 3
console.log('b =', b)

