// DeviceDetails.js
import React from 'react';

const DeviceDetails = ({ device }) => (
  <div>
    <h2 className="font-bold text-lg mb-2 text-gray-900">Device Information</h2>
    <p>Type: {device.type}</p>
    <p>Brand: {device.brand}</p>
    <p>Model: {device.model}</p>
    <p>Serial Number: {device.serialNumber}</p>
  </div>
);

export default DeviceDetails;