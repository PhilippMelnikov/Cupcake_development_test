import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Badge from 'material-ui/Badge';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import * as productsActions from '../actions/productsActions';
import * as shoppingCartActions from '../actions/shoppingCartActions';
import { ProductList } from '../components/ProductList';
import ProductDetailsDialog from '../components/ProductDetailsDialog';

/**
 * Main component
 */
class Main extends Component {

    constructor(props) {
        super(props);
        /**
         * @type {Object}
         * @property {Boolean} openDetailsDialog - Property regulates whether productDetailsModal is open or not
         */
        this.state = {
            openDetailsDialog: false,
        }
    }

    componentWillMount() {
        const { getProducts } = this.props.productsActions;
        getProducts();
    }

    /**
     * select product to show it's details in modal
     * and potentially add to shopping cart
     * @param {Object} product - Product to show details of
     */
    HandleProductSelect = (product) => {
        const { selectProduct } = this.props.productsActions;
        selectProduct(product);
        this.setState({
            openDetailsDialog: true,
        });
    }

    /**
     * add item to shopping cart
     * @param {Object} product - Product to add to shopping cart
     * @param {Number} amount - Amount of items of that product
     */
    handleProductAdd = (product, amount) => {
        const { updateShoppingCart } = this.props.shoppingCartActions;
        const { shoppingCartItems } = this.props;
        let itemAlreadyInShoppingCart = false;
        const newShoppingCartItems = shoppingCartItems.map((item) => {
            if (item.product.id === product.id) {
                itemAlreadyInShoppingCart = true;
                item.amount += amount;
            }
            return item;
        });
        if (!itemAlreadyInShoppingCart) {
            const item = {
                product,
                amount
            }
            newShoppingCartItems.push(item);
        }
        updateShoppingCart(newShoppingCartItems);
        this.setState({
            openDetailsDialog: false,
        });
    }

    /**
     * close product details modal
     */
    handleCloseClick = () => {
        this.setState({
            openDetailsDialog: false,
        });
    }

    render() {
        return (
            <div className="wrapper">
                <AppBar
                    title="Cupcake store"
                    iconElementRight={
                        <Badge
                            badgeContent={this.props.shoppingCartItems.reduce((prevValue, item) => prevValue + item.amount, 0)}
                            secondary={true}
                        >
                            <ActionShoppingCart color={'#fff'} />
                        </Badge>
                    }
                />
                <ProductList 
                    items={this.props.products}
                    HandleProductSelect={this.HandleProductSelect}
                />
                {
                    this.props.selectedItem && <ProductDetailsDialog
                    open={this.state.openDetailsDialog}
                    item={this.props.selectedItem}
                    handleClose={this.handleCloseClick}
                    handleProductAdd={this.handleProductAdd}
                />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.items,
        selectedItem: state.products.selectedItem,
        shoppingCartItems: state.shoppingCart.items,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        productsActions: bindActionCreators(productsActions, dispatch),
        shoppingCartActions: bindActionCreators(shoppingCartActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)