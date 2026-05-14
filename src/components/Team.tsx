import Image from "next/image";
import styles from "./Team.module.css";

const members = [
  {
    slug: "stuart",
    src: "/images/stuart.jpg",
    name: "Stuart",
    role: "Founder & Head Shaper",
    bio: "Glassing boards since the early nineties. Stuart takes the complex jobs — buckled guns, glassed fins, full nose rebuilds.",
  },
  {
    slug: "reilly",
    src: "/images/reilly.jpg",
    name: "Reilly",
    role: "Repair Tech",
    bio: "Repairs poly and epoxy with equal confidence. Reilly keeps the turnaround honest and has an eye for a clean laminate finish.",
  },
  {
    slug: "dan",
    src: "/images/dan.jpg",
    name: "Dan",
    role: "Workshop",
    bio: "Handles customer drop-offs and finishing work. If you've called the shop, Dan probably answered.",
  },
];

export default function Team() {
  return (
    <section id="team" className={styles.section}>
      <h2 className={styles.heading} data-reveal>The Team</h2>

      <ul className={styles.grid} role="list">
        {members.map((m, i) => (
          <li
            key={m.slug}
            className={styles.card}
            data-reveal
            data-reveal-delay={String(i * 120)}
          >
            <div className={styles.imageWrap}>
              <Image
                src={m.src}
                alt={`${m.name} — ${m.role} at Sydney Surfboard Repair`}
                fill
                className={styles.photo}
                sizes="(max-width: 600px) 100vw, 33vw"
              />
              <div className={styles.overlay}>
                <p className={styles.bio}>{m.bio}</p>
              </div>
            </div>
            <div className={styles.info}>
              <p className={styles.name}>{m.name}</p>
              <p className={styles.role}>{m.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
