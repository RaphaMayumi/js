function Pessoa(){
    this.idade = 0

    setInterval(() => { //executa a função em um x intervalo de tempo que é determinado em milisegundos
        this.idade++
        console.log(this.idade)
    }, 1000) // 1000 miliseg = 1 seg
}


new Pessoa  //instanciando o objeto Pessoa


//neste caso o this não varia de acordo com quem ta chamando, não é necessário colocar o .bind, assim como no aruqivo thisEBind.JS
                        //pois o this na realidade se encontra no objeto pessoa e quem está chamando é o setInterval
