import React from 'react';
import './footer.css';

const Footer = ({ blackAndWhite }) => {
    const textColorStyle = blackAndWhite ? { color: "white" } : null;
    const borderColorStyle = blackAndWhite ? { borderTopColor: "rgba(255, 255, 255, 0.1)" } : null;

    return (
        <footer className="footer" style={borderColorStyle}>
            <div className="footer__container container">
                <h1 className="footer__title" style={textColorStyle}>Rahul</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link" style={textColorStyle}>About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link" style={textColorStyle}>Skills</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link" style={textColorStyle}>Qualification</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link" style={textColorStyle}>Portfolio</a>
                    </li>
                </ul>

                <div className="footer__socials">
                    <a href="https://www.instagram.com/" className='footer__social-icon instagram' target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>

                    <a href="https://www.facebook.com/" className='footer__social-icon facebook' target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="https://wa.me/918678827215" className='footer__social-icon whatsapp' target="_blank" rel="noreferrer">
                        <i className="uil uil-whatsapp"></i>
                    </a>
                </div>

                <span className="footer__copy" style={textColorStyle}>
                    &#169; Rahul. All rights reserved. {'2022'}
                </span>
            </div>
        </footer>
    );
};

export default Footer;