import React from 'react';
import { Badge, Card, CardContent } from '@mui/material'; // MUI imports
import { CalendarDays, CheckCircle, Clock, Package, AlertCircle, ChevronRight } from 'lucide-react';

const CreativeServiceOrder = () => {
  const orderDetails = {
    serviceName: "Premium Network Maintenance",
    orderId: "ORD-2025-001",
    confirmedDate: "2025-01-02T10:30:00",
    completedDate: "2025-01-03T15:45:00",
    serviceLevel: "high",
    status: "completed"
  };

  const getServiceLevelColor = (level) => {
    const colors = {
      high: "bg-gradient-to-r from-red-500 to-pink-500",
      mid: "bg-gradient-to-r from-yellow-500 to-orange-500",
      low: "bg-gradient-to-r from-green-500 to-emerald-500"
    };
    return colors[level];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <Card className="max-w-3xl mx-auto overflow-hidden shadow-xl">
        {/* Header Banner */}
        <div className={`${getServiceLevelColor(orderDetails.serviceLevel)} p-6 text-white`}>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">{orderDetails.serviceName}</h1>
              <div className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span className="font-mono">{orderDetails.orderId}</span>
              </div>
            </div>
            <Badge
              variant="dot"
              color="secondary"
              className="bg-white/20 text-white backdrop-blur-sm"
            >
              {orderDetails.serviceLevel.toUpperCase()} PRIORITY
            </Badge>
          </div>
        </div>

        <CardContent>
          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Confirmed Date</p>
                  <p className="font-semibold">{formatDate(orderDetails.confirmedDate)}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Completed Date</p>
                  <p className="font-semibold">{formatDate(orderDetails.completedDate)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pt-8">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 to-green-200" />
            
            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="w-16 h-16 flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 ml-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-blue-600">Order Confirmed</h3>
                  <p className="text-gray-600">{formatDate(orderDetails.confirmedDate)}</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-16 h-16 flex items-center justify-center relative z-10">
                  <div className="w-4 h-4 rounded-full bg-green-500 group-hover:scale-125 transition-transform" />
                </div>
                <div className="flex-1 bg-white rounded-xl p-4 ml-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-green-600">Order Completed</h3>
                  <p className="text-gray-600">{formatDate(orderDetails.completedDate)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Service Level Indicator */}
          <div className="mt-8 bg-gray-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Service Level Details</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertCircle className={`w-5 h-5 ${
                  orderDetails.serviceLevel === 'high' ? 'text-red-500' :
                  orderDetails.serviceLevel === 'mid' ? 'text-yellow-500' : 'text-green-500'
                }`} />
                <span className="font-medium">Priority Level</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">{orderDetails.serviceLevel.toUpperCase()}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreativeServiceOrder;
