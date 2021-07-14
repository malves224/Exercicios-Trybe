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
// requisito 3;
function changeFontSize() {
    const inputChooseFontsize = document.getElementById('font-size');
    const buttonForFontSize = document.getElementById('button-fontsize');
    const fontsize = document.querySelector('.article');

    function changeFontSize (){
        let input = inputChooseFontsize.value + 'px';
        localStorage.setItem('fontSize', input);
        fontsize.style.fontSize = input;
    }
    buttonForFontSize.addEventListener('click', changeFontSize);
    let valor = localStorage.getItem('fontSize');
    fontsize.style.fontSize = valor;
}
changeFontSize();
// requisito 4
function changeLineSpacing (){ 
    const inputChooseSpacing = document.getElementById('input-spacing-text')
    const buttonSpacing = document.getElementById('button-spacing-text');
    const linesSpacing = document.querySelector('.article');

    function changeLineSpacing () {
        let input = inputChooseSpacing.value;
        localStorage.setItem('lineSpacing', input);
        linesSpacing.style.lineHeight = input;
    }
    buttonSpacing.addEventListener('click', changeLineSpacing)
    let valor = localStorage.getItem('lineSpacing')
    linesSpacing.style.lineHeight = valor;

}
changeLineSpacing ();
// requisito 5
function changeFontFamily () {
    const inputChooseFontFamily = document.getElementById('input-font-family');
    const buttonFontFamily = document.getElementById('button-font-family');
    const fontFamily = document.querySelector('.article');

    function changeFontFamily (){
        let input = inputChooseFontFamily.value;
        localStorage.setItem('fontFamily', input)
        fontFamily.style.fontFamily = input;
    }
    buttonFontFamily.addEventListener('click', changeFontFamily)
    let valor = localStorage.getItem('fontFamily');
    fontFamily.style.fontFamily = valor;
}

changeFontFamily();

//