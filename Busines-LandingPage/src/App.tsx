import { Route, Routes } from "react-router-dom";

import "./App.scss";

import { HomePage } from "./pages/homePage/HomePage";
import { ContactsPage } from "./pages/contactsPage/ContactsPage";
import { PortfolioPage } from "./pages/portfolioPage/PortfolioPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

import { MainLayout } from "./Layouts/MainLayout/MainLayout";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
