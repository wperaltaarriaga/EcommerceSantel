# Mi E-commerce (Semana 2 - React)

Proyecto de práctica con React + Vite, enfocado en manejo de estado con `useState` y comunicación entre componentes vía props.

## Componentes y manejo de estado

### `NavBar`
No maneja estado propio. Recibe `title` y `subtitle` como props para reutilizarse con distinto contenido en cada sección.

### `Counter`
- Estado: `cantidad` (número), inicializado en `0`.
- `handleSumar` / `handleRestar` actualizan el estado con la forma funcional (`setCantidad(prev => prev + 1)`) para evitar problemas de valores desactualizados en actualizaciones consecutivas.

### `ProductCard`
- Estado `cantidad` (número, inicial `1`): se incrementa/decrementa con `sumarCantidad` / `restarCantidad`, ambas usando el setter funcional. `restarCantidad` valida que nunca baje de `0`.
- Estado `esFavorito` (booleano, inicial `false`): se invierte con `toggleFavorite` usando `setEsFavorito(prev => !prev)`.
- El botón de favorito cambia de clase CSS (`favInactivo` / `favActivo`) según el valor del estado, sin mutar directamente ninguna variable.

## Cómo correr el proyecto

\`\`\`bash
npm install
npm run dev
\`\`\`