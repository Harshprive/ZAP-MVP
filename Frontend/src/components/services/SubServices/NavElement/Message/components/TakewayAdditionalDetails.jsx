// AdditionalDetails.js
import React from 'react';

const AdditionalDetails = ({ shop, timeline }) => (
  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 w-full ">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h2 className="font-bold text-lg mb-2 text-gray-900">Shop Location</h2>
        <p>{shop}</p>
      </div>
      <div>
        <h2 className="font-bold text-lg mb-2 text-gray-900">Repair Timeline</h2>
        <p>Date Received: {timeline.received}</p>
        <p>Estimated Completion: {timeline.completion}</p>
      </div>
    </div>
  </div>
);

export default AdditionalDetails;