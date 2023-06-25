export function MultiplicaArray (numArray) {
    const multiplica = numArray.reduce((multiply, n) => multiply * n, 1)
    console.log(multiplica)
    return multiplica;
}