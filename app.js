const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
app.use(express.static('public'));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/:type/:q', (req, response) => {
  fetch(`https://newsapi.org/v2/${req.params.type}?q=${req.params.q}&sources=the-new-york-times&apiKey=b68bcdc433a443eda7f73bf074ca5dfc`)
  .then((response) => {
    return response.text();
  }).then((body) => {
    let results = JSON.parse(body);
    console.log("with JSON" + results);
    console.log("no json" + body);
    response.send(body);
  });
});

app.listen(3000);
