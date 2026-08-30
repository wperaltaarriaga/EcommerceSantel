import { useState, useEffect } from 'react'
import styles from './ItemListContainer.module.css'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('useEffect ejecutado')

    const productosFicticios = [
      { id: 1, name: 'Mate Imperial' },
      { id: 2, name: 'Mate Camionero' },
      { id: 3, name: 'Bombilla de Alpaca' },
      { id: 4, name: 'Yerbera de Cuero' },
    ]

    const timer = setTimeout(() => {
      setItems(productosFicticios)
      setLoading(false)
    }, 2000)

    // Limpieza: si el componente se desmonta antes de que termine
    // el timeout, cancelamos el timer para evitar actualizar estado
    // en un componente que ya no existe.
    return () => clearTimeout(timer)

    // Array de dependencias vacío ([]): queremos que este efecto se
    // ejecute UNA sola vez, al montar el componente, simulando una
    // petición inicial a una API 
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 className={styles.greeting}>{greeting}</h2>

        {loading ? (
          <p className={styles.subtext}>Cargando productos...</p>
        ) : (
          <p className={styles.subtext}>
            {items.length} productos disponibles: {items.map(i => i.name).join(', ')}
          </p>
        )}

        <button className={styles.cta}>Ver productos</button>
      </div>
    </section>
  )
}

export default ItemListContainer