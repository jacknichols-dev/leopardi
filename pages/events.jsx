import React from 'react';
import Layout from '@/components/layout/Layout';

const events = () => {
  return (
    <Layout
      content="This is the events page for where we will have stalls throughout the year."
      title="Where we'll be!"
    >
      <div className="container">
        <h1>events</h1>
      </div>
    </Layout>
  );
};

export default events;
