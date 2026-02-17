import { Icon } from "@/components/ui/Icon/Icon";
import styles from "./ContactInfo.module.scss";

const CONTACT_DATA = [
  {
    icon: "phone",
    label: "Phone",
    value: "+48 513-738-254",
    link: "tel:+48513738254", // Poprawiłem numer w linku
  },
  {
    icon: "email",
    label: "Email",
    value: "ost.tomasz@gmail.com",
    link: "mailto:ost.tomasz@gmail.com",
  },
  {
    icon: "location",
    label: "Address",
    value: "59-300 Lubin, Poland",
    link: null,
  },
  { icon: "briefcase", label: "NIP", value: "000-000-00-00", link: null },
];

export const ContactInfo = () => (
  <div className={styles.infoWrapper}>
    <h1 className={styles.title}>Let's talk about your project</h1>
    <div className={styles.details}>
      {CONTACT_DATA.map((item) => (
        <div key={item.label} className={styles.item}>
          {/* Grupa: Ikona + Label */}
          <div className={styles.headerRow}>
            <Icon name={item.icon} size={20} />
            <span className={styles.label}>{item.label}</span>
          </div>

          {/* Grupa: Duża wartość */}
          <div className={styles.textContent}>
            {item.link ? (
              <a href={item.link}>{item.value}</a>
            ) : (
              <p>{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
