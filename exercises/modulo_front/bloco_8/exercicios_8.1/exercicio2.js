const geradorDeEmail = (nomeParaGerarEmail, dominio) => {
  const email = `${nomeParaGerarEmail.replace(/ /g, '_' )}@${dominio}` 
  return email;
}

const novoFuncionario = (nomeCompleto) => {
  return  {
    nomeCompleto: nomeCompleto,
    email: geradorDeEmail(nomeCompleto, 'trybe.com'),
  }
}

const newEmployees = (myFunction) => {
  const employees = {
    id1: myFunction('pedro guerra alves').email, // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: myFunction('Luiza Drumond').email, // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: myFunction('Carla Paiva').email, // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(novoFuncionario));