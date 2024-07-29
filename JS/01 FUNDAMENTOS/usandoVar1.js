//uma variável declarado com VAR é possivel ser visível fora do bloco, em outras linguagens é vista apenas dentro daquele bloco 
{
    {
        {
            var sera = 'sera'
            console.log(sera)
        }
    }
}

console.log(sera)

// a var só tem 2 escopos possíveis, ou é global assim como apresentado acima, ou função
// escopo global é uma desvantagem pelo fato de dentro de uma tela(window), uma aplicação, ser possível sobrescrever os valores
//porém na função é algo mis reservado, como será apresentado abaixo

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)//fora da função não funciona


//para entender o conceito de varável global, entrar no console do browser, declarar uma variável, e imprimi-la com 
//window.nomedavariavel => window seria tudo o que está presente naquela janela
//se for declarado um novo valor aquela variável, ele simplesmente irá sobrepor