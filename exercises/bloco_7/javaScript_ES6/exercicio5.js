const stringDeterminada = 'Tryber x aqui';
const minhasSkills = ['HTML', 
'JAVASCRIPT' , 
'CSS'];
const replaceX = string => stringDeterminada.replace('x', string);

const concatenaSkills = funcao1 => `${funcao1} Minhas habilidades principais são:
     ${minhasSkills.sort()} `;

console.log (concatenaSkills (replaceX('matheus')));
