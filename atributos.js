class Pessoa {
    constructor(nome, idade, altura, peso, atributo1, atributo2, atributo3, atributo4, atributo5) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.atributo1 = atributo1;
        this.atributo2 = atributo2;
        this.atributo3 = atributo3;
        this.atributo4 = atributo4;
        this.atributo5 = atributo5;
    }

    habilidade1(string) {
        console.log(string)
    }

    habilidade2(string) {
        console.log(string)
    }

    habilidade3(string) {
        console.log(string)       
    }
}

const Augusto = new Pessoa(
    'Augusto Pires',
    '25 anos',
    '1,65m',
    '59kg',
    'Boa memória.',
    'Sincero.',
    'Gosta de trabalho em equipe.',
    'Divertido (questionável).',
    'Gosta de todos os bichos.'
)

console.log(Augusto.nome)
Augusto.habilidade1(`Quase sempre manda bem na cozinha.`)
