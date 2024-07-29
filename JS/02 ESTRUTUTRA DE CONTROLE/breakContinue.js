//break: switch, for, while
//continue: for, while

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums){
    if (x==5){
        break //interrompe e sai da repetição
    }
    console.log(`${x} = ${nums[x]}`)
}

for(let y in nums){
    if (y==5){
        continue //irá interromper apenas quando chegar no indice 5, depois continua
    }
    console.log(`${y} = ${nums[y]}`)
}


//NAO UTILIZAR

externo: //criando um rótulo
for(a in nums) {
    for(b in nums){
        if(a == 2 && b==3) break externo //irá pegar como base o primeiro FOR, para interromper e sair da repetição
        console.log(`par = ${a},${b}`)
    }
}