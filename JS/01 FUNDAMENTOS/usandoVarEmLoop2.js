const funcs = [] //iniciando uma array

for (var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
//netse caso só será apresentado o valor 10, pois foi este valor que saiu do loop
funcs[2]()//apresenta os valores presentes no indice [2]
funcs[6]()
funcs[8]()