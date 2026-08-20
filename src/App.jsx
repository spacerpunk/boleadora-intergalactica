import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Portfolio from "./pages/Portfolio.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:id" element={<Portfolio />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
