
const todosEstadosBr = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']

function insereTodosEstados(estados) {
  const elementoPai = document.getElementById('estados');
  for (let index = 0; index < estados.length; index += 1) {
    const elementoCriado = document.createElement('option')
    elementoCriado.value = estados[index];
    elementoCriado.innerText = estados[index];
    elementoPai.appendChild(elementoCriado);
  }
}

insereTodosEstados(todosEstadosBr);

function validarNome(elemento) {
  if (elemento.value.length > 40) {
    return "Nome com mais de 40 caracteres ";
  } else if (elemento.value === "") {
    return "Nome Vazio";
  } else {
    return true;
  }
}

function validarEmail(elemento) {
  if (elemento.value.length > 50) {
    return "Email com mais de 50 caracteres ";
  } else if (elemento.value === "") {
    return "Email vazio";
  } else {
    return true;
  }
}

function validarCpf(elemento) {
  if (elemento.value.length > 11) {
    return "CPF com mais de 11 caracteres ";
  } else if (elemento.value === "") {
    return "CPF vazio";
  } else {
    return true;
  }
}

function validarEndereco(elemento) {
  if (elemento.value.length > 200) {
    return "Endereço com mais de 200 caracteres ";
  } else if (elemento.value === "") {
    return "Endereço vazio";
  } else {
    return true;
  }
}

function validarCidade(elemento) {
  if (elemento.value.length > 28) {
    return "Cidade com mais de 28 caracteres ";
  } else if (elemento.value === "") {
    return "Cidade vazia";
  } else {
    return true;
  }
}


function ValidarElementosPessoais(ElementoParaValidar) {

  if (ElementoParaValidar.name === "nome") {
    validarNome(ElementoParaValidar);
  } else if (ElementoParaValidar.name === "email") {
    validarEmail(ElementoParaValidar);
  } else if (ElementoParaValidar.name === "CPF") {
    validarCpf(ElementoParaValidar);
  } else if (ElementoParaValidar.name === "endereço") {
    validarEndereco(ElementoParaValidar);
  } else if (ElementoParaValidar.name === "Cidade") {
    validarCidade(ElementoParaValidar);
  }
}



function ValidarRenderizarDadosPessoais() {
  const divParaAddDados = document.getElementById('DivParaInserir');
  divParaAddDados.innerText = "";
  const dadosPessoais = document.querySelectorAll('#dadosPessoais input, select');
  for (let index = 0; index < dadosPessoais.length; index += 1) {
    if (dadosPessoais[index].type === "radio") {
      if (dadosPessoais[index].checked === true) {
        const name = dadosPessoais[index].name + ": "
        const value = dadosPessoais[index].value;
        const concatenacaoNameValue = name + value + '\n';
        divParaAddDados.innerText = divParaAddDados.innerText + concatenacaoNameValue;
      }
    } else {
      if (ValidarElementosPessoais(dadosPessoais[index]) === true) {
        const name = dadosPessoais[index].name + ": "
        const value = dadosPessoais[index].value;
        divParaAddDados.innerText = divParaAddDados.innerText + name + value + '\n';
      } else {
        divParaAddDados.innerText = ValidarElementosPessoais(dadosPessoais[index]);
        /*/break;/*/
      }
    }
  }
} //essa function extrair os dados pessoais do formulario e coloca em um div 




function adicionarDados(event) {
  event.preventDefault();
  ValidarRenderizarDadosPessoais();
}
const buttonEnviar = document.getElementById('Enviar');
buttonEnviar.addEventListener('click', adicionarDados);