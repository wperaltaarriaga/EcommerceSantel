import { useState } from 'react'
import styles from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const categorias = ['Mates', 'Bombillas', 'Despolvilladores', 'Ofertas']

function NavBar() {
  const [categoriaActiva, setCategoriaActiva] = useState('Mates')

  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <h1 className={styles.brandName}>Santel Mates</h1>
      </div>

      <div className={styles.pillNav}>
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`${styles.pillItem} ${categoria === categoriaActiva ? styles.pillActive : ''}`}
            onClick={() => setCategoriaActiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <CartWidget cantidad={3} />
    </nav>
  )
}

export default NavBar