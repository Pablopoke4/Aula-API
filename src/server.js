const express = require ('express');
const userController = require('./controllers/user controller')

const app = express();
app.use(express.json());
app.use('/api/users', userController);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})