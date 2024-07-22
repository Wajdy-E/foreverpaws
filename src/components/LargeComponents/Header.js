import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header({ links }) {
  const { t } = useTranslation();

  return (
    <header>
      <div className="wrapper container d-flex py-3 justify-content-around align-items-center gap-5">
        <div className="logo">
          <a href="./">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
        <nav className="text-center">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive }) =>
                `mx-2 text-decoration-none fs-5 ${isActive ? "active-link" : ""}`
              }
            >
              {t(link.label)}
            </NavLink>
          ))}
        </nav>
        <div className="contacts d-flex align-items-center gap-3">
          <a href="tel:+16135555555">
            <img src={phone} alt={t("phone")} />
          </a>
          <a href="mailto:contact@foreverpaws.com">
            <img src={email} alt={t("email")} />
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
