const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const juntarArrays = (listaProdutos, precosProdutos) =>
    listaProdutos.map((value, index) =>
        ({
            [value]: precosProdutos[index]
        })
    )


console.log(juntarArrays(products, prices));