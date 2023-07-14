export default function filtrarPares(array){
  const result = array.filter(number => number % 2 == 0)
  console.log('Os números pares presentes no array são: ' + result);
}