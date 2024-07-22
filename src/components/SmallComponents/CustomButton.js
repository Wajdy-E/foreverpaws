import React from "react";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

export default function CustomButton({ contained, children }) {
  const { t } = useTranslation();

  const primary = {
    main: "#5D9CEC",
    light: "#89bdf5",
    dark: "#357abd",
    contrastText: "#fff",
  };

  const secondary = {
    main: "#5D9CEC",
    contrastText: "#5D9CEC",
  };

  return contained ? (
    <Button
      variant="contained"
      sx={{ backgroundColor: primary.main, color: primary.contrastText }}
      aria-label={t(children)}
    >
      {t(children)}
    </Button>
  ) : (
    <Button
      variant="outlined"
      sx={{ borderColor: secondary.main, color: secondary.contrastText }}
      aria-label={t(children)}
    >
      {t(children)}
    </Button>
  );
}
