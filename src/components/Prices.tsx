import { Fragment } from "react";
import styles from "./Prices.module.css";

const groups = [
  {
    name: "Ding & Crease",
    rows: [
      { service: "Ding (most common)", shortboard: "$85", longboard: "$115" },
      { service: "Half crease", shortboard: "$115", longboard: "$145" },
      { service: "Full crease", shortboard: "$135", longboard: "$175" },
    ],
  },
  {
    name: "Nose & Tail",
    rows: [
      { service: "Nose repair", shortboard: "$85", longboard: "$105" },
      { service: "Nose crease", shortboard: "$115", longboard: "$135" },
      { service: "Nose snap", shortboard: "$135", longboard: "$165" },
      { service: "Tail rebuild", shortboard: "$135", longboard: "$165" },
    ],
  },
  {
    name: "Fins & Plugs",
    rows: [
      { service: "Glassed fin", shortboard: "$185", longboard: "$185" },
      { service: "FCS plug", shortboard: "$95", longboard: "$115" },
      { service: "FCS plugs ×2", shortboard: "$155", longboard: "$235" },
      { service: "FCS Fusion box", shortboard: "$185", longboard: "$165" },
      { service: "FCS II box", shortboard: "$135", longboard: "$165" },
      { service: "Futures box", shortboard: "$135", longboard: "$165" },
      { service: "Single fin box", shortboard: "$185", longboard: "$215" },
    ],
  },
  {
    name: "Hardware",
    rows: [
      { service: "Legrope plug", shortboard: "$75", longboard: "$85" },
    ],
  },
];

export default function Prices() {
  return (
    <section id="prices" className={styles.section}>
      <div className={styles.header} data-reveal>
        <h2 className={styles.heading}>Prices</h2>
        <p className={styles.sub}>All prices in AUD, inc. materials.</p>
      </div>

      <div className={styles.tableWrap} data-reveal data-reveal-delay="150">
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thService} scope="col">Repair</th>
              <th className={styles.thPrice} scope="col">Shortboard</th>
              <th className={styles.thPrice} scope="col">Longboard</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <Fragment key={group.name}>
                <tr className={styles.groupRow}>
                  <td colSpan={3} className={styles.groupName}>{group.name}</td>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.service} className={styles.row}>
                    <td className={styles.tdService}>{row.service}</td>
                    <td className={styles.tdPrice}>{row.shortboard}</td>
                    <td className={styles.tdPrice}>{row.longboard}</td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.note} data-reveal data-reveal-delay="250">
        Got something unusual? Call us and we&apos;ll give you a quote on the spot.
      </p>
    </section>
  );
}
