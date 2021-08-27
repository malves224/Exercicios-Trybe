const script = require('./script');
jest.mock("./script");


describe('testa comportamento da função randowNumber', () => {
    script.randownNumber = jest.fn().mockReturnValue(15)
    it('verfica se a função foi chamada ', () => {
        script.randownNumber();
        expect(script.randownNumber).toHaveBeenCalled();
        expect(script.randownNumber).toHaveBeenCalledTimes(1);
    });
    it('verifica se a função retorna o valor esperado', () => {
        expect(script.randownNumber()).toEqual(15);
    });
    it('verifica se a função randownNumber esta dividindo o parametro pelo outro', () => { 
        script.randownNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
        expect(script.randownNumber(2, 2)).toBe(1);
    });
    it ('verifica função de 3 parametros que multiplica seus parametros', () => {
        script.randownNumber = jest.fn().mockImplementation((a, b, c) =>  a * b * c );
        expect(script.randownNumber(1, 2, 3 )).toBe(6);
        script.randownNumber.mockReset().mockImplementation((a) => a * 2 );
        expect(script.randownNumber(5)).toEqual(10);
    });
});

describe('verifica funções de manipulaçao de string ', () =>  {
    it('testa se a função upCaseString teve sua implementação alterado para transforma o retorno em caixa baixa ', () => { 
        script.upCaseString.mockImplementation((string) => string.toLowerCase());
        expect(script.upCaseString('Oii')).toBe('oii');
    });
    it('testa se a função primeiraLetra teve sua implementação alterado para retornar ultima letra da palavra ', () => { 
        script.primeiraLetra.mockImplementation((string) => string[string.length - 1]);
        expect(script.primeiraLetra('gustavo')).toBe('o');
    });
    it('testa se a função concatena as string passado por parametros', () => {
        script.concString.mockImplementation((str1, str2, str3 ) => str1 + str2 + str3);
        expect(script.concString('oi', 'td', 'bem?')).toBe('oitdbem?');
    })
})
