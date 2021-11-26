let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
function percorreObjetoCar (elementoASerPesquisado) {
  if (elementoASerPesquisado === 'chaves e valores' ){
    for (key in car) {
      console.log(key, car[key]);
    } 
    } else if(elementoASerPesquisado === 'chaves') {
        for (key in car){   
        console.log(key);
    }
  }
}
percorreObjetoCar ('chaves e valores');