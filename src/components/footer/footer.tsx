import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';



export default function Footer(){
    return(
        <footer className='footer'>
            <div className="container">
                <div className="footerContent">
                    <div className="description">
                        <h2 className="logo">TUKEUP</h2>
                        <h3 className="slogan">Допоможемо тобі із навчанням</h3>
                    </div>
                    <nav className="footerNav">
                        <ul className='navigationMenuList'>
                            <li className="navigationMenuList_li">
                                <Link className="navigationMenuList_link" to="/">Про нас</Link>
                            </li>
                            <li className="navigationMenuList_li">
                                <Link className="navigationMenuList_link"  to="/">Ми пропонуємо</Link>
                            </li>
                            <li className="navigationMenuList_li">
                                <Link className="navigationMenuList_link"  to="/">Контакти</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}