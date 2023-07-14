export default function somaImpares(array){
  const resultado = array.filter(number => number % 2 != 0)
  console.log('Os números ímpares presentes no array são: ' + resultado);
  const soma = resultado.reduce((acc, value) => acc + value, 0);
  console.log('A soma dos números ímpares é de: ' + soma);
}