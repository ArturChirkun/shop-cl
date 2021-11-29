import React from "react";

import { CartItemContainer, CartItemImgStyles, CartItemDetailsStyles, CartItemName } from "./cart-item.styles";


const CartItem = ({item :{imageUrl, price, name, quantity}}) => {

    return (
        <CartItemContainer>
            <CartItemImgStyles src={imageUrl} alt='item' />
            <CartItemDetailsStyles>
                <CartItemName> {name} </CartItemName>
                <span className='price'> {quantity} X {price} </span>
            </CartItemDetailsStyles>
        </CartItemContainer>
    )
}



export default CartItem;