# Santelmates 🧉

E-commerce de mates artesanales, desarrollado con **React + Vite** como práctica de composición de componentes, manejo de estado (`useState`) y comunicación vía props.

## Stack

- React
- Vite
- CSS Modules

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:5173`.

## Estructura del proyecto

```
src/
  components/
    NavBar/
      NavBar.jsx
      NavBar.module.css
    CartWidget/
      CartWidget.jsx
      CartWidget.module.css
    ItemListContainer/
      ItemListContainer.jsx
      ItemListContainer.module.css
    ProductCard/
      ProductCard.jsx
      ProductCard.module.css
  App.jsx
  App.css
  main.jsx
  index.css
public/
  hero-mate.jpg
```

## Componentes y manejo de estado

### `NavBar`
No maneja estado propio. Contiene el branding de la tienda, las categorías de productos (mapeadas desde un array) y el `CartWidget`.

```jsx
const categorias = ['Mates', 'Bombillas', 'Despolvilladores', 'Ofertas']
```

### `CartWidget`
Componente pequeño y reutilizable dentro de la `NavBar`. Muestra un ícono de carrito y un badge con la cantidad de ítems, recibida por prop (`cantidad`). Por ahora el valor está hardcodeado desde `NavBar` (`<CartWidget cantidad={3} />`); a futuro este número vendrá de un estado global del carrito.

### `ItemListContainer`
Componente contenedor de la sección principal (hero). Recibe la prop `greeting` desde `App` y la muestra en pantalla, demostrando la comunicación unidireccional **padre → hijo**:

```jsx
<ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
```

`ItemListContainer` solo lee la prop, nunca la modifica. En el módulo final de props se conectará con una base de datos para listar los productos reales.

### `ProductCard`
- Estado `cantidad` (número, inicial `1`): se incrementa/decrementa con `sumarCantidad` / `restarCantidad`, ambas usando la forma funcional del setter (`setCantidad(prev => prev + 1)`) para evitar leer valores desactualizados. `restarCantidad` está validado para que nunca baje de `0`.
- Estado `esFavorito` (booleano, inicial `false`): se invierte con `toggleFavorite` usando `setEsFavorito(prev => !prev)`.
- El botón de favorito cambia de clase CSS (`favInactivo` / `favActivo`) según el valor del estado — de gris a rojo — sin mutar directamente ninguna variable.

## Próximos pasos

- Conectar `ItemListContainer` a una fuente de datos real para renderizar la lista de productos.
- Implementar rutas de navegación.
- Convertir el `CartWidget` en un carrito funcional con estado global (Context API).