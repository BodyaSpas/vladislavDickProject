import React from "react";
import BenefitsImage from '../../images/benefitsImages/predmetBenefits.svg';
import checkIcon from '../../images/benefitsImages/check.svg';
import './benefitsComponent.scss';


export default function BenefitsComponent(){
    return(
        <section id="benefits">
            <div className="container">
                <div className="benefits_content">
                    <img className="benefits_Image" src={BenefitsImage} alt="benefits" />
                    <div className="benefits_text">
                        <h2 className="benefits_subtitle">
                        Переваги курсу
                        </h2>
                        <ul className="benefits_list">
                            <li className="benefits_item">
                                <img src={checkIcon} alt="check" className="benefits_Gal" />
                                <p className="benefits_Description">dictumst quisque sagittis purus sit amet volutpat consequat mauris nuncasdsadasdasdasdasd asdasdasd</p>
                            </li>
                            <li className="benefits_item">
                                <img src={checkIcon} alt="check" className="benefits_Gal" />
                                <p className="benefits_Description">dictumst quisque sagittis purus</p>
                            </li>
                            <li className="benefits_item">
                                <img src={checkIcon} alt="check" className="benefits_Gal" />
                                <p className="benefits_Description">dictumst quisque sagittis purus sit amet volutpat </p>
                            </li>
                            <li className="benefits_item">
                                <img src={checkIcon} alt="check" className="benefits_Gal" />
                                <p className="benefits_Description">dictumst quisque sagittis purus sit amet volutpat consequat mauris nuncasdsadasdasdasdasd asdasdasd</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}