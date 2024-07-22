import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const FilterSidebar = ({ filters, onFilterChange, onResetFilters }) => {
  const { t } = useTranslation();

  const filterOptions = {
    type: ["cat", "dog"],
    breed: [
      "siamese",
      "golden_retriever",
      "persian",
      "german_shepherd",
      "tabby",
      "beagle",
      "maine_coon",
      "shih_tzu",
      "ragdoll",
      "labrador",
      "bengal",
      "poodle",
      "sphynx",
      "boxer",
      "british_shorthair",
      "bulldog",
      "abyssinian",
      "dachshund",
      "scottish_fold",
      "cocker_spaniel",
    ],
    age: ["young", "middle_aged", "old"],
    size: ["small", "medium", "large"],
    gender: ["male", "female"],
    disabled: ["yes", "no"],
    location: ["ottawa", "toronto", "hamilton", "kingston"],
  };

  const categoryTitles = {
    type: t("type"),
    breed: t("breed"),
    age: t("age"),
    size: t("size"),
    gender: t("gender"),
    disabled: t("disabled"),
    location: t("location"),
  };

  const handleChange = (category, value) => {
    onFilterChange(category, value);
  };

  return (
    <div className="filter-sidebar position-sticky p-4">
      {Object.keys(filterOptions).map((category) => (
        <Accordion key={category}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{categoryTitles[category]}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              {filterOptions[category].map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={filters[category].includes(t(option))}
                      onChange={() => handleChange(category, t(option))}
                    />
                  }
                  label={t(option)}
                />
              ))}
            </FormControl>
          </AccordionDetails>
        </Accordion>
      ))}
      <Button
        variant="contained"
        color="primary"
        onClick={onResetFilters}
        fullWidth
        style={{ marginTop: "1rem" }}
      >
        {t("reset_filters")}
      </Button>
    </div>
  );
};

export default FilterSidebar;
