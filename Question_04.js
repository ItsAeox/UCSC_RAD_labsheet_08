const express = require('express');
const app = express();

const validUsername = 'gayathra';
const validPassword = 'password123';

app.get('/authenticate', (req, res) => {
  const { username, password } = req.query;

  if (username === validUsername && password === validPassword) {
    res.send(`Welcome, ${username}!`);
  } else {
    res.status(401).send('Authentication failed. Invalid username or password.');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
