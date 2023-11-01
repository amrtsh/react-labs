import React from 'react';
import { HeroContainer, HeroImage, InnerText } from './Hero.styles';
import hero from '../../../img/heroimg.jpg';

const Hero = () => (
    <HeroContainer>
        <HeroImage src={hero} alt="Hero_img" />
        <InnerText>
            <h1>What is our Ship Company</h1>
            <p>
                It is a long established fact that a reader
                will be distracted by the readable content
                of a page when looking at its layout.
                The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution
                of letters, as opposed to using 'Content here,
                content here', making it look like readable
                English. Many desktop publishing packages and
                web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum'
                will uncover many web sites still in their infancy.
            </p>
        </InnerText>
    </HeroContainer>
);

export default Hero;
