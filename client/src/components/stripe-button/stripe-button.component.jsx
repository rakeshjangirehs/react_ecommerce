import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    //Stripe needs price in cents and we are passing dollers.

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_OgpD46AuHAGZaQjWUj7ktgaL00BiZRBVhM";

    const onToken = (token) => {
        console.log(token);
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then((response)=>{
            console.log(response);
            alert("Payment Successful");
        }).catch(error => {
            console.log('Payment Error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please sure you use the provided credit cart.');
        });
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