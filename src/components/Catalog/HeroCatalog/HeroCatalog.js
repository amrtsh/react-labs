import React from "react";
import ShipsTemplate from "../../Items/ShipTemplate";

function ItemContainer(props) {
    let ship = props.ship;

    return(
      <ul className="item">
          {
              ship.map(((ship,id) => (
                  <li key={id}><ShipsTemplate
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
const Hero = (props) => (
    <div className="items">
        <ItemContainer ship={props.ship}/>
    </div>
);

export default Hero;