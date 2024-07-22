import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function NavItem({ id, target, label, isActive }) {
  const { t } = useTranslation();

  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${isActive ? "active" : ""}`}
        id={`${id}-tab`}
        data-bs-toggle="pill"
        data-bs-target={`#${target}`}
        type="button"
        role="tab"
        aria-controls={target}
        aria-selected={isActive}
      >
        {t(label)}
      </button>
    </li>
  );
}

NavItem.propTypes = {
  id: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

NavItem.defaultProps = {
  isActive: false,
};

export default NavItem;
