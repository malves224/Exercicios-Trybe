const script = require('./script');

script.randownNumber = jest.fn().mockReturnValue(15);

describe('testa comportamento da função randowNumber', () => {
    it('verfica se a função foi chamada ', () => {
        //script.randownNumber();
        expect(script.randownNumber).toHaveBeenCalled();
    })
})