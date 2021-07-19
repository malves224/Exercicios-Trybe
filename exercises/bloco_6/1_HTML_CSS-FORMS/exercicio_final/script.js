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

window.onload = function (){
  new window.JustValidate('.js-form', {
    rules: {
      name: { //valor atribuido na tag form em data-validate-field
        required: true,
        maxLength: 40,
        minLength: 3,
      },
      email: {
        required: true,
        maxLength: 50
      },
      cpf: {
        required: true,
        maxLength: 11
      }
    },
    messages: {
      name: {
        required: 'Voce precisa prencher aqui',
        minLength: 'insira um nome com mais de 2 caracteres',
        maxLength: 'nome muito grande'
      },
      email: {
        required: 'Por favor insira seu email',
        maxLength: 'email muito grande'
      }
    },

  });  
  criarOption ();
}