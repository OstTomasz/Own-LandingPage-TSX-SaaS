import { Icon } from "@/components/ui/Icon/Icon";
import styles from "./ContactInfo.module.scss";
import { CONTACT_DETAILS } from "@/data/config";

export const ContactInfo = () => (
  <div className={styles.infoWrapper}>
    <h1 className={styles.title}>Let's talk about your project</h1>
    <div className={styles.details}>
      {CONTACT_DETAILS.map((item) => (
        <div key={item.label} className={styles.item}>
          <div className={styles.headerRow}>
            <Icon name={item.icon} size={20} className={styles.icon} />
            <span className={styles.label}>{item.label}</span>
          </div>

          <div className={styles.textContent}>
            {item.link ? (
              <a href={item.link} className={styles.link}>
                {item.value}
              </a>
            ) : (
              <p className={styles.value}>{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
