import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { CalendarDays, Clock } from "lucide-react";

const RescheduledAppointments = () => {
  // Sample data - replace with your actual data structure
  const appointments = [
    {
      id: 1,
      patientName: "John Doe",
      originalDate: "2025-01-04",
      originalTime: "09:00 AM",
      newDate: "2025-01-06",
      newTime: "02:00 PM",
      reason: "Doctor unavailable"
    },
    {
      id: 2,
      patientName: "Jane Smith",
      originalDate: "2025-01-05",
      originalTime: "11:30 AM",
      newDate: "2025-01-07",
      newTime: "10:00 AM",
      reason: "Patient request"
    }
  ];

  return (
   <div className='flex justify-center min-h-[70vh] items-center'> <div className="shadow-xl bg-white w-[100%] h-[300px] my-auto mx-[100px]">
   <CardHeader
     title={
       <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
         <CalendarDays className="h-5 w-5" />
         Rescheduled Appointments
       </Typography>
     }
   />
   <CardContent>
     <div className="overflow-x-auto">
       <table className="w-full border-collapse">
         <thead className="bg-gray-50">
           <tr>
             <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Patient Name</th>
             <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Original Schedule</th>
             <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">New Schedule</th>
             <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Reason</th>
           </tr>
         </thead>
         <tbody className="divide-y divide-gray-200">
           {appointments.map((appointment) => (
             <tr key={appointment.id} className="hover:bg-gray-50">
               <td className="px-4 py-3 text-sm font-medium text-gray-900">
                 {appointment.patientName}
               </td>
               <td className="px-4 py-3 text-sm text-gray-500">
                 <div className="flex items-center gap-2">
                   <CalendarDays className="h-4 w-4 text-gray-500" />
                   {appointment.originalDate}
                   <Clock className="h-4 w-4 ml-2 text-gray-500" />
                   {appointment.originalTime}
                 </div>
               </td>
               <td className="px-4 py-3 text-sm text-gray-500">
                 <div className="flex items-center gap-2">
                   <CalendarDays className="h-4 w-4 text-gray-500" />
                   {appointment.newDate}
                   <Clock className="h-4 w-4 ml-2 text-gray-500" />
                   {appointment.newTime}
                 </div>
               </td>
               <td className="px-4 py-3 text-sm text-gray-500">
                 {appointment.reason}
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   </CardContent>
 </div></div>
  );
};

export default RescheduledAppointments;
