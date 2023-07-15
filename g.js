    // OBJETIVO: remover TRIANGULOS e deixar os Ls (retas que compoem o triangulo)
//               e deixar a area minima, ou seja, remover o maior triangulo caso a remocao de um impeca a remocao do outro
    // obs: nao ligar para o formato do poligono no final
//  obs: na pagina seguinte tem os exemplos dos desenhos
//
    // solucao
//      [ ] fazer uma grid aparte com cada ponto sendo um map(xyDoPonto: 0 (numero de vezes q um triangulo toca ali)) e tamanho 3xN(quantidade de triangulos)
//      [ ] percorrer os triangulos e marcar os as cordenas como chaves e os valores como vezes em q se encontram
//          [ ] marcar como 2 na linha do triangulo e 1 na linha do triangulo atual
//          [ ] tem q manter o shape do grid
//      [ ] ver onde se encontram duas vezes NA MESMA LINHA ( que representa um trinangulo)
//      [ ] decidir qual triangulo remover
//          [ ] comparar triangulo atual e anterior?
function triangulos(numeroDeTriangulos, coordenadaDoTriangulo) {
    let grid = converterGridParaObjeto(coordenadaDoTriangulo)

    for (let i = 0; i < numeroDeTriangulos; i++){
        for (let j = 0; j < 3; j++) {
            let ponto = coordenadaDoTriangulo[i][j].join("")

            for (let a = 0; a < numeroDeTriangulos; a++){
                for (let b = 0; b < 3; b++){
                    if (Object.keys(grid[a][b])[0] == ponto) {
                        grid[a][b][ponto]++
                    }
                }
            }
        }
    }
    let indicesDeTriangulosParaRemover = []
    for (let i = 0; i < grid.length; i++) {
        let count = 0
        for(let j = 0; j < 3; j++) {
            if (Object.values(grid[i][j])[0] >= 3) count++ 
        }
        if (count === 3) indicesDeTriangulosParaRemover.push(i)
    }

    let areaDosPraRemover = 0
    for (let indice of indicesDeTriangulosParaRemover) {
        let area = calcularAreaTriangulo(
            coordenadaDoTriangulo[indice][0],
            coordenadaDoTriangulo[indice][1],
            coordenadaDoTriangulo[indice][2],
        )
        areaDosPraRemover = Math.max(areaDosPraRemover, area)

    }

    let areaTotal = 0
    for (let i = 0 ; i < numeroDeTriangulos; i++) {
            let area = calcularAreaTriangulo(
                coordenadaDoTriangulo[i][0],
                coordenadaDoTriangulo[i][1],
                coordenadaDoTriangulo[i][2],
            )
        areaTotal += area
    }

    return (areaTotal - areaDosPraRemover).toFixed(1)
}

function converterGridParaObjeto(grid) {
    let result = []
    for (let i = 0; i < grid.length; i++) {
        const linha = []
        for (let j = 0; j < 3; j++){
            let ponto = grid[i][j].join("")
            let obj = {[ponto]: 0}
            linha.push(obj)
        }
        result.push(linha)
    }
    return result
}

function calcularAreaTriangulo(pontoA, pontoB, pontoC) {
  const x1 = pontoA[0];
  const y1 = pontoA[1];
  const x2 = pontoB[0];
  const y2 = pontoB[1];
  const x3 = pontoC[0];
  const y3 = pontoC[1];

  const area = 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
  return area;
}


console.log("entrada 1",triangulos(4, [
    [[0, 0], [0, 10], [10, 0]],
    [[10, 10], [0, 10], [10, 0]],
    [[10, 10], [0, 10], [0, 20]],
    [[10, 10], [20, 0], [10, 0]]]
))

console.log("entrada 2",triangulos(3, [
    [[0, 0], [0, 10], [10, 0]],
    [[10, 10], [0, 10], [10, 0]],
    [[10, 10], [20, 0], [10, 0]],
]
))

console.log("entrada 3",triangulos(1, [
    [[0, 0], [1, 0], [0, 1]],
]
))
