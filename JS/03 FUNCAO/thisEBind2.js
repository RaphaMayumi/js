function Pessoa(){
    this.idade = 0

    setInterval( function(){ //executa a função em um x intervalo de tempo que é determinado em milisegundos
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // 1000 miliseg = 1 seg
}//com o bind é laçado o this presente no objeto PESSOA


new Pessoa  //instanciando o objeto Pessoa



/* ou pode ser feito colocando o THIS em uma constante que nunca irá mudar, não importa quem o chame, chamada SELF

function Pessoa(){
    this.idade = 0

    const self = this

    setInterval( function(){
        self.idade++
        console.log(self.idade)
    }, 1000) 
}

new Pessoa  
*/