import React, { useState, useEffect, useCallback } from "react";
import petsData from "../pets.json";
import FilterSidebar from "../components/LargeComponents/FilterSidebar";
import PetList from "../components/LargeComponents/PetList";
import banner from "../assets/banner4.png";
import { useTranslation } from "react-i18next";

export default function Adopt() {
  const { t } = useTranslation();

  const [filters, setFilters] = useState({
    type: [],
    breed: [],
    age: [],
    size: [],
    gender: [],
    disabled: [],
    location: [],
  });

  const [filteredPets, setFilteredPets] = useState(petsData);

  const filterPets = useCallback(() => {
    const filtered = petsData.filter((pet) => {
      return (
        (filters.type.length === 0 ||
          filters.type.includes(t(pet.tags.type))) &&
        (filters.breed.length === 0 ||
          filters.breed.includes(t(pet.tags.breed))) &&
        (filters.age.length === 0 || filters.age.includes(t(pet.tags.age))) &&
        (filters.size.length === 0 ||
          filters.size.includes(t(pet.tags.size))) &&
        (filters.gender.length === 0 ||
          filters.gender.includes(t(pet.tags.gender))) &&
        (filters.disabled.length === 0 ||
          filters.disabled.includes(t(pet.tags.disabled))) &&
        (filters.location.length === 0 ||
          filters.location.includes(t(pet.tags.location)))
      );
    });
    setFilteredPets(filtered);
  }, [filters, t]);

  useEffect(() => {
    filterPets();
  }, [filters, filterPets]);

  const handleFilterChange = (category, value) => {
    setFilters((prev) => {
      const newValues = prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value];
      return {
        ...prev,
        [category]: newValues,
      };
    });
  };

  const handleResetFilters = () => {
    setFilters({
      type: [],
      breed: [],
      age: [],
      size: [],
      gender: [],
      disabled: [],
      location: [],
    });
  };

  return (
    <>
      <div className="banner w-100 mb-5 position-relative overflow-hidden">
        <img src={banner} alt={t("banner_alt")} className="w-100 h-100" />
        <div className="content position-absolute top-50 start-50 translate-middle text-center z-2">
          <h1 className="text-blue link-underline fs-large">
            {t("choose_your_bff")}
          </h1>
        </div>
      </div>
      <div className="container">
        <div className="d-flex row">
          <div className="col-md-3">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onResetFilters={handleResetFilters}
            />
          </div>
          <div className="col-md-9">
            <PetList pets={filteredPets} />
          </div>
        </div>
      </div>
    </>
  );
}
