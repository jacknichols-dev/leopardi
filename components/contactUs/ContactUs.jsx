import React, { useRef, useState, useEffect } from 'react';
import styles from '../../styles/ContactUs.module.scss';
import Button from '../button/Button';
import success from '../../public/assets/check-success.svg';
import InputField from './inputField/InputField';
import TextAreaField from './textAreaField/TextAreaField';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

const ContactUs = ({ title, shadow }) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_jgojfgr',
        'template_zjnogxa',
        form.current,
        'dHBoo3-x7HJTAcQBm'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setValues({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
          });
          setStatus('SUCCESS');
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 2500);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={{ boxShadow: shadow }} className={styles.contact}>
      <form ref={form} onSubmit={sendEmail} className={styles.contact__form}>
        <div className={styles['contact__element--names']}>
          <InputField
            value={values.firstName}
            handleChange={handleChange}
            label="First Name *"
            name="firstName"
            id="firstName"
            type="text"
          />
          <InputField
            value={values.lastName}
            handleChange={handleChange}
            label="Last Name *"
            name="lastName"
            id="lastName"
            type="text"
          />
        </div>

        <InputField
          value={values.email}
          handleChange={handleChange}
          label="Email *"
          name="email"
          type="email"
        />

        <TextAreaField
          value={values.message}
          handleChange={handleChange}
          label="Message *"
          name="message"
        />

        <Button type="submit">SEND</Button>
        {status && renderAlert()}
      </form>
    </div>
  );
};

export default ContactUs;

const renderAlert = () => (
  <div className="success">
    <Image src={success} alt="check" />
    <h3>Thank you, your message submitted successfully!</h3>
  </div>
);
