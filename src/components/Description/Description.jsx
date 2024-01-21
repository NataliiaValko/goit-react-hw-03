import styles from './Description.module.css';

const Description = () => {
  return (
    <>
      <h1 className={styles.title}>Description</h1>
      <p className={styles.description}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
};

export default Description;
