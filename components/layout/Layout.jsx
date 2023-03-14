import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ content, title, children }) => {
  return (
    <>
      <Head>
        <title>
          {title ? 'Leopardi - ' + title : 'Leopardi - Occasion Wear'}
        </title>
        <meta
          name="description"
          content={
            content
              ? content + ' - Leopardi'
              : 'Best Occasional Wear For Those Special Moments'
          }
        />
        <link rel="icon" href="/leopardi.ico" />
      </Head>

      <>
        <Header />
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '80vh',
          }}
        >
          {children}
        </main>
        <Footer />
      </>
    </>
  );
};

export default Layout;
