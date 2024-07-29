//função recebe parâmetros e retorna um valor
//podemos declarar dentro de uma variável, declarar uma funçao dentro de uma função, ou declarar normalmente
//são varias maneiras de declarar uma função abrindo um leque de possibilidades


//Função em JS é First Class Object (citizens)
//Higher-order function
//ou seja, pode ser tratado como um dado, podendo ate uma função retornar uma função

//criar de forma literal - bloco é obirgatório - se não retornar nada, ele apresenta Undefined - usar o prênteses para chamar a função
function fun1() { }

//armazenar em uma variável
const fun2 = function() {}

//armazenar em um array
const array = [function(a,b){return a + b}, fun1, fun2]
console.log(array[0](2,3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'opa' }
console.log(obj.falar()) //usar o prênteses para chamar a função

//passar função como um parâmetro
function run(fun){
    fun()
}

run(function(){ console.log('Executando....') })

// uma função pode retornar/conter outra função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)