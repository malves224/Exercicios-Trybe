const stringDeterminada = 'Tryber x aqui';
const minhasSkills = ['HTML' , 'JAVASCRIPT' , 'CSS'];
const replaceX = (string) => {
    return stringDeterminada.replace('x', string);
}
const concatenaSkills = (funcao1) => {
    return `${funcao1} Minhas habilidades principais são: ${minhasSkills.sort()} `;
} 
console.log (concatenaSkills (replaceX('matheus')));
