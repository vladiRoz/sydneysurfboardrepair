import styles from "./Recommendation.module.css";

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}

export default function Recommendation() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading} data-reveal>Reviews</h2>
      <div className={styles.card} data-reveal data-reveal-delay="100">
        <div className={styles.cardHeader}>
          <div className={styles.googleBadge}>
            <GoogleG />
            <span className={styles.googleText}>Google Review</span>
          </div>
          <div className={styles.stars} aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="13" height="13" viewBox="0 0 20 20" fill="#FBBC05" aria-hidden="true">
                <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78z" />
              </svg>
            ))}
          </div>
        </div>

        <blockquote className={styles.quote}>
          <p>
            &ldquo;Brought in a badly creased thruster I thought was done for.
            Stuart assessed it in minutes and had it back in four days. The
            repair is invisible and the board feels as stiff as new. These guys
            know their craft.&rdquo;
          </p>
        </blockquote>

        <div className={styles.author}>
          <div className={styles.avatar} aria-hidden="true">JS</div>
          <div className={styles.authorInfo}>
            <span className={styles.name}>Jarryd Sullivan</span>
            <span className={styles.meta}>Local Guide · 1 review</span>
          </div>
        </div>
      </div>
    </section>
  );
}
