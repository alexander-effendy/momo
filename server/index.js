const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user');

dotenv.config();

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(cors({
  origin: ['http://localhost:5173', 'https://momo-xi.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Add other methods if needed
  allowedHeaders: ['Content-Type', 'Authorization'], // Add other headers if needed
}));

app.get('/test-cors', (req, res) => {
  res.json({ message: 'CORS is working!' });
});

app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
