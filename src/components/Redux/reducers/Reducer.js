import {ADD_TO_CART, REMOVE_FROM_CART, UPDATE_COUNTER} from "../actions/Actions-types";

const initialState = [];

export default function Reducer(state = initialState, action = {}) {
    switch (action.type) {
        case ADD_TO_CART:
            let existingIndex = findProductIndex(state, action.payload.id);
            if (existingIndex !== -1) {
                return state.map((item, index) => (
                    index === existingIndex ? {...item, counter: item.counter + 1} : item
                ));
            }
            return [...state, action.payload];


        case UPDATE_COUNTER:
            let existingItemIndex = findProductIndex(state, action.payload.id);

            if (state[existingItemIndex].counter === 0 && action.payload.counter === -1) {
                return [...state.slice(0, existingItemIndex), ...state.slice(existingItemIndex + 1)];
            }

            return state.map((item, index) =>
                index === existingItemIndex ? {...item, counter: item.counter + action.payload.counter} : item
            );

        case REMOVE_FROM_CART:
            let indexToDel = findProductIndex(state, action.payload.id);
            return [...state.slice(0, indexToDel), ...state.slice(indexToDel + 1)];

        default:
            return state;
    }

    function findProductIndex(products, id) {
        return products.findIndex((p) => p.id === id);
    }
}
