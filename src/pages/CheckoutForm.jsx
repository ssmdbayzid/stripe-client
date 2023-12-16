import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Fetch the client secret from your backend
    fetch('http://localhost:6000/booking', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const handlePayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          // Include billing details here if needed
        },
      },
    });

    if (result.error) {
      console.error(result.error.message);
      // Handle payment failure/error
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment successful!');
        // Handle successful payment
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    handlePayment();
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
