import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import './dialog.css';

const modalStyles = {
    overlay : {
     position          : 'fixed',
     top               : 0,
     left              : 0,
     right             : 0,
     bottom            : 0,
     backgroundColor   : 'rgba(0, 0, 0, 0.75)',
     zIndex            : 100
   },
   content : {
     position                   : 'absolute',
     top                        : '50%',
     left                       : '50%',
     right                      : 'auto',
     bottom                     : 'auto',
     marginRight                : '-50%',
     transform                  : 'translate(-50%, -50%)',
     background                 : '#fff',
     overflow                   : 'hidden',
     WebkitOverflowScrolling    : 'touch',
     borderRadius               : '0',
     width                      : '460px',
     outline                    : 'none',
     padding                    : '25px 30px'
   }
  };

/**
 * ProductDetailsDialog component
 */
export default class ProductDetailsDialog extends Component {
    constructor(props) {
        super(props);
        /**
         * @type {Object}
         * @property {Number} productAmount - amount of items to put in shopping cart
         */
        this.state = {
            productAmount: 1
        }
    }

    componentWillMount() {
        this.setState({
            productAmount: 1
        });
    }

    /**
     * handle change event on product amount input
     * @param {SytheticEvent} event
     */
    onChange = (event) => {
        const numberRegex = /^\d+$/;
        let value = event.target.value;
        if (value === '') {
            value = '0';
        }
        if (!numberRegex.test(value)) {
            return false;
        }
        const number = +value;
        this.setState({
            productAmount: number
        })
    }

    /**
     * handle close click
     */
    handleClose = () => {
        this.setState({
            productAmount: 1
        });
        this.props.handleClose();
    }

    /**
     * handle submit click
     */
    handleSubmitClick = () => {
        const { item, handleProductAdd } = this.props;
        handleProductAdd(item, this.state.productAmount);
        this.setState({
            productAmount: 1
        });
    }

    render() {
        const { open, item} = this.props;
        return (
            <Modal
              isOpen={open}
              onRequestClose={this.handleClose}
              style={modalStyles}
            >
              <div className="img-container">
                <img src={item.url} alt="image"/>
                <div className="img-overlay">
                    <span className="img-overlay-title">{item.title}</span>
                </div>
              </div>
              <TextField
                id="num"
                hintText="Amount of items"
                floatingLabelText="Amount of items"
                floatingLabelFixed={true}
                onChange={this.onChange}
                value={this.state.productAmount}
              />
              <div className="product-description">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec eget felis viverra, posuere erat ac, luctus libero. 
                    Aenean ultrices, purus a ornare gravida, turpis arcu feugiat ex, 
                    ac gravida metus tellus ac purus.
                </p>
              </div>
              <div className="buttons-container pull-right">
                <FlatButton
                    label="Close"
                    primary={true}
                    onClick={this.handleClose}
                />
                <FlatButton
                    label="Add to shopping cart"
                    primary={true}
                    onClick={this.handleSubmitClick}
                    disabled={this.state.productAmount === 0}
                />
              </div>
            </Modal>
        )
    }
}

/**
 * @type {Object}
 * @property {Boolean} open - Flag that regulates whether modal is open or not 
 * @property {Object} item - Item to display
 * @property {Function} handleClose - Function closing modal
 * @property {Function} handleProductAdd - Function to handle adding product to shopping cart
 *
 */
ProductDetailsDialog.propTypes = {
    open: PropTypes.bool,
    item: PropTypes.object,
    handleClose: PropTypes.func,
    handleProductAdd: PropTypes.func
};