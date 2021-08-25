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
	it('verifica o comportamento esperado quando o usuario é encontrado', async () => {
		const findUserByIdResponse = await findUserById(2);
		expect(findUserByIdResponse).toEqual({
			id: 2,
			name: 'Paul'
		});
	});
	it('verifica o comportamento esperado quando nao encontra o usuario', async () => {
		expect.assertions(1);
		try {
			const findUserByIdResponse = await findUserById(3);
		} catch (error) {
			expect(error).toEqual(Error('User with 3 not found.'));
		}
	})
});