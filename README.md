
# AmigoSecreto

Amigo secreto  es un sitio web creado para  jugar  y conocer las fechas de las endulzadas y la  fiesta final el descubrimiento , cuyo objetivo es lograr conexion entre los  participacion del juego dentro de la  empresa ,hacer un dinamica amistosa y colaborativa , logrando un sitio agradable y de facil manejo para los empleados .

### Nuestro equipo esta conformado por:
#### Juan Manuel Gutierrez.
#### Esteban Hernandez.
#### Mateo Duque.

### Como lanzar el proyecto:

1. Clonar el proyecto en Visual Studio Code con el siguiente comando:
  npm clone https://github.com/Malekith101991/ModaCodigo.git 
2. Abrir el archivo scriptDB.sql copiarlo y ejecutatarlo en el programa de visualización de bases de datos de su preferiencia.
3. Revisar el archivo database/config/config.js y configurar la conexión con la DB.
4. Instalar las dependencias con el siguiente comando en la consola: npm i
5. Lazar la aplicación con el comando npx nodemon app.js
6. Si presenta algún inconveniente con el nodemon, debe instalarlo nuevamente con el comando: npm i nodemon
7. Una vez lanzada la aplicación puede ir a su Navegador preferido y escribir en la barra de direcciones localhost:3080. En el home de la aplicación encontrara las  instrucciones del juego y las instrucciones de uso de la plataforma.


#### Hackaton Código Moda 2022.

Actualización 02/11/2022.

El día de hoy recibimos un Issue por parte de Daniel Gaviria quien se encontraba tratando de ejecutar el proyecto y presentaba errores con la base de datos, el error y la solución al problema que encontraron son: 

El error es que el script de la base de datos parece que no fue exportado correctamente y tiene un error en la asignación de parametros en la columna id, se corrige ejecutando este script que envío a continuación,

Para Usuarios:

ALTER TABLE `amigo_secreto`.`users`
CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ,
ADD PRIMARY KEY (`id`),
ADD UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE;

Para Grupos:

ALTER TABLE `amigo_secreto`.`groups`
CHANGE COLUMN `id` `id` INT NOT NULL AUTO_INCREMENT ,
ADD PRIMARY KEY (`id`),
ADD UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE;

Ya con eso queda solucionado el tema, igualmente recuerda que en el ALTER TABLE debe ir el nombre de la base de datos, si se llama tal cual la tenemos en el script no es si no ejecutar esos dos comandos en el Query de la herramienta visual de diseño de bases de datos y listo queda solucionado.
