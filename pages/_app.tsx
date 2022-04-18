import '../styles/globals.css'
import type { AppProps } from 'next/app'

import '@kickstartds/base/lib/global/base.js';
import '@kickstartds/base/lib/global/base.css';

import '@kickstartds/core/lib/design-tokens/tokens.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
