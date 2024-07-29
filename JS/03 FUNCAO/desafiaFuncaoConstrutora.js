function Pessoa () {
        this.nome = nome


    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


//é possivel criar objetos em Função Construtora, Class e Function Factory