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
