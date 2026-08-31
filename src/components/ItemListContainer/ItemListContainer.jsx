import { useState, useEffect } from 'react'
import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({ greeting, categoriaActiva, busqueda }) {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    console.log('useEffect ejecutado')

    // Definimos una función asincrónica adentro del efecto porque el
    // callback que recibe useEffect no puede ser async directamente
    // (si lo fuera, devolvería una Promise en vez de la función de
    // limpieza que React espera).
    const fetchProductos = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_API_URL)

        // fetch() NO lanza error automáticamente ante un 404 o 500 —
        // solo falla si hay un problema de red (sin conexión, dominio
        // inexistente, etc). Por eso hay que revisar response.ok a mano
        // y forzar el error nosotros si el servidor respondió mal.
        if (!response.ok) {
          throw new Error(`Error al cargar productos: ${response.status}`)
        }

        const data = await response.json()

        // La Fake Store API devuelve title/price/image/category, pero
        // nuestros componentes (ProductCard, ItemList) esperan
        // nombre/precio/imagen/categoria. Mapeamos acá para no tener
        // que tocar el resto de los componentes ya armados.
        const productosMapeados = data.map((producto) => ({
          id: producto.id,
          nombre: producto.title,
          precio: producto.price,
          imagen: producto.image,
          categoria: producto.category,
        }))

        setItems(productosMapeados)
      } catch (err) {
        setError(err.message)
      } finally {
        // finally corre siempre, haya éxito o error — así garantizamos
        // que isLoading pase a false en ambos casos, sin duplicar la
        // línea en el try y en el catch.
        setIsLoading(false)
      }
    }

    fetchProductos()

    // Array de dependencias vacío ([]): el efecto debe ejecutarse una
    // sola vez, al montar el componente, para hacer la petición inicial
    // a la API. Si se omitiera el array, el efecto se dispararía en
    // cada render; y como dentro de él actualizamos el estado
    // (setItems/setIsLoading/setError), cada actualización generaría un
    // nuevo render, que volvería a disparar el efecto —entrando en un
    // bucle infinito de peticiones a la API.
  }, [])

  const itemsFiltrados = items
    .filter((item) => categoriaActiva === 'Todos' || item.categoria === categoriaActiva)
    .filter((item) => item.nombre.toLowerCase().includes(busqueda.toLowerCase()))

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h2 className={styles.greeting}>{greeting}</h2>
          <p className={styles.subtext}>
            Mates artesanales, hechos a mano, para tu ritual de todos los días.
          </p>
          <button className={styles.cta}>Ver productos</button>
        </div>
      </section>

      <section className={styles.productsSection}>
        {isLoading ? (
          <p className={styles.loadingText}>Cargando productos...</p>
        ) : error ? (
          <p className={styles.errorText}>⚠️ {error}</p>
        ) : itemsFiltrados.length === 0 ? (
          <p className={styles.loadingText}>No se encontraron productos.</p>
        ) : (
          <ItemList items={itemsFiltrados} />
        )}
      </section>
    </>
  )
}

export default ItemListContainer