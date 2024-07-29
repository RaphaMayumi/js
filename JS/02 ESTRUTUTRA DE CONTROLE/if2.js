function teste1 (num){
    if(num > 7)
    console.log(num)
    
    console.log('final') //esta linha não está ligada ao bloco IF, será executada mesmo se a condição (num > 7) for V ou F
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); {  //o ';' determina o término do IF, não utilizar em estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)