import React, { useState, useEffect } from "react";
import banner from "../assets/banner.png";
import star from "../assets/star.svg";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import CustomButton from "../components/SmallComponents/CustomButton";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import PetCard from "../components/LargeComponents/PetCard";
import petsData from "../pets.json";
import AdoptionStoryForm from "../components/LargeComponents/AdoptionStoryForm";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [pets, setPets] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setPets(petsData.slice(0, 9));
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="banner w-100 position-relative overflow-hidden">
        <img src={banner} alt={t("banner_alt")} className="w-100 h-100" />
        <div className="position-absolute top-0 start-0 w-100 h-100 overlay"></div>
        <div className="content position-absolute top-50 start-50 translate-middle z-2 text-white text-center d-flex flex-column align-items-center">
          <h1>
            {t("find_your_new_best_friend")}{" "}
            <span className="text-blue">{t("today")}</span>!
          </h1>
          <p className="fs-4">{t("adopt_loving_pet")}</p>
          <div className="buttons d-flex gap-3 fw-bold">
            <Link to="/adopt">
              <CustomButton contained={true}>
                {t("view_available_pets")}
              </CustomButton>
            </Link>
            <Link to="/apply">
              <CustomButton contained={false}>
                {t("learn_how_to_adopt")}
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>

      <div className="browse-pets text-center py-5 container">
        <h2 className="fs-large text-blue">{t("meet_local_pets")}</h2>
        <p>{t("nearby_pets")}</p>
        <Splide
          options={{
            perPage: 3,
            perMove: 1,
            rewind: true,
            pagination: false,
            gap: "1rem",
            center: true,
            breakpoints: {
              640: {
                perPage: 1,
              },
              1024: {
                perPage: 2,
              },
            },
          }}
          aria-label={t("pets")}
        >
          {pets.map((pet, index) => (
            <SplideSlide key={index}>
              <PetCard pet={pet} />
            </SplideSlide>
          ))}
        </Splide>
        <Link to="/adopt">
          <CustomButton contained={true}>{t("view_all")}</CustomButton>
        </Link>
      </div>
      <div
        id="how-it-works"
        className="py-5 d-flex flex-column align-items-center justify-content-center"
      >
        <div className="star-rating d-flex justify-content-center mb-3">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>

        <h2 className="text-blue fs-large mb-4">{t("how_it_works")}</h2>

        <div className="steps container row row-cols-3 g-5 text-white text-center">
          <div className="step col">
            <h3 className="fs-medium">{t("step")} 1</h3>
            <p className="fw-bold fs-5">{t("browse_available_pets")}</p>
          </div>
          <div className="step col">
            <h3 className="fs-medium">{t("step")} 2</h3>
            <p className="fw-bold fs-5">{t("meet_and_greet")}</p>
          </div>
          <div className="step col">
            <h3 className="fs-medium">{t("step")} 3</h3>
            <p className="fw-bold fs-5">{t("complete_adoption_process")}</p>
          </div>
        </div>
        <Link to="/apply" className="mt-4">
          <CustomButton contained={true}>{t("learn_more")}</CustomButton>
        </Link>
      </div>

      <div className="what-they-say py-5 d-flex justify-content-center align-items-center flex-column">
        <h2 className="fs-large text-blue">{t("what_they_say")}</h2>
        <div className="container mt-4 text-white d-flex flex-column align-items-center">
          <div className="row gap-5">
            <div className="col d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src={client1}
                alt="client-photo"
                className="rounded-circle client-photo mb-3"
              />
              <h3>David R.</h3>
              <p>{t("testimonial_david")}</p>
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src={client2}
                alt="client-photo"
                className="rounded-circle client-photo mb-3"
              />
              <h3>Sarah J.</h3>
              <p>{t("testimonial_sarah")}</p>
            </div>
            <div className="col d-flex flex-column align-items-center justify-content-center text-center">
              <img
                src={client3}
                alt="client-photo"
                className="rounded-circle client-photo mb-3"
              />
              <h3>Emily T.</h3>
              <p>{t("testimonial_emily")}</p>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            className="mt-4"
          >
            {t("share_adoption_story")}
          </Button>
          <AdoptionStoryForm open={open} handleClose={handleClose} />
        </div>
      </div>
    </>
  );
}
