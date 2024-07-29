function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new date
    }
}

function imprimirNomeEmCapsLock(obj){
    try{ //PRIMEIRA TENTATIVA
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch (erro){ //SE DER ERRO NA PRIMEIRA, ELE VAI PARA A FUNÇÃO QUE MOSTRA A MENSAGEM DE ERRO, ACIMA
        tratarErroELancar()
    }
    finally{ //TENDO UM ERRO OU NÃO, ELE IRÁ PASSAR PELO FINALLY, APRESENTANDO O QUE CONTEM NELE
        console.log("encerrado com sucesso") 
    }
}

const obj = { name: 'Roberto' }
imprimirNomeEmCapsLock(obj)