class Livro {
    constructor (titulo, autor, anoPublicado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicado = anoPublicado;
    }

    obterInformações () {
        console.log(`O livro "${this.titulo}" foi escrito por ${this.autor} e publicado no ano de ${this.anoPublicado}.`)
    }
}

const livro1 = new Livro('Agenda Diária', 'Agendário da Silva', '2019');
livro1.obterInformações();

const livro2 = new Livro('ES6 para Iniciantes', 'AlmaBoa Teixeira', '2016')
livro2.obterInformações();

const livro3 = new Livro('Como inventar bons nomes para livros', 'Nãosei Oliveira', '2023')
livro3.obterInformações();