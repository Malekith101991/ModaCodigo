const express = require('express');
const path = require('path');
const app = express ();
const PORT = process.env.PORT || 3050

const rutaMain = require('./routers/main')
const rutaUser = require('./routers/users.js');

/* ---- IMPLEMENTANDO MOTOR DE PLANTILLAS ----- */
app.set("view engine", "ejs");
app.set("views", "./views");

app.use('/', rutaMain);
app.use('/users', rutaUser);

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(PORT, () =>
   console.log("Servidor activo en el puerto 3050")
);  