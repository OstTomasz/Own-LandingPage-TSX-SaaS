import { SocialList } from "../SocialList/SocialList";
import styles from "./TeamMember.module.scss";

interface TeamMemberProps {
  name: string;
  role: string;
  img: string;
  img2x: string;
}

export const TeamMember = ({ name, role, img, img2x }: TeamMemberProps) => {
  return (
    <li className={styles.card}>
      <img
        src={img}
        srcSet={`${img} 1x, ${img2x} 2x`}
        alt={name}
        className={styles.image}
        width="264"
        height="260"
        loading="lazy"
      />
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <div className={styles.socialWrapper}>
          <SocialList />
        </div>
      </div>
    </li>
  );
};
