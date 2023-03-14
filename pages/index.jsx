import Head from 'next/head';

import styles from '@/styles/Home.module.scss';
import Layout from '@/components/layout/Layout';
import { Hero } from '@/components/hero/Hero';
import WelcomeSection from '@/components/welcome/WelcomeSection';
import FeaturedProducts from '@/components/featured/FeaturedProducts';

export default function Home() {
  return (
    <>
      <Head>
        <title>Leopardi - Clothing and Accessories</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/leopardi.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <Hero />
          <WelcomeSection />
          <div style={{ backgroundColor: '#f0f6fa', width: '100vw' }}>
            <FeaturedProducts />
          </div>
        </main>
      </Layout>
    </>
  );
}
