class Veiculo {
  constructor(marca = String, ano = Number){
    this.marca = marca;
    this.ano = ano;
  }
  obterDetalhes(){
    console.log(`O veículo é da marca ${this.marca}, fabricado em ${this.ano}.`)
  }
}

class Carro extends Veiculo {
  constructor(marca, ano, portas = Number){
    super(marca, ano);
    this.portas = portas;
  }
  obterDetalhes(){
    console.log(`O carro é da marca ${this.marca} e possui ${this.portas} portas, fabricado em ${this.ano}.`)
  }
}

const Gol = new Veiculo('Wolksvagen', 2007);

const Civic = new Carro('Honda', 2019, 4)

Gol.obterDetalhes();
console.log('----------');
Civic.obterDetalhes();