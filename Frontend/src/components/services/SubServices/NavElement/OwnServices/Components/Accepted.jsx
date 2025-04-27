import React from 'react'
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import Button from '@mui/material/Button';
import { MessageCircle, Phone, Camera, Edit2, Send, MapPin, Mail, Instagram } from 'lucide-react';
const Accepted = () => {
    const [acceptedRequests, setAcceptedRequests] = useState([
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


        const sendInitialMessage = (request) => {
            console.log(`Sending initial message to ${request.userName}: "Please share your contact info"`);
          };
        
  return (
    <div>
      <div value="accepted">
          <div className="space-y-4">
            {acceptedRequests.map((request) => (
              <Card key={request.id} className="bg-sky-50">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-sky-800">{request.userName}</h3>
                      <p className="text-gray-600 mt-2">{request.description}</p>
                      <div className="flex items-center mt-2 space-x-4">
                        <span className="text-gray-500">{request.contact}</span>
                        <Button variant="ghost" size="sm" className="text-green-600">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-sky-600">
                          <Phone className="w-4 h-4" />
                        </Button>
                      </div>
                      {/*<div className="flex items-center mt-2 space-x-4">
                        <span className="text-gray-500">{request.contact}</span>
                      </div>*/}
                    </div>
                    <Button
                      onClick={() => sendInitialMessage(request)}
                      className="bg-sky-500 hover:bg-sky-600 hover:text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Start Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Accepted
