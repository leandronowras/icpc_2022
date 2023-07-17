/*
Para transformar um grafo não fortemente conectado em um grafo fortemente conectado apenas adicionando conexões, você pode seguir os seguintes passos:

[] Encontre os componentes fortemente conectados do grafo original usando o algoritmo de Kosaraju ou o algoritmo
de Tarjan.

[] Identifique os vértices de entrada, ou seja, os vértices que não têm nenhuma aresta apontando para eles,
    em cada componente fortemente conectado.

[] Para cada componente fortemente conectado, escolha um vértice de entrada e crie uma nova aresta
a partir desse vértice para outro vértice em um componente diferente.
*/

function transformarGrafoParaFortementeConectado(n, arestas) {
    // criando o grafo
    function criarGrafoDirecionado(arestas) {
        const grafo = {};

        for (const [u, v] of arestas) {
            if (!(u in grafo)) {
                grafo[u] = [];
            }
            grafo[u].push(v);
        }

        return grafo;
    }
    let grafo = criarGrafoDirecionado(arestas)

    // invertendo o grafo
    function inverterOrdemDoGrafo(grafo) {
        const grafoInvertido = {};

        for (const vertice in grafo) {
            for (const vizinho of grafo[vertice]) {
                if (!(vizinho in grafoInvertido)) {
                    grafoInvertido[vizinho] = [];
                }
                grafoInvertido[vizinho].push(Number(vertice));
            }
        }

        // Adicionar vértices isolados que não têm conexões de saída no grafo original
        for (const vertice in grafo) {
            if (!(vertice in grafoInvertido)) {
                grafoInvertido[vertice] = [];
            }
        }

        return grafoInvertido;
    }
    let grafoInvertido = inverterOrdemDoGrafo(grafo)

    // comecando a brincadeira
    let stack = []
    let visitados = {}
    let jaPercorridos = new Set()

    function dfs(v) {
        visitados[v] = true;
        jaPercorridos.add(v)

        const vizinhos = grafo[v] || [];
        for (const vizinho of vizinhos) {
            if (!visitados[vizinho]) {
                jaPercorridos.add(v)
                dfs(vizinho);
            } else {
                if (stack.indexOf(v) == -1) {
                    stack.push(v);
                }
            }
        }
    }
    // preenchendo a fila
    // ------------ TODO: tenho q dar um jeito de pular os que ja foram chamaados  em um ciclo -----------------
    // [ ] transformar a stack em um set??
        //  [] é necessario q cada elemente seja repetido apenas 1 vez?

    for (let i = 1; i < n + 1; i++){
        console.log("i", i)
        if (!jaPercorridos.has(i)){
            dfs(i)
        }
    }


    // parte 2
    let stronglyConnected = {}
    let visitados2 = {}
     function dfs2(v, vConectados) {
        visitados2[v] = true;
        vConectados.push(v)

        const vizinhos = grafoInvertido[v] || [];
        for (const vizinho of vizinhos) {
            if (!visitados[vizinho]) {
                dfs2(vizinho, vConectados);
            } 
            else {
                console.log("resposta?", vConectados)
            }
        }
    }

    console.log("stack", stack)
    while(stack.length > 0) {
        let current = stack.pop()
        let verticesConectados = dfs2(current, [])
        stronglyConnected[current] = verticesConectados
    }
    console.log("stronglyConnected", stronglyConnected)

    console.log("grafo array", arestas)
    console.log("grafo", grafo)
    console.log("grafo Invertido", grafoInvertido)
    console.log("stack", stack)
    console.log("ja percorridos", jaPercorridos)

}

// Exemplo de uso
let n = 7; // Número de vértices no grafo original
let arestas = [
    [1, 2],
    [2, 3],
    [3, 1],
    [6, 1],
    [6, 4],
    [4, 5],
    [7, 6],
]; // Lista de arestas

const entrada1 = transformarGrafoParaFortementeConectado(n, arestas);
console.log(entrada1);


// Exemplo de uso
n = 7; // Número de vértices no grafo original
arestas = [
    [2, 1],
    [3, 2],
    [1, 3],
    [1, 6],
    [4, 6],
    [5, 4],
    [6, 7],
]; // Lista de arestas

const entrada2 = transformarGrafoParaFortementeConectado(n, arestas);
console.log(entrada2);



// Exemplo de uso
n = 2; // Número de vértices no grafo original
arestas = [
    [2, 1],
    [1, 2],
]; // Lista de arestas

const entrada3 = transformarGrafoParaFortementeConectado(n, arestas);
console.log(entrada3);


// Exemplo de uso
n = 4; // Número de vértices no grafo original
arestas = [
    [3, 3],
    [1, 2],
    [2, 3],
    [3, 1],
]; // Lista de arestas

const entrada4 = transformarGrafoParaFortementeConectado(n, arestas); // bugado
console.log(entrada4);



// Exemplo de uso
n = 1; // Número de vértices no grafo original
arestas = [
    [2, 0],
]; // Lista de arestas

const entrada5 = transformarGrafoParaFortementeConectado(n, arestas); // bugado
console.log(entrada5);



// Exemplo de uso
n = 5; // Número de vértices no grafo original
arestas = [
    [6, 4],
    [1, 2],
    [1, 3],
    [4, 6],
    [5, 6],
]; // Lista de arestas

const entrada6 = transformarGrafoParaFortementeConectado(n, arestas); // bugado
console.log(entrada6);



// solucao = identificar os grafons fortemente conectados e fazer uma ponte de um para o outro e outro do outro para um
//
    //
    // Os bugs sao causados devido a parte 2
