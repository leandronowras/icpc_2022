function interceptandoInformacoes(n) {
    for (let i of n) {
        if (i == 9) return "F"
    }
    return "S"
}

console.log("entrada 1", interceptandoInformacoes([0, 0, 1, 1, 0, 1, 0, 1]))
console.log("entrada 2", interceptandoInformacoes([0, 0, 1, 9, 0, 1, 0, 1]))
