// função factory que sempre retorna um objeto, que pode ser trabalhada de forma independente


//factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())