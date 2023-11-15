import React, {useState} from 'react';
import ShipTemplate from "../../Items/ShipTemplate";
import "./SMButton.css";
import "./animation.css";
const Intro = (props) => {
    const [count, setCount] = useState(3);

    return(
        <div className="items">
            <ItemContainer ship={props.ship} count = {count}/>
            <div className="aaa">
                <button onClick={() => setCount(count + 4)} className="btn_more">Show more</button>
            </div>
        </div>
    );
};


function ItemContainer({ship, count}) {

    return(
        <ul className="ssss">
            {
                ship.slice(0, count).map(((ship,id) => (
                    <li key={id}><ShipTemplate
                        id={id}
                        name={ship.name}
                        tonnage={ship.tonnage}
                        number_of_passengers={ship.number_of_passengers}
                        tonnage_price={ship.tonnage_price}
                    />
                    </li>
                )))
            }
        </ul>
    );
}


export default Intro;
