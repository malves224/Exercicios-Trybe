const {
	uppercase,
	findUserById,
	getUserName,
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

describe('2º verifica se a função getUserName no caso de falha e sucesso', () => {
	it('verifica o comportamento esperado quando o usuario é encontrado', () => {
		return expect(findUserById(1)).resolves.toEqual({
			id: 1,
			name: 'Mark'
		});
	});
	it('verifica o comportamento esperado quando nao encontra o usuario', () => {
		return expect(findUserById(3)).rejects.toEqual(Error('User with 3 not found.'));
	})
});