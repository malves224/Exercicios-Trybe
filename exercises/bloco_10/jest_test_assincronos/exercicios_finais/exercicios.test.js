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
		 const resolvPromise = await findUserById(1);
		 expect(resolvPromise).toEqual({ id: 1, name: 'Mark' });
	})
});

