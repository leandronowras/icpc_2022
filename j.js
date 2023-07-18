function vinteTres(rodadas, joao, maria, banca) {
    let maximo = 23
    let pontuacaoMaria = maria.reduce((acc, value) => acc + value, 0)
    let pontuacaoJoao = joao.reduce((acc, value) => acc + value, 0)
    let pontuacaoBanca = 0
    for (let i = 0; i < banca.length; i++) {
        if (banca[i] === 11 || banca[i] === 12 || banca[i] === 13) {
            banca[i] = 10;
        }
        pontuacaoBanca += banca[i]
    }

    let banca_maria = pontuacaoMaria + pontuacaoBanca
    let banca_joao = pontuacaoJoao + pontuacaoBanca

    let pontuacaoParaMariaGanhar = maximo - banca_maria
    let pontuacaoParaJoaoPerder = maximo + 1 - banca_joao

    if (pontuacaoParaMariaGanhar === pontuacaoParaJoaoPerder) return -1

    let cartasQueNaoTemMais = {}
    // na banca
    for (let i = 0; i < rodadas; i++ ) {
        if (!cartasQueNaoTemMais[banca[i]]) {
            cartasQueNaoTemMais[banca[i]] = 1
        } else {
            cartasQueNaoTemMais[banca[i]]++
        }
    }
    // nas maos
    for (let i = 0; i < 2; i++) {
        if (!cartasQueNaoTemMais[joao[i]]) {
            cartasQueNaoTemMais[joao[i]] = 1
        }
        else {
            cartasQueNaoTemMais[joao[i]]++
        }
        if (!cartasQueNaoTemMais[maria[i]]) {
            cartasQueNaoTemMais[maria[i]] = 1
        } 
        else {
            cartasQueNaoTemMais[maria[i]]++
        }
    }

    let cartaMinima = Math.min(pontuacaoParaJoaoPerder, pontuacaoParaMariaGanhar)
    while (cartasQueNaoTemMais[cartaMinima] >= 4) {
        cartaMinima++
    }

    return cartaMinima 
}

console.log("entrada 1", vinteTres(1, [10, 5], [9, 10], [1]))
console.log("entrada 2", vinteTres(1, [10, 5], [8, 7], [2]))
console.log("entrada 3", vinteTres(1, [9, 10], [10, 5], [1]))
console.log("entrada 4", vinteTres(2, [8, 4], [4, 1], [4, 4]))
console.log("entrada 5", vinteTres(8, [2, 1], [1, 1], [1, 2, 2, 2, 3, 3, 3, 3]))
