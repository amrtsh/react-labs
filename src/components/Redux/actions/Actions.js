import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_COUNTER} from "./Actions-types.js";

export const addItem = ({id, name, tonnage_price, counter=1}) => {
    return {
        type: ADD_TO_CART,
        payload: {id, name, tonnage_price, counter}
    }
}

export const removeItem = (ship) => {
    return {
        type: REMOVE_FROM_CART,
        payload: ship
    }
}

export const updateCounter = ({id, counter}) => {
    return {
        type: UPDATE_COUNTER,
        payload: {id, counter}
    }
}
