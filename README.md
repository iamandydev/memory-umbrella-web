**Memory Umbrella — Sitio Web**

Breve descripción
- **Qué es:** Sitio web oficial del proyecto Memory Umbrella. Presenta información pública, páginas de descarga y una interfaz sencilla basada en Express + EJS.
- **Propósito:** Proveer una presencia web para el proyecto, servir páginas estáticas y vistas renderizadas del lado del servidor.

Estado
- Versión: 0.0.4 (según `package.json`).

Tecnologías
- **Node.js** (entorno de ejecución)
- **Express** (framework web)
- **EJS** (plantillas del lado servidor)
- **nodemon** (desarrollo — recarga automática)

Instalación (desarrollador)
1. Clona el repositorio o descarga el proyecto.
2. Desde la raíz del proyecto instala dependencias:

```powershell
npm install
```

3. Ejecuta la aplicación en producción/local:

```powershell
npm start
# Esto ejecuta: node src/server.js
```

4. Para desarrollo con recarga automática (requiere `nodemon`):

```powershell
npm run dev
# Esto ejecuta: nodemon src/server.js
```

Estructura principal del proyecto
- **`src/`**: código fuente del servidor y la aplicación.
  - `app.js` — configuración de la app Express.
  - `server.js` — punto de entrada del servidor.
  - `public/` — archivos estáticos (CSS, JS, imágenes, videos).
  - `routes/` — definiciones de rutas (por ejemplo `index.routes.js`).
  - `views/` — plantillas EJS (`index.ejs`, `download.ejs`, `error.ejs`, `products-list.ejs`).

- `package.json` — metadatos y scripts del proyecto.

Despliegue
- El proyecto es una aplicación Node.js tradicional. Para desplegar:
  - Asegúrate de tener Node.js instalado en el servidor.
  - Instala dependencias con `npm install`.
  - Ejecuta `npm start` o configura un proceso administrador (pm2, systemd, etc.) que ejecute `node src/server.js`.


Contacto y autor
- **Autor:** iamandydev
- Si necesitas contactarme o colaborar, abre una issue en el repositorio de GitHub.

Licencia
- Este proyecto usa la licencia **MIT** (según `package.json`).

Notas finales
- Este README ofrece las instrucciones básicas para levantar y entender la estructura del sitio. Puedo ampliar secciones (detallar rutas, variables de entorno, diagramas o ejemplos de API) si quieres — dime qué te gustaría documentar más.
# Memory Umbrella Web Site