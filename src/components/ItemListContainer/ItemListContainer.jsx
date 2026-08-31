import { useState, useEffect } from 'react'
import styles from './ItemListContainer.module.css'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('useEffect ejecutado')

    const productosFicticios = [
      { id: 1, nombre: 'Mate Chico', precio: 15000, categoria: 'Mates', imagen:'/mateChico.jpg' },
      { id: 2, nombre: 'Mate Mediano', precio: 9500, categoria: 'Mates', imagen: '/mateMed.jpg'},
      { id: 3, nombre: 'Bombilla', precio: 6000, categoria: 'Bombillas', imagen: '/bombilla.jpg' },
      { id: 4, nombre: 'Despolvillador', precio: 11000, categoria: 'Despolvilladores', imagen: '/despol1.jpg' },
      { id: 5, nombre: 'Mate Grande', precio: 13500, categoria: 'Ofertas', imagen: '/mateGrande.jpg' },
      { id: 6, nombre: 'Despolvillador', precio: 11000, categoria: 'Despolvilladores', imagen: '/despol2.jpg' },
    ]

    const timer = setTimeout(() => {
      setItems(productosFicticios)
      setLoading(false)
    }, 2000)

    // Array de dependencias vacío ([]): este efecto simula una petición
    // inicial a una API y debe ejecutarse UNA sola vez, al montar el
    // componente — no en cada re-render. Si se omitiera el array (o se
    // pusiera sin corchetes), el efecto se dispararía después de cada
    // render; y como adentro cambiamos el estado (setItems/setLoading),
    // cada cambio de estado provocaría un nuevo render, que a su vez
    // volvería a disparar el efecto, generando un bucle infinito de
    // setTimeouts apilándose uno atrás de otro.
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