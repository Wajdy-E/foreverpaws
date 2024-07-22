import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Advice from "./pages/Advice";
import Adopt from "./pages/Adopt";
import Apply from "./pages/Apply";
import Faq from "./pages/Faq";
import Header from "./components/LargeComponents/Header";
import Footer from "./components/LargeComponents/Footer";

function App() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/advice", label: "Advice" },
    { to: "/adopt", label: "Adopt" },
    { to: "/apply", label: "Apply" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <Router>
      <Header links={links} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
