import styles from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <address className={styles.contacts}>
      <a href="mailto:ost.tomasz@gmail.com" className={styles.link}>
        ost.tomasz@gmail.com
      </a>
      <a href="tel:+48513738524" className={styles.link}>
        +48 513 738 524
      </a>
    </address>
  );
};
