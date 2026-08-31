# Santelmates 🧉

E-commerce de mates artesanales, desarrollado con **React + Vite** como práctica de composición de componentes, manejo de estado (`useState`), efectos (`useEffect`) y comunicación vía props.

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
    ItemList/
      ItemList.jsx
      ItemList.module.css
    ProductCard/
      ProductCard.jsx
      ProductCard.module.css
  App.jsx
  App.css
  main.jsx
  index.css
public/
  hero/
    hero-mate.jpg
  mate1.jpg
  despolvilador.jpg
```

## Componentes y manejo de estado

### `NavBar`
Contiene el branding de la tienda, las categorías de productos (mapeadas desde un array) presentadas como un selector tipo píldora, y el `CartWidget`.

```jsx
const categorias = ['Mates', 'Bombillas', 'Despolvilladores', 'Ofertas']
```

Maneja un estado local `categoriaActiva` (`useState`) para resaltar visualmente la categoría seleccionada.

### `CartWidget`
Componente pequeño y reutilizable dentro de la `NavBar`. Muestra un ícono de carrito y un badge con la cantidad de ítems, recibida por prop (`cantidad`). Por ahora el valor está hardcodeado desde `NavBar` (`<CartWidget cantidad={3} />`); a futuro este número vendrá de un estado global del carrito.

### `ItemListContainer`
Componente contenedor de la sección principal. Recibe la prop `greeting` desde `App` y la muestra en el hero, demostrando la comunicación unidireccional **padre → hijo**:

```jsx
<ItemListContainer greeting="Mates para acompañar cada momento" />
```

Además, gestiona la carga de productos simulando una petición a una API real:

- **Estados:** `items` (array vacío inicial) y `loading` (booleano, `true` al montar).
- **`useEffect`:** define un array de productos ficticios y usa `setTimeout` para simular 2 segundos de demora de red. Al cumplirse, actualiza `items` y pone `loading` en `false`.
- **Array de dependencias `[]`:** se usa vacío a propósito, para que el efecto se ejecute una única vez al montar el componente, simulando la carga inicial de datos. Si se omitiera el array de dependencias, el efecto se volvería a ejecutar en cada render del componente —y como el propio efecto actualiza el estado (`setItems`/`setLoading`), cada actualización dispararía un nuevo render, que a su vez volvería a ejecutar el efecto, entrando en un bucle infinito de peticiones.
- **Función de limpieza:** el efecto retorna `clearTimeout(timer)`, que cancela el timeout si el componente se desmonta antes de que termine, evitando actualizar el estado de un componente que ya no existe.
- **Renderizado condicional:** mientras `loading` es `true`, se muestra "Cargando productos..."; cuando pasa a `false`, se renderiza `<ItemList items={items} />`.

### `ItemList`
Recorre el array de productos con `.map()` y renderiza un `ProductCard` por cada uno, asignando la prop `key={item.id}` en el elemento retornado por el `.map()` (usando el `id` real del producto, nunca el índice del array).

```jsx
{items.map((item) => (
  <ProductCard key={item.id} item={item} />
))}
```

### `ProductCard`
Componente de presentación de cada producto. Recibe el objeto completo por prop (`item`) y desestructura sus campos:

```jsx
const { nombre, precio, imagen, categoria } = item
```

Cada producto tiene: `id`, `nombre`, `precio`, `categoria` e `imagen`.

Maneja dos estados propios, independientes por cada instancia de la card:

- **`cantidad`** (número, inicial `1`): se incrementa/decrementa con `sumarCantidad` / `restarCantidad`, ambas usando la forma funcional del setter (`setCantidad(prev => prev + 1)`) para evitar leer valores desactualizados. `restarCantidad` está validado para que nunca baje de `0`.
- **`esFavorito`** (booleano, inicial `false`): se invierte con `toggleFavorite` usando `setEsFavorito(prev => !prev)`. El botón de favorito cambia de ícono (🤍 / ❤️) según el valor del estado, sin mutar directamente ninguna variable.

## Datos de productos

Por ahora los productos son un array ficticio dentro de `ItemListContainer`, con al menos 5 ítems y sin IDs duplicados. Las imágenes viven en `public/` (o se usan placeholders de `placehold.co` mientras no hay fotos propias).

## Próximos pasos

- Conectar `ItemListContainer` a una fuente de datos real (API o Firebase) para reemplazar el array ficticio.
- Implementar rutas de navegación (React Router).
- Filtrar productos por categoría desde la `NavBar`.
- Convertir el `CartWidget` en un carrito funcional con estado global (Context API).