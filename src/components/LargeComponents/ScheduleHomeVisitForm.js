import React, { forwardRef, useImperativeHandle } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useFormik } from "formik";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

const ScheduleHomeVisitForm = forwardRef((props, ref) => {
  const { t } = useTranslation();

  const validationSchema = yup.object({
    selectedDate: yup.date().required(t("date_time_required")),
    address: yup.string().required(t("address_required")),
    city: yup.string().required(t("city_required")),
    province: yup.string().required(t("province_required")),
    postalCode: yup
      .string()
      .matches(
        /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
        t("invalid_postal_code_format")
      )
      .required(t("postal_code_required")),
    fencedYard: yup.string().required(t("fenced_yard_required")),
    numPets: yup
      .number()
      .min(0, t("num_pets_non_negative"))
      .required(t("num_pets_required")),
    comments: yup.string(),
  });

  const formik = useFormik({
    initialValues: props.initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.onSubmit(values);
    },
  });

  useImperativeHandle(ref, () => ({
    handleSubmit: formik.handleSubmit,
  }));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "start",
          "& .MuiTextField-root": { m: 1, width: "300px" },
        }}
        noValidate
        autoComplete="off"
      >
        <DateTimePicker
          label={t("choose_date_time")}
          value={formik.values.selectedDate}
          onChange={(value) => formik.setFieldValue("selectedDate", value)}
          renderInput={(params) => (
            <TextField
              {...params}
              onBlur={formik.handleBlur}
              error={
                formik.touched.selectedDate &&
                Boolean(formik.errors.selectedDate)
              }
              helperText={
                formik.touched.selectedDate && formik.errors.selectedDate
              }
            />
          )}
        />
        <TextField
          label={t("home_address")}
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
          required
        />
        <TextField
          label={t("city")}
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
          required
        />
        <TextField
          label={t("province")}
          name="province"
          value={formik.values.province}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.province && Boolean(formik.errors.province)}
          helperText={formik.touched.province && formik.errors.province}
          required
        />
        <TextField
          label={t("postal_code")}
          name="postalCode"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
          helperText={formik.touched.postalCode && formik.errors.postalCode}
          required
        />
        <TextField
          select
          label={t("fenced_yard")}
          name="fencedYard"
          value={formik.values.fencedYard}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fencedYard && Boolean(formik.errors.fencedYard)}
          helperText={formik.touched.fencedYard && formik.errors.fencedYard}
          required
        >
          <MenuItem value="Yes">{t("yes")}</MenuItem>
          <MenuItem value="No">{t("no")}</MenuItem>
        </TextField>
        <TextField
          label={t("num_pets")}
          name="numPets"
          type="number"
          value={formik.values.numPets}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.numPets && Boolean(formik.errors.numPets)}
          helperText={formik.touched.numPets && formik.errors.numPets}
          required
        />
        <TextField
          label={t("comments_additional_info")}
          name="comments"
          multiline
          rows={4}
          value={formik.values.comments}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.comments && Boolean(formik.errors.comments)}
          helperText={formik.touched.comments && formik.errors.comments}
        />
      </Box>
    </LocalizationProvider>
  );
});

export default ScheduleHomeVisitForm;
