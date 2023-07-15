// obs: nunca vai ter um balao na posicao 0
function baloes(baloes, alturas) {
    // comecar sempre no mais alto
    let dardos = 0

    while(alturas) {
        let highestBaloon = Math.max(...alturas)
        if (highestBaloon == -1) break
        let indexOfHeighest = alturas.indexOf(highestBaloon);

        for (let i = indexOfHeighest; i < alturas.length; i++) {
            let tmpI = alturas[i]
            for (let j = i + 1; j < alturas.length; j++) {
                if (tmpI - 1 == alturas[j]) {
                    alturas[j] = - 1
                    tmpI--
                }
            }
        }
        alturas[indexOfHeighest] = -1
        dardos++ 
    }
    return dardos
}

console.log("entrada 1", baloes(5, [3, 2, 1, 5, 4]))
console.log("entrada 2", baloes(4, [1, 2, 3, 4]))
console.log("entrada 3", baloes(3, [5, 3, 2, 4, 6, 1]))


// funcionando :), dpois pensar em uma solucao mais eficiente ( o segredo é usar uma variavel temporaria ou uma sliding window?)
