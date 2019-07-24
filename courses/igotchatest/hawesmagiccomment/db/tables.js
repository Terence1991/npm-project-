//connecttodb 
const knex = require('knex')({
  client: 'mysql',
  connection: {
    filename: './index.js',
  },
});


knex.schema('users', (table) => {
  table.increments('id');
  table.string('user_name');
});

knex.schema('comments', (table) => {
  table.increments('id');
  table.string('user_name');
  table.string('comments');
  table.integer('user_rating');
})




