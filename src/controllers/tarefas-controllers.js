const tarefaModel = require('../models/tarefas-models');
const helper = require('../helpers/helpers')

const getTarefas = (requisicao, resposta) =>{
  resposta.status(200).json(tarefaModel);
}

// podem utilizar o getById
//www.reprograma.com.br/perfil/:id
const getIdTarefas = (requisicao, resposta) =>{
  const { id } = requisicao.params;
  
  const tarefa = tarefaModel.find(tarefa => tarefa.id == id);

  if(!tarefa) resposta.status(404).json({ mensagem: "Tarefa não foi encontrada"});

  resposta.status(200).json(tarefa);

}

// getByTitle
// resquest, response
//req, res
//www.reprograma.com.br/titulo?titulo=Ler

const getPorTitulo = (requisicao, resposta) => {
  const { titulo } = requisicao.query;
  
  const tarefa = tarefaModel.map(tarefa => tarefa.titulo == titulo);

  resposta.status(200).json(tarefa);
}

const criarTarefa = (requisicao, resposta) =>{
  //  const tarefaId = tarefaModel.map(tarefa => tarefa.id);
  //  let ordermCriacaoNum = tarefaModel.map(tarefa => tarefa.ordem_criacao);

  //  const novoId = tarefaId.length > 0 ? Math.max.apply(Math, tarefaId) + 1 : 1;

   let { titulo, descricao, prazo, responsavel } = requisicao.body;

   let novaTarefa ={
     //utilizando o helper
     id:  helper.obterNovoValor(tarefaModel),
     titulo: titulo,
     descricao: descricao,
     prazo: prazo, 
     responsavel: responsavel, 
     //utilizando o helper
     dataCriacao: helper.novaData(tarefaModel)
   }

   tarefaModel.push(novaTarefa);

   resposta.status(201).json(novaTarefa);
 }

 const deletarTarefa = (requisicao, resposta) =>{
   const { id } = requisicao.params;

  tarefaModel.filter(tarefa => tarefa.id != id);

   resposta.json({ mensagem: "Tarefa deletada com sucesso!"})
}

module.exports = {
  getTarefas, 
  getIdTarefas,
  getPorTitulo,
  criarTarefa,
  deletarTarefa
}