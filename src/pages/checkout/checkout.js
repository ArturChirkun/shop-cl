import React from "react";

import './checkout.scss';

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartItemsTotal } from "../../components/redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button";

const Checkout = ({cartItems, total}) => {

    return (
        <div className="checkout-page">
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>
                        Product
                    </span>
                </div>
                <div className='header-block'>
                    <span>
                        Description
                    </span>
                </div>
                <div className='header-block'>
                    <span>
                        Quantity
                    </span>
                </div>
                <div className='header-block'>
                    <span>
                        Price
                    </span>
                </div>
                <div className='header-block'>
                    <span>
                        Remove
                    </span>
                </div>

            </div>

                {cartItems.map((cartItem) => ( <CheckoutItem key={cartItem.id} cartItem={cartItem} />))}
                
            <div className='total'>
                ${total}
            </div>
            <div className='test-warning'>
                *Please use the following test credit cart for payments*
                <br/>
                    4242 4242 4242 4242 | Future Date | any 3 digits
            </div>
            <StripeCheckoutButton price={total} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(Checkout);