import React from "react";

import { CheckoutItemContainer, ImageContainer, CheckoutItemsDetails, QuantityContainer, RemoveButton} from './checkout-item.styles';

import { connect } from "react-redux";

import { clearItemFromCart, removeItemFromCart, addItem } from "../redux/cart/actions";


const CheckoutItem = ({cartItem, clearItemFromCart, removeItemFromCart, addItem}) => {

    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'/>
            </ImageContainer>
            <CheckoutItemsDetails> {name}</CheckoutItemsDetails>

            
            <QuantityContainer>
                <div onClick={() => removeItemFromCart(cartItem)}>	&#10094;</div>
                    <span> {quantity} </span>
                <div onClick={() => addItem(cartItem)}>	&#10095;</div> 
            </QuantityContainer>

            <CheckoutItemsDetails> {price} </CheckoutItemsDetails>

            <RemoveButton onClick={() => clearItemFromCart(cartItem)}> &#215; </RemoveButton>
            
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    clearItemFromCart : (item) => dispatch(clearItemFromCart(item)),
    removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);