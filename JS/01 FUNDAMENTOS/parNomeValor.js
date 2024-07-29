// par nome/valor
const saudacao = 'opa' //contexto lexico 1 (local onde a sua variável foi declarada fisicamente no codigo)

function exec() {
    const saudacao = 'Falaaa' // contexto lexico 2
    return saudacao
}

// const saudacao = 'eta' - ele vai dar erro pos ja foi delcarado, porém se fosse um VAR o valor só seria sobreescrito

//Objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua',
        numero: 256
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)