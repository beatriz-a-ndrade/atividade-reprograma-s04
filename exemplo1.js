// Exemplo 1 [ For/Break/Continue]: Utilize a estrutura de repetição for para imprimir 
// no console conforme instruções:
// a) números de 1 a 50  
// b) quando chegar no número 25 interrompa a instrução e pare o loop 
// c) quando chegar no número 10 pule a instrução


/////////////// MINHA RESOLUÇÃO//////////////////////

let numero = 50
for(let i = 1; i <= numero; i++ ) {         // Estrutura de repetição : Imprime número de 1 a 50
    if(i === 25) {                         // Break : Para interromper instrução e parar o loop no número 25
        break 
    }

    if(i === 10 ) {                      // Continue : Para pular instrução ao chegar no número 10
        continue
    }
    console.log(i)
}
