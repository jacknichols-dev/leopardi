import styles from '../../../styles/ContactUs.module.scss';

const TextAreaField = (props) => {
  const { name, handleChange, placeholder, type, label, value } = props;
  return (
    <p className={styles.contact__element}>
      <label htmlFor="">Message *</label>
      <textarea
        type={type}
        rows="5"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        label={label}
      />
    </p>
  );
};

export default TextAreaField;
