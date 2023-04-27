import dynamic from 'next/dynamic';
import '../styles/globals.css'

const CartProviderRemote = dynamic(
  () => import('cart/CartContext').then((mod) => mod.CartProvider),
  {
    ssr: false,
  }
);

function MyApp({ Component, pageProps }) {
  return (
    <CartProviderRemote>
      <Component {...pageProps} />
    </CartProviderRemote>
  )
}

export default MyApp
