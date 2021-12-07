import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import { toggleCartHidden } from "../redux/cart/actions";

import { selectCartItemsCount } from "../redux/cart/cart.selectors";

import { CartIconContainer, ShoppingIconStyles, ItemCountStyles } from "./cart-icon.styles";

const CartIcon = ({toggleCartHidden, itemCount}) => {

    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconStyles />
            <ItemCountStyles> {itemCount} </ItemCountStyles>
        </CartIconContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    itemCount : selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
