//Exemplo de callback no browser
                                //a resposta dessa função é um array, para isso é preciso indicar o indice dela, neste caso [0]
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log("o evento ocorreu")
}