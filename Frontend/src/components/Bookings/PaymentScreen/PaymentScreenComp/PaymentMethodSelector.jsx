import React from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import './PaymentMethodSelector.css';


const PaymentMethodSelector = ({ paymentMethod, setPaymentMethod }) => {
  return (
    <div className="mb-6">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setPaymentMethod('card')}
          className={`flex-1 p-4 rounded-lg border flex items-center justify-center gap-2
            ${paymentMethod === 'card' ? 'bg-blue-50 border-blue-500' : 'bg-white'}`}
        >
          <CreditCardIcon className="w-5 h-5" />
          <span>Card</span>
        </button>
        <button
          onClick={() => setPaymentMethod('digital')}
          className={`flex-1 p-4 rounded-lg border flex items-center justify-center gap-2
            ${paymentMethod === 'digital' ? 'bg-blue-50 border-blue-500' : 'bg-white'}`}
        >
          <SmartphoneIcon className="w-5 h-5" />
          <span>UPI/Wallets</span>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethodSelector;
