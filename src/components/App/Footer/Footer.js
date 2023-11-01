import React from "react";
import {
    FooterWrapper,
    Upperline,
    FooterContainer,
    FooterBranding,
    ContactUs,
    FooterLogo,
    FooterLogos,
} from './Footer.styles';
import logo from "../../../img/logo.png";
import flogo from "../../../img/facebook-logo.png";
import tlogo from "../../../img/twitter-logo.png"
import lilogo from "../../../img/linkedin.png"
import glogo from "../../../img/google-logo.png"


const Footer = () => (
    <FooterWrapper>
        <Upperline />
        <FooterContainer>
            <FooterBranding>
                <h2>Branding stuff</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </FooterBranding>
            <FooterLogos src={logo} alt="Logo" />
            <ContactUs>
                <FooterLogo src={flogo} alt="Facebook" />
                <FooterLogo src={tlogo} alt="Twitter" />
                <FooterLogo src={lilogo} alt="LinkedIn" />
                <FooterLogo src={glogo} alt="Google" />
            </ContactUs>
        </FooterContainer>
    </FooterWrapper>
);


export  default Footer;