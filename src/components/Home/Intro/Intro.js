import React from 'react';
import {HeroContainer, InnerIntro, InnerIntroImage} from './Intro.styles'; // Import your styled components
import shipLogo from '../../../img/ship_logo.png';

const Intro = () => (
    <HeroContainer>
        <InnerIntro>

            <div>
                <InnerIntroImage src={shipLogo} alt="ship"/>
                <h3 className="item__title"></h3>
                <h5 className="item__info name">Name: Ship 1</h5>
                <h5 className="item__info tonnage">Tonnage: 10450.50</h5>
                <h5 className="item__info number_of_passengers">Passengers: 125</h5>
                <h5 className="item__info tonnage_price">Tonnage Price: 12023400$</h5>
            </div>
        </InnerIntro>
        <InnerIntro>
            <div>
                <InnerIntroImage src={shipLogo} alt="ship"/>

                <h3 className="item__title"></h3>
                <h5 className="item__info name">Name: Ship 2</h5>
                <h5 className="item__info tonnage">Tonnage: 10700.50</h5>
                <h5 className="item__info number_of_passengers">Passengers: 625</h5>
                <h5 className="item__info tonnage_price">Tonnage Price: 12006700$</h5>
            </div>
        </InnerIntro>
        <InnerIntro>
            <div>
                <InnerIntroImage src={shipLogo} alt="ship"/>

                <h3 className="item__title"></h3>
                <h5 className="item__info name">Name: Ship 3</h5>
                <h5 className="item__info tonnage">Tonnage: 12340.50</h5>
                <h5 className="item__info number_of_passengers">Passengers: 155</h5>
                <h5 className="item__info tonnage_price">Tonnage Price: 1345000$</h5>
            </div>
        </InnerIntro>
    </HeroContainer>
);

export default Intro;
