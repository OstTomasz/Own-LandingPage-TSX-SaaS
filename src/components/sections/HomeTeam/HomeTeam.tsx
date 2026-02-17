import { TeamMember } from "@/components/ui/TeamMember/TeamMember";
import styles from "./HomeTeam.module.scss";

import { TEAM_MEMBERS } from "@/data/config";

export const HomeTeam = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Team</h2>
        <ul className={styles.teamList}>
          {TEAM_MEMBERS.map((member) => (
            <TeamMember key={member.id} {...member} />
          ))}
        </ul>
      </div>
    </section>
  );
};
