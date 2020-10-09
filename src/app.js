const express = require('express');
const app = express();

const tarefas = require('./routes/tarefas-routes');

app.use('/', tarefas);

app.use(express.json());

module.exports = app;