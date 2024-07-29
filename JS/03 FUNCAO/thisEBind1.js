const pessoa = {
    saudacao:'Bom dia!',
    falar(){ //nova maneira de declarar uma função dentro de um objeto
        console.log(this.saudacao) //neste caso o THIS aponta para o objeto PESSOA que tem como chave SAUDACAO com valor 'Bom dia'
    }
}

pessoa.falar() //imprimir, é obrigatório colocar o () para chamar a função

const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //bind tem a função do THIS nessa situação, laçando o objeto na função 
falarDePessoa()                  // bind é uma função que irá ajudar a juntar o objeto PESSOA para a função FALAR 