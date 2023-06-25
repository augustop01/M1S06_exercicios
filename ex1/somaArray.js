export function SomaArray (numArray) {
    const soma = numArray.reduce((somaParcial, n) => somaParcial + n, 0)
    console.log(soma)
    return soma;
}