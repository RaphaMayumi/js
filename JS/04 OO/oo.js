//CODIGO NÃO EXECUTÁVEL

// linguagem Procedural

processamento(valor1, valor2, valor3)

//OO

//existe um objeto que contem as funções e os valores utilizados nas funções
//as funções pertencem ao objeto
//objetos tem atributos e comportamentos, e se relacionam uns com os outros
//pode ter objeto dentro de objeto
//existe a herança (filhos herdam caracteristicas do objeto pai)

objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
         //...
    }

}

objeto.processamento()

//PRINCIPIOS IMPORTANTES
//1. abstração (por exemplo trazer um objeto do mundo real para o codigo, saber que atributos colocar nele para funcionar)
//2. encapsulamento (informações do objeto escondidas, quanto mais gente depender dele, mais demorado será a evolução, criar objetos o mais independente possivel)
//3. herança (prototype) - reuso de codigo - JS só permite 1 pai - É UM
//4. polimorfismo (existe um modelo generico (pai) e pode ser atribuidos subtitulos (filhos))