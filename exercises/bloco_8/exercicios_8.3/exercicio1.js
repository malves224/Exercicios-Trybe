const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const juntarArrays = products.map((value, index) => {
    let objetoComPrice = {};
    objetoComPrice[value] = prices[index];
    return objetoComPrice;
})

console.log(juntarArrays);