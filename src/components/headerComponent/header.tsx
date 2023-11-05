import React from "react";
import { Routes } from '../../routes/navigationRoutes.tsx'
import './header.scss';
import HeaderNavButton from "./navButton.tsx";
import { LanguageRoutes } from "../../routes/languageRoutes.tsx";
import LanguageButton from "./languageButton.tsx";


export default function Header() {
    const [isActiveButtons, setActiveButtons] = React.useState(LanguageRoutes.map( (_,index) => index === 0 ? true : false) );
    const [language, setLanguage] = React.useState('ua');

    const setActive = (index:number) => {
        const activeButtons = LanguageRoutes.map( () => false);
        activeButtons[index] = true;
        setActiveButtons(activeButtons)
      }
    

    return (
        <header className="header">
            <div className="container">
                <div className="headerContent">
                    <h2 className="headerLogo">TUKEUP</h2>
                    <div className="navigation">
                        <nav className="navigationMenu">
                            <ul className="navigationMenuList">
                                {Routes.map((item, index) => (
                                    <HeaderNavButton key={index} {...item} />
                                ))}
                            </ul>
                        </nav>
                        <div className="navLanguage">
                            {LanguageRoutes.map((item, index) => (
                                <LanguageButton setActive={() => setActive(index)} isActive={isActiveButtons[index]} setLanguage={setLanguage} key={index} button={item}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
} 