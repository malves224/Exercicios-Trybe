const {
	uppercase,
} = require('./funcParaTestar');

describe('1º testa callback da função, uppercase que transforma uma palavra em letras maiusculas', () => {
	it('verifica se o callback da função foi invocado', (done) => {
		uppercase('ooi', (str) => {
			try {
				expect(str).toBe('OOI');
				done();
			} catch (error) {
				done(error);
			}
		})
	});
});