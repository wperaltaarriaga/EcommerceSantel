import styles from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const categorias = ['Mates', 'Bombillas', 'Despolvilladores', 'Ofertas']

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <h1 className={styles.brandName}>Santel Mates</h1>
      </div>

      <ul className={styles.categorias}>
        {categorias.map((categoria) => (
          <li key={categoria} className={styles.categoriaItem}>
            {categoria}
          </li>
        ))}
      </ul>

      <CartWidget cantidad={3} />
    </nav>
  )
}

export default NavBar