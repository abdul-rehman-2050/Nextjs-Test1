import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../src/theme';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';

// Use the <SessionProvider> to improve performance and allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider
      // Provider options are not required but can be useful in situations where
      // you have a short session maxAge time. Shown here with default values.
      session={pageProps.session}
    >
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}