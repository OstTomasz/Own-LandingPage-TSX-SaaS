import { Icon } from "../Icon/Icon";
import styles from "./ServiceFeature.module.scss";

interface ServiceFeatureProps {
  iconName: string;
  title: string;
  description: string;
}

export const ServiceFeature = ({
  iconName,
  title,
  description,
}: ServiceFeatureProps) => {
  return (
    <article className={styles.featureCard}>
      {/* aria-hidden, bo ikona jest czysto dekoracyjna */}
      <div className={styles.iconWrapper} aria-hidden="true">
        <Icon name={iconName} size={64} />
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureText}>{description}</p>
    </article>
  );
};
