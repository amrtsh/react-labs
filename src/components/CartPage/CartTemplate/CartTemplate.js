import React from 'react';
import shipLogo from "../../../img/logo.png";
import './CartTemplate.css'

const CartTemplate = (props) => {
    return(
        <div className="cartItem">
            <img className="shipLogo" src={shipLogo} alt="ship"/>
            <h5>Name: {props.ship.name}</h5>
            <h5>Price: {props.ship.tonnage_price} $</h5>
            <button className='counter' onClick={()=> props.onReduce(props.ship.id)}>-</button>
            <label>{props.ship.counter}</label>
            <button className='counter' onClick={()=> props.onIncrease(props.ship.id)}>+</button>
            <label>{props.ship.counter*props.ship.tonnage_price}$</label>
            <button className="delete" onClick={() => props.onDelete(props.ship.id)}>delete</button>
        </div>
    );
}

export default CartTemplate;