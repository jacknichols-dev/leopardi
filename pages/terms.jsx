import React from 'react';
import styles from '../styles/Terms.module.scss';
import HeadingTitle from '../components/headingTitle/HeadingTitle';
import Layout from '@/components/layout/Layout';

const terms = () => {
  return (
    <Layout
      content="This is Leopardi terms and conditions page. This page outlines all our policies on our clothiing products."
      title="Terms & Conditions"
    >
      <div className={styles.terms}>
        <div className="container">
          <div className={styles.terms__heading}>
            <HeadingTitle>Terms & Conditions</HeadingTitle>
          </div>
          <p>
            Leopardi.co.uk is a site operated by (Kathryn Nichols) We are
            registered in England and with our registered and trading address at
            82, High Street, Girton, Cambridge, CB3 0QL.
          </p>

          <h2>RIGHT TO CANCEL</h2>

          <p>
            You have the right to cancel the purchase of a good without having
            to give a reason at any time within the cooling off period of 14
            working days, beginning on the day after you receive the goods. If
            you are in possession of the goods you are under the duty to retain
            them and take reasonable care of them. You must send the goods back
            to us to our contact address (82 High Street, Girton, Cambridge, CB3
            0QL) at your own cost (unless we delivered the item to you in error
            or the item is damaged or defective) as soon as possible once you
            have canceled the contract.
            <br></br>
            <br />
            We reserve the right to make a charge not exceeding our direct costs
            of recovering the goods if you do not return the goods or return
            them at our expense.
            <br></br>
            <br />
            Once you have notified us that you wish to cancel the contract, any
            sum debited to us will be refunded to you as soon as possible and in
            any event within 30 days of your cancellation.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default terms;
