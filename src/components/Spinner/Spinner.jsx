import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%", height: "80vh" }}
    >
      <div className={styles.spinner}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
