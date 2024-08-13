# Inventory Management App

## Descripción

Esta es una aplicación básica de gestión de inventario construida con HTML, CSS, JavaScript, Node.js, Express y LowDB. Permite agregar productos a un inventario y ver la lista de productos actuales.

## Características

- **Agregar Productos:** Permite agregar productos al inventario con un nombre y una cantidad.
- **Ver Productos:** Muestra una lista de todos los productos en el inventario.

## Requisitos

- Node.js (versión 12 o superior)
- npm (Node Package Manager)

## Instalación

1. Clona el repositorio en tu máquina local:

   ```sh
   git clone https://github.com/tu-usuario/inventarioApp.git
    ```
2. Navega al directorio del proyecto

    ```sh
   cd inventarioApp
    ```
3. Instala las dependencias

    ```sh
   npm install
    ```
## Uso

1. Inicia el servidor:

    ```sh
    npm start
    ```

2. Abre tu navegador web y navega a:

    ```sh
    http://localhost:3000
    ```
## Estructura del Proyecto

![EstructuraProyecto](https://github.com/user-attachments/assets/f523a1c5-c675-479e-9d7a-3bb9bbcb871b)

- **data/db.json:** Archivo JSON donde se almacenan los datos del inventario.
- **public/index.html:** Archivo HTML principal de la interfaz de usuario.
- **public/styles.css:** Archivo CSS para los estilos de la interfaz de usuario.
- **public/script.js:** Archivo JavaScript que maneja la lógica del cliente.
- **server.js:** Archivo principal del servidor que maneja las solicitudes de la API.
- **package.json:** Archivo que lista las dependencias y scripts del proyecto.

## API

La aplicación tiene dos rutas principales para la API:

- **GET /api/products:** Devuelve la lista de productos.
- **POST /api/products:** Agrega un nuevo producto al inventario.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una rama para tus cambios (git checkout -b feature/nueva-caracteristica).
3. Realiza los cambios y confirma tus commits (git commit -m 'Agrega nueva característica').
4. Empuja tus cambios a tu repositorio fork (git push origin feature/nueva-caracteristica).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

## Contacto

Edwin Serrano - Edwset.77@gmail.com

GitHub: https://github.com/Edwseth
