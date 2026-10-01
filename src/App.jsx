import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import { MotionProvider } from "./components/MotionProvider.jsx";
import { useLanguage } from "./i18n/LanguageContext.jsx";

export default function App() {
  const { t } = useLanguage();
  return (
    <MotionProvider>
      <a className="skip-link" href="#top">
        {t("skip")}
      </a>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MotionProvider>
  );
}
