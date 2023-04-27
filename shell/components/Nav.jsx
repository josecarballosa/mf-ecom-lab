import Link from 'next/link'
import dynamic from 'next/dynamic';
import styles from '../styles/Nav.module.css';

const CartIconRemote = dynamic(() => import('cart/CartIcon'), {
  ssr: false,
});

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/product">Product</Link>
      <Link href="/cart">Cart</Link>
      <CartIconRemote />
    </div>
  )
}
