import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeItem, updateCounter} from '../Redux/actions/Actions';
import CartTemplate from './CartTemplate/CartTemplate';
import "./ShoppingCartPage.css";


const ShoppingCartPage = () => {
    const dispatch = useDispatch();
    const cartShip = useSelector(state => {
        console.log("Current state:", state);
        return state.cart;
    });
    console.log("Cart Ship:", cartShip);
    const [totalPrice, setTotalPrice] = useState(0);

    function handleDeleteCart(id) {
        dispatch(removeItem({id}))
    }

    function handleReduceCounter(id) {
        let counter = -1;
        dispatch(updateCounter({id, counter}))
    }

    function handlerAddCounter(id) {
        let counter = 1;
        dispatch(updateCounter({id, counter}))
    }

    function TotalCount() {
        return cartShip.reduce((total, ship) => {
            total += ship.tonnage_price * ship.counter;
            return total;
        }, 0);
    }


    function ShipContainer(props) {
        let ship = props.ship;


        if (ship.length === 0) {
            return (<div>Cart is empty</div>);
        } else {
            return (
                <div>
                    {ship.map(((ship, keyid) => (
                        <div key={keyid}>
                            <CartTemplate
                                ship={ship}
                                onIncrease={() => handlerAddCounter(ship.id)}
                                onReduce={() => handleReduceCounter(ship.id)}
                                onDelete={() => handleDeleteCart(ship.id)}
                            />
                        </div>)))
                    }
                </div>
            );
        }
    }


    return (
        <div className="cartContainer">
            <ShipContainer ship={cartShip}/>
            <div className="total">Total: <TotalCount/>$</div>
        </div>
    );
}

export default ShoppingCartPage;