class Estudante {
  private _nome: string;
  private _matricula: string;
  private _notasDeProva: [number, number, number, number];
  private _notasDeTrabalho: [number, number];

  constructor(nome: string, matricula: string, 
    notasDeProva: [number, number, number, number], notasDeTrabalho: [number, number]) {
    this._nome = nome;
    this._matricula = matricula;
    this._notasDeProva = notasDeProva;
    this._notasDeTrabalho = notasDeTrabalho;
  }

  get somaNotas(): number {
    const somaAllNotas = [...this._notasDeProva, ...this._notasDeTrabalho]
      .reduce((prev, current) => prev + current);
    return somaAllNotas
  };

  get avgNotas(): number {
    const somaAllNotas = [...this._notasDeProva, ...this._notasDeTrabalho]
      .reduce((prev, current) => prev + current);    
    const avgNotas = somaAllNotas / [...this._notasDeProva, ...this._notasDeTrabalho].length;
    return avgNotas;
  }
}

const joao = new Estudante('joão', '125', [3, 5, 8, 4], [6, 8]);
console.log(joao);
console.log(joao.avgNotas.toFixed(2));

