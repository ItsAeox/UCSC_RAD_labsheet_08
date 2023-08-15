const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.status(404).render('error404'); 
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error500'); 
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
