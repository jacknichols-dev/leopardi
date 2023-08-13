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
        content="Leopardi Clothing are a fantastic choice for occasion-wear with bespoke hand picked collections of silk jackets, coats, dresses, kimonos and silk dressing gowns"
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
