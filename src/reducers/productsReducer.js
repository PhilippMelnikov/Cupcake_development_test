import {
    START_FETCHING,
    FETCH_PRODUCTS,
    SELECT_PRODUCT,
} from '../actions/productsActions';

/**
 * productsReducer
 */
export default (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case START_FETCHING:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: payload.items,
                loading: false
            };
        case SELECT_PRODUCT:
            return {
                ...state,
                selectedItem: payload.item
            };
        default:
            return state;
    }
};
