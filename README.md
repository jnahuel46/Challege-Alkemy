## REST API ##


PUNTOS 
- MODELADO DE BASE DE DATOS, utilizando mysql y sequelize se crearon 4 tablas en la base de datos, una de personjes, otra de peliculas, otra que relaciona peliculas y personajes y la ultima de genero que se relaciona con peliculas;
- Las imagenes se cargan en formato url;
- AUTENTICACION DE USUARIOS: Registro en '/auth/register';
Y Login de usuario en  '/auth/login'. Le sigue la creacion de token para habilitar los endpoints;
- Listar los personajes almacenados en el endpoint solicitado '/characters';
- Operaciones CRUD sobre los personajes;
- Detalle de personaje y su relacion con peliculas solicitado '/characters/detalle' en la ruta;
- Busqueda de personajes;-----Falto filtrar por pelicula----
- Listado de peliculas en el endpoint solicitado '/movies';
- Detalle de peliculas y su personajes con peliculas añadiendo '/movies/detalle' en la ruta;
- Operaciones CRUD sobre peliculas;
- Busqueda de peliculas;-------Falto filtrar por Personaje----
- Envio de emails mediante SendGrid, esta configurado solo resta ponerle una apikey valida en las variantes de entorno y cambiar el "from" por uno valido;
- Documentacion de los endpoints : https://documenter.getpostman.com/view/18541452/UVeAuoo5 ;


- La aplicacion se levanta en un entorno local en puerto 3000;
