// Ao chamar a função doingThings:
const wakeUp = () => {
    console.log('acordando!!')
}
const breakfast = () => {
    console.log('bora tomar café!!')
}

const sleep = () => {
    console.log('partiu dormir!!')
}

const doingThings = (func) => func(); 


doingThings(sleep);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!