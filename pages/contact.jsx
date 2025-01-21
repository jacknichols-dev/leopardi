import React from 'react';
import Layout from '../components/layout/Layout';
import styles from '../styles/ContactPage.module.scss';
import Image from 'next/legacy/image';
import ContactUs from '../components/contactUs/ContactUs';
import check from '../public/assets/Icon-check-square.png';
import HeadingTitle from '../components/headingTitle/HeadingTitle';
import EtsyCta from '../components/welcome/EtsyCta';
// import ContactInfo from '../components/contactInfo/ContactInfo';

const contact = () => {
  return (
    <>
      <Layout
        content="Leopardi Proffesionals For Our Womens Clothing Are Always On Hand To Help With Any Query You May Have. "
        title="Contact Us"
      >
        <div className={styles.contactpage}>
          <div className={styles.contactpage__header}>
            <div className="container">
              <HeadingTitle>Contact Us</HeadingTitle>
              <h1 style={{ lineHeight: '1.2', fontSize: '3rem' }}>
                Leopardi Women’s Clothing provides prompt and professional
                customer service. Our team is available to assist you with any
                inquiries you may have. Kindly contact us via the messaging form
                below and we will email back as soon as possible.
              </h1>
            </div>
          </div>
          <div className="container">
            <div className={styles['contactpage__main-content']}>
              <div className={styles.contactpage__left}>
                <ContactUs shadow="-2rem 0 2rem -2rem rgb(0 0 0 / 20%),  2rem 0 2rem -2rem rgb(0 0 0 / 20%)" />
              </div>
              <div className={styles.contactpage__right}>
                <div className={styles['contactpage__right--content']}>
                  <div className={styles['contactpage__right--header']}>
                    <h2>How Can We Help?</h2>
                    <p>
                      A member of our team will promptly respond to any inquiry.
                    </p>
                  </div>
                  <div className={styles['contactpage__right--list']}>
                    <Image
                      src="/assets/leopardi-contact-pic.webp"
                      alt="contact"
                      placeholder="blur"
                      blurDataURL="/assets/leopardi-contact-pic.webp"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <EtsyCta
              pic="/assets/banner-4.webp"
              text1="Explore Our Product Ranges"
              text2="On Etsy"
              alt="Silk and cashmere Jackets"
              margin="0 0 5rem 0"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default contact;
