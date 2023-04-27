import styles from '../styles/Home.module.css';
import { useCart } from '../context/CartContext';

export default function CartIcon() {
  const { count } = useCart();
  const cartState = count === 0 ? styles.empty : styles.filled;
  return (
    <div className={[styles.cart, cartState].join(' ')}>
      cart: {count} item(s)
    </div>
  );
}
