import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import React from 'react';

const gallery = () => {
  return (
    <Layout
      content="This is the scaffolding page for Riverport Scaffolding website"
      title="Gallery Page"
    >
      <div className="container">
        <h1>gallery</h1>
      </div>
    </Layout>
  );
};

export default gallery;
