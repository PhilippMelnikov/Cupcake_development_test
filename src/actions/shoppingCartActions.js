export const UPDATE_SHOPPING_CART = 'UPDATE_SHOPPING_CART';
export const CLEAR_SHOPPING_CART = 'CLEAR_SHOPPING_CART';

/**
 * update content of shopping cart
 * @param {Array} items - Items in shopping cart
 */
export const updateShoppingCart = (items) => ({
    type: UPDATE_SHOPPING_CART,
    payload: {
        items
    },
});

/**
 * empty content of shopping cart
 */
export const clearShoppingCart = () => ({
    type: CLEAR_SHOPPING_CART,
    payload: {},
});