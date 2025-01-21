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
        'service_f5edzcw',
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
            telephone: '',
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
            required={true}
            title="Please enter your first name"
          />
          <InputField
            value={values.lastName}
            handleChange={handleChange}
            label="Last Name (not required)"
            name="lastName"
            id="lastName"
            type="text"
            required={false}
            title="Please enter your surname"
          />
        </div>

        <InputField
          value={values.email}
          handleChange={handleChange}
          label="Email *"
          name="email"
          type="email"
          required={true}
          title="Please enter your email"
        />

        <InputField
          value={values.telephone}
          handleChange={handleChange}
          label="Telephone Number (not required)"
          name="telephone"
          type="tel"
          required={false}
          title="Please enter your telephone number"
        />

        <TextAreaField
          value={values.message}
          handleChange={handleChange}
          label="Message *"
          name="message"
          required={true}
          title="your message"
        />
        <div className="" style={{ textAlign: 'center' }}>
          <Button type="submit">SEND</Button>
        </div>
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
