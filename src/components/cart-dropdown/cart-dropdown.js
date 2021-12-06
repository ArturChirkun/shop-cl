import React from "react";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../redux/cart/cart.selectors";

import  { toggleCartHidden } from "../redux/cart/actions"

import CustomButton from '../custom-button/custom-button';
import CartItem from "../cart-item/cart-item";

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, dispatch}) => {

    const navigate = useNavigate()
    return (
        <CartDropdownContainer>
            <CartItemsContainer >
            { 
                cartItems.length ?
                cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem}/>)
                : <EmptyMessageContainer> Your cart is empty</EmptyMessageContainer>
            }

            </CartItemsContainer>

            <CustomButton onClick={() => 
                {navigate('/checkout'); 
                dispatch(toggleCartHidden())}
                }> 
            GO TO CHECKOUT 
            </CustomButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);