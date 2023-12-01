import React from 'react';
import s from "./ItemTemplate.css"
import {InnerIntroImage} from "../Home/Intro/Intro.styles";
import shipLogo from "../../img/logo.png";
import {Link} from "react-router-dom";

const ShipTemplate = (props) => {
    // console.log(props)
    return (
        <div className="inner_intro">
            <InnerIntroImage src={shipLogo} alt="ship"/>
            <h5 className={s.item__info__name}>Name: {props.name}</h5>
            <h5 className={s.item__info__tonnage}>Tonnage: {props.tonnage}</h5>
            <h5 className={s.item__info__number__of__passengers}>Passengers: {props.number_of_passengers}</h5>
            <h5 className={s.item__info__tonnage__price}>Tonnage Price: {props.tonnage_price}</h5>
            <button className="viewMore">
                    <Link to={`/itempage/${props.id}`}>view</Link>
                </button>
        </div>
    );
}

export default ShipTemplate;