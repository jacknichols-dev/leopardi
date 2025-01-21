import styles from '../../../styles/ContactUs.module.scss';

const TextAreaField = (props) => {
  const {
    name,
    handleChange,
    placeholder,
    type,
    label,
    value,
    title,
    required,
  } = props;
  return (
    <p className={styles.contact__element}>
      <label htmlFor="">Message *</label>
      <textarea
        type={type}
        rows="7"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        label={label}
        title={title}
        required={required}
      />
    </p>
  );
};

export default TextAreaField;
