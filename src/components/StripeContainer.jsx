import React from 'react'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =  `pk_test_51Nzkf6ABiB8GSLUIbK8GEgL5D5AL5cdyTHwxG9XOiOsxRb8RqD50kcbUjc8dhWVY2Fb3RReBfwPeUgeavanb78bc00VG2hm2BU`;

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
   <Elements stripe={stripeTestPromise}>
     <PaymentForm />
    </Elements>
  )
}

export default StripeContainer