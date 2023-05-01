import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { injectScript } from '@module-federation/nextjs-mf/utils';

export default function () {
  // const PageRemote = dynamic(() => import('cart/pages/index'), {
  //   ssr: false,
  //   suspense: true,
  //   loading: () => <p>Loading...</p>,
  //   error: () => <p>Something went wrong</p>,
  // });

  const router = useRouter();

  /* This it fails, not sure why... */
  // const PageRemote = dynamic(() => import(`${router.query.page}/pages/index`), {
  //   ssr: false,
  //   suspense: true,
  //   loading: () => <p>Loading...</p>,
  //   error: () => <p>Something went wrong</p>,
  // });

  const PageRemote = dynamic(
    () =>
      injectScript(router.query.page).then((remote) => {
        return remote.get('./pages/index').then((factory) => factory());
      }),
    {
      ssr: false,
      suspense: true,
      loading: () => <p>Loading...</p>,
      error: () => <p>Something went wrong</p>,
    }
  );

  return <PageRemote />;
}
