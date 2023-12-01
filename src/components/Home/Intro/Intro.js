import React, {useEffect, useState} from 'react';
import ShipTemplate from "../../Items/ShipTemplate";
import "./SMButton.css";
import "./animation.css";
import Loading from "../../Loading/Loading"
import axios from "axios";

const Intro = () => {
    const [ship, setShip] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/get_ships').then((result) => {
            setShip(result.data)
        })
    }, []);

    return (
        <div className="items">
            {ship ? <ButtonShowMore/> : <Loading/>}

        </div>
    );


    function ButtonShowMore() {
        const [count, setCount] = useState(3);
        return (
            <React.Fragment>
                <ItemContainer ships={ship} count={count}/>
                <div className="aaa">
                    <button onClick={() => setCount(count + 4)} className="btn_more">Show more</button>
                </div>
            </React.Fragment>
        );
    }
}

function ItemContainer(props) {
    return (
        <ul className="ssss">
            {props.ships.slice(0, props.count).map((ship, id) => (
                <li key={id}>
                    <ShipTemplate
                        id={ship.id}
                        name={ship.name}
                        tonnage={ship.tonnage}
                        number_of_passengers={ship.number_of_passengers}
                        tonnage_price={ship.tonnage_price}
                    />
                </li>
            ))}
        </ul>
    );
}


export default Intro;
