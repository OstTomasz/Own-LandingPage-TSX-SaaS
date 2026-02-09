import { Route, Routes } from "react-router-dom";

import "./App.scss";

import { HomePage } from "./pages/homePage/HomePage";
import { ContactsPage } from "./pages/contactsPage/ContactsPage";
import { PortfolioPage } from "./pages/portfolioPage/PortfolioPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

import { Header } from "./components/common/Header/Header";

export const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
