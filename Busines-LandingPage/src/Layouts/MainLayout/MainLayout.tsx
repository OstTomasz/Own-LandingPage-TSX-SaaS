import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/common/Header/Header";
import styles from "./MainLayout.module.scss";

export const MainLayout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <div key={pathname} className={styles.pageAnimation}>
          <Outlet />
        </div>
      </main>
    </>
  );
};
