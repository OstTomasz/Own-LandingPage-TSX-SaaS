import styles from "./SocialIcon.module.scss";
import { Icon } from "../Icon/Icon";

interface SocialIconProps {
  name: string;
  href: string;
  label: string;
}

export const SocialIcon = ({ name, href, label }: SocialIconProps) => {
  return (
    <li>
      <a
        href={href}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon name={name} size={24} />
      </a>
    </li>
  );
};
