import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.wordmark}>Sydney Surfboard Repair</p>
      <p className={styles.meta}>
        <span>Miranda NSW</span>
        <span className={styles.dot} aria-hidden="true">·</span>
        <span>Est. 2000</span>
        <span className={styles.dot} aria-hidden="true">·</span>
        <span>&copy; {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
