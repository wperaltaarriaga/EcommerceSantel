import styles from './CartWidget.module.css'

function CartWidget({ cantidad }) {
  return (
    <div className={styles.cartWidget}>
      <span className={styles.icon}>🛒</span>
      {cantidad > 0 && (
        <span className={styles.badge}>{cantidad}</span>
      )}
    </div>
  )
}

export default CartWidget