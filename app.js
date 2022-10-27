const express = require('express');
const path = require('path');
const app = express ();
const PORT = process.env.PORT || 3080

const rutaMain = require('./routers/main')
const rutaUser = require('./routers/users.js');
const rutaGroup = require('./routers/group.js');

/* ---- IMPLEMENTANDO MOTOR DE PLANTILLAS ----- */
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: false }));

app.use('/', rutaMain);
app.use('/users', rutaUser);
app.use('/group', rutaGroup);

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(PORT, () =>
   console.log("Servidor activo en el puerto 3080")
);  