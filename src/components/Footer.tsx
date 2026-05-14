import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p className={styles.wordmark}>Sydney Surfboard Repair</p>
        <p className={styles.address}>34b Kareena Rd North, Miranda NSW 2228</p>
      </div>
      <div className={styles.right}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Sydney Surfboard Repair
        </p>
        <p className={styles.since}>Fixing boards since 2000</p>
      </div>
    </footer>
  );
}
