import './node_modules/just-validate/dist/js/just-validate.js'

function criarOption() {
  const todosEstadosBr = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
  const elementoPai = document.getElementById('estados');
  for (let index = 0; index < todosEstadosBr.length; index += 1) {
    const elementoCriado = document.createElement('option')
    elementoCriado.value = todosEstadosBr[index];
    elementoCriado.innerText = todosEstadosBr[index];
    elementoPai.appendChild(elementoCriado);
  }
}

function handle () {
  
}

window.onload = function () {
  criarOption ();
  new window.JustValidate('.js-Form')
  const buttonSubmit = document.getElementById('Enviar');
  buttonSubmit.addEventListener('click', )
}