const express = require('express');
const app = express();

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'myapp_test'
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.put()

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
