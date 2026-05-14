import Image from "next/image";
import styles from "./WhatWeFix.module.css";

const repairs = [
  {
    slug: "rail",
    src: "/images/rail.jpg",
    alt: "Rail ding repair — fibreglass patch curing on a surfboard rail.",
    label: "Rail Dings",
    desc: "From pressure dents to full rail gashes.",
  },
  {
    slug: "nose",
    src: "/images/nose.jpg",
    alt: "Nose repair — resin layup on a chipped surfboard nose.",
    label: "Nose Repairs",
    desc: "Chips, creases, and full nose snaps.",
  },
  {
    slug: "crease",
    src: "/images/crease.jpg",
    alt: "Crease repair — carbon fibre reinforcement on a buckled board.",
    label: "Creases & Buckles",
    desc: "Half and full creases, structural reinforcement.",
  },
  {
    slug: "sup",
    src: "/images/sup.jpg",
    alt: "SUP repair — large foam patch on a stand-up paddleboard.",
    label: "SUP Repairs",
    desc: "All sizes, poly and epoxy construction.",
  },
  {
    slug: "legrope",
    src: "/images/legrope.jpg",
    alt: "Legrope plug replacement on a shortboard.",
    label: "Plugs & Fins",
    desc: "FCS, Futures, single-fin and legrope plugs.",
  },
];

export default function WhatWeFix() {
  return (
    <section id="repairs" className={styles.section}>
      <div className={styles.header} data-reveal>
        <h2 className={styles.heading}>What We Fix</h2>
        <p className={styles.sub}>
          Poly or epoxy, shortboard to SUP — if it&apos;s glassed, we fix it.
        </p>
      </div>

      <ul className={styles.grid} role="list">
        {repairs.map((r, i) => (
          <li
            key={r.slug}
            className={styles.card}
            data-reveal
            data-reveal-delay={String(i * 80)}
          >
            <div className={styles.imageWrap}>
              <Image
                src={r.src}
                alt={r.alt}
                fill
                className={styles.photo}
                sizes="(max-width: 600px) 80vw, (max-width: 900px) 40vw, 20vw"
              />
              <div className={styles.overlay} />
            </div>
            <div className={styles.body}>
              <p className={styles.label}>{r.label}</p>
              <p className={styles.desc}>{r.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
