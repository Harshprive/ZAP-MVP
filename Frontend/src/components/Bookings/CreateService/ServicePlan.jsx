import React from 'react'
import PricingPlans from '../CreateService/components/PricingPlans'
const ServicePlan = () => {
  return (
    <div className='p-[10px] w-full h-full'>
        <div className="pb-[10px] md:pl-[150px] pt-[20px]">
          <h5>
            Home/<span className="text-red-600">Create Service</span>
          </h5>
        </div>
        <div className="pb-[10px]  pt-[20px] ">
          <h3 className='md:text-[40px] text-[30px] w-[100%] mb-0 text-red flex justify-center items-center font-medium text-[#4F23B8] font-semibold'>
            Choose Your Plan
          </h3>
        </div>
        
      <PricingPlans/>
    </div>
  )
}

export default ServicePlan;
