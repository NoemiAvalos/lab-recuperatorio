# Laboratorio Recuperatorio - React + Vite

Aplicación que consulta la API pública de Rick and Morty y permite administrar una lista de personajes favoritos.

## Requisitos
- Node.js instalado.
- Conexión a internet para consultar la API.

## Cómo ejecutar el proyecto

1. Descomprimir el archivo ZIP.
2. Abrir la carpeta `lab-recuperatorio` en Visual Studio Code.
3. Abrir la terminal de Visual Studio Code.
4. Ejecutar:

   ```bash
   npm install
   npm run dev
   ```

5. Abrir en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## Estructura

```text
src/
├── components/
│   ├── PersonajeList.jsx
│   ├── PersonajeCard.jsx
│   └── FavoritesPanel.jsx
├── hooks/
│   └── usePersonajes.js
├── services/
│   └── fetchPersonajes.js
├── MultiversoApp.jsx
├── main.jsx
└── styles.css
```

## Funcionalidades
- Muestra los primeros 20 personajes que entrega la API.
- Permite agregar y quitar personajes de favoritos.
- Resalta con un borde dorado las tarjetas favoritas.
- Muestra el contador y el panel de favoritos.
- Presenta el estado de carga y un mensaje cuando ocurre un error de conexión.

## Para generar la versión de entrega

Ejecutar:

```bash
npm run build
```

La carpeta `dist` se genera automáticamente. No subir `node_modules` al repositorio de GitHub.
