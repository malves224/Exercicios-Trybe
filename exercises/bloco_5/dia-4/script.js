window.onload 


// requisito 1;
function changeBackgroundcolor() {
    const inputChooseBColor = document.getElementById('chooseBColor');
    const buttonOfChange = document.getElementById('buttonOfChooseBColor');
    const backgroundOftext = document.querySelector('.article')

    function changeBackgroudColor(event) {
        let input = inputChooseBColor.value;
        localStorage.setItem('colorBackground', input)
        let valor = localStorage.getItem('colorBackground');
        backgroundOftext.style.backgroundColor = valor;
    
    }

    buttonOfChange.addEventListener('click', changeBackgroudColor)
    let valor = localStorage.getItem('colorBackground');
    backgroundOftext.style.backgroundColor = valor;
}

changeBackgroundcolor();
// requisito 2:
function changeCollorText() {
    const inputChooseColorText = document.getElementById('input-color-text');
    const buttonForChangeTextColor = document.getElementById('button-change-text-color');
    const textCollor = document.querySelector('.article');

    function changeCollorText(event) {
        let input = inputChooseColorText.value;
        localStorage.setItem('colorText', input)
        let valor = localStorage.getItem('colorText')
        textCollor.style.color = valor;

    }
    buttonForChangeTextColor.addEventListener('click', changeCollorText)
    let valor = localStorage.getItem('colorText');
    textCollor.style.color = valor;
}
changeCollorText()
