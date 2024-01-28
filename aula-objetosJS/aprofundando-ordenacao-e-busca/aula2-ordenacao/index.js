const listaLivros = require('./arrays');

function mergeSort(arrays, nivelAninhamento = 0){
    console.log(`Nível de aninhamento ${nivelAninhamento}`);
    console.log(arrays);

    if(arrays.length < 1){
        const meio = Math.floor(arrays.length/2);
        const parte1 = mergeSort(arrays.slice(0, meio), nivelAninhamento++);
        const parte2 = mergeSort(arrays.slice(meio, arrays.length), nivelAninhamento++);
        array = ordena(parte1,parte2);
    }
    return arrays;
}
function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0;
    let posicaoAtualParte2 = 0;
    const resultado = [];

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte2);
            posicaoAtualParte1++;
        }else{
            resultado.push(produtoAtualParte2);
            posicaoAtualParte2++;
        }
    }
    return resultado.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2))
}
console.log(mergeSort(listaLivros));