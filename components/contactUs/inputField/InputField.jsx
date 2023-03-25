import styles from '../../../styles/ContactUs.module.scss';

const InputField = (props) => {
  const { placeholder, handleChange, label, name, type, value, id } = props;
  return (
    <p className={styles.contact__element}>
      <label htmlFor={name}>{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        value={value}
        name={name}
        required
        id={id}
      />
    </p>
  );
};

export default InputField;
