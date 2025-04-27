import React from 'react';
import PricingCard from './PricingCard';
import '../style.css';

const PricingPlans = () => {
  const features = [
    'Basic Service listing',
    'Email Support',
    '1 Featured Listing',
    'Basic Analytics',
    'Standard Visibility',
  ];

  const plans = [
    {
      type: 'Monthly Plan',
      features: features,
    },
    {
      type: 'Semi-Annual Plan',
      features: features,
    },
    {
      type: 'Annual Plan',
      features: features,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      {plans.map((plan, index) => (
        <PricingCard key={index} planType={plan.type} features={plan.features} />
      ))}
    </div>
  );
};

export default PricingPlans;
