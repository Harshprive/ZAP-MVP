import React from 'react';
import { Card, CardHeader, CardContent } from '@mui/material';

const CurrentPlan = ({ planName, price, features }) => (
  <section className="space-y-3 mt-[30px]">
    <h3 className="font-medium text-purple-900 font-semibold">Current Plan</h3>
    <Card>
      <CardHeader title={planName} subheader={`Rs. ${price} /month`} />
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </section>
);

export default CurrentPlan;
