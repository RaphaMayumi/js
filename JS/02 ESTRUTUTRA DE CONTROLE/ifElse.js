const imprimirResultado = function(nota){
    if(nota >= 7){ //neste caso, outra maneira de apresentar seria sem as chaves no IF e no ELSE, ou apenas no IF
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('eta') /*por ser fracamente tipada, ele irá aceitar este valor, porém fazendo a comparação com a condição 
será apresentado como se fosse uma condição falsa, logo irá para o ELSE*/