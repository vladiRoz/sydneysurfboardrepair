import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.wordmark}>
          <span>SYDNEY</span>
          <span>SURFBOARD</span>
          <span>REPAIR</span>
        </h1>
        <p className={styles.sub}>Fixing boards in Miranda since 2000.</p>
        <a href="tel:0410207555" className={styles.cta}>
          0410 207 555 &rarr;
        </a>
      </div>
      <div className={styles.right}>
        <Image
          src="/images/work.webp"
          alt="The Sydney Surfboard Repair workshop: paint-covered buckets, resin-stained tools, brushes worn from years of work."
          fill
          className={styles.photo}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </section>
  );
}
