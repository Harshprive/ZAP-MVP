import React from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InfoIcon from '@mui/icons-material/Info';
import './CardPaymentForm.css';
const CardPaymentForm = ({ formData, handleInputChange, handleFieldFocus, handleFieldBlur, activeField }) => {
  return (
    <form className="space-y-4">
      {/* Card Number Field */}
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
        <div className={`relative flex items-center border rounded-lg overflow-hidden ${activeField === 'cardNumber' ? 'ring-2 ring-blue-500' : ''}`}>
          <CreditCardIcon className="w-5 h-5 text-gray-400 ml-3" />
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            onFocus={() => handleFieldFocus('cardNumber')}
            onBlur={handleFieldBlur}
            placeholder="1234 5678 9012 3456"
            maxLength="19"
            className="w-full p-3 pl-2 focus:outline-none"
          />
        </div>
      </div>

      {/* Card Holder Field */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Card Holder Name</label>
        <div className={`relative border rounded-lg overflow-hidden ${activeField === 'cardHolder' ? 'ring-2 ring-blue-500' : ''}`}>
          <input
            type="text"
            name="cardHolder"
            value={formData.cardHolder}
            onChange={handleInputChange}
            onFocus={() => handleFieldFocus('cardHolder')}
            onBlur={handleFieldBlur}
            placeholder="JOHN DOE"
            className="w-full p-3 focus:outline-none"
          />
        </div>
      </div>

      {/* Expiry and CVV Row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
          <div className={`relative flex items-center border rounded-lg overflow-hidden ${activeField === 'expiryDate' ? 'ring-2 ring-blue-500' : ''}`}>
            <CalendarTodayIcon className="w-5 h-5 text-gray-400 ml-3" />
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus('expiryDate')}
              onBlur={handleFieldBlur}
              placeholder="MM/YY"
              maxLength="5"
              className="w-full p-3 pl-2 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
          <div className={`relative flex items-center border rounded-lg overflow-hidden ${activeField === 'cvv' ? 'ring-2 ring-blue-500' : ''}`}>
            <InfoIcon className="w-5 h-5 text-gray-400 ml-3" />
            <input
              type="password"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              onFocus={() => handleFieldFocus('cvv')}
              onBlur={handleFieldBlur}
              placeholder="123"
              maxLength="4"
              className="w-full p-3 pl-2 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Save Card Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="saveCard"
          name="saveCard"
          checked={formData.saveCard}
          onChange={handleInputChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-900">
          Save card for future payments
        </label>
      </div>
    </form>
  );
};

export default CardPaymentForm;
