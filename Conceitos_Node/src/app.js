const express = require('express');
const cors = require('cors');
const { uuid } = require('uuidv4');
const Repository = require('./model/Repository');
const Like = require('./model/Like');
const { checkExistFields, checkExistInArray } = require('./middlewares/Validators');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

const USER_DEFAULT = 'Philip';

app.use( (req, res, next) => {
  req.repositories = repositories;

  return next();
});

app.use('/repositories/:id', checkExistInArray);

app.get('/repositories', (request, response) => {
  const newArr = [];

  repositories.forEach(repository => newArr.push(repository.get()));

  return response.json(newArr);
});

app.post('/repositories', checkExistFields, (request, response) => {
  const { title, url, techs } = request.body;

  const idRepository = uuid();
  const like = new Like(uuid(), idRepository, 0, USER_DEFAULT, new Date());
  const repository = new Repository(idRepository, title, url, techs, like, new Date(), new Date());

  repositories.push(repository);

  response.json(repository.get());
});

app.put('/repositories/:id', (request, response) => {
  const index = request.index;
  const { title, url, techs } = request.body;

  repositories[index].title = title;
  repositories[index].url = url;
  repositories[index].techs = techs;
  repositories[index].lastUpdtDt = new Date();
  
  return response.json(repositories[index].get());
});

app.delete('/repositories/:id', (request, response) => {
  const index = request.index;

  repositories.splice(index, 1);
  
  return response.status(204).send();
});

app.post('/repositories/:id/like', (request, response) => {
  const index = request.index;

  repositories[index].likes.addLikes();
  repositories[index].lastUpdtDt = new Date();
  
  return response.json(repositories[index].get());
});

module.exports = app;
