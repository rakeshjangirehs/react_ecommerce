import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const StripeCheckoutButton = ({ price }) => {
    //Stripe needs price in cents and we are passing dollers.

    const priceForStripe = price * 1000;
    const publishableKey = "pk_test_OgpD46AuHAGZaQjWUj7ktgaL00BiZRBVhM";

    const onToken = (token) => {
        console.log(token);
        // this token will be sent to back end server through api call to create charges and recieve payments.
        alert('Payment Successful');
    }
    return (
        <StripeCheckout
            label= 'Pay Now'
            name= 'Home Clothing Store'
            billingAddress
            shippingAddress
            image= 'https://svgshare.com/i/CUz.svg'
            description= {`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel= 'Pay Now'
            token= {onToken}
            stripeKey= {publishableKey}
        />
    );
}

export default StripeCheckoutButton;