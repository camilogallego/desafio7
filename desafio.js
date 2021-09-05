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
  visitas.ruta1 = ++visitas.ruta1;
  const data = fs.readFileSync("./productos.txt",'utf-8');
  let obj = JSON.parse(data)
  res.json({ items: obj, cantidad: obj.length });
});

app.get("/items-random", (req, res) => {
  visitas.ruta2 = ++visitas.ruta2;
  const data = fs.readFileSync("./productos.txt",'utf-8');
  let obj = JSON.parse(data)
  let ram = obj[Math.floor(Math.random()*obj.length)]
  res.send({item:ram});
});

app.get("/visitas", (req, res) => {
  res.json({ visitas });
});
