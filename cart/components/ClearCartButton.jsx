import styles from '../styles/Home.module.css';
import { useCart } from '../context/CartContext';

export default function BuyButton({ sku }) {
  const { clearCart } = useCart();
  return (
    <button type="button" className={styles.buy} onClick={clearCart}>
      Clear the cart
    </button>
  );
}
