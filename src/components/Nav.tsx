"use client";

import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <a href="#hero" className={styles.logo} aria-label="Sydney Surfboard Repair, back to top">
        <LogoMark height={36} className={styles.logoMark} />
        <span className={styles.logoFull}>SYDNEY SURFBOARD REPAIR</span>
        <span className={styles.logoShort} aria-hidden="true">SSR</span>
      </a>

      <ul className={styles.links}>
        <li><a href="#repairs">REPAIRS</a></li>
        <li><a href="#prices">PRICES</a></li>
        <li className={styles.hideSmall}><a href="#team">THE TEAM</a></li>
        <li className={styles.hideSmall}><a href="#contact">CONTACT</a></li>
        <li>
          <a href="tel:0410207555" className={styles.callPill}>
            CALL NOW
          </a>
        </li>
      </ul>
    </nav>
  );
}
