import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.wordmark}>
          <span className={styles.line}>
            <span className={styles.word} style={{ animationDelay: "0.05s" }}>SYDNEY</span>
          </span>
          <span className={styles.line}>
            <span className={styles.word} style={{ animationDelay: "0.2s" }}>SURFBOARD</span>
          </span>
          <span className={styles.line}>
            <span className={`${styles.word} ${styles.wordAccent}`} style={{ animationDelay: "0.35s" }}>REPAIR</span>
          </span>
        </h1>
        <p className={styles.sub} style={{ animationDelay: "0.55s" }}>
          Fixing boards in Miranda since 2000.
        </p>
        <a href="tel:0410207555" className={styles.cta} style={{ animationDelay: "0.7s" }}>
          0410 207 555
          <span className={styles.arrow} aria-hidden="true">→</span>
        </a>
      </div>

      <div className={styles.right}>
        <Image
          src="/images/hero.jpg"
          alt="Sydney Surfboard Repair hero image."
          fill
          className={styles.photo}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
