import clsx from "clsx";
import styles from "./SocialIcon.module.scss";
import { Icon } from "../Icon/Icon";

interface SocialIconProps {
  name: string;
  href: string;
  label: string;
  variant?: "light" | "dark";
  size?: number;
}

export const SocialIcon = ({
  name,
  href,
  label,
  variant = "dark",
  size = 24,
}: SocialIconProps) => {
  return (
    <li>
      <a
        href={href}
        className={clsx(styles.link, styles[variant])}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <Icon name={name} size={size} />
      </a>
    </li>
  );
};
