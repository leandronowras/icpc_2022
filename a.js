function getEntrada1() {
    return "abababa"
}
function getEntrada2() {
    return "bababab"
}
function getEntrada3() {
    return "aababaaabb"
}
function getEntrada4() {
    return "bbaababaaa"
}

function monotos(lista) {
    let result = 0
    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] === lista[j]) {
                result++
            } else {
                break
            }
        }
    }
    return result
}

console.log(
    monotos(getEntrada1()),
    monotos(getEntrada2()),
    monotos(getEntrada3()),
    monotos(getEntrada4()),
)
