import React from "react";
import { useTranslation } from "react-i18next";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl variant="outlined" size="small">
      <InputLabel>{i18n.t("language")}</InputLabel>
      <Select
        value={currentLanguage}
        onChange={handleChange}
        label={i18n.t("language")}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="fr">Français</MenuItem>
      </Select>
    </FormControl>
  );
}

export default LanguageSwitcher;
