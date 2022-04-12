const express = require('express');
const user = require('./src/routes/user');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', user);

app.listen(3000, () => console.log('ouvindo porta 3000!'));