import HeadingTitle from '@/components/headingTitle/HeadingTitle';
import Layout from '@/components/layout/Layout';
import React from 'react';

const contact = () => {
  return (
    <Layout
      content="This is the Contact us page, you can drop us a message and we will help with any query."
      title="Contact us"
    >
      <div className="container">
        <HeadingTitle>Contact Us</HeadingTitle>
      </div>
    </Layout>
  );
};

export default contact;
