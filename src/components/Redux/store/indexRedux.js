import { configureStore } from '@reduxjs/toolkit';
import Reducer from '../reducers/Reducer';

const store = configureStore({
  reducer: {
    cart: Reducer,
  },
});

export default store;
