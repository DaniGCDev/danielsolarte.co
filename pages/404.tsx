import Header from "@features/common/Header";
import { getText } from "@utils/internationalization";
import { NextPage } from "next";
import Head from 'next/head';

const Error404: NextPage = () => (
  <div>
    <Head>
      <meta name="description" content={getText('head_description')} />
    </Head>
    <Header />
    Error 404
  </div>
);

export default Error404;
