import React from 'react'

import { Icon } from '../../../packages/ui';

const Navigation = ({ pathname }) => {

    const handleNav = () => {

        let mobileSize = window.innerWidth,
            nav = document.querySelector('.navigation'),
            page = document.querySelector('html');

        if(mobileSize < 768) {

            if (nav.classList.contains('expanded')) {
                nav.classList.remove('expanded')
                page.classList.remove('no-scroll')
            } else {
                nav.classList.add('expanded')
                page.classList.add('no-scroll')
            }
        }
    }

    return (
        <nav className="navigation">
            <div className="holder">
                <div className="flex-content">
                    <a href={(pathname !== '/') ? "/#portada" : "#portada" } className="logo">
                        <img src={Icon.src} alt="Climas México" />
                    </a>
                    <div className="toggle-btn visible-xs" onClick={handleNav}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="links-wrapper">
                        <div className="has-sublist">
                            <a
                                href={(pathname !== '/') ? "/#productos" : "#productos" }
                                className="link"
                                onClick={handleNav}
                            >Productos</a>
                            <div className="sublist">
                                <a href="calentadores-climastar" className="sublink">Calentadores Climastar</a>
                                <a href="calentadores-infrarojos" className="sublink">Calentadores Infrarojos</a>
                                <a href="toldos-retractiles" className="sublink">Toldos</a>
                                <a href="persianas-europeas" className="sublink">Persianas Europeas</a>
                                <a href="screen-rits" className="sublink">Screen Rits</a>
                            </div>
                        </div>
                        <a
                            href={(pathname !== '/') ? "/#como-funciona" : "#como-funciona" }
                            className="link"
                            onClick={handleNav}
                        >Cómo funciona</a>
                        <a
                            href={(pathname !== '/') ? "/#contacto" : "#contacto" }
                            className="cta"
                            onClick={handleNav}
                        >Contáctanos</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;