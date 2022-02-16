## REST API ##


PUNTOS 
- MODELADO DE BASE DE DATOS, utilizando mysql y sequelize se crearon 4 tablas en la base de datos, una de personjes, otra de peliculas, otra que relaciona peliculas y personajes y la ultima de genero que se relaciona con peliculas;
- Las imagenes se cargan en formato url;
- AUTENTICACION DE USUARIOS: Registro en '/auth/register';
Y Login de usuario en  '/auth/login'. Le sigue la creacion de token para habilitar los endpoints;
- Listar los personajes almacenados en el endpoint solicitado '/characters';
- Operaciones CRUD sobre los personajes;
- Detalle de personaje y su relacion con peliculas en la ruta '/characters/detalle/:personajeId' ;
- Busqueda de personajes y sus filtros(informacion y rutas en documentacion de postman);-----Falto filtrar por pelicula----
- Listado de peliculas en el endpoint solicitado '/movies';
- Detalle de peliculas y su personajes con peliculas añadiendo '/movies/detalle' en la ruta;
- Operaciones CRUD sobre peliculas;
- Busqueda de peliculas y sus filtros(informacion y rutas en documentacion de postman);
- Envio de emails mediante SendGrid, esta configurado solo resta ponerle una apikey valida en las variantes de entorno y cambiar el "from" por uno valido;
- Documentacion de los endpoints : https://documenter.getpostman.com/view/18541452/UVeAuoo5 ;

- Casi la totalidad de los puntos requeridos fue completado;
- Falto filtrado por pelicula y tests;
- La aplicacion se levanta en un entorno local en puerto 3000;
## PARA TODAS LAS PETICIONES HAY QUE USAR EL USER-TOKEN EN LOS HEADERS ##


## AÑADIENDO FUNCIONALIDAD ##
- Devolver un 4XX y un mensaje en el caso de no tener permiso para el acceso a rutas.(YA SEA POR ERROR EN EL JWT O EN EL ROL DEL USUARIO, METODOS POST, PUT Y DELETE NECESITAN PERMISOS DE ADMIN_ROL);
