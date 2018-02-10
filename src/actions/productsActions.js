export const START_FETCHING = 'START_FETCHING';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';

/**
 * start fetching and set loading to true
 */
export const startFetching = () => ({
    type: START_FETCHING,
    payload: {},
});

/**
 * put products in store
 * @param {Array} products - Products to put in store
 */
export const fetchProducts = (products) => ({
    type: FETCH_PRODUCTS,
    payload: {
        items: products,
    },
});

/**
 * select product to show details and potentially add to shopping cart
 * @param {Object} product - Selected product
 */
export const selectProduct = (product) => ({
    type: SELECT_PRODUCT,
    payload: {
        item: product,
    },
});

/**
 * get products from server
 */
export const getProducts = () => {
    return function (dispatch) {
        dispatch(startFetching());
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then((products) => {
                dispatch(fetchProducts(products.slice(0, 101)));
            })
            .catch(err => console.log(err));
    }
}