const Contenedor = require("./contenedor");
const express = require("express");

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchado en el puerto ${server.address().port}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

let product = new Contenedor("productos");

app.get("/", (req, res) => {
  res.send(
    "<h1>Desafio 3 - Mauricio Marinkovich</h1> <br> Ingresar /productos o /productoRandom"
  );
});

app.get("/productos", (req, res) => {
  (async () => {
    await product.getAll().then((response) => {
      res.send(response);
    });
  })();
});

app.get("/productoRandom", (req, res) => {
  (async () => {
    await product.getAll().then((response) => {
      let random = Math.floor(Math.random() * response.length);
      res.send(response[random]);
    });
  })();
});
