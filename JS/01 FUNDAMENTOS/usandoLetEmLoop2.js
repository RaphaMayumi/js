const funcs = []//iniciando uma array

for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
//neste caso ele apresenterá devidamente os valores em cada indice, por conta do armazenamento de dados que o let tem (?)
funcs[2]()//apresenta os valores presentes no indice [2]
funcs[6]()
funcs[8]()