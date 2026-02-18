import { useNavigate } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";
import { Button } from "@/components/ui/Button/Button";
import { useEffect } from "react";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.add("no-scrollbar-gutter");
    return () => {
      document.documentElement.classList.remove("no-scrollbar-gutter");
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.emoji}>😵</div>

          <h1 className={styles.code}>404</h1>

          <h2 className={styles.title}>Oops! I think you are lost</h2>

          <p className={styles.description}>
            The page you're looking for doesn't exist.
            <br />
            Maybe check your <span className={styles.highlight}>path</span>?
          </p>

          <Button onClick={() => void navigate("/")} className={styles.button}>
            Take me home
          </Button>
        </div>
      </div>
    </section>
  );
};
