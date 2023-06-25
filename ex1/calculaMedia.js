export function CalculaArray (numArray) {
    const calculo = numArray.reduce((soma, n) => soma + n, 0)
    let media = calculo / numArray.length;
    console.log(media)
    return media;
}