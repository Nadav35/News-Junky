const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
app.use(express.static('public'));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(3000);
