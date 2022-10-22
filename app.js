const express = require('express');
const path = requiere('path');
const app = express ();
const PORT = process.env.PORT || 3050

const rutaMain = requiere('./routers/main.js');
const rutaUser = requiere('./routers/user.js');

/* ---- IMPLEMENTANDO MOTOR DE PLANTILLAS ----- */
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(PORT, () =>
   console.log("Servidor activo en el puerto 3050")
);  