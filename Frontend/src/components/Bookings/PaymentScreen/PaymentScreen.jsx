import React, { useState } from 'react';
import CardPaymentForm from '../PaymentScreen/PaymentScreenComp/CardPaymentForm';
import DigitalPaymentOptions from '../PaymentScreen/PaymentScreenComp/DigitalPaymentOptions';
import PaymentMethodSelector from '../PaymentScreen/PaymentScreenComp/PaymentMethodSelector';
import LockIcon from '@mui/icons-material/Lock';
import './paymentScreen.css'
const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
    saveCard: false,
    upiId: ''
  });
  const [activeField, setActiveField] = useState(null);

  const digitalPayments = [
    {
      id: 'gpay',
      name: 'Google Pay',
      icon: 'https://www.svgrepo.com/show/353822/google-pay-icon.svg', // Image URL
    },
    {
        id: 'phonepay',
        name: 'Phone Pay',
        icon: 'https://th.bing.com/th?id=ODLS.b4926143-75cf-44a8-97d2-828ca65cddbe&w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2', // Path to local image
      },
    {
      id: 'paytm',
      name: 'Paytm',
      icon: 'https://play-lh.googleusercontent.com/2tH3ybpe3Tb5y2vamr4s0IJ-ffW83ouOFl4qDeZ8qvKdil5OjMN5_kiQviniaIBz420=s48-rw' 
    },
    {
      id: 'upi',
      name: 'UPI',
      icon: 'https://th.bing.com/th?id=ODL.34091f885413e57464b82d15b97f5e24&w=110&h=110&c=6&rs=1&qlt=90&o=6&dpr=1.3&pid=23.1', // Path to local image
    },
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', { method: paymentMethod, data: formData });
  };

  const handleFieldFocus = (fieldName) => setActiveField(fieldName);
  const handleFieldBlur = () => setActiveField(null);

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 min-h-screen flex mt-3
     ">
      <div className='h-full w-full'>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Payment Details</h1>
      <h3 className='mt-0 mb-4 text-gray-400'>Choose your preffered payment method</h3>

      <PaymentMethodSelector paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />

      {paymentMethod === 'digital' ? (
        <DigitalPaymentOptions digitalPayments={digitalPayments} formData={formData} handleInputChange={handleInputChange} />
      ) : (
        <CardPaymentForm formData={formData} handleInputChange={handleInputChange} handleFieldFocus={handleFieldFocus} handleFieldBlur={handleFieldBlur} activeField={activeField} />
      )}

      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
      >
        <LockIcon />
        Pay Securely
      </button>
      </div>
    </div>
  
  );
};

export default PaymentPage;
