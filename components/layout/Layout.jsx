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
            ? title + ' | Leopardi Clothing'
            : 'Womens Occasional Wear Clothing | Best Quality Luxurious Clothing For Women. | Leopardi Clothing'}
        </title>
        <meta
          name="description"
          content={
            content
              ? content + ' | Leopardi'
              : 'Find luxurious occasional wear for women from our established and ethical designers. From elegant coats and jackets to night wear, discover everything you need to make your special occasion unforgettable.'
          }
        />
        <link rel="icon" href="/leopardi.ico" />
        <link rel="shortcut icon" href="/leopardi.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images//leopardi.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images//leopardi.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images//leopardi.png"
        />
      </Head>

      <>
        <Header />
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
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
