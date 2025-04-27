import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import { MessageCircle, Phone, Camera, Edit2, Send, MapPin, Mail, Instagram } from 'lucide-react';

const ProviderDashboard = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      userName: "John Doe",
      description: "Need plumbing service for bathroom repair",
      contact: "+1234567890",
      status: "pending"
    },
    {
      id: 2,
      userName: "Jane Smith",
      description: "Kitchen sink installation required",
      contact: "+1987654321",
      status: "pending"
    }
  ]);

  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [providerProfile, setProviderProfile] = useState({
    name: "Mike's Plumbing Services",
    description: "Professional plumbing services with 15 years of experience",
    address: "123 Service Street, Plumber's Lane, NY 10001",
    email: "mike@plumbingservices.com",
    contact: "+1234567890",
    instagram: "@mikeplumbing",
    workPhotos: ["/api/placeholder/300/200", "/api/placeholder/300/200", "/api/placeholder/300/200"]
  });

  const handleAcceptRequest = (request) => {
    setRequests(requests.filter(r => r.id !== request.id));
    setAcceptedRequests([...acceptedRequests, { ...request, status: "accepted" }]);
  };

  const sendInitialMessage = (request) => {
    console.log(`Sending initial message to ${request.userName}: "Please share your contact info"`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full bg-sky-100">
          <TabsTrigger 
            value="profile" 
            className="flex-1 data-[state=active]:bg-sky-500 data-[state=active]:text-white"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger 
            value="requests" 
            className="flex-1 data-[state=active]:bg-sky-500 data-[state=active]:text-white"
          >
            Requests
          </TabsTrigger>
          <TabsTrigger 
            value="accepted" 
            className="flex-1 data-[state=active]:bg-sky-500 data-[state=active]:text-white"
          >
            Accepted
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card className="bg-sky-50">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-sky-800">{providerProfile.name}</h2>
                <Button variant="outline" size="sm" className="border-sky-500 text-sky-500 hover:bg-sky-100">
                  <Edit2 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-600">{providerProfile.description}</p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Contact Information */}
                  <div className="space-y-3 bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-sky-700 mb-3">Contact Information</h3>
                    
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-sky-500" />
                      <span className="text-gray-600">{providerProfile.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Mail className="w-5 h-5 text-sky-500" />
                      <span className="text-gray-600">{providerProfile.email}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Phone className="w-5 h-5 text-sky-500" />
                      <span className="text-gray-600">{providerProfile.contact}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Instagram className="w-5 h-5 text-sky-500" />
                      <span className="text-gray-600">{providerProfile.instagram}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-sky-700">Work Portfolio</h3>
                <div className="grid grid-cols-3 gap-4">
                  {providerProfile.workPhotos.map((photo, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={photo} 
                        alt={`Work ${index + 1}`} 
                        className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Requests Tab */}
        

        {/* Accepted Tab */}
        
      </Tabs>
    </div>
  );
};

export default ProviderDashboard;
