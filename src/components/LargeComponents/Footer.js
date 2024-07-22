import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-5">
      <div className="container text-white py-3">
        <div className="d-flex justify-content-center align-items-center fs-medium">
          <h5 className="ms-3">
            {t("contact_us_at")}: <span className="fw-bold">+16135555555</span>{" "}
            {t("or")}{" "}
            <a href="mailto:contact@foreverpaws.com">
              <span className="fw-bold">contact@foreverpaws.com</span>
            </a>
          </h5>
        </div>
      </div>
    </footer>
  );
}
