const multiSoma = (num1, num2, num3) => {
  return new Promise((resolve, reject) => {
    [num1, num2, num3].forEach((num) => {
      if (typeof num !== "number") {
        reject(new Error("informe apenas numeros"));
      }
    });
    const somaMultiplicada = (num1 + num2) * num3;
    somaMultiplicada > 50 ? resolve(somaMultiplicada) : reject(new Error("numero muito baixo"))
  })
}

multiSoma(1, 1, 6)
  .then((response) => console.log(response))
  .catch((err) => console.log(err.message))