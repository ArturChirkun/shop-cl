import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { toggleCartHidden } from "../redux/cart/actions";

import { selectCartItemsCount } from "../redux/cart/cart.selectors";

import { CartIconContainer, ShoppingIconStyles, ItemCountStyles } from "./cart-icon.styles";

const CartIcon = () => {

    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();
    

    return (
        <CartIconContainer onClick={() => dispatch(toggleCartHidden()) }>
            <ShoppingIconStyles />
            <ItemCountStyles> {itemCount} </ItemCountStyles>
        </CartIconContainer>
    )
}



export default CartIcon;
