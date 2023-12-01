import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import shipLogo from "../../img/ship_logo.png";
import s from "../Items/ItemTemplate.css";
import "./itemPage.css";
import Loading from "../Loading/Loading";
import {useDispatch} from 'react-redux';
import {addItem} from "../Redux/actions/Actions";
import shipApi from "../../utils/Api/Api";

const ItemPage = () => {
    const params = useParams();
    const [ship, setShip] = useState(null);
    useEffect(() => {
        shipApi.getOne(params.id).then((result) => {
            setShip(result.data)
        });
    },[params.id]);
    //         .then((result) => {
    //             console.log(result.data); // Log the fetched data
    //             setShip(result.data);
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching ship data:', error);
    //         });
    // }, [params.id]);


    return (
        <div>
            {ship ? <Show ship={ship}/> : <Loading/>}
        </div>
    );
}

const Show = (props) => {
     const dispatch = useDispatch();

  const AddShip = () => {
    const handleAddItem = () => {
      console.log("Dispatching addItem action with ship:", props.ship);
      dispatch(addItem(props.ship.ship));
    };

    return (
      <button id="add" className="add" type="button" onClick={handleAddItem}>
        Buy
      </button>
    );
  };

    return (
        <div className="item_intro">
            <img src={shipLogo} alt={s.ship}/>
            <div className="text">
                <h5 className={s.item__info__name}>Name: {props.ship.ship.name}</h5>
                <h5 className={s.item__info__tonnage}>Tonnage: {props.ship.ship.tonnage}</h5>
                <h5 className={s.item__info__number__of__passengers}>Number of
                    Passangers: {props.ship.ship.number_of_passengers}</h5>
                <h5 className={s.item__info__tonnage__price}>Tonnage Price: {props.ship.ship.tonnage_price} $</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <AddShip ship={props.ship}/>
            </div>
        </div>
    );
}

export default ItemPage;
