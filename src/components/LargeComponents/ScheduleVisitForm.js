import React, { forwardRef, useImperativeHandle } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useTranslation } from "react-i18next";

const ScheduleVisitForm = forwardRef((props, ref) => {
  const { t } = useTranslation();

  const [selectedDate, setSelectedDate] = React.useState(
    props.initialValues.selectedDate
  );
  const [location, setLocation] = React.useState(props.initialValues.location);
  const [comments, setComments] = React.useState(props.initialValues.comments);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = () => {
    props.onSubmit({
      selectedDate,
      location,
      comments,
    });
  };

  useImperativeHandle(ref, () => ({
    handleSubmit,
  }));

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        component="form"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          justifyContent: "center",
          "& .MuiTextField-root": { m: 1, width: "300px" },
        }}
        noValidate
        autoComplete="off"
      >
        <DateTimePicker
          label={t("choose_date_time")}
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField
          select
          label={t("select_shelter_location")}
          value={location}
          onChange={handleLocationChange}
          required
        >
          <MenuItem value="123 Main St, Ottawa, ON">
            123 Main St, Ottawa, ON
          </MenuItem>
          <MenuItem value="456 Elm St, Toronto, ON">
            456 Elm St, Toronto, ON
          </MenuItem>
          <MenuItem value="789 Oak St, Hamilton, ON">
            789 Oak St, Hamilton, ON
          </MenuItem>
          <MenuItem value="101 Maple St, Kingston, ON">
            101 Maple St, Kingston, ON
          </MenuItem>
        </TextField>
        <TextField
          label={t("additional_comments")}
          multiline
          rows={4}
          value={comments}
          onChange={handleCommentsChange}
        />
      </Box>
    </LocalizationProvider>
  );
});

export default ScheduleVisitForm;
