import React from "react";

import { useDispatch } from "react-redux";

import { CheckoutItemContainer, ImageContainer, CheckoutItemsDetails, QuantityContainer, RemoveButton} from './checkout-item.styles';

import { clearItemFromCart, removeItemFromCart, addItem } from "../redux/cart/actions";


const CheckoutItem = ({ cartItem }) => {

    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch();

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'/>
            </ImageContainer>
            <CheckoutItemsDetails> {name}</CheckoutItemsDetails>

            
            <QuantityContainer>
                <div onClick={() => dispatch(removeItemFromCart(cartItem))}>	&#10094;</div>
                    <span> {quantity} </span>
                <div onClick={() => dispatch(addItem(cartItem))}>	&#10095;</div> 
            </QuantityContainer>

            <CheckoutItemsDetails> {price} </CheckoutItemsDetails>

            <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}> &#215; </RemoveButton>
            
        </CheckoutItemContainer>
    )
}



export default CheckoutItem;