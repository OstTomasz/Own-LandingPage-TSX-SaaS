import { SOCIAL_DATA } from "@/data/config";
import { SocialIcon } from "../SocialIcon/SocialIcon";
import styles from "./SocialList.module.scss";

// SocialList
interface SocialListProps {
  variant?: "light" | "dark";
  iconSize?: number;
}

export const SocialList = ({ variant = "dark", iconSize }: SocialListProps) => (
  <ul className={styles.list}>
    {SOCIAL_DATA.map((social) => (
      <SocialIcon
        key={social.id}
        name={social.id}
        href={social.href}
        label={social.label}
        variant={variant}
        size={iconSize}
      />
    ))}
  </ul>
);
