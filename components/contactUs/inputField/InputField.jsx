import styles from '../../../styles/ContactUs.module.scss';

const InputField = (props) => {
  const {
    placeholder,
    handleChange,
    label,
    name,
    type,
    value,
    id,
    required,
    title,
  } = props;
  return (
    <p className={styles.contact__element}>
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        required={required}
        id={id}
        title={title}
      />
    </p>
  );
};

export default InputField;
