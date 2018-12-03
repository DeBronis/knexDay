const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
const queries = require('./queries')
// const knex = require('./db/knex');

app.use(bodyParser.json())
app.listen(port, () => {
    console.log('listening on port: ', port);
})

app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
})
app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(students => res.send(students))
})
app.post('/', (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students[0]))
})

app.delete('/:id', (req, res) => {
    queries.deleteStudent(re.params.id).then(res.sendStatus(204))
})