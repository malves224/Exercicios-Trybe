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

insereTodosEstados (todosEstadosBr);