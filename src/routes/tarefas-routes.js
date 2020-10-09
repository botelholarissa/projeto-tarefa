const express = require('express');
const router = express.Router();

const tarefaController = require("../controllers/tarefas-controllers");

//@router GET Tarefas
//@desc Retornar todas as tarefas
//@access Public
//@endpoint http://localhost:PORT/tarefas
router.get('/tarefas', tarefaController.getTarefas);

//@router GET Tarefas
//@query Titulo
//@desc Retornar apenas titulos
//@access Public
//@endpoint http://localhost:PORT/tarefas/titulo
router.get('/tarefas/titulo', tarefaController.getPorTitulo);

//@router GET Tarefas
//@params :id 
//@desc Retornar apenas uma unica tarefa pelo sei id: identificados
//@access Public
//@endpoint http://localhost:PORT/tarefas/:id
router.get('/tarefas/:id', tarefaController.getIdTarefas);

//@route POST Tarefas
//@desc Criar uma tarefa
//@access Public
//@endpoint http://localhost:porta/tarefas
router.post('/tarefas', tarefaController.criarTarefa);


//@route DELETE Tarefas
//@desc Deletar uma tarefa
//@access Public
//@endpoint http://localhost:porta/:id
router.delete('/tarefas/:id', tarefaController.deletarTarefa);


module.exports = router;