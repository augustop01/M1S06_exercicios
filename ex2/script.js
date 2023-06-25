let alunosBase = [
  {
    nome: "Alberto",
    nota1: 8,
    nota2: 10,
  },
  { 
    nome: "Bruna", 
    nota1: 10, 
    nota2: 6 
  },
  {
    nome: "Carlos",
    nota1: 7,
    nota2: 3
  },
  {
    nome: "Juliana",
    nota1: 8,
    nota2: 8
  },
  {
    nome: "Gabriel",
    nota1: 10,
    nota2: 3.5
  }
];

let media = alunosBase.map((aluno) => (aluno.nota1 + aluno.nota2) / 2);

let alunosMedia = [
  {
    nome: "Alberto",
    media: media[0]
  },
  { 
    nome: "Bruna",
    media: media[1]
  },
  {
    nome: "Carlos",
    media: media[2]
  },
  {
    nome: "Juliana",
    media: media[3]
  },
  {
    nome: "Gabriel",
    media: media[4]
  }
];

console.log(alunosMedia.sort((a,b) => b.media - a.media))