import { combineReducers } from 'redux';
import products from './productsReducer';
import shoppingCart from './shoppingCartReducer';

const combinedReducers = combineReducers({
    products,
    shoppingCart,
});

export default combinedReducers;