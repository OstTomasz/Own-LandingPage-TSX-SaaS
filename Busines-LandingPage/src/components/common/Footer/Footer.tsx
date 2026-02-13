import styles from "./Footer.module.scss";
import { Logo } from "@/components/ui/Logo/Logo";
import { SocialList } from "@/components/ui/SocialList/SocialList";
import { SubscribeForm } from "@/components/ui/SubscribeForm/SubscribeForm";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.infoWrapper}>
          <Logo />
          <p className={styles.text}>
            Increase the flow of customers and sales for your business with
            digital marketing & growth solutions.
          </p>
        </div>

        <div className={styles.socialWrapper}>
          <p className={styles.subtitle}>Social media</p>
          <SocialList />
        </div>

        <div className={styles.subscribeWrapper}>
          <SubscribeForm />
        </div>
      </div>
    </footer>
  );
};
