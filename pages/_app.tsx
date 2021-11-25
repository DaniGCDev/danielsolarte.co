import type { AppProps } from 'next/app';
import '@styles/global.scss';
import Head from 'next/head';
import { getText } from '@utils/internationalization';
import Header from '@features/common/Header';

const PersonalPortfolio: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"rel="stylesheet" />
      <meta name="description" content={getText('head_description')} />
      <title>Daniel Solarte Chaverra || Portfolio</title>
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
);

export default PersonalPortfolio;
