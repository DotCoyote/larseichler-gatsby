import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/organisms/Footer';
import Header from '../components/organisms/Header';

export default function DefaultLayout({
  children,
  title,
  noFooter = false,
  simpleFooter = false,
}) {
  return (
    <div className={'bg-gray-900 text-gray-100 min-h-full'}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />

      <main>{children}</main>

      {!noFooter && <Footer isSimple={simpleFooter} />}
    </div>
  );
}
