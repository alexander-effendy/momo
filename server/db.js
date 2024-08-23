const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgres://postgres:ekkamaiONNUT11@momo-db.ch06yuy6m617.ap-southeast-2.rds.amazonaws.com:5432/momo-db'
});

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = pool;