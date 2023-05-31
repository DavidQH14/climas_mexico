import React from 'react'

import { Email, Phone, Whatsapp, Icon } from '../../../packages/ui';

const Footer = ({ footer, pathname }) => {
    return (
        <footer className="footer">
            <div className="holder">
                <div className="content">
                    <div className="title">¡Hablemos!</div>
                    <div className="links">
                        <a href={'mailto:' + footer.email} className="link" target="_blank" rel="noopener noreferrer">
                            <div className="icon">
                                <img src={Email.src} alt="Email" />
                            </div>
                            <div className="text">{footer.email}</div>
                        </a>
                        <a href={'tel:' + footer.phone} className="link" target="_blank" rel="noopener noreferrer">
                            <div className="icon">
                                <img src={Phone.src} alt="Email" />
                            </div>
                            <div className="text">{footer.phone}</div>
                        </a>
                        <a href={'https://web.whatsapp.com/send?phone=' + footer.whatsapp} className="link" target="_blank" rel="noopener noreferrer">
                            <div className="icon">
                                <img src={Whatsapp.src} alt="Email" />
                            </div>
                            <div className="text">{footer.whatsapp}</div>
                        </a>
                    </div>
                    <a href={(pathname !== '/') ? "/#portada" : "#portada" } className="logo">
                        <img src={Icon.src} alt="Footer" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;