// Exemplo 5 [ fatorial] : Crie uma função que irá receber um número 
// e retornar o fatorial dele (Exemplo: 3! = 3 * 2 * 1 // 6)

function fatorial(n) {

    // Descricao: Calcula o fatorial de n
    // valores: valores de 0 a n-1
    // acc: acumulador
    // v: valor atual (variando de 0 a n-1)

    // Para obter uma lista de números de 0 a n-1 sem uso de estrutura de repetição:
    let valores = [...Array(n).keys()]        // Recupera os indices de um array de n elementos vazios 
                                        //[ o que o keys faz: retorna indices do array]

    
    // O callback de reduce deve retornar o proximo valor do acumulador
    // A funcao reduce retorna a ultima execucao de seu callback
    return valores.reduce((acc, v) => {
        return acc * (v + 1)
    }, 1)

}

console.log(fatorial(4))      // Valor esperado: 24
console.log(fatorial(5))      // Valor esperado: 120
