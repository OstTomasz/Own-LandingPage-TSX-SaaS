import styles from "./SocialIcon.module.scss";
import { Icon } from "../Icon/Icon";

interface SocialIconProps {
  name: string;
  href: string;
  label: string;
  variant?: "light" | "dark";
}

export const SocialIcon = ({ name, href, label, variant }: SocialIconProps) => {
  return (
    <li>
      <a
        href={href}
        className={styles.link}
        data-variant={variant} // To obsłuży nam style w SCSS
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon name={name} size={24} />
      </a>
    </li>
  );
};
