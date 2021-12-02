import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/organisms/Header';

export default function DefaultLayout({ children, title }) {
  return (
    <div className={'bg-gray-900 text-gray-100 min-h-full'}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />

      <main>{children}</main>
    </div>
  );
}
