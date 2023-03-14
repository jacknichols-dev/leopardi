import React from 'react';
import Layout from '@/components/layout/Layout';

const about = () => {
  return (
    <Layout
      content="This page is the general information about our business."
      title="All about us"
    >
      <div className="container">
        <h1>about</h1>
      </div>
    </Layout>
  );
};

export default about;
