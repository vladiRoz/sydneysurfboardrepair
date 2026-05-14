import styles from "./DropOff.module.css";

export default function DropOff() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Drop It Off</h2>

        <dl className={styles.details}>
          <div className={styles.detailRow}>
            <dt className={styles.dtLabel}>Address</dt>
            <dd className={styles.ddValue}>
              <a
                href="https://maps.app.goo.gl/sydneysurfboardrepair"
                className={styles.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                34b Kareena Rd North
                <br />
                Miranda NSW 2228
              </a>
            </dd>
          </div>

          <div className={styles.detailRow}>
            <dt className={styles.dtLabel}>Hours</dt>
            <dd className={styles.ddValue}>
              <span>Mon – Sat</span>
              <span className={styles.time}>10:00 – 17:30</span>
              <span className={styles.closed}>Sunday closed</span>
            </dd>
          </div>

          <div className={styles.detailRow}>
            <dt className={styles.dtLabel}>Phone</dt>
            <dd className={styles.ddValue}>
              <a href="tel:0410207555" className={styles.phone}>
                0410 207 555
              </a>
            </dd>
          </div>

          <div className={styles.detailRow}>
            <dt className={styles.dtLabel}>Email</dt>
            <dd className={styles.ddValue}>
              <a href="mailto:repairs@gmail.com" className={styles.email}>
                repairs@gmail.com
              </a>
            </dd>
          </div>
        </dl>

        <a href="tel:0410207555" className={styles.cta}>
          Call to confirm drop-off &rarr;
        </a>
      </div>

      <div className={styles.mapWrap}>
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=151.0800%2C-34.0490%2C151.0920%2C-34.0390&layer=mapnik&marker=-34.0440%2C151.0860"
          title="Sydney Surfboard Repair location map"
          className={styles.map}
          loading="lazy"
          allowFullScreen
        />
      </div>
    </section>
  );
}
