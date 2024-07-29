// get e set são funções

const sequencia = {
    _valor: 1, //convenção (neste caso a variável não é privada, mas está indicando que a mesma é pretendida ser acessada apenas internamente)]
    get valor(){ //obtem o valor
        return this._valor++
    },
    set valor(valor){ //condição para retorno
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900 //irá ignorar pois o valor declarado é menor do que o declarado anteriormente
console.log(sequencia.valor, sequencia.valor)