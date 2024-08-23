const express = require('express');
const pool = require('./db');

const app = express();

app.get('/', (req, res) => {
  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      res.status(500).send('Database query failed');
    } else {
      res.send(`Database time: ${result.rows[0].now}`);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});