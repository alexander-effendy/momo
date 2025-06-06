const express = require('express');
const verifyToken = require('../middleware/verifyUser');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
});

const router = express.Router();

router.post('/auth', async (req, res) =>  {
  const { id, email, given_name } = req.body;

  try {
    // Check if user already exists
    const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (userResult.rows.length === 0) {
      // Insert new user if not exists
      await pool.query(
        'INSERT INTO users (kinde_user_id, email, full_name) VALUES ($1, $2, $3)',
        [id, email, given_name]
      );
      return res.json({ message: 'User registered and added to the database' });
    } else {
      return res.json({ message: 'User already exists in the database. No new user will be added.' });
    }
  } catch (err) {
    // alert('error inserting user into database');
    console.error('Error inserting user into database:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

// kp_794edd6ffe0b4062a07c30e04f7d163b
// kp_2ff0b207aa7a47ac82c5e99353d51dcd


router.post('/verify-token', (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ valid: false });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ valid: false });
    }
    return res.status(200).json({ valid: true });
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verify user credentials (this is just an example, use a real user verification)
  if (username === 'user' && password === 'password') {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Set token in HTTP-only cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;