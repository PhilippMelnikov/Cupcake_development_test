import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import initialState from './store/initialState';

const store = configureStore(initialState);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
