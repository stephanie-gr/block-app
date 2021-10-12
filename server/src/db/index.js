const { Client } = require('pg');
  
const client = new Client({
  user: 'stephanie',
  host: 'localhost',
  database: 'block_development',
  password: 'zlatan',
  port: 5432,
});
  
client
  .connect()
  .catch(e => console.log(`Error connecting to Postgres server:\n${e}`));
  
module.exports = client;