const script = require('./script');




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
    })

});

