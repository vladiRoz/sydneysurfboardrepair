"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Turnaround.module.css";

export default function Turnaround() {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={styles.section}
    >
      <div className={styles.inner}>
        <p className={styles.label}>Typical Turnaround</p>
        <p className={`${styles.number} ${revealed ? styles.revealed : ""}`}>
          3&ndash;5
        </p>
        <p className={`${styles.unit} ${revealed ? styles.revealed : ""}`}>
          business days
        </p>
        <p className={styles.caveat}>
          Complex repairs may take longer. We&apos;ll tell you upfront.
        </p>
      </div>
    </section>
  );
}
