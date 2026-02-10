import clsx from "clsx";
import styles from "./Contacts.module.scss";

interface ContactsProps {
  className?: string; // Opcjonalny prop na dodatkową klasę
}
export const Contacts = ({ className }: ContactsProps) => {
  return (
    <address className={clsx(styles.contacts, className)}>
      <a href="mailto:ost.tomasz@gmail.com" className={styles.link}>
        ost.tomasz@gmail.com
      </a>
      <a href="tel:+48513738524" className={styles.link}>
        +48 513 738 524
      </a>
    </address>
  );
};
