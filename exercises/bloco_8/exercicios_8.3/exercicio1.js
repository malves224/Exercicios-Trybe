const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const juntarArrays = products.map((value, index) => {
    let objetoComPrice = {};
    let arrayJunto = [];
    objetoComPrice[value] = prices[index];
    arrayJunto = objetoComPrice;
    return arrayJunto;
})

console.log(juntarArrays.length);