let numerosInteiros = [99, 3,365, 100, 10, 98]
function maiorNumero (array){
    let maiorNumero = 0;
    for (let index = 0; index < array.length; index += 1){
        for (let index2 = 0; index2 < array.length; index2 += 1){
            if (array[index2] > array[index]){
                if (maiorNumero < array[index2])
                maiorNumero = array[index2]
            }
        }
    }
    
    
    console.log (maiorNumero);
}
maiorNumero (numerosInteiros);