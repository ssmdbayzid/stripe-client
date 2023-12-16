import React from 'react';

// import PaymentForm from './pages/PaymentForm';
import Payment_Success from './pages/Payment_Success';
import Payment_Cancel from './pages/Payment_Cancel';
import { Route, Routes } from 'react-router';
import Payment from './payment/Payment'

const App = () => {
  return (
    <Routes>
    <Route path="/" element={< Payment />} />
    <Route path="/success" element={<Payment_Success/>} />
    <Route path="/cancel" element={<Payment_Cancel/> } />
    
    </Routes>
  );
};

export default App;

