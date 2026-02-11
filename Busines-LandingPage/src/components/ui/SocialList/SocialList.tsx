import { SocialIcon } from "../SocialIcon/SocialIcon";
import styles from "./SocialList.module.scss";

const SOCIAL_DATA = [
  { id: "instagram", href: "https://instagram.com", label: "Instagram" },
  { id: "twitter", href: "https://twitter.com", label: "Twitter" },
  { id: "facebook", href: "https://facebook.com", label: "Facebook" },
  {
    id: "linkedin",
    href: "https://linkedin.com/in/tomasz-ostaszewski-7166071aa",
    label: "LinkedIn",
  },
];

export const SocialList = () => {
  return (
    <ul className={styles.list}>
      {SOCIAL_DATA.map((social) => (
        <SocialIcon
          key={social.id}
          name={social.id}
          href={social.href}
          label={social.label}
        />
      ))}
    </ul>
  );
};
