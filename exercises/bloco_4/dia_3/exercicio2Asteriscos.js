let n = 5;
let espacos = '';
let simbolo = '*';
let input = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1){
  for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < input){
      espacos = espacos + ' '
  } else {  
    espacos = espacos + simbolo;
    }
  }
    console.log(espacos)
    //console.log(espacos.length)
    espacos = '';
    input -= 1;
  }