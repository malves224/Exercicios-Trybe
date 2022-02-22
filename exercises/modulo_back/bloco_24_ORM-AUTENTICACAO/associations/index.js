// index.js
const express = require('express');
const { Address, Employee, Book, User } = require('./models');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize'); // atenção para configuração do sequelize *** 
const config = require('./config/config');


const app = express();
app.use(bodyParser.json());
const sequelize = new Sequelize(config.development);

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.post('/employees', async (req, res) => { // caso do uso, utilizando transaction
  const transaction = await sequelize.transaction();
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction }
      );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction }
      );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await transaction.commit(); // se remover commit e roolback o sequelize ira controlar quando desfazer a transaction ou concluir.

    return res.status(201).json({ message: 'Cadastrado com sucesso' },);
  } catch (e) {
    await transaction.rollback();
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

app.get('/employeesAndAddresses/:id', async (req, res) => { // eager loading, retornando employees com seus endereços.
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id },
        include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number'] } }],// incluindo endereço com apenas uma querry, e excluindo colunas.
      });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

app.get('/employees/:id', async (req, res) => { // Lazzi loading, retornando todos os dados de forma condicional.
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id },
      });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.findAll({ where: { employeeId: id } });
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

app.get('/usersbooks/:id', async (req, res) => {// exemplo de utilização muitos para muitos, olhe os models para maior clareza.
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: { userId: id },
      include: [{ model: Book, as: 'books', through: { attributes: [] } }],
    });

    if (!user)
      return res.status(404).json({ message: 'Usuário não encontrado' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;