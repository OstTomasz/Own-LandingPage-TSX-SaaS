import { Icon } from "@/components/ui/Icon/Icon";
import styles from "./ContactSocials.module.scss";
import { SOCIAL_LINKS } from "@/data/config";

export const ContactSocials = () => (
  <div className={styles.socialsWrapper}>
    <p className={styles.label}>Follow me</p>
    <div className={styles.links}>
      {SOCIAL_LINKS.map((social) => (
        <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
          <Icon name={social.name} />
        </a>
      ))}
    </div>
  </div>
);
