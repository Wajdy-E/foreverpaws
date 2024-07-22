import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Rating,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AdoptionStoryForm = ({ open, handleClose }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    petName: "",
    story: "",
    rating: 0,
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, [name]: file });
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          {t("share_your_adoption_story")}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label={t("your_name")}
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label={t("your_email")}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label={t("your_pets_name")}
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label={t("your_adoption_story")}
            name="story"
            value={formData.story}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Typography component="legend">{t("rate_us")}</Typography>
          <Rating
            name="rating"
            value={formData.rating}
            onChange={(event, newValue) => {
              setFormData({ ...formData, rating: newValue });
            }}
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
            aria-label={t("upload_photo")}
          >
            {t("upload_a_photo_of_your_pet")}
            <input
              type="file"
              name="photo"
              hidden
              accept="image/*"
              onChange={handleChange}
            />
          </Button>
          {preview && (
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                marginBottom: 2,
                objectFit: "cover",
              }}
              src={preview}
              alt={t("uploaded_preview")}
            />
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {t("submit")}
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AdoptionStoryForm;
