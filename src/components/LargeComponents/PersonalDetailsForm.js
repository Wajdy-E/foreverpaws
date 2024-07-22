import React, { forwardRef, useImperativeHandle } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const PersonalDetailsForm = forwardRef((props, ref) => {
  const { t } = useTranslation();

  const validationSchema = yup.object({
    name: yup.string(t("enter_your_name")).required(t("name_is_required")),
    email: yup
      .string(t("enter_your_email"))
      .email(t("enter_a_valid_email"))
      .required(t("email_is_required")),
    phone: yup
      .string(t("enter_your_phone_number"))
      .matches(/^[0-9]{10}$/, t("phone_number_should_be_10_digits"))
      .required(t("phone_number_is_required")),
    type: yup.string(t("select_pet_type")).required(t("pet_type_is_required")),
    pet: yup
      .string(t("enter_pet_of_interest"))
      .required(t("pet_of_interest_is_required")),
  });

  const formik = useFormik({
    initialValues: props.initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.onSubmit(values);
    },
    validateOnBlur: true,
  });

  useImperativeHandle(ref, () => ({
    handleSubmit: formik.handleSubmit,
  }));

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "space-between",
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
    >
      <TextField
        label={t("name")}
        name="name"
        variant="outlined"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        label={t("email")}
        name="email"
        type="email"
        variant="outlined"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        label={t("phone_number")}
        name="phone"
        type="phone"
        variant="outlined"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />
      <TextField
        label={t("select_pet_type")}
        name="type"
        variant="outlined"
        select
        value={formik.values.type}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.type && Boolean(formik.errors.type)}
        helperText={formik.touched.type && formik.errors.type}
      >
        <MenuItem value="dog">{t("dog")}</MenuItem>
        <MenuItem value="cat">{t("cat")}</MenuItem>
      </TextField>
      <TextField
        label={t("pet_of_interest")}
        name="pet"
        variant="outlined"
        fullWidth
        value={formik.values.pet}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.pet && Boolean(formik.errors.pet)}
        helperText={formik.touched.pet && formik.errors.pet}
      />
    </Box>
  );
});

export default PersonalDetailsForm;
