import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { IoPersonSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";
import arxaFonSekli from "../../assets/Şuşa_qalası.jpg";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

function HomePage() {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("language") || i18n.language || "en";
    i18n.changeLanguage(savedLang);
  }, []);

  const handleStartJourney = () => {
    navigate("/auth/login");
  };

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <div
      className="homepage-container"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
          url(${arxaFonSekli})
        `,
      }}
    >
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="SmartTour Logo" />
          <span>SmartTour</span>
        </div>
        <div className="navbar-links">
          <a href="#about">{t("navbar.about")}</a>
          <a href="#contact">{t("navbar.contact")}</a>
          <a href="#help">{t("navbar.help")}</a>
        </div>
        <div className="navbar-lang">

          <div className="lang-select-container">
            <select onChange={handleLanguageChange}  value={i18n.language} className="lang-select">
              <option value="en">En</option>
              <option value="az">Az</option>
            </select>
            <IoIosArrowDown className="lang-arrow" size={20} />
          </div>

          <IoPersonSharp size={20} />
        </div>
      </nav>

      <main className="hero-section">
        <div className="hero-box">
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.subtitle")}</p>
          <button className="cta-button" onClick={handleStartJourney}>
           {t("hero.cta")}
          </button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
