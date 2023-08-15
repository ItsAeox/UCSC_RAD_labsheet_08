const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/data.html');
});

app.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  res.send(`Name: ${name}<br>Email: ${email}<br>Password: ${password}`);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
