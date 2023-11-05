import React from 'react';
import AboutUsImage from '../../images/aboutImages/about.svg';
import './aboutUsComponent.scss'
import { aboutUsParagraph } from '../../staticData/aboutUsUA.tsx';
import AboutUsParagraph from './aboutUsParagraph.tsx';


export default function AboutUsComponent(){
    return(
        <section id="aboutUs">
            <div className="container">
                <div className="aboutUsContent">
                    <div className="aboutUsText">
                        <h2 className="subTitle">Хто ми?</h2>
                        {aboutUsParagraph.map((item,index) => (
                            <AboutUsParagraph key={index} {...item}/>
                        ))}
                    </div>
                    <div className="aboutUsIllustration">
                        <img src={AboutUsImage} alt="About us image" />
                    </div>
                </div>
            </div>
        </section>
    )
}