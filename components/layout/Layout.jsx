import Head from 'next/head';
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({ content, title, children }) => {
  return (
    <>
      <Head>
        <title>
          {title
            ? 'Leopardi - ' + title
            : 'Leopardi - Clothing For Any Occasion'}
        </title>
        <meta
          name="description"
          content={
            content
              ? content + ' - Leopardi'
              : 'Find luxurious occasional wear for women from our established and ethical designers. From elegant coats and jackets to night wear, discover everything you need to make your special occasion unforgettable.'
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
