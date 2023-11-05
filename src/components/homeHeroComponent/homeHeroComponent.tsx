import React from "react";
import { Link } from "react-router-dom";
import offerImage from "../../images/homeHeroImage.svg"
import './homeHeroComponent.scss'

export default function HeroHome() {

    return (
        <main className='heroMain'>
            <div className="container">
                <div className="heroContent">
                    <div className="heroOffer">
                        <h1 className="offerTitle">
                            Проблеми з навчанням? Ми допоможемо
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
