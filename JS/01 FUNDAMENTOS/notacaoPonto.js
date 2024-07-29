console.log(Math.ceil(6.1)) //arredonda o valor para cima

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' - esta é outra maneira de acrescentar um valor, se colocarmos logo em seguida, o valor é sobreescrito
console.log(obj1.nome)

function Obj(nome) { //transforma em publico, ou seja é possivel utilizá-lo(propriedade 'nome' e 'exec') fora deste bloco/contexto lexico
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
