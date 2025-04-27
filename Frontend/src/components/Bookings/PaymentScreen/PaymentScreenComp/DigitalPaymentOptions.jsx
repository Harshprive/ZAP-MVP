import React from 'react';
import './DigitalPaymentOptions.css';

const DigitalPaymentOptions = ({ digitalPayments, formData, handleInputChange }) => {
  return (
    <div className="space-y-4 ">
      {digitalPayments.map((method) => (
        <button
          key={method.id}
          className="w-full p-4 bg-white rounded-lg border hover:bg-gray-50 flex items-center gap-3"
        >
          {/* Render image, SVG, or icon */}
          {typeof method.icon === 'string' ? (
            <img src={method.icon} alt={`${method.name} icon`} className="w-8 h-8" />
          ) : (
            <span className="text-2xl">{method.icon}</span>
          )}
          
          <span className="flex-1 text-left font-medium">{method.name}</span>
          
          {method.id === 'upi' && (
            <input
              type="text"
              placeholder="Enter UPI ID"
              className="p-2 border rounded outline-none"
              value={formData.upiId}
              onChange={(e) => handleInputChange({ target: { name: 'upiId', value: e.target.value } })}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default DigitalPaymentOptions;
