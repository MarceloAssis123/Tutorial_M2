const express = require('express'); 

const hostname = '127.0.0.1';
const port = 3000;
const app = express();

app.use(express.static("./frontend/"));

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });