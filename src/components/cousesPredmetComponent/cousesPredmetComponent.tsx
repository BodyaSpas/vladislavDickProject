import React from "react";
import CouseImage from '../../images/cousesImages/couse.svg';
import './cousesPredmetComponent.scss';


export default function CousesPredmetComponent() {
    return (
        <section id="Couses">
            <div className="container">
                <div className="couses_content">
                    <h2 className="couse_subtitle">Навіщо обирають цей курс?</h2>
                    <ul className="cousesList">
                        <li className="couesesItem">
                            <img src={CouseImage} alt="couse" className="couseIllusration" />
                            <p className="couseName">Проблеми з навчанням</p>
                        </li>
                        <li className="couesesItem">
                            <img src={CouseImage} alt="couse" className="couseIllusration" />
                            <p className="couseName">Проблеми з навчанням</p>
                        </li>
                        <li className="couesesItem">
                            <img src={CouseImage} alt="couse" className="couseIllusration" />
                            <p className="couseName">Проблеми з навчанням</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}