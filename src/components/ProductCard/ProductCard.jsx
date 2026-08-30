import { useState } from "react"
import styles from './ProductCard.module.css'
import { useEffect } from 'react';


function ProductCard() {

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
      <h2>Mate Grande</h2>
      <p>Precio: $12000</p>

      <div className={styles.btns}>
        <button className={styles.button} onClick={restarCantidad}>-</button>
        <span className={styles.span}>{cantidad}</span>
        <button className={styles.button} onClick={sumarCantidad}>+</button>
      </div>

      <button
        className={esFavorito ? styles.favActivo : styles.favInactivo}
        onClick={toggleFavorite}>
        {esFavorito ? '❤️ Favorito' : '🤍 Agregar a favoritos'}
      </button>
    </article>
  )
}

export default ProductCard