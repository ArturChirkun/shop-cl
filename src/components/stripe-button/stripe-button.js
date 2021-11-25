import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {

    const publishableKey = 'pk_test_51JzdU5JN9Ht23ciK9nfxmhujnrTNKa4pP3TDxpHoLa0shlA1SgiOTUeZzegX0hYTXFnLdbJuP0hYbS3wK9nxf9fR00iuPtfL61';
    const priceForStripe = price * 100;

    const onToken = (token) => {
        console.log(token)
        alert('Payment successful')
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='Shop-cl Ltd.'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />

        
    )
}

export default StripeCheckoutButton;