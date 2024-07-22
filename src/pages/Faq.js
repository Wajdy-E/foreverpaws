import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

const faqs = [
  {
    question: "what_is_adoption_process",
    answer: "the_adoption_process_involves",
  },
  {
    question: "how_long_adoption_process",
    answer: "the_adoption_process_can_take",
  },
  {
    question: "what_are_adoption_fees",
    answer: "adoption_fees_vary",
  },
  {
    question: "what_should_bring_when_adopting",
    answer: "when_adopting_pet_you_should_bring",
  },
  {
    question: "can_adopt_pet_if_live_in_apartment",
    answer: "yes_you_can_adopt_pet_if_live_in_apartment",
  },
  {
    question: "do_you_offer_support_after_adoption",
    answer: "yes_many_shelters_offer_post_adoption_support",
  },
  {
    question: "can_return_pet_if_it_doesnt_work_out",
    answer: "most_shelters_have_return_policy",
  },
  {
    question: "what_types_of_pets_available",
    answer: "variety_of_pets_available",
  },
  {
    question: "how_prepare_home_for_new_pet",
    answer: "preparing_home_for_new_pet",
  },
  {
    question: "can_adopt_pet_if_have_young_children",
    answer: "yes_you_can_adopt_pet_if_have_young_children",
  },
];

const Faq = () => {
  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-blue fs-large">{t("frequently_asked_questions")}</h2>
      {faqs.map((faq, index) => (
        <Accordion key={index} className="my-3 rounded-3 faq-accordion">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{t(faq.question)}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t(faq.answer)}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Faq;
