import clsx from "clsx";
import styles from "./Contacts.module.scss";
import { CONTACT_DATA } from "@/data/config";

interface ContactsProps {
  className?: string;
  direction?: "row" | "column" | "auto";
}

const directionClass = {
  auto: styles.directionAuto,
  column: styles.directionColumn,
  row: styles.directionRow,
} as const;

export const Contacts = ({ className, direction = "auto" }: ContactsProps) => {
  return (
    <address
      className={clsx(styles.contacts, directionClass[direction], className)}
    >
      <a href={`mailto:${CONTACT_DATA.email}`} className={styles.link}>
        {CONTACT_DATA.email}
      </a>
      <a href={`tel:${CONTACT_DATA.phoneRaw}`} className={styles.link}>
        {CONTACT_DATA.phone}
      </a>
    </address>
  );
};
