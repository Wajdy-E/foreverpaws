import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
  const { t } = useTranslation();

  return (
    <div className="pet-card col">
      <img src={pet.image} alt={pet.name} className="pet-image" />
      <div className="pet-info">
        <h2 className="pet-name">{pet.name}</h2>
        <p className="pet-breed">{t(pet.tags.breed)}</p>
        <p className="pet-details">
          {t(pet.tags.gender)}, {pet.age}
        </p>
        <div className="d-flex justify-content-between">
          <p className="pet-location">{t(pet.tags.location)}</p>
          <Link to="/Apply" className="text-decoration-underline">{t("adopt_now")}</Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;
