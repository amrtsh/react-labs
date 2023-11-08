import React from 'react';
import s from "./ItemTemplate.css"
import {InnerIntroImage} from "../Home/Intro/Intro.styles";
import shipLogo from "../../img/ship_logo.png";

const ShipsTemplate = (props) => {
    return (
        <div className="inner_intro">
            <InnerIntroImage src={shipLogo} alt="ship"/>

            <h3 className={s.item__title}></h3>
            <h5 className={s.item__info__name}>Name: {props.name}</h5>
            <h5 className={s.item__info__tonnage}>Tonnage: {props.tonnage}</h5>
            <h5 className={s.item__info_number_of_passengers}>Passengers: {props.number_of_passengers}</h5>
            <h5 className={s.item__info_tonnage_price}>Tonnage Price: {props.tonnage_price}</h5>
        </div>
    );
}

export default ShipsTemplate;