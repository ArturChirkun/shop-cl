import React from "react";

import { CheckoutPageContainer, CheckoutHeaderContainer, CheckoutHeaderBlockContainer, TotalContainer, WarningContainer } from "./checkout.styles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemsTotal } from "../../components/redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

const Checkout = ({cartItems, total}) => {

    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <CheckoutHeaderBlockContainer>
                    <span>
                        Product
                    </span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer>
                    <span>
                        Description
                    </span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer>
                    <span>
                        Quantity
                    </span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer>
                    <span>
                        Price
                    </span>
                </CheckoutHeaderBlockContainer>
                <CheckoutHeaderBlockContainer>
                    <span>
                        Remove
                    </span>
                </CheckoutHeaderBlockContainer>

            </CheckoutHeaderContainer>

                {cartItems.map((cartItem) => ( <CheckoutItem key={cartItem.id} cartItem={cartItem} />))}
                
            <TotalContainer>
                ${total}
            </TotalContainer>
            <WarningContainer>
                *Please use the following test credit cart for payments*
                <br/>
                    4242 4242 4242 4242 | Future Date | any 3 digits
            </WarningContainer>
            <StripeCheckoutButton price={total} />
        </CheckoutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(Checkout);