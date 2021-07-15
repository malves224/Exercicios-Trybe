window.onload = function () {
    const buttonEnviar = document.getElementById('Enviar');
    buttonEnviar.addEventListener('click', AdicionarDados);
}


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

function dadosPessoais() {
    const divParaAddDados = document.getElementById('DivParaInserir');
    divParaAddDados.innerText = "";
    const dadosPessoais = document.querySelectorAll('#dadosPessoais input, select');
    for (let index = 0; index < dadosPessoais.length; index += 1) {
        if (dadosPessoais[index].type === "radio") {
            if (dadosPessoais[index].checked === true) {
                const name = dadosPessoais[index].name + ": "
                const value = dadosPessoais[index].value;
                divParaAddDados.innerText = divParaAddDados.innerText + name + value + '\n';
            }
        } else {
            const name = dadosPessoais[index].name + ": "
            const value = dadosPessoais[index].value;
            divParaAddDados.innerText = divParaAddDados.innerText + name + value + '\n';
        }
    }
} //essa function extrair os dados pessoais do formulario e coloca em um div 

function validarNome(elemento) {
  if (elemento.value.length > 40) {
      return "Nome com mais de 40 caracteres ";
  } else if (elemento.value === ""){
    return "Nome Vazio";
  } else {
      return true;
  }
}
 
function validarEmail (elemento) {
  if (elemento.value.length > 50) {
    return "Email com mais de 50 caracteres ";
  }else if (elemento.value === ""){
    return "Email vazio";
  } else {
    return true;
  }
}


function ValidarElementos(ElementoParaValidar) {

    if (ElementoParaValidar.name === "nome") {
        validarNome(ElementoParaValidar);
    } else if (ElementoParaValidar.name === "email") {
        validarEmail(ElementoParaValidar);
    } else if (ElementoParaValidar.name === "CPF") {
        validarCpf(ElementoParaValidar);
    } else if (ElementoParaValidar.name === "endereço") {
        verificarEndereco(ElementoParaValidar);
    }
    if (ElementoParaValidar.name === "Cidade") {
        verificarNome(ElementoParaValidar);
    }








}

function AdicionarDados(event) {
    event.preventDefault();
    dadosPessoais();
}

console.log