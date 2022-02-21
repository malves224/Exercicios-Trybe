type Bird = {
  peso: number;
  altura: number;
}

type Andress = {
  rua: string,
  numero: string,
  cidade: string,
  pais: string,
}

function somaPesoAltura(bird: Bird) {
  console.log(`soma ${bird.peso + bird.altura}`);
}
