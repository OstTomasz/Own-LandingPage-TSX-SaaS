import { Icon } from "../Icon/Icon";
import styles from "./ContactSocials.module.scss";

const SOCIAL_LINKS = [
  { name: "github", url: "https://github.com/OstTomasz" },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/tomasz-ostaszewski-7166071aa/",
  },
  { name: "instagram", url: "https://instagram.com" }, // Twoja propozycja
];

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
