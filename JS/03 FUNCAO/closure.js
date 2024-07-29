//Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função
// a função tem a memoria do que foi declarado na parte externa
// contexto lexico

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) //irá apresentar 'Local'