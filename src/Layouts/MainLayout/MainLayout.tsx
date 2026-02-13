import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/common/Header/Header";
import styles from "./MainLayout.module.scss";
import { Footer } from "@/components/common/Footer/Footer";

export const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.mainContainer}>
        <div key={pathname} className={styles.pageAnimation}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
