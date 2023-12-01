import React from "react";
import ShipTemplate from "../../Items/ShipTemplate";
import Loading from "../../Loading/Loading";

const HeroCatalog = (props) => {
    return (
        <div className="items">
            {props.ship ? <ItemContainer ship={props.ship}/> : <Loading/>}
        </div>
    )
};

function ItemContainer(props) {
    return (
        <ul className="item">
            {
                props.ship.map(((ship, id) => (
                    <li key={id}><ShipTemplate
                        id={ship.id}
                        name={ship.name}
                        tonnage={ship.tonnage}
                        number_of_passengers={ship.number_of_passengers}
                        tonnage_price={ship.tonnage_price}
                    /></li>
                )))
            }
        </ul>
    );
}

export default HeroCatalog;
