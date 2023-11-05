import React from "react";
import { Link } from "react-router-dom";
import offerImage from "../../images/aboutPageHero/aboutPage.svg"
import './aboutPredmetHeroComponent.scss'

export default function AboutPredmetHeroComponent() {

    return (
        <main className='heroMain'>
            <div className="container">
                <div className="aboutheroContent">
                    <div className="heroOffer">
                        <h1 className="offerTitle">
                            Математика
                        </h1>
                        <p className="offerDescription">
                        Допомога студентам Технічного університету в Кошицях. Покращ свої знання та вже отримуй відмінні результати під час навчання
                        </p>
                        <Link to={'/'} className='offerButton'>
                            Вибрати  програму
                        </Link>
                    </div>
                    <div className="heroIllustration">
                        <img src={offerImage} alt="select curse" />
                    </div>
                </div>
            </div>
        </main>
    )
}
