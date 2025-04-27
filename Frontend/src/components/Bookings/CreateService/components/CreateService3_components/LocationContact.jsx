import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationContact = ({ address, phone, email, hours }) => (
  <section className="space-y-3 mt-[30px]">
    <h3 className="font-medium text-purple-900 font-semibold">Location & Contact</h3>
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <MapPin className="w-4 h-4 text-gray-500 mt-1" />
        <div className="text-sm text-gray-600">
          <p>Home</p>
          <p>{address}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-600">{phone}</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-600">{email}</span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-gray-500" />
        <span className="text-sm text-gray-600">{hours}</span>
      </div>
    </div>
  </section>
);

export default LocationContact;
