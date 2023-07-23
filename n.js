function cartas(quantidadeDeCartas, numerosDeCima, numerosDeBaixo, pegadas, viradas) {
    let totalLeft = []
    for (let i = 0; i < pegadas; i++) {
        totalLeft.push([numerosDeCima[i], numerosDeBaixo[i]])
    }

    let totalRight = []
    for (let i = quantidadeDeCartas - 1; i > quantidadeDeCartas - pegadas - 1; i--) {
        totalRight.push([numerosDeCima[i], numerosDeBaixo[i]])
    }

    let total = []
    let [l, r] = [0, quantidadeDeCartas - 1]
    while (pegadas > 0) {
        if (
            numerosDeCima[l] + numerosDeBaixo[l] >= numerosDeCima[r] + numerosDeBaixo[r]
        ) {
            total.push([numerosDeCima[l], numerosDeBaixo[l]])
            l++
            pegadas--
        }
        else if (
            numerosDeCima[l] + numerosDeBaixo[l] < numerosDeCima[r] + numerosDeBaixo[r]
        ) {
            total.push([numerosDeCima[r], numerosDeBaixo[r]])
            r--
            pegadas--
        }
    }
    // decidir qual carta virar
    let valorCartaVirada = 0
    for (let j = 0; j < viradas; j++) {
        let indexParaRemover = 0
        for (let i = 0; i < total.length; i++) {
            novoValor = Math.max(valorCartaVirada, somarValorDasCartas(total[i]))
            if (novoValor > valorCartaVirada) {
                valorCartaVirada = novoValor
                indexParaRemover = i
            }
        }
        total.splice(indexParaRemover, 1)
    }

    let parcial = 0

    for (let i = 0; i < total.length; i++) {
        parcial += total[i][0] 
    }

    let result = parcial + valorCartaVirada
    console.log("esquerdo", totalLeft)

    return result

    //  [] fazer brute force para cada elemento da lista
    //      so cogitar essa ideia se eu tiver uma maneira de nao ter espaco extra pada cada possibilidade
    //  brute force do primeiro valor do lado esquerdo com os restantes do lado direito
    //  dpos adiciona o valor esquerdo com o de cima dele e faz o loop no direito menos 1
}

function somarValorDasCartas(array) {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  return soma;
}

let quantidadeDeCartas = 5
let numerosDeCima = [9, 7, 2, 2, 9]
let numerosDeBaixo = [5, 2, 2, 3, 1]
let pegadas = 2
let viradas = 1

console.log("entrada 1", cartas(quantidadeDeCartas, numerosDeCima, numerosDeBaixo, pegadas, viradas))



quantidadeDeCartas = 5
numerosDeCima = [9, 7, 2, 2, 9]
numerosDeBaixo = [5, 9, 2, 3, 1]
pegadas = 2
viradas = 1

console.log("entrada 2", cartas(quantidadeDeCartas, numerosDeCima, numerosDeBaixo, pegadas, viradas))


/* edge case
quantidadeDeCartas = 5
numerosDeCima = [1, 99, 2, 2, 9]
numerosDeBaixo = [1, 99, 2, 3, 1]
pegadas = 2
viradas = 1

console.log("edge case (é pra dar mais de 100)", cartas(quantidadeDeCartas, numerosDeCima, numerosDeBaixo, pegadas, viradas))
*/

