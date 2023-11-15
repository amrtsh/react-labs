import React from "react";
import {useParams} from 'react-router-dom'
import {ship} from "../Util/UtilShip";
import shipLogo from "../../img/ship_logo.png";
import s from "../Items/ItemTemplate.css";
import "./itemPage.css";

const ItemPage = () => {
        const params = useParams();
        let a = ship[params.id];

        return (
            <div className="item_intro">
                    <img src={shipLogo} alt={s.ship}/>
                    <div className="text">
                    <h5 className={s.itemInfoName}>Name: {a.name}</h5>
                    <h5 className={s.itemInfoTonnage}>Tonnage: {a.tonnage}</h5>
                    <h5 className={s.itemInfoNumberOfPassengers}>Number of Passangers: {a.number_of_passengers}</h5>
                    <h5 className={s.itemInfoTonnagePrice}>Tonnage Price: {a.tonnage_price} $</h5>
                            <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                    </div>
            </div>
        );


}

export default ItemPage;
