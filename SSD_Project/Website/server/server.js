// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let savedGameState = null;

app.post('/save', (req, res) => {
  savedGameState = req.body;
  res.json({ message: 'Game state saved successfully.' });
});

app.get('/load', (req, res) => {
  res.json(savedGameState);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
