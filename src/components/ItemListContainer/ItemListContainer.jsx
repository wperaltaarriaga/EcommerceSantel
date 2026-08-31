import { useState, useEffect } from 'react'
import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('useEffect ejecutado')

    const productosFicticios = [
      { id: 1, name: 'Mate Imperial', price: 15000 },
      { id: 2, name: 'Mate Camionero', price: 9500 },
      { id: 3, name: 'Bombilla de Alpaca', price: 6000 },
      { id: 4, name: 'Yerbera de Cuero', price: 11000 },
    ]

    const timer = setTimeout(() => {
      setItems(productosFicticios)
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

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
        {loading ? (
          <p className={styles.loadingText}>Cargando productos...</p>
        ) : (
          <ItemList items={items} />
        )}
      </section>
    </>
  )
}

export default ItemListContainer