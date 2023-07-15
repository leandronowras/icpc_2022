function game(numeroDePalavras, comprimentoDasPalabras, palavras) {
    let palavrasCompativeis = new Set()

    for (let i = 0; i < numeroDePalavras; i++) {
        for (let j = i + 1; j < numeroDePalavras; j++) {
            let letraIguais = 0
//            console.log("palavras atual:", palavras[i], "compativeis:")
            for(let letra = 0; letra < comprimentoDasPalabras; letra++) {
                if (palavras[i][letra] === "*" && palavras[j][letra] === "*") break
                if (palavras[i][letra] === palavras[j][letra]) {
                    letraIguais++
                }
                if (letraIguais === comprimentoDasPalabras - 2 && letra === comprimentoDasPalabras - 1) {
                    if(!palavrasCompativeis.has(palavras[i])) {
                        palavrasCompativeis.add(palavras[i])
                    }
                    if(!palavrasCompativeis.has(palavras[j])) {
                        palavrasCompativeis.add(palavras[j])
                    }
                    break
                }
            }
        }
    }

    // montar as palvras:
    let arrPalavrasCompativeis = Array.from(palavrasCompativeis)
    let palavrasPossiveis = []
        
    for (let i = 0; i < arrPalavrasCompativeis.length; i++) {
        for (let j = i + 1; j < arrPalavrasCompativeis.length; j++) {
            let palavraEmFormacao = ""
            for (let letra = 0; letra < comprimentoDasPalabras; letra++) {
                if(arrPalavrasCompativeis[i][letra] === "*" && arrPalavrasCompativeis[j][letra] === "*") {
                    palavraEmFormacao = ""
                    break
                }
                if(arrPalavrasCompativeis[i][letra] === "*") palavraEmFormacao += arrPalavrasCompativeis[j][letra]
                if(arrPalavrasCompativeis[j][letra] === "*") palavraEmFormacao += arrPalavrasCompativeis[i][letra]
                if(arrPalavrasCompativeis[i][letra] === arrPalavrasCompativeis[j][letra]) {
                    palavraEmFormacao += arrPalavrasCompativeis[i][letra]
                }
            }
            palavrasPossiveis.push(palavraEmFormacao)
        }
    }


    let menorPalavra = palavrasPossiveis[0]; // Assumimos que a primeira palavra é a menor inicialmente

    for (let i = 1; i < palavras.length; i++) {
        if(palavrasPossiveis[i]) {
            const comparacao = palavrasPossiveis[i].localeCompare(menorPalavra);
            if (comparacao < 0) {
                menorPalavra = palavrasPossiveis[i];
            }
        }
    }


    return [menorPalavra, palavrasCompativeis.size]
}


console.log("entrada 1", game(5, 4, ["rat*", "ru*d", "rot*", "r*ta", "r*ta"])) // rata 3
console.log("entrada 2", game(5, 4, ["bon*", "fon*", "n*no", "*eto", "*ano"])) // nano 2
