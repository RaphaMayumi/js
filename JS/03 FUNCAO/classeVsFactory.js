class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`) //é um problema o THIS pois ele pode variar, pois é um metodo publico
    }
}

const p1 = new Pessoa('João') //no browser essa situação funciona perfeitamente
p1.falar()






const criarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`) //não é preciso acessar o 'nome' com o THIS pois o objeto tem ciencia do contexto lexico em que se encontra
    }//mesmo que ele esteja sendo chamado dentro do objeto ele reconhece que foi declarado dentro da função externa à ele
}

const p2 = criarPessoa('Jão')
p2.falar()