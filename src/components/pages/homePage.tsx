import React from "react";
import HeroHome from "../homeHeroComponent/homeHeroComponent.tsx";
import Triggers from "../triggers/triggers.tsx";
import AboutUsComponent from "../aboutUsComponent/aboutUsComponent.tsx";
import PredmetsList from "../predmetsListComponent/predmetsListComponent.tsx";
import ContactForm from "../contactFormComponent/contactForm.tsx";
import Footer from "../footer/footer.tsx";
import FeedbackComponent from "../feedbackComponent/feedbackComponent.tsx";


export default function HomePage() {
    return (
        <>
            <HeroHome />
            <Triggers />
            <AboutUsComponent />
            <PredmetsList/>
            <FeedbackComponent/>
            <ContactForm/>
            <Footer/>
        </>
    );
}