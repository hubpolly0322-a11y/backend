const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

// Ruta para recibir datos
app.post("/registro", (req, res) => {
  const { email, password } = req.body;

  console.log("Datos recibidos:", email, password);

  res.send("Datos recibidos correctamente");
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});