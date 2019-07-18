const express = require('express')
const app = express()
const path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(8080, () => console.log('vue_test 8080'))