const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();
// const knex = require('./db/knex');

app.use(bodyParser.json())
app.listen(port, () => {
    console.log('listening on port: ', port);
})

app.get('/', (req, res) => {
    res.send('The Route Worked')
})