import Head from 'next/head';
import React from 'react';
import Layout from '../components/layout/Layout';
import styles from '../styles/ContactPage.module.scss';
import Image from 'next/legacy/image';
import ContactUs from '../components/contactUs/ContactUs';
import check from '../public/assets/Icon-check-square.png';
import HeadingTitle from '../components/headingTitle/HeadingTitle';
// import ContactInfo from '../components/contactInfo/ContactInfo';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us Page</title>
        <meta
          name="description"
          content="If you need to get in touch with us, we would be happy to help! Contact us through our website or email and we will respond to your inquiries as quickly as possible."
        />
      </Head>

      <Layout
        content="This is the contact page for this website"
        title="Contact Us"
      >
        <div className={styles.contactpage}>
          <div className={styles.contactpage__header}>
            <div className="container">
              <HeadingTitle>Contact Us</HeadingTitle>
              <p>
                Let us know what your needs are, we will reply as soon as
                possible with a quote and arrange a suitable time to come to the
                site to assess the job.
              </p>
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
                    <h1>How Can We Help?</h1>
                    <p>
                      A member of our team will reply to any query as soon as
                      possible.
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
          </div>
        </div>
      </Layout>
    </>
  );
};

export default contact;
