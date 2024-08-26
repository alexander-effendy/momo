const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  // connectionString: process.env.DATABASE_URL,
  connectionString: 'http://ec2-3-25-94-38.ap-southeast-2.compute.amazonaws.com:3000',
  ssl: false,
});


pool.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err.stack);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = pool;