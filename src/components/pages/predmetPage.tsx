import React from "react";
import AboutPredmetHeroComponent from "../aboutPredmetHeroComponent/aboutPredmetHeroComponent.tsx";
import Triggers from "../triggers/triggers.tsx";
import BenefitsComponent from "../benefitsComponent/benefitsComponent.tsx";
import CousesPredmetComponent from "../cousesPredmetComponent/cousesPredmetComponent.tsx";
import FeedbackComponent from "../feedbackComponent/feedbackComponent.tsx";
import ContactForm from "../contactFormComponent/contactForm.tsx";
import Footer from "../footer/footer.tsx";


export default function PredmetPage(){
    return(
        <>
            <AboutPredmetHeroComponent/>
            <Triggers />
            <BenefitsComponent/>
            <CousesPredmetComponent/>
            <FeedbackComponent/>
            <ContactForm/>
            <Footer/>
        </>
    );
}