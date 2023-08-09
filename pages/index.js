import styles from '@/styles/Home.module.scss';
import Layout from '@/components/layout/Layout';
import { Hero } from '@/components/hero/Hero';
import WelcomeSection from '@/components/welcome/WelcomeSection';
import FeaturedProducts from '@/components/featured/FeaturedProducts';
import Categories from '@/components/categories/Categories';

export default function Home() {
  return (
    <>
      <Layout
        content="Riverport Scaffolding offers safe and professional scaffolding solutions in Cambridge & surrounding areas - Huntingdon, St Ives, Saffron Walden. We have over 40 Years of experience."
        title="Womens Occasional Wear Clothing | Best Quality Luxurious Clothing For Women."
      >
        <main className={styles.main}>
          <Hero />
          <WelcomeSection />
          <FeaturedProducts />
          <Categories />
        </main>
      </Layout>
    </>
  );
}
