import fs from "fs";
import express from "express";

const app = express();
const PORT = 8080;
let visitas = { ruta1: 0, ruta2: 0 };

const server = app.listen(PORT, () => {
  console.log("Servidor HTTP escuchando en el puerto", server.address().port);
});
server.on("error", (error) => console.log("Error en servidor", error));

app.get("/items", (req, res) => {
  visitas.ruta1 = +1;
  const data = fs.readFileSync("./productos.txt",'utf-8');
  console.log(data);
  let obj = JSON.parse(data)
  res.send({ items: obj.title, cantidad: obj.length });
});

app.get("/items-random", (req, res) => {
  visitas.ruta2 = +1;
  res.send();
});

app.get("/visitas", (req, res) => {
  res.json({ visitas });
});
