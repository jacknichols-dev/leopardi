import React from 'react';
import Layout from '@/components/layout/Layout';
import HeadingTitle from '@/components/headingTitle/HeadingTitle';

const events = () => {
  return (
    <Layout
      content="This is the events page for where we will have stalls throughout the year."
      title="Where we'll be!"
    >
      <div className="container">
        <HeadingTitle>
          Leopardi will be at the following events this year:
        </HeadingTitle>
      </div>
    </Layout>
  );
};

export default events;
