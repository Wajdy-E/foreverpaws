import React from "react";
import PetCard from "./PetCard";

const PetList = ({ pets }) => {
  return (
    <div className="pet-list row row-cols-lg-3 row-cols-1 m-0">
      {pets.map((pet, index) => (
        <div key={index} className="p-0">
          <PetCard pet={pet} />
        </div>
      ))}
    </div>
  );
};

export default PetList;
