import styles from "./Turnaround.module.css";

export default function Turnaround() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Typical Turnaround</p>
        <p className={styles.number}>3&ndash;5</p>
        <p className={styles.unit}>business days</p>
        <p className={styles.caveat}>
          Complex repairs may take longer. We&apos;ll tell you upfront.
        </p>
      </div>
    </section>
  );
}
