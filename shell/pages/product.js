// import ProductRemote from 'product/pages/index'

import dynamic from 'next/dynamic';
const ProductRemote = dynamic(() => import('product/pages/index'), {
  ssr: false,
  suspense: true,
});

export default function() {
  return <ProductRemote />;
}
