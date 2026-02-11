import team1 from "../../../assets/images/team1.jpg";
import team1_2x from "../../../assets/images/team1@2x.jpg";
import team2 from "../../../assets/images/team2.jpg";
import team2_2x from "../../../assets/images/team2@2x.jpg";
import team3 from "../../../assets/images/team3.jpg";
import team3_2x from "../../../assets/images/team3@2x.jpg";
import team4 from "../../../assets/images/team4.jpg";
import team4_2x from "../../../assets/images/team4@2x.jpg";

import styles from "./HomeTeam.module.scss";

import { TeamMember } from "../TeamMember/TeamMember";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Mark Guerrero",
    role: "Product Designer",
    img: team4,
    img2x: team4_2x,
  },
  {
    id: 2,
    name: "Tom Ford",
    role: "Frontend Developer",
    img: team3,
    img2x: team3_2x,
  },
  {
    id: 3,
    name: "Camila Garcia",
    role: "Marketing",
    img: team2,
    img2x: team2_2x,
  },
  {
    id: 4,
    name: "Daniel Wilson",
    role: "UI Designer",
    img: team1,
    img2x: team1_2x,
  },
];

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
