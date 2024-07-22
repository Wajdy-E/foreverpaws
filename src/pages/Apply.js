import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalDetailsForm from "../components/LargeComponents/PersonalDetailsForm";
import ScheduleVisitForm from "../components/LargeComponents/ScheduleVisitForm";
import ScheduleHomeVisitForm from "../components/LargeComponents/ScheduleHomeVisitForm";
import banner from "../assets/banner3.png";
import { useTranslation } from "react-i18next";

export default function HowTo() {
  const { t } = useTranslation();

  const steps = [
    t("fill_in_personal_details"),
    t("schedule_meet_and_greet"),
    t("schedule_home_visit"),
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const [personalDetails, setPersonalDetails] = React.useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    pet: "",
  });

  const [scheduleVisit, setScheduleVisit] = React.useState({
    selectedDate: new Date(),
    location: "",
    comments: "",
  });

  const [scheduleHomeVisit, setScheduleHomeVisit] = React.useState({
    selectedDate: new Date(),
    address: "",
    city: "",
    province: "",
    postalCode: "",
    fencedYard: "",
    numPets: "",
    comments: "",
  });

  const formRefs = [React.createRef(), React.createRef(), React.createRef()];

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    if (formRefs[activeStep].current) {
      formRefs[activeStep].current.handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setPersonalDetails({
      name: "",
      email: "",
      phone: "",
      type: "",
      pet: "",
    });
    setScheduleVisit({
      selectedDate: new Date(),
      location: "",
      comments: "",
    });
    setScheduleHomeVisit({
      selectedDate: new Date(),
      address: "",
      city: "",
      province: "",
      postalCode: "",
      fencedYard: "",
      numPets: "",
      comments: "",
    });
  };

  const handleFormSubmit = (values) => {
    if (activeStep === 0) {
      setPersonalDetails(values);
    } else if (activeStep === 1) {
      setScheduleVisit(values);
    } else if (activeStep === 2) {
      setScheduleHomeVisit(values);
    }

    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  return (
    <>
      <div className="banner application w-100 position-relative overflow-hidden">
        <img src={banner} alt={t("banner_alt")} className="w-100 h-100" />
        <div className="content position-absolute w-100 text-center top-50 start-50 translate-middle z-2">
          <h1 className="text-blue link-underline fs-large">
            {t("start_your_application_today")}
          </h1>
        </div>
      </div>
      <div className="container mt-5">
        <div className="steps mb-5">
          <h2 className="text-blue fw-bold mb-3">
            {t("step_1_complete_the_adoption_application")}
          </h2>
          <p className="fw-bold" style={{ fontSize: "20px" }}>
            {t("fill_out_personal_details_select_pet")}
          </p>
          <h2 className="text-blue fw-bold mb-3">
            {t("step_2_schedule_meet_and_greet")}
          </h2>
          <p className="fw-bold" style={{ fontSize: "20px" }}>
            {t("choose_date_time_visit_shelter")}
          </p>
          <h2 className="text-blue fw-bold mb-3">
            {t("step_3_home_visit_finalize_adoption")}
          </h2>
          <p className="fw-bold" style={{ fontSize: "20px" }}>
            {t("shelter_representative_may_visit_home")}
          </p>
        </div>

        <h3 className="text-blue fs-medium mb-4">{t("start_now")}</h3>
        <Box sx={{ width: "100%" }}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  {t("all_steps_completed")}
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>{t("reset")}</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                  {t("step")} {activeStep + 1}
                </Typography>
                {activeStep === 0 && (
                  <PersonalDetailsForm
                    ref={formRefs[0]}
                    onSubmit={handleFormSubmit}
                    initialValues={personalDetails}
                  />
                )}
                {activeStep === 1 && (
                  <ScheduleVisitForm
                    ref={formRefs[1]}
                    onSubmit={handleFormSubmit}
                    initialValues={scheduleVisit}
                  />
                )}
                {activeStep === 2 && (
                  <ScheduleHomeVisitForm
                    ref={formRefs[2]}
                    onSubmit={handleFormSubmit}
                    initialValues={scheduleHomeVisit}
                  />
                )}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    {t("back")}
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleNext} sx={{ mr: 1 }}>
                    {t("next_step")}
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        sx={{ display: "inline-block" }}
                      >
                        {t("step")} {activeStep + 1} {t("already_completed")}
                      </Typography>
                    ) : (
                      <Button onClick={handleComplete}>
                        {completedSteps() === totalSteps() - 1
                          ? t("finish")
                          : t("complete_step")}
                      </Button>
                    ))}
                </Box>
              </React.Fragment>
            )}
          </div>
        </Box>
      </div>
    </>
  );
}
