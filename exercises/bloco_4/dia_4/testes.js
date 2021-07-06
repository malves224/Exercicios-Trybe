function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = 0;
  let distanciaCat2 = 0;
  if (cat1 > mouse) {
    for (let i = cat1; i > mouse; i -= 1) {
      distanciaCat1 += 1;
    }
  }
  if (cat2 > mouse) {
    for (let i = cat2; i > mouse; i -= 1) {
      distanciaCat2 += 1;
    }
  }
  if (cat1 < mouse){
    for (let i = cat1; i < mouse; i += 1) {
      distanciaCat1 += 1;
    }
  }
  if (cat2 < mouse){
    for (let i = cat2; i < mouse; i += 1) {
      distanciaCat2 += 1;
    }
  }
  if (distanciaCat1 < distanciaCat2){
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1){
    return 'cat2';
  } else if ( distanciaCat1 === distanciaCat2)
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(10, 4, 22));
