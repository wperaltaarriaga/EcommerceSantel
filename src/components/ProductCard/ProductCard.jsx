import { useState } from "react"
import styles from './ProductCard.module.css'

function ProductCard({ item }) {
  const { nombre, precio, imagen, categoria } = item

  const [cantidad, setCantidad] = useState(1)
  const [esFavorito, setEsFavorito] = useState(false)

  const sumarCantidad = () => {
    setCantidad(prev => prev + 1)
  }

  const restarCantidad = () => {
    setCantidad(prev => (prev > 0 ? prev - 1 : 0))
  }

  const toggleFavorite = () => {
    setEsFavorito(prev => !prev)
  }

  return (
    <article className={styles.article}>
      <div className={styles.imageWrapper}>
        <img src={imagen} alt={nombre} className={styles.image} />
        <button
          className={`${styles.favButton} ${esFavorito ? styles.favActive : ''}`}
          onClick={toggleFavorite}
        >
          {esFavorito ? '❤️' : '🤍'}
        </button>
      </div>

      <div className={styles.info}>
        <span className={styles.category}>{categoria}</span>
        <h3 className={styles.title}>{nombre}</h3>
        <p className={styles.price}>${precio.toLocaleString('es-AR')}</p>

        <div className={styles.btns}>
          <button className={styles.button} onClick={restarCantidad}>-</button>
          <span className={styles.span}>{cantidad}</span>
          <button className={styles.button} onClick={sumarCantidad}>+</button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard