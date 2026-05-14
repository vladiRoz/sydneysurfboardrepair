import styles from "./Recommendation.module.css";

export default function Recommendation() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.stars} aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
            </svg>
          ))}
        </div>

        <blockquote className={styles.quote}>
          <p>
            &ldquo;I brought in a badly creased thruster I thought was done for. Stuart
            assessed it in minutes, told me exactly what was needed, and had it
            back to me in four days. The repair is invisible, and the board
            feels as stiff as new. Best money I&apos;ve spent on my quiver.
            These guys know their craft and don&apos;t waste your time.&rdquo;
          </p>
          <footer className={styles.author}>
            <cite>
              <span className={styles.name}>Jarryd Sullivan</span>
              <span className={styles.source}>Google Review</span>
            </cite>
          </footer>
        </blockquote>

        <div className={styles.badge} aria-hidden="true">
          <span className={styles.badgeScore}>5.0</span>
          <span className={styles.badgeLabel}>Google Reviews</span>
        </div>
      </div>
    </section>
  );
}
