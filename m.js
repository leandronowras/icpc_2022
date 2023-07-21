function amarelinha(participantes, rodadas, ondeElesEstao, comandos ) {
    const participantesCasa = {}
    for (let i = 0; i < participantes; i++) {
        participantesCasa[i + 1] = [ondeElesEstao[i], ondeElesEstao[i]]
    }

    for (let a = 0; a < rodadas; a++) {
        let comando = comandos[a]
        // verificando cada participante
        for (let j = 1; j < participantes + 1; j++) {
            if(haveCommonFactor([j], comando[0])) {
                participantesCasa[j][1] -= comando[1]
           }
            if (participantesCasa[j][1] <= 0 && participantesCasa[j].length < 3) {
                participantesCasa[j].push(a + 1)
            }
        }
    }
    let result = []
    for (let i = 1; i < participantes + 1; i++) {
        if (participantesCasa[i].length > 2) {
            result.push(participantesCasa[i][2])
        } else {
            result.push(-1)
        }
    }

    return result
}

function mdc(a1, b1) {
    let a = a1
    let b = b1
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
    if (a == 1) return 0
  return a;
}

function haveCommonFactor(num1, num2) {
  return mdc(num1, num2) > 1;
}

let participantes = 7
let rodadas = 6
let casasInicias = [10, 20, 30, 40, 50, 60, 70]
let comands = [
    [2, 25],
    [3, 36],
    [100, 42],
    [5, 10],
    [7, 70],
    [1, 1000],
]

console.log("entrada 1", amarelinha(participantes, rodadas, casasInicias, comands))

// entrada 2

participantes = 6
rodadas = 4
casasInicias = [100, 100, 100, 100, 100, 100]
comands = [
    [2, 50],
    [3, 50],
    [5, 99],
    [5, 1],
]

console.log("entrada 2", amarelinha(participantes, rodadas, casasInicias, comands))
