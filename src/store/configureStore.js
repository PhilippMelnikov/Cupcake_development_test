import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import combinedReducer from '../reducers';

// compose with redux devtools extension
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Create and configure redux store from optional predefined one
 * @param {Object} predefinedStore
 */
const configureStore = (predefinedStore) => {
    return createStore(
        combinedReducer,
        predefinedStore,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
            ),
        ),
    );
};

export default configureStore;
