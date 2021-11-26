let paiDoOndeVcEsta = document.querySelector('#elementoOndeVoceEsta').parentNode;
document.querySelector('#elementoOndeVoceEsta').firstElementChild;
document.querySelector('#pai').firstElementChild;
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;
document.querySelector('#elementoOndeVoceEsta').nextSibling;
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;
document.querySelector('#pai').children[document.querySelector('#pai').children.length - 2];
// exercicio parte II 
// exercicio 1 Crie um irmão para elementoOndeVoceEsta .
let irmaoParaOndeVcEsta = document.createElement('div');
irmaoParaOndeVcEsta.innerText = 'mais um irmão para o OndeVoceEsta'
paiDoOndeVcEsta.appendChild(irmaoParaOndeVcEsta);
// exercicio 2 Crie um filho para elementoOndeVoceEsta .
let ondeVcEsta = document.querySelector('#elementoOndeVoceEsta')
let elementDiv = document.createElement('div');
elementDiv.innerText = 'eu sou filho do OndeVoceEsta'
ondeVcEsta.appendChild(elementDiv);
// exercicio 3 Crie um filho para primeiroFilhoDoFilho .
let primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let elementDiv2 = document.createElement('div');
elementDiv2.innerText = 'eu sou o primeiro filho do primeiro filho do filho'
primeiroFilhoDoFilho.appendChild(elementDiv2);
// exercicio 4 A partir desse filho criado, acesse terceiroFilho .
let filhoCriado = document.querySelector('#primeiroFilhoDoFilho div')
filhoCriado.parentElement.parentElement.nextElementSibling;
// exercicio parte III 
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
