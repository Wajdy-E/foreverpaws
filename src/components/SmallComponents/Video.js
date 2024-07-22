import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

function Video({ src, title, description }) {
  const { t } = useTranslation();

  return (
    <div className="col video-container">
      <iframe
        width="100%"
        height="315"
        src={src}
        title={t(title)}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="video-description">
        <h3>{t(title)}</h3>
        <p>{t(description)}</p>
      </div>
    </div>
  );
}

Video.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Video;
