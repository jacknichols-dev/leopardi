import React from 'react';
import Layout from '@/components/layout/Layout';
import HeadingTitle from '@/components/headingTitle/HeadingTitle';

const about = () => {
  return (
    <Layout
      content="This page is the general information about our business."
      title="All about us"
    >
      <div className="container">
        <HeadingTitle>About Us</HeadingTitle>
      </div>
    </Layout>
  );
};

export default about;
