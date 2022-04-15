const express = require('express');
const user = require('./src/routes/user');
const login = require('./src/routes/login');
const categories = require('./src/routes/category');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', user)
    .use('/login', login)
    .use('/categories', categories);

app.listen(3000, () => console.log('ouvindo porta 3000!'));