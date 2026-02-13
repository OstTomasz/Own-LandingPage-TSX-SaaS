import styles from "./ClientCard.module.scss";
import { Icon } from "../Icon/Icon";

interface ClientCardProps {
  iconName: string;
}

export const ClientCard = ({ iconName }: ClientCardProps) => {
  return (
    <li className={styles.item}>
      <a
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <Icon name={iconName} className={styles.icon} size={72} />
      </a>
    </li>
  );
};
