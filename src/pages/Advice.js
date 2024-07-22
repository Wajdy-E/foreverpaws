import React, { useState } from "react";
import { Container, Box, Tabs, Tab, Typography } from "@mui/material";
import { styled } from "@mui/system";
import banner from "../assets/banner2.png";
import Video from "../components/SmallComponents/Video";
import { useTranslation } from "react-i18next";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Styled component for Nav Pills
const NavPills = styled(Tabs)({
  "& .MuiTabs-flexContainer": {
    display: "flex",
    justifyContent: "center",
  },
  "& .MuiButtonBase-root": {
    borderRadius: "50px",
    textTransform: "none",
    padding: "10px 20px",
    margin: "0 5px",
    color: "#fff",
    backgroundColor: "#007bff",
    "&:hover": {
      backgroundColor: "#0056b3",
    },
    "&.Mui-selected": {
      backgroundColor: "#0056b3",
      color: "#fff",
    },
  },
});

export default function Advice() {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="banner w-100 mb-5 position-relative overflow-hidden">
        <img src={banner} alt={t("banner_alt")} className="w-100 h-100" />
        <div className="position-absolute top-0 start-0 w-100 h-100 overlay"></div>
        <div className="content position-absolute top-50 start-50 translate-middle text-center z-2 text-white">
          <h1 className="text-blue">{t("pet_advice")}</h1>
          <p className="fs-4 fw-bold">{t("pet_parenting_help")}</p>
        </div>
      </div>

      <Container className="advice-tabs">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <NavPills
            value={value}
            onChange={handleChange}
            aria-label={t("pet_advice_tabs")}
          >
            <Tab label={t("grooming")} {...a11yProps(0)} />
            <Tab label={t("training")} {...a11yProps(1)} />
            <Tab label={t("feeding")} {...a11yProps(2)} />
            <Tab label={t("exercise")} {...a11yProps(3)} />
            <Tab label={t("home_safety")} {...a11yProps(4)} />
          </NavPills>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <Video
              src="https://www.youtube.com/embed/YwyLBj1ldW0?si=SI-AJ3IWFpmPHO4B"
              title="how_to_groom_your_cat"
              description="learn_grooming_cat"
            />
            <Video
              src="https://www.youtube.com/embed/wI9xARUzo1E?si=p0LkXKcfOiKvRU7o"
              title="how_to_groom_your_dog"
              description="learn_grooming_dog"
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <Video
              src="https://www.youtube.com/embed/yM3n2mWZqUU?si=qB8vHC_HUkx54VWS"
              title="training_your_cat"
              description="training_cat_techniques"
            />
            <Video
              src="https://www.youtube.com/embed/jFMA5ggFsXU?si=hc146CsrZXQbELEF"
              title="training_your_dog"
              description="training_dog_techniques"
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <Video
              src="https://www.youtube.com/embed/wPrOCXGCMpA?si=0e4syjVejtwUw8Y6"
              title="feeding_your_cat"
              description="feeding_cat_practices"
            />
            <Video
              src="https://www.youtube.com/embed/IGG5m4OH9NY?si=3ifnAmk0-OUr-qNq"
              title="feeding_your_dog"
              description="feeding_dog_practices"
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <Video
              src="https://www.youtube.com/embed/Q3Zq6QTtjBA?si=o_vmaNB3-JmCa0LD"
              title="exercise_for_your_cat"
              description="exercise_cat_right_amount"
            />
            <Video
              src="https://www.youtube.com/embed/2EuqNwbp_2Q?si=AlhfAEHs7-ptyUlb"
              title="exercise_for_your_dog"
              description="exercise_dog_right_amount"
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <Video
              src="https://www.youtube.com/embed/h6ZyRTQbWR0?si=o_Sofy38dY1yLRTi"
              title="home_safety_for_your_cat"
              description="home_safety_cat"
            />
            <Video
              src="https://www.youtube.com/embed/eTNRFvvrSsc?si=4aU8zS391XwE1l6Q"
              title="home_safety_for_your_dog"
              description="home_safety_dog"
            />
          </div>
        </TabPanel>
      </Container>
    </>
  );
}
