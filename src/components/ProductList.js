import React from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

export const ProductList = (props) => {
    const { items, HandleProductSelect } = props;
    const styles = {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding: '0 23px',
            margin: '0 auto',
            maxWidth: 1104,
        },
        gridList: {
            width: '100%',
            height: 'auto',
            overflowY: 'auto',
            justifyContent: 'flex-start',
        },
        titleStyle: {
            cursor: 'pointer'
        }
    };
    return (
        <div style={styles.root}>
            <h1 className="product-list-header">Products we offer:</h1>
            <GridList
                cellHeight={180}
                style={styles.gridList}
                cols={'auto'}
            >   
                {items.map((item) => (
                    <GridTile
                        key={item.id}
                        title={item.title}
                        actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        style={styles.titleStyle}
                        onClick={e => HandleProductSelect(item)}
                    >
                        <img src={item.thumbnailUrl} />
                    </GridTile>
                ))}
            </GridList>
        </div>
    )
}

/**
 * @type {Object}
 * @property {Array} items - Items to display
 * @property {Function} HandleProductSelect - Handle selecting item from the list
 *
 */
ProductList.propTypes = {
    items: PropTypes.array,
    HandleProductSelect: PropTypes.func
};