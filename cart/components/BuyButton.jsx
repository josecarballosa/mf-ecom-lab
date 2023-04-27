import styles from '../styles/Home.module.css';
import { useCart } from '../context/CartContext';

const prices = {
  t_porsche: '€ 66.00',
  t_fendt: '€ 54.00',
  t_eicher: '€ 58.00',
};

export default function BuyButton({ sku }) {
  const { addItem } = useCart();
  const price = prices[sku];
  return (
    <button type="button" className={styles.buy} onClick={addItem}>
      buy for {price}
    </button>
  );
}
