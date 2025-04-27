// CustomerDetails.js
import React from 'react';

const CustomerDetails = ({ customer }) => (
  <div>
    <h2 className="font-bold text-lg mb-2 text-gray-900">Customer Details</h2>
    <p>Name: {customer.name}</p>
    <p>Phone: {customer.phone}</p>
    <p>Email: {customer.email}</p>
  </div>
);

export default CustomerDetails;