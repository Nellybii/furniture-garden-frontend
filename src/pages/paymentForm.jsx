// src/App.js
import React, { useState } from 'react';
import { api } from '../utils/utils';

function MpesaPay() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const initiatePayment = async () => {
    try {
      if (!phoneNumber || !amount) {
        alert('Please provide both phone number and amount.');
        return;
      }

      setLoading(true);

      const response = await api.post('/mpesa/stk_push', {
        phoneNumber,
        amount,
      });
      console.log(response.data);
      const paymentUrl = response.data.paymentUrl;
    } catch (error) {
      console.error('Error initiating payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Payment Integration</h1>
      <label>
        Phone Number:
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Amount:
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br />
      <button onClick={initiatePayment} disabled={loading}>
        {loading ? 'Initiating Payment...' : 'Initiate Payment'}
      </button>
    </div>
  );
}

export default MpesaPay;
