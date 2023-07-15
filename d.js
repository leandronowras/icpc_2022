function d(N, x, y) {
    let quadrado = [[0, 0], [0, 2**N], [ 2**N, 2**N], [2**N, 0]]
    let particula = [2**(N - 1), 2**(N - 1)]


    /* usar esse codigo para simplificar explicacao no video

    console.log("quadrado", quadrado)
    console.log("particula", particula)
    console.log("posicao final", x, y)

    console.log("ponto medio aresta 0", calculatePontoMedio(quadrado[0], particula))
    console.log("ponto medio aresta 1", calculatePontoMedio(quadrado[1], particula))
    console.log("ponto medio aresta 2", calculatePontoMedio(quadrado[2], particula))
    console.log("ponto medio aresta 3", calculatePontoMedio(quadrado[3], particula))
*/

    let particulaX = particula[0]
    let particulaY = particula[1]
    let xFinal = x
    let yFinal = y

    let ativadores = 0
    while (particulaX % xFinal !== 0 || particulaY % yFinal !== 0) {
        if (particulaX % xFinal !== 0) { 
            particulaX = particulaX + (particulaX / 2)
            ativadores++
        }
        if (particulaY % yFinal !== 0) {
            particulaY = particulaY + (particulaY / 2)
        }
    }
    let counterX = 0
    let counterY = 0
    while(particulaX !== xFinal && particulaY !== yFinal) {
        if (particulaX !== xFinal) {
            particulaX = particulaX / 2
            counterX++
        }
        if (particulaY !== yFinal) {
            particulaY = particulaY / 2
            counterY++
        }
    }
    let result =  Math.min(counterX, counterY) + ativadores

    return result
}

// nem precisa ( vai ser util para o video )
function calculatePontoMedio(ativador, particula) {
    let pontoMedioX = (ativador[0] + particula[0]) / 2 
    let pontoMedioy = (ativador[1] + particula[1]) / 2

    return [pontoMedioX, pontoMedioy]
} 




console.log("exemplo 1", d(1, 1, 1), "\n")
console.log("exemplo 2", d(4, 12, 4), "\n")
console.log("exemplo 3", d(4, 3, 1), "\n")
// TUDO certo :)
