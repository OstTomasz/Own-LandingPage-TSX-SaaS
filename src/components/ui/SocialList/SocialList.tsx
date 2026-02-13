import { SOCIAL_DATA } from "@/data/config";
import { SocialIcon } from "../SocialIcon/SocialIcon";
import styles from "./SocialList.module.scss";

interface SocialListProps {
  variant?: "light" | "dark"; // dark (na jasne tło menu), light (na ciemne tło footera)
}

export const SocialList = ({ variant = "dark" }: SocialListProps) => {
  return (
    <ul className={styles.list}>
      {SOCIAL_DATA.map((social) => (
        <SocialIcon
          key={social.id}
          name={social.id}
          href={social.href}
          label={social.label}
          variant={variant} // Przekazujemy wariant dalej
        />
      ))}
    </ul>
  );
};
