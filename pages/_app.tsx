import type { AppProps } from 'next/app';
import '@styles/global.scss';
import Head from 'next/head';
import { getText } from '@utils/internationalization';
import Header from '@features/common/Header';

const PersonalPortfolio: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <meta name="description" content={getText('head_description')} />
      <meta
        name="keywords"
        content="Daniel Solarte,Daniel Solarte Chaverra,Rust,TypeScript,ts,js,JavaScript,work,cv,hoja de vida,software developer,desarrollador de software,Colombia"
      />
      {/* Twitter */}
      <meta name="twitter:description" content={getText('head_description')} />
      <meta name="twitter:title" content={getText('head_title')} />
      {/* Facebook */}
      <meta name="og:description" content={getText('head_description')} />
      <meta name="og:site_name" content={getText('head_title')} />
      <meta name="og:title" content={getText('head_title')} />
      <title>{getText('head_title')}</title>
    </Head>
    <Header />
    <Component {...pageProps} />
  </>
);

export default PersonalPortfolio;
