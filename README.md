# Ecommerce del curso de ReactJS en Coderhouse

Este proyecto fue creado con create-ract-app, luego se fueron creando los componentes, clase a clase aprendiendo y aplicando conceptos de React.

El mismo es un ecommerce el cual tiene productos y se puede generar una orden de compra.

Al momento tiene un navbar con navegacion entre distintos componentes, aplicando ruteo (react-router-dom) como tambien filtrado para categorias de los productos. Cards que muestran un listado de todos los productos, una card con el detalle del producto, un componente tipo contador para agregar los productos al carrito (a implementar en futuras clases). Ya fue agregado un carrito, un formulario para generar la orden.

Los productos, al principio se encontraronn en un archivo productDataMock simulando una peticion asincrona (a modificar en futuras clases). Actualmente los productos estan cargados en la base de datos Firebase.





## Run Locally

Si se quiere descargar el proyecto y probar local, una vez realizada la clonacion se debe ejecutar `npm install`, luego se puede hacer uso de los scripts disponibles.

Tambien es necesario configurar una base de datos de Firebase.

Clonar el proyecto

```bash
  git clone https://github.com/almileo/ecommerce_tecnostore_almiron
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Scripts Disponibles

Se pueden ejecutar los siguientes scripts:

### `npm start`

Con este comando se levanta la app en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) en el navegador.

La pagina se actualiza cada vez que se hace un cambio.\
Tambien muestra errores en consola para poder debugear.

### `npm test`

Para ejecutar test (no aplicado por el momento).\

### `npm run build`

Para creaer la carpeta `build` y poder subirlo a produccion.\

Mas informacion [deployment](https://facebook.github.io/create-react-app/docs/deployment).



## Variables de Entorno

Para poder correr este proyecto es necesario configurar las variables de entorno, la cuales son las credenciales de la base de datos Firebase
Tambien hay un archivo de ejemplo .env.example


`REACT_APP_FIREBASE_apiKey`

`REACT_APP_FIREBASE_authDomain`

`REACT_APP_FIREBASE_projectId`

`REACT_APP_FIREBASE_storageBucket`

`REACT_APP_FIREBASE_messagingSenderId`

`REACT_APP_FIREBASE_appId`


## Demo

Insert gif or link to demo
(https://github.com/almileo/ecommerce_tecnostore_almiron/blob/main/public/img/Tecnostore%20-%20Entrega%20Final%20curso%20React%20coder%2006-22.gif)


## Badges


![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


## Authors

- [Leonardo Almiron](https://github.com/almileo)

- Me pueden encontrar como Leonardo Almiron en [LinkedIn](https://www.linkedin.com/in/leonardo-almiron-ame-dev/).


