// import CartRemote from 'cart/pages/index'

import dynamic from 'next/dynamic';
const CartRemote = dynamic(() => import('cart/pages/index'), {
  ssr: false,
  suspense: true,
});

export default function() {
  return <CartRemote />;
}
