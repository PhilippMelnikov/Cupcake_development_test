import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Modal from 'react-modal';
import Main from './containers/Main';

/**
 * App component
 */
class App extends Component {

  componentDidMount() {
    Modal.setAppElement('body');
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Main/>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
