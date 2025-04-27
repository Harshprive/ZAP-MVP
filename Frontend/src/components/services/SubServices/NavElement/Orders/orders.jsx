import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Sample service orders data
const initialServiceOrders = [
  {
    id: 'SO-001',
    date: '2024-03-15',
    customer: 'John Doe',
    service: 'Laptop Repair',
    status: 'Completed',
    totalCost: 199.99,
    avatar: '📱',
  },
  {
    id: 'SO-002',
    date: '2024-03-20',
    customer: 'Jane Smith',
    service: 'Network Installation',
    status: 'In Progress',
    totalCost: 350.5,
    avatar: '🌐',
  },
  {
    id: 'SO-003',
    date: '2024-03-22',
    customer: 'Mike Johnson',
    service: 'Software Consultation',
    status: 'Pending',
    totalCost: 150.0,
    avatar: '💻',
  },
  {
    id: 'SO-004',
    date: '2024-03-25',
    customer: 'Emily Brown',
    service: 'Hardware Upgrade',
    status: 'Completed',
    totalCost: 275.75,
    avatar: '🖥️',
  },
];

const ServiceOrdersScreen = () => {
  const [serviceOrders, setServiceOrders] = useState(initialServiceOrders);
  const [searchTerm, setSearchTerm] = useState('');

  // Status icon and color mapping
  const getStatusDetails = (status) => {
    switch (status) {
      case 'Completed':
        return {
          icon: '✅',
          color: 'bg-green-50 text-green-800 border-green-200',
        };
      case 'In Progress':
        return {
          icon: '⏳',
          color: 'bg-yellow-50 text-yellow-800 border-yellow-200',
        };
      case 'Pending':
        return {
          icon: '🔵',
          color: 'bg-blue-50 text-blue-800 border-blue-200',
        };
      default:
        return {
          icon: '',
          color: 'bg-gray-50 text-gray-800 border-gray-200',
        };
    }
  };

  // Filter service orders based on search term
  const filteredOrders = serviceOrders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Service Orders
            </h1>
            <p className="text-gray-500 mt-2">Track and manage your service requests</p>
          </div>

          {/* Search Bar */}
          
        </div>

        {/* Orders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.map((order) => {
            const { icon, color } = getStatusDetails(order.status);
            return (
              <div
                key={order.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{order.avatar}</div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{order.service}</h2>
                      <p className="text-gray-500 text-sm">{order.customer}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Order ID</p>
                      <p className="font-semibold">{order.id}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Date</p>
                      <p className="font-semibold">{order.date}</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className={`px-3 py-1 rounded-full border ${color} flex items-center space-x-2`}>
                      <span>{icon}</span>
                      <span className="text-sm">{order.status}</span>
                    </div>
                    <div className="text-xl font-bold text-purple-600">${order.totalCost.toFixed(2)}</div>
                  </div>

                  <Link to='/services/view-order-details'><button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition duration-300 flex items-center justify-center">
                    📝 <span className="ml-2">View Details</span>
                  </button></Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🕵️</div>
            <h2 className="text-2xl font-bold text-gray-600 mb-2">No Orders Found</h2>
            <p className="text-gray-500">Try adjusting your search or check back later</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceOrdersScreen;
