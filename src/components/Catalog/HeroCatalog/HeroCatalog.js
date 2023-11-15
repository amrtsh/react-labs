import React from "react";
import ShipTemplate from "../../Items/ShipTemplate";

function ItemContainer({ship}) {

    return(
      <ul className="item">
          {
              ship.map(((ship,id) => (
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
const HeroCatalog = (props) => (
    <div className="items">
        <ItemContainer ship={props.ship}/>
    </div>
);

export default HeroCatalog;
