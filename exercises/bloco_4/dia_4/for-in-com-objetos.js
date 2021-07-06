let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  //console.log('bem-vinda',info.personagem)

  info.recorrente = "Sim"
  
 // console.log(info)

  //for (key in info){ 
// console.log(key);
//  }

//for (let key in info) {
  //  console.log(info[key]);
//}

let info2 = {
    personagem: 'Tio Patinhas' ,
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas' ,
    recorrente:'Sim' ,
};
for (let key1 in info){
    for (let key2 in info2){
    if ( info[key1] === info2[key2]){
    console.log("ambos recorrentes")
    } else if (key1 === key2){
            console.log(info[key1], "e", key2);
        }
}
}
// info[key1] acessa valor
// key2 acessa chave 

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
};

for (let key in names) {
  console.log("olá " + names[key])// percorre valores das chaves
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car){
  console.log(key + ' ' + car[key])
}