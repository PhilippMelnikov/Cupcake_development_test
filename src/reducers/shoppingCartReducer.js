import {
    UPDATE_SHOPPING_CART,
    CLEAR_SHOPPING_CART,
} from '../actions/shoppingCartActions';

/**
 * shoppingCartReducer
 */
export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_SHOPPING_CART:
            return {
                ...state,
                items: payload.items,
            };
        case CLEAR_SHOPPING_CART:
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
};
