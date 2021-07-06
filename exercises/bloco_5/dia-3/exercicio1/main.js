const firstDiv = document.getElementById('first-div');
const secondDiv = document.getElementById('second-div');
const thirdDiv = document.getElementById('third-div');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?


3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstDiv.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.

//exercicio 2 

const opcoesDeTech = document.querySelector('.container');
opcoesDeTech.addEventListener('click', defineClassName);

function defineClassName (event) {
  let posicaoClassAtual = document.querySelectorAll('.tech')[0];
  posicaoClassAtual.className = 'posicaoAnterior'
   const origimDoEvento = event.target;
   origimDoEvento.className = 'tech';
}

//exercicio 3 
function trocarTexto (event){
  const input = document.querySelector('#input');
  const elementoASerAlterado = document.querySelector('.tech');
  elementoASerAlterado.innerText = input.value;
  
}

input.addEventListener('keyup', trocarTexto )

//exercicio 4 
const top3 = document.getElementById('my-spotrybefy')
function redirecionarLink (event){
  window.location.href = "https://malves224.github.io/";
}
top3.addEventListener('dblclick', redirecionarLink);

function passadaDeMouse (){
  top3.style.color = 'red';
}

top3.addEventListener('mouseover', passadaDeMouse);
top3.addEventListener('mouseout', function (){top3.style.color = 'white'})