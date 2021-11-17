import '../styles/normalize.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { CookiesProvider } from 'react-cookie';
import { Preloader } from '@/components/Preloader';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <Preloader />
      <Component {...pageProps} />
    </CookiesProvider>
  );
}
export default appWithTranslation(MyApp);
